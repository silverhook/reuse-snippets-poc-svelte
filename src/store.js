import { writable } from "svelte/store";
import websocketStore from 'svelte-websocket-store';


// Change here for ws server URL
export const komadi = websocketStore('wss://requests.oliwerix.com:443/socket',[])

export let admin = writable(false);
