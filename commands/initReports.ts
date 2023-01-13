import { app } from "../config";

app.command("/test", async ({ command, ack, say }) => {
	// Acknowledge command request
	await ack();

	await say(`${command.text} invoked /test command`);
});
