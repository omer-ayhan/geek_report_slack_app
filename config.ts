import { App } from "@slack/bolt";

export const app = new App({
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	clientId: process.env.SLACK_CLIENT_ID,
	clientSecret: process.env.SLACK_CLIENT_SECRET,
	stateSecret: "my-state-secret",
	token: process.env.SLACK_BOT_TOKEN,
});
