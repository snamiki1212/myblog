const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

// Tracking code ID for google analytics.
const siteGATrackingID =
  process.env.siteGATrackingID || '__NOT_FOUND_GA_TRACKING_ID__';

console.dir(`[EnvConfig] Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteGATrackingID,
};
