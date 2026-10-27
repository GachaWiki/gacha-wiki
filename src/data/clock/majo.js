// MAJO: Witches Night clock configuration — EROLABS global server, UTC.
// Daily reset: 21:00 UTC (05:00 Taipei). Launch: August 12, 2026.

export const majoClockConfig = {
  id: 'majo',
  name: 'MAJO: Witches Night',
  image: 'https://k2b1c5ab57ed98e51.gachawiki.info/majo/icon.webp?v=2',
  launchDate: '2026-08-12T00:00:00Z',
  displayDate: 'August 12, 2026',
  timerDescription: 'Daily Server Reset',
  weeklyResetDay: 1, // Monday (placeholder — confirm in-game)

  server: {
    name: 'Global Server',
    timezone: 0,
    resetHour: 21,
    resetMinute: 0,
    status: 'Server Resets at 21:00 UTC (05:00 Taipei)',
  },

  maintenance: {
    date: null, // none announced
    duration: 0,
    subtitle: 'No scheduled maintenance announced',
  },
};
