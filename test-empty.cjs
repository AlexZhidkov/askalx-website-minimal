const { TextConversation } = require("@elevenlabs/client");
async function run() {
    try {
        let options = {
            agentId: "agent_1001kk0gj04te94a6vfdqxy3vxr5",
            onMessage: (m) => console.log("MSG:", m),
            onError: (e) => console.error("ERR:", e),
            onStatusChange: (s) => console.log("STATUS:", s),
            overrides: {
                agent: { firstMessage: "" }
            }
        };
        const conv = await TextConversation.startSession(options);
        console.log("Connected!");
        await new Promise(r => setTimeout(r, 2000));
        await conv.endSession();
    } catch (e) { console.error("Caught:", e); }
}
run();
