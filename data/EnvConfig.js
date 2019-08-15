// get env setting
const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.dir(`[EnvConfig] Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteGATrackingID: process.env.siteGATrackingID, // Tracking code ID for google analytics.
};
