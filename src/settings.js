import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "3dc06c559c2941d1bdd4734928c6b360"
const token = "0063dc06c559c2941d1bdd4734928c6b360IACwx8oU+VzkiVQgcQkIRbhKMnQUk8s2TrvbVr/rJg/W7z6yjMsAAAAAEADZzsCBKg0/YQEAAQAqDT9h"

/*
    Creating an agora client using the configuration in config.
    "useClient" and "useMicrophoneAndCameraTracks" are Hooks. Hooks are functions that let you Hook into react state and lifecycle features from function components.
*/
export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Classroom";
