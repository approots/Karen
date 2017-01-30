const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

const personalityInsights = new PersonalityInsightsV3({
  username: '6df601b2-b3ad-427e-a44e-93da43b02b49',
  password: 'wRDHufUSHoU0',
  version_date: '2016-10-19'
});

module.exports = personalityInsights;

