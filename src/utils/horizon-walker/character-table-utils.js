// Horizon Walker Character Table Utilities
// Complete stat utility collection for all character stats

/**
 * Gets a formatted stat value
 * @param {Object} stats - Character stats object
 * @param {string} statKey - The stat key to retrieve
 * @returns {string} Formatted stat value or 'N/A'
 */
export const getStatValue = (stats, statKey) => {
  if (!stats || !stats[statKey]) return 'N/A';
  return stats[statKey];
};

// ===== BASIC ATTRIBUTE STATS =====
/**
 * Gets formatted Strength value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted strength value or 'N/A'
 */
export const getStrengthValue = stats => {
  return getStatValue(stats, 'strength');
};

/**
 * Gets formatted Technic value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted technic value or 'N/A'
 */
export const getTechnicValue = stats => {
  return getStatValue(stats, 'technic');
};

/**
 * Gets formatted Intelligence value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted intelligence value or 'N/A'
 */
export const getIntelligenceValue = stats => {
  return getStatValue(stats, 'intelligence');
};

/**
 * Gets formatted Vitality value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted vitality value or 'N/A'
 */
export const getVitalityValue = stats => {
  return getStatValue(stats, 'vitality');
};

/**
 * Gets formatted Agility value
 * @param {Object} stats - Character stats object
 * @returns {string} Formatted agility value or 'N/A'
 */
export const getAgilityValue = stats => {
  return getStatValue(stats, 'agility');
};

