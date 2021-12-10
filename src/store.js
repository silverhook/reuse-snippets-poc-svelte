import { writable } from "svelte/store";
import websocketStore from 'svelte-websocket-store';


// Change here for ws server URL
export const komadi = websocketStore('ws://10.0.1.10:8080/',[])

export let admin = writable(false);