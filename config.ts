import { App, HTTPReceiver } from "@slack/bolt";

const httpReceiver = new HTTPReceiver({
	signingSecret: process.env.SLACK_SIGNING_SECRET || "",

	unhandledRequestHandler(args) {
		console.log("Unhandled request", args);
	},
});

export const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	appToken: process.env.SLACK_APP_TOKEN,
	developerMode: process.env.NODE_ENV === "development",
	socketMode: false,
	extendedErrorHandler: true,
	receiver: httpReceiver,
});
