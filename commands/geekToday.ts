import { app } from "../config";

app.command("/geektoday", async ({ ack, say, command }) => {
	// Acknowledge command request
	await ack();

	await say(`Today's date is ${new Date().toLocaleDateString()}`);
});
