---
title: Download from a replay
description: "Download a Minecraft world from a ReplayMod or Flashback replay. The download records only while playback runs, so start it from the pause menu, name it yourself, and keep playing."
---

The mod downloads a world from a replay recorded with ReplayMod or Flashback, much as it downloads a live server. A replay rebuilds the session your client saw, within a few limits that come from how replays work. For a server that is gone, or a moment only a recording caught, a replay is often the only way to get a downloadable copy.

## Start the download

Name the download yourself, one of two ways:

- Open the pause menu and click **"Download This World"**, then name and start the download on the downloads screen.
- Run `/wdl start <name>` in chat (see [Commands and keybinds](/reference/commands/) for the full list).

Then press play and let the recording follow the replay forward.

You have to name it yourself because in replay playback your client has no server behind it, and so no server name to use. The **"Toggle World Download"** keybind and auto-download both name a download after the server, so in a replay they refuse and tell you so in chat: *A download needs a name. Use /wdl start &lt;name&gt; to begin.*

### While playback is paused

While playback is paused, only the pause menu opens the downloads screen. The **"Open Downloads Screen"** keybind and the `/wdl downloads` command wait for the next game tick, which pausing suspends, so neither responds while paused. The pause menu's **"Download This World"** button opens the screen on the click regardless. Resume playback and the keybind and the command work again.

To finish a download while paused, open the pause menu and click **"Stop Download"**. The save finalizes and reports **"Download complete"** as usual, even while paused.

## The download records only while playback runs

Almost every "the download isn't working" report from a replay comes down to this one point. The mod records terrain and entities as playback advances. Pause playback and the recording stops: the chunk counter stops rising and stays where it is. If the count is not climbing, check whether playback is paused.

Whether a pause costs you anything depends on when you paused.

- **A download already running when you paused loses nothing.** Everything within your render distance was saved on the last tick before the pause. The counter has only stopped rising. Resume playback and the download continues where it left off.
- **Start a download while paused and nothing is saved.** The counter stays at 0 no matter what is on screen, because playback drives the recording, not the view. Press play before you finish the download, or it saves an empty world. The mod tells you the save came out empty rather than writing a half-empty one, but you still have to run it again.
- **Moving the replay camera while paused saves nothing.** The camera flies freely while paused, but the download follows playback, not where the camera looks. Nothing new is saved until you press play.

## Seeking backward

Seeking backward on the timeline behaves differently in each mod, because each plays the replay a different way. Record what you want in a single forward pass in both.

### ReplayMod

Seeking backward with ReplayMod ends the download. ReplayMod rebuilds its packet feed to move back, and your client sees that rebuild as a disconnect. The mod finalizes and saves the download at that point rather than risk a corrupt save. Seek backward only after the download has finished.

### Flashback

Seeking backward with Flashback rewinds the world and the download follows it. The download keeps running. Because the save always mirrors the replay's current state, anything that existed only later in the recording drops out if you seek back before it: place a block, seek past the placement, and it is gone from the save. Stay on a single forward pass to keep the latest state of everywhere you visited.

## The saved player

A replay has no real player behind the camera, so the saved world's player is the replay camera. The download spawns you where the camera was when you stopped, which for a spectated flight is the end of the path you followed, not where you started. The saved player's inventory is empty, because the replay recorded what the original player's client received, not the player's own inventory or state.

The world itself is complete. This comes from how replays work, not from a fault in the download. A replay is under the same limit as a live server: the download holds what the recorded client was sent, and nothing more. See [What gets downloaded](/concepts/what-gets-downloaded/).
