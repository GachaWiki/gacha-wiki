// Zone Nova Team Synergy Database Utilities
// Client-side logic for filtering, sorting, and displaying team data

import {
  ZONE_NOVA_TEAMS,
  filterTeams,
  sortTeams,
  getTeamTypeText,
  getTeamTierText,
} from './team-synergy.js';

// On dev the middleware only rewrites server-rendered HTML to /__gwimg/;
// client-injected portraits must route through the proxy manually.
const R2_IMG_HOST = 'https://k2b1c5ab57ed98e51.gachawiki.info/';
const teamImgSrc = url =>
  import.meta.env.DEV && url && url.startsWith(R2_IMG_HOST)
    ? '/__gwimg/' + url.slice(R2_IMG_HOST.length)
    : url;

import { ZONE_NOVA_CHARACTERS } from './characters.js';

// Helper function to get character element
function getCharacterElement(characterName) {
  const character = ZONE_NOVA_CHARACTERS.find(
    char => char.name.toLowerCase() === characterName.toLowerCase()
  );
  return character ? character.element : null;
}

// Global state for the team database
let currentTeams = [...ZONE_NOVA_TEAMS];
let currentFilters = {
  type: '',
  tier: '',
  searchTerm: '',
};
let currentSort = {
  key: 'name',
  direction: 'asc',
};

// Initialize the team database functionality
export function initializeTeamDatabase() {
  // Set up event listeners
  setupFilterListeners();
  setupSortListeners();
  setupResetListener();

  // Initial render
  renderTeams();
  updateTeamCount();
}

// Set up filter event listeners
function setupFilterListeners() {
  const teamTypeFilter = document.getElementById('teamTypeFilter');
  const teamTierFilter = document.getElementById('teamTierFilter');

  if (teamTypeFilter) {
    teamTypeFilter.addEventListener('change', e => {
      currentFilters.type = e.target.value;
      applyFiltersAndSort();
    });
  }

  if (teamTierFilter) {
    teamTierFilter.addEventListener('change', e => {
      currentFilters.tier = e.target.value;
      applyFiltersAndSort();
    });
  }

  const teamSearch = document.getElementById('teamSearch');
  if (teamSearch) {
    teamSearch.addEventListener('input', e => {
      currentFilters.searchTerm = e.target.value;
      applyFiltersAndSort();
    });
  }
}

// Set up sort button listeners
function setupSortListeners() {
  const sortButtons = document.querySelectorAll('.zn-db-sort-btn[data-sort]');

  sortButtons.forEach(button => {
    button.addEventListener('click', e => {
      const sortKey = e.target.getAttribute('data-sort');

      // Toggle sort direction if same key is clicked
      if (currentSort.key === sortKey) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.key = sortKey;
        currentSort.direction = 'asc';
      }

      // Update button states
      updateSortButtonStates();

      // Apply sort
      applyFiltersAndSort();
    });
  });
}

// Set up reset button listener
function setupResetListener() {
  const resetButton = document.getElementById('resetFilters');

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      // Reset filters
      currentFilters = {
        type: '',
        tier: '',
        searchTerm: '',
      };

      // Reset sort
      currentSort = {
        key: 'name',
        direction: 'asc',
      };

      // Reset form elements
      resetFilterElements();
      updateSortButtonStates();

      // Re-render
      applyFiltersAndSort();
    });
  }
}

// Reset filter form elements
function resetFilterElements() {
  const teamTypeFilter = document.getElementById('teamTypeFilter');
  const teamTierFilter = document.getElementById('teamTierFilter');

  if (teamTypeFilter) teamTypeFilter.value = '';
  if (teamTierFilter) teamTierFilter.value = '';
  const teamSearch = document.getElementById('teamSearch');
  if (teamSearch) teamSearch.value = '';
}

// Update sort button active states
function updateSortButtonStates() {
  const sortButtons = document.querySelectorAll('.zn-db-sort-btn[data-sort]');

  sortButtons.forEach(button => {
    const sortKey = button.getAttribute('data-sort');
    button.classList.remove('active', 'asc', 'desc');
    if (sortKey === currentSort.key) {
      button.classList.add('active', currentSort.direction);
    }
  });
}

// Apply current filters and sort
function applyFiltersAndSort() {
  // Filter teams
  currentTeams = filterTeams(ZONE_NOVA_TEAMS, currentFilters);

  // Sort teams
  currentTeams = sortTeams(currentTeams, currentSort.key, currentSort.direction);

  // Render updated teams
  renderTeams();
  updateTeamCount();
}

// Render teams as one section per team (shared layout for all viewports)
function renderTeams() {
  const list = document.getElementById('teamList');
  if (!list) return;

  if (currentTeams.length === 0) {
    list.innerHTML = `
      <div class="zn-team-empty">
        ${
          ZONE_NOVA_TEAMS.length === 0
            ? 'Team database is currently being populated. Check back soon for comprehensive team compositions!'
            : 'No teams match the current filters. Try adjusting your filter criteria.'
        }
      </div>
    `;
    return;
  }

  list.innerHTML = currentTeams
    .map(
      team => `
    <section class="zn-team-section">
      <div class="zn-team-head">
        <h3 class="zn-team-name">${team.name}</h3>
        <p class="zn-team-meta">${getTeamTypeText(team.type)}, ${getTeamTierText(team.tier)} Tier</p>
      </div>
      <div class="zn-team-members">
        ${team.characters
          .map(char => {
            const element = getCharacterElement(char.name);
            return `
            <div class="zn-team-member">
              <img src="${teamImgSrc(char.image)}" alt="${char.name}" class="zn-team-member-img" loading="lazy" width="64" height="64" />
              <span class="zn-team-member-name">${char.name}</span>
              ${element ? `<span class="character-element">${element}</span>` : ''}
            </div>
          `;
          })
          .join('')}
      </div>
      ${team.notes ? `<p class="zn-team-notes">${team.notes}</p>` : ''}
    </section>
  `
    )
    .join('');
}

// Update the live team count next to the search box
function updateTeamCount() {
  const countEl = document.getElementById('team-count');
  if (!countEl) return;
  const visible = currentTeams.length;
  const total = ZONE_NOVA_TEAMS.length;
  countEl.textContent = visible === total ? `${total} teams` : `${visible} of ${total} teams`;
}
