import { defineStore } from "pinia";
import { ref } from "vue";
import CONSTANTS from "../common/constants.js";
import axios from "axios";

export const gameState = defineStore("gameState", () => {
    var connected = ref(false);
    var data = ref({});
    var max_reconnect_attempts = 10;
    var reconnect_attempts = 0;

    const websocket = connectWebsocket();

    return {
        connected,
        data,
        websocket,
    };

    function connectWebsocket() {
        if (reconnect_attempts >= max_reconnect_attempts) {
            console.log("Max reconnect attempts reached!");
            return;
        }
        reconnect_attempts++;
        const websocket = new WebSocket(CONSTANTS.websocketUrl);
        websocket.setTimeout;

        websocket.onopen = function () {
            console.log("Connected to Websocket");
            axios.get(CONSTANTS.endpoint + "/game").then((response) => {
                data.value = response.data;
                connected.value = true;
            });
        };

        websocket.onclose = function () {
            console.log('Connection with Websocket Closed!');
            connected.value = false;
            setTimeout(connectWebsocket, 5000);
            connectWebsocket();
        };

        websocket.onerror = function (error) {
            console.log('Error in Websocket Occured: ' + error);
        };

        websocket.onmessage = function (msg) {
            if (typeof msg.data === "string") {
                const newData = JSON.parse(msg.data);
                data.value = newData;
            }
        };
        return websocket;
    }
});

