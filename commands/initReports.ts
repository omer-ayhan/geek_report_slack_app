import { app } from "../config";

app.command("/test", async ({ command, ack, say }) => {
	// Acknowledge command request
	await ack();

	await say(
		`${command.user_name} invoked /test command in channel ${command.channel_name}`
	);
});
