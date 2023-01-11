import { app } from "../config";

app.message("/report", async ({ message, say }) => {
	await say(`Hey there user!`);
});
