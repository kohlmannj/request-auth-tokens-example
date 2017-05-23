require('dotenv').config(); // eslint-disable-line import/no-extraneous-dependencies
const requestAuthTokens = require('request-auth-tokens');
const SlackService = require('request-auth-tokens/lib/services/Slack');
const slack = require('slack');

requestAuthTokens(
  [
    new SlackService({
      client_id: process.env.SLACK_CLIENT_ID,
      client_secret: process.env.SLACK_CLIENT_SECRET,
      reason: 'post updates to Slack channels',
    }),
  ],
  {
    name: 'request-auth-tokens-example',
    reason: 'try posting to a',
  }
).then(([slackToken]) => {
  console.log('Slack Token:', slackToken);
  slack.chat.postMessage({token: slackToken, channel: 'tbs_dev_automation', text: 'Hello world!'}, () => {});
});
