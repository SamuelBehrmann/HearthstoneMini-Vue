import { defineStore } from "pinia";
import { ref } from "vue";
import CONSTANTS from "../common/constants.js";
import axios from "axios";

export const gameState = defineStore("gameState", () => {
    var connected = ref(false);
    var data = ref({});

    const websocket = new WebSocket(CONSTANTS.websocketUrl);
    websocket.setTimeout;

    websocket.onopen = function (event) {
        console.log("Connected to Websocket");
        axios.get(CONSTANTS.endpoint + "/game").then((response) => {
            data.value = response.data;
        });
        connected.value = true;
    }

    websocket.onclose = function () {
        console.log('Connection with Websocket Closed!');
        connected.value = false;
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

    return {
        connected,
        data,
        websocket,
    };
});

