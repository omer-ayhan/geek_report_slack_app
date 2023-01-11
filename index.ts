import "dotenv/config";
import { app } from "./config";

import "./commands";
import "./messages";
import "./events";

const port = process.env.PORT || 3000;

app.start(port).then(() => {
	console.log(`⚡️ Bolt app is running on port http://localhost:${port}`);
});
