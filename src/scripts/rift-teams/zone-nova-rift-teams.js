// Zone Nova Rift Teams Database Utilities
// Client-side logic for filtering, sorting, and displaying rift team data

import {
  ZONE_NOVA_RIFT_TEAMS,
  filterRiftTeams,
  sortRiftTeams,
  getRiftTeamTypeText,
  getRiftTeamTierText,
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

// On dev the middleware only rewrites server-rendered HTML to /__gwimg/;
// client-injected portraits must route through the proxy manually.
const R2_IMG_HOST = 'https://k2b1c5ab57ed98e51.gachawiki.info/';
const riftImgSrc = url =>
  import.meta.env.DEV && url && url.startsWith(R2_IMG_HOST)
    ? '/__gwimg/' + url.slice(R2_IMG_HOST.length)
    : url;

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
let cachedTeamList = null;

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

// Render rift teams as one section per team (shared layout for all viewports)
function renderRiftTeams() {
  if (!cachedTeamList) {
    cachedTeamList = document.getElementById('riftTeamList');
  }
  if (!cachedTeamList) return;

  if (currentRiftTeams.length === 0) {
    cachedTeamList.innerHTML = `
      <div class="zn-team-empty">
        ${
          ZONE_NOVA_RIFT_TEAMS.length === 0
            ? 'Rift team database is currently being populated. Check back soon for comprehensive rift team compositions!'
            : 'No rift teams match the current filters. Try adjusting your filter criteria.'
        }
      </div>
    `;
    return;
  }

  cachedTeamList.innerHTML = currentRiftTeams
    .map(
      team => `
    <section class="zn-team-section">
      <div class="rift-team-head">
        <h3 class="zn-team-name">${escapeHtml(team.name)}</h3>
        <p class="zn-team-meta">
          ${escapeHtml(getRiftTeamTypeText(team.type))}, ${escapeHtml(getRiftTeamTierText(team.tier))} Tier${
            team.elementWeakness
              ? `, Weakness: ${team.elementWeakness.map(element => escapeHtml(element)).join(', ')}`
              : ''
          }
        </p>
      </div>
      <div class="zn-team-members">
        ${team.characters
          .map(char => {
            const element = getCharacterElement(char.name);
            return `
            <div class="zn-team-member">
              <img src="${escapeHtml(riftImgSrc(char.image))}" alt="${escapeHtml(char.name)}" class="zn-team-member-img" loading="lazy" width="64" height="64" />
              <span class="zn-team-member-name">${escapeHtml(char.name)}</span>
              ${element ? `<span class="character-element">${escapeHtml(element)}</span>` : ''}
            </div>
          `;
          })
          .join('')}
      </div>
      ${team.notes ? `<p class="zn-team-notes">${escapeHtml(team.notes)}</p>` : ''}
    </section>
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
