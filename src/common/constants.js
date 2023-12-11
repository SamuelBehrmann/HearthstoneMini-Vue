
const endpoint = "localhost:9000";//"192.168.178.25:9000";
const endpointURL = "http://" + endpoint;
const websocketURL = "ws://" + endpoint + "/websocket";

const CONSTANTS = {
    endpoint: endpointURL,
    websocketUrl: websocketURL,
  }

export default CONSTANTS;