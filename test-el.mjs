import { TextConversation } from "./node_modules/@elevenlabs/client/dist/index.js";

async function run() {
    try {
        const AGENT_ID = "agent_1001kk0gj04te94a6vfdqxy3vxr5";
        let options = {
            agentId: AGENT_ID,
            onMessage: (m) => console.log("MSG:", m),
            onError: (e) => console.error("ERR:", e),
            onStatusChange: (s) => console.log("STATUS:", s),
            overrides: {
                agent: {
                    firstMessage: " "
                }
            }
        };
        console.log("Starting session with firstMessage: ' '");
        const conv = await TextConversation.startSession(options);
        console.log("Connected!");
        await new Promise(r => setTimeout(r, 3000));
        await conv.endSession();
    } catch (e) {
        console.error("Caught exception:", e);
    }
}
run();
