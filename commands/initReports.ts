import { app } from "../config";

app.message("/test", async ({ message, say }) => {
	// say() sends a message to the channel where the event was triggered
	await say({
		blocks: [
			{
				type: "section",
				text: {
					type: "mrkdwn",
					text: `Hey there <@${message.channel}>!`,
				},
				accessory: {
					type: "button",
					text: {
						type: "plain_text",
						text: "Click Me",
					},
					action_id: "button_click",
				},
			},
		],
		text: `Hey there <@${message.channel}>!`,
	});
});
