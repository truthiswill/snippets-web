// This snippet file was generated by processing the source file:
// ./database-next/offline.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_ondisconnect_cancel_modular]
const onDisconnectRef = presenceRef.onDisconnect();
onDisconnectRef.set("I disconnected");
// some time later when we change our minds
onDisconnectRef.cancel();
// [END rtdb_ondisconnect_cancel_modular]