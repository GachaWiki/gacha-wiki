// Zone Nova Rift Teams Database Utilities
// Client-side logic for filtering, sorting, and displaying rift team data

import {
  ZONE_NOVA_RIFT_TEAMS,
  filterRiftTeams,
  sortRiftTeams,
  getRiftTeamTypeText,
  getRiftTeamTierText,
  truncateRiftText,
} from '../../data/zone-nova/rift-teams.js';

import { ZONE_NOVA_CHARACTERS } from '../../data/zone-nova/characters.js';

// Helper function to get character element with caching
const characterElementCache = new Map();

function getCharacterElement(characterName) {
  if (characterElementCache.has(characterName)) {
    return characterElementCache.get(characterName);
  }

  const character = ZONE_NOVA_CHARACTERS.find(
    char => char.name.toLowerCase() === characterName.toLowerCase()
  );
  const element = character ? character.element : null;
  characterElementCache.set(characterName, element);
  return element;
}

// Function to escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Global state for the rift team database - apply default sort on initial load
let currentRiftTeams = sortRiftTeams([...ZONE_NOVA_RIFT_TEAMS], '', 'desc');
let currentRiftFilters = {
  type: '',
  tier: '',
  searchTerm: '',
};
let currentRiftSort = {
  key: '',
  direction: 'desc',
};

// Store event listeners for cleanup
const eventListeners = [];

// Initialize the rift team database functionality
export function initializeRiftTeamDatabase() {
  // Clean up any existing listeners before setting up new ones
  cleanupEventListeners();

  // Set up event listeners
  setupRiftFilterListeners();
  setupRiftSortListeners();
  setupRiftResetListener();
  setupResponsiveListeners();

  // Initial render
  renderRiftTeams();
}

// Set up filter event listeners
function setupRiftFilterListeners() {
  const riftTypeFilter = document.getElementById('riftTypeFilter');
  const riftTierFilter = document.getElementById('riftTierFilter');

  if (riftTypeFilter) {
    const typeHandler = e => {
      currentRiftFilters.type = e.target.value;
      applyRiftFiltersAndSort();
    };
    riftTypeFilter.addEventListener('change', typeHandler);
    eventListeners.push({ element: riftTypeFilter, event: 'change', handler: typeHandler });
  }

  if (riftTierFilter) {
    const tierHandler = e => {
      currentRiftFilters.tier = e.target.value;
      applyRiftFiltersAndSort();
    };
    riftTierFilter.addEventListener('change', tierHandler);
    eventListeners.push({ element: riftTierFilter, event: 'change', handler: tierHandler });
  }

  const riftSearch = document.getElementById('riftSearch');
  if (riftSearch) {
    const searchHandler = e => {
      currentRiftFilters.searchTerm = e.target.value;
      applyRiftFiltersAndSort();
    };
    riftSearch.addEventListener('input', searchHandler);
    eventListeners.push({ element: riftSearch, event: 'input', handler: searchHandler });
  }
}

// Set up sort button listeners
function setupRiftSortListeners() {
  const sortButtons = document.querySelectorAll('.zn-db-sort-btn[data-sort]');

  sortButtons.forEach(button => {
    const sortHandler = e => {
      const sortKey = e.target.getAttribute('data-sort');

      // Toggle sort direction if same key is clicked
      if (currentRiftSort.key === sortKey) {
        currentRiftSort.direction = currentRiftSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentRiftSort.key = sortKey;
        currentRiftSort.direction = 'asc';
      }

      // Update button states
      updateRiftSortButtonStates();

      // Apply sort
      applyRiftFiltersAndSort();
    };
    button.addEventListener('click', sortHandler);
    eventListeners.push({ element: button, event: 'click', handler: sortHandler });
  });
}

// Set up reset button listener
function setupRiftResetListener() {
  const resetButton = document.getElementById('resetRiftFilters');

  if (resetButton) {
    const resetHandler = () => {
      // Reset filters
      currentRiftFilters = {
        type: '',
        tier: '',
        searchTerm: '',
      };

      // Reset sort to default order (no active sort button)
      currentRiftSort = {
        key: '',
        direction: 'desc',
      };

      // Reset form elements
      resetRiftFilterElements();
      updateRiftSortButtonStates();

      // Re-render with reset state
      applyRiftFiltersAndSort();
    };
    resetButton.addEventListener('click', resetHandler);
    eventListeners.push({ element: resetButton, event: 'click', handler: resetHandler });
  }
}

// Reset filter form elements
function resetRiftFilterElements() {
  const riftTypeFilter = document.getElementById('riftTypeFilter');
  const riftTierFilter = document.getElementById('riftTierFilter');

  if (riftTypeFilter) riftTypeFilter.value = '';
  if (riftTierFilter) riftTierFilter.value = '';
  const riftSearch = document.getElementById('riftSearch');
  if (riftSearch) riftSearch.value = '';
}

// Cache DOM elements for performance
let cachedSortButtons = null;
let cachedTableBody = null;
let cachedMobileContainer = null;

// Update sort button active states
function updateRiftSortButtonStates() {
  if (!cachedSortButtons) {
    cachedSortButtons = document.querySelectorAll('.zn-db-sort-btn[data-sort]');
  }

  cachedSortButtons.forEach(button => {
    const sortKey = button.getAttribute('data-sort') || '';
    button.classList.remove('active', 'asc', 'desc');
    if (sortKey === currentRiftSort.key) {
      button.classList.add('active');
      if (sortKey) button.classList.add(currentRiftSort.direction);
    }
  });
}

// Apply current filters and sort
function applyRiftFiltersAndSort() {
  // Filter rift teams
  currentRiftTeams = filterRiftTeams(ZONE_NOVA_RIFT_TEAMS, currentRiftFilters);

  // Sort rift teams
  currentRiftTeams = sortRiftTeams(
    currentRiftTeams,
    currentRiftSort.key,
    currentRiftSort.direction
  );

  // Render updated rift teams
  renderRiftTeams();
  updateRiftTeamCount();
}

// Update the live team count next to the search box
function updateRiftTeamCount() {
  const countEl = document.getElementById('rift-team-count');
  if (!countEl) return;
  const visible = currentRiftTeams.length;
  const total = ZONE_NOVA_RIFT_TEAMS.length;
  countEl.textContent = visible === total ? `${total} teams` : `${visible} of ${total} teams`;
}

// Render rift teams in both desktop table and mobile cards
function renderRiftTeams() {
  renderRiftDesktopTable();
  renderRiftMobileCards();
}

// Render desktop table
function renderRiftDesktopTable() {
  if (!cachedTableBody) {
    cachedTableBody = document.getElementById('riftTeamTableBody');
  }
  if (!cachedTableBody) return;

  if (currentRiftTeams.length === 0) {
    cachedTableBody.innerHTML = `
      <tr class="no-rift-teams-message">
        <td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-secondary); font-style: italic;">
          ${
            ZONE_NOVA_RIFT_TEAMS.length === 0
              ? 'Rift team database is currently being populated. Check back soon for comprehensive rift team compositions!'
              : 'No rift teams match the current filters. Try adjusting your filter criteria.'
          }
        </td>
      </tr>
    `;
    return;
  }

  cachedTableBody.innerHTML = currentRiftTeams
    .map(
      team => `
    <tr>
      <td><strong>${escapeHtml(team.name)}</strong></td>
      <td>${escapeHtml(getRiftTeamTypeText(team.type))}</td>
      <td>${escapeHtml(getRiftTeamTierText(team.tier))}</td>
      <td>${team.elementWeakness ? team.elementWeakness.map(element => escapeHtml(element)).join(', ') : '-'}</td>
      ${team.characters
        .map(char => {
          const element = getCharacterElement(char.name);
          return `
          <td>
            <div class="character-cell">
              <img src="${escapeHtml(char.image)}" alt="${escapeHtml(char.name)}" class="character-portrait" loading="lazy" />
              <span class="character-name">${escapeHtml(char.name)}</span>
              ${element ? `<span class="character-element">${escapeHtml(element)}</span>` : ''}
            </div>
          </td>
        `;
        })
        .join('')}
      ${team.characters.length < 4 ? '<td>-</td>'.repeat(4 - team.characters.length) : ''}
      <td>${escapeHtml(truncateRiftText(team.notes, 150))}</td>
    </tr>
  `
    )
    .join('');
}

// Render mobile cards
function renderRiftMobileCards() {
  if (!cachedMobileContainer) {
    cachedMobileContainer = document.getElementById('riftTeamMobileCards');
  }
  if (!cachedMobileContainer) return;

  if (currentRiftTeams.length === 0) {
    cachedMobileContainer.innerHTML = `
      <div class="no-rift-teams-message-mobile">
        ${
          ZONE_NOVA_RIFT_TEAMS.length === 0
            ? 'Rift team database is currently being populated. Check back soon for comprehensive rift team compositions!'
            : 'No rift teams match the current filters. Try adjusting your filter criteria.'
        }
      </div>
    `;
    return;
  }

  cachedMobileContainer.innerHTML = currentRiftTeams
    .map(
      team => `
    <div class="mobile-rift-team-card">
      <div class="mobile-rift-card-header">
        <h3 class="mobile-rift-card-title">${escapeHtml(team.name)}</h3>
        <p class="mobile-rift-meta">${escapeHtml(getRiftTeamTypeText(team.type))}, ${escapeHtml(getRiftTeamTierText(team.tier))}</p>
      </div>
      
      <div class="mobile-rift-card-characters">
        ${team.characters
          .map((char, index) => {
            const element = getCharacterElement(char.name);
            return `
            <div class="mobile-character-item">
              <div class="character-position">${index + 1}</div>
              <img src="${escapeHtml(char.image)}" alt="${escapeHtml(char.name)}" class="mobile-character-portrait" loading="lazy" />
              <span class="mobile-character-name">${escapeHtml(char.name)}</span>
              ${element ? `<span class="character-element">${escapeHtml(element)}</span>` : ''}
            </div>
          `;
          })
          .join('')}
      </div>
      
      ${team.elementWeakness ? `<div class="mobile-rift-card-weakness"><strong>Map Weakness:</strong> ${team.elementWeakness.map(element => escapeHtml(element)).join(', ')}</div>` : ''}
      ${team.notes ? `<div class="mobile-rift-card-notes">${escapeHtml(team.notes)}</div>` : ''}
    </div>
  `
    )
    .join('');
}

// Clean up event listeners
function cleanupEventListeners() {
  eventListeners.forEach(({ element, event, handler }) => {
    if (element && element.removeEventListener) {
      element.removeEventListener(event, handler);
    }
  });
  eventListeners.length = 0;
}

// Export cleanup function for external use
export function cleanupRiftTeamDatabase() {
  cleanupEventListeners();
  characterElementCache.clear();
  // Clear DOM caches
  cachedSortButtons = null;
  cachedTableBody = null;
  cachedMobileContainer = null;
}

// Utility function to get current filter state (for debugging)
export function getCurrentRiftState() {
  return {
    teams: currentRiftTeams,
    filters: currentRiftFilters,
    sort: currentRiftSort,
  };
}

// Utility function to manually set filters (for programmatic use)
export function setRiftFilters(filters) {
  currentRiftFilters = { ...currentRiftFilters, ...filters };
  applyRiftFiltersAndSort();
}

// Utility function to manually set sort (for programmatic use)
export function setRiftSort(key, direction = 'asc') {
  currentRiftSort = { key, direction };
  updateRiftSortButtonStates();
  applyRiftFiltersAndSort();
}

// Function to handle responsive table/card switching
function handleRiftResponsiveDisplay() {
  const tableContainer = document.querySelector('.rift-team-table-container');
  const mobileContainer = document.querySelector('.mobile-rift-card-view');

  if (!tableContainer || !mobileContainer) return;

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    tableContainer.style.display = 'none';
    mobileContainer.style.display = 'block';
  } else {
    tableContainer.style.display = 'block';
    mobileContainer.style.display = 'none';
  }
}

// Set up responsive display handling
function setupResponsiveListeners() {
  if (typeof window !== 'undefined') {
    // Store resize listener for cleanup
    const resizeHandler = handleRiftResponsiveDisplay;

    window.addEventListener('resize', resizeHandler);
    eventListeners.push({ element: window, event: 'resize', handler: resizeHandler });

    // Initial call to set correct display
    handleRiftResponsiveDisplay();
  }
}
