---
title: Download settings
description: Settings on the Download tab of the Archive World Downloader settings screen.
---

The world's terrain is always downloaded. The settings on this tab choose the extra data to include with it and how the finished download is written to disk. The Download tab holds four sections: Contents, Player Data, Output, and Advanced. The Advanced section holds the debug and diagnostic toggles; there is no separate Debug tab. Each table lists the option's config-file key, its type, its default, and its effect. For the routes that open the settings screen, see [Opening the settings screen](/reference/commands/).

## Contents

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Entities | `captureEntities` | Toggle | true | Save mobs, Item Frames, Paintings, and the Maps they carry. Disabling leaves them out, so the finished world is missing them. |
| Containers | `captureContainers` | Toggle | true | Save the contents of Chests, Barrels, and other containers you open. Disabling downloads those containers empty, and turns off the in-world outline on Chests, Barrels, and other block containers, along with the four kinds recorded from your own right-click, described below. An entity-carried container such as a Chest Boat or a chested Donkey, Mule, or Llama follows **Entities** instead; see [Chests carried by Minecarts, Boats, and animals](/concepts/container-vehicles/). |
| Keep Chunks Current | `recaptureChunks` | Enum (OFF, NEARBY, EVERYWHERE) | EVERYWHERE | How up to date the download stays as you explore. OFF saves each area once and keeps it as you first saw it. NEARBY keeps the area around you current and leaves areas you have left as first saved. EVERYWHERE also refreshes areas you revisit, though a container keeps its old contents until you reopen it. |
| Refresh Interval | `recaptureSeconds` | Slider (5 to 60 s) | 15 | How often the download refreshes the loaded chunks around you. A longer interval is cheaper but slower to catch a change further out. The 3×3 chunks around you refresh every second regardless. |
| Lock Downloaded Maps | `lockDownloadedMaps` | Toggle | true | Lock downloaded Maps so they keep their picture. Disabling lets a held Map repaint from the surrounding world, which is blank under the default VOID. |
| Protect Saved Maps | `remapMapIds` | Toggle | true | Re-key filled Maps to stable IDs so a server that renumbers map IDs cannot mislink them when you resume. Disabling keeps the original server map IDs in the download. |
| Skip Empty Chunks | `skipVoidChunks` | Toggle | false | Skip a completely empty downloaded chunk to save space. A chunk holding anything at all is kept. |
| Keep Mobs from Despawning | `forceMobPersistence` | Toggle | false | Keep every downloaded mob from despawning, including ordinary mobs that would naturally despawn. Name-tagged mobs survive the open regardless. |

**Keep Chunks Current** on OFF also leaves out the four kinds of content that are saved from your own right-click: the books you put into a Chiseled Bookshelf, a disc you put into a Jukebox, what a Shulker Box holds at the moment you place it, and the Bees in a Beehive you place. Each is confirmed against a refreshed block state before it is written, and OFF never refreshes one. OFF also hides the red Chiseled Bookshelf outline, rather than leave a to-do that cannot clear.

NEARBY records all four in an area you are still downloading. An area you already finished this session is not refreshed again when you return, so a right-click there clears the outline without saving anything. EVERYWHERE, the default, records them wherever you are. See [check what you actually saved](/guides/check-coverage/).

### Containers carried by entities

These need both **Entities** and **Containers** on, and the mod treats them all alike:

- A Minecart with a Chest, and a Minecart with a Hopper.
- A Boat with a Chest, and a Raft with a Chest.
- A Donkey, Mule, Llama, or Trader Llama wearing a Chest.

Nothing else on rails or water carries a container. A Minecart with a Furnace, one with TNT, and a plain Minecart, Boat, or Raft are saved as ordinary entities with nothing inside them to save, and so is a mount with no Chest on it. Put a Chest on a Donkey while the download runs and it joins the list on the next tick, outline and all. How each one opens, and how the outline behaves on them, is in [check what you actually saved](/guides/check-coverage/#containers-that-something-carries).

## Player Data

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Your Inventory | `savePlayerInventory` | Toggle | true | Save your inventory so whoever opens the download inherits your items. Disabling leaves the inventory empty. |
| Ender Chest | `savePlayerEnderChest` | Toggle | true | Save your Ender Chest, but only while you have it open during the download. Open it once to save it. |
| Item Location Data | `saveItemCoordinates` | Toggle | false | Keep the coordinates some items store, such as a Lodestone Compass target or the Bee positions in a silk-touched Beehive. Off by default for privacy, because those coordinates can point at a base the download otherwise hides. Turning it on keeps them pointing at their locations. |
| Advancements | `captureAdvancements` | Toggle | true | Save your advancements. They are tied to your account, so opening on a different account does not inherit them. |
| Statistics | `captureStatistics` | Toggle | true | Save your statistics. They are tied to your account, so opening on a different account does not inherit them. |

Turning `savePlayerInventory` or `savePlayerEnderChest` off leaves those items out of the download, but not your location. The download still opens where you were when you downloaded it.

## Output

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Backup Before Resume or Restore | `zipOnResume` | Toggle | true | Before a resume or restore changes an existing download folder, zip it first as a safety backup. A resume writes a `-pre-resume.zip`; a restore writes a `-singleplayer.zip`. |
| Confirm Before Resuming | `confirmResume` | Toggle | true | Ask before continuing into an existing download folder. Disabling skips the confirmation and continues into the folder without a prompt. |
| Block Singleplayer-Opened Worlds | `blockTaintedResume` | Toggle | true | Block resuming a download that was opened in singleplayer, since it may hold generated, non-server chunks. Disabling warns and asks instead of blocking. |
| Backup After Downloading | `zipOnFinish` | Toggle | true | When a download finishes, also write a `.zip` beside the folder. That `.zip` is the shareable copy to send to someone, and the clean backup [Restore](/guides/restore-download/) recovers from. See [What gets downloaded](/concepts/what-gets-downloaded/) for what it holds about you. |
| Add Date to Names | `appendDateSuffix` | Toggle | true | Add a `-YYYY-MM-DD` date to a new download's name, so downloads made on different days sit side by side. |

The [Resume](/guides/resume-download/) and [Restore](/guides/restore-download/) guides walk through these backup settings in use.

## Advanced

The last two rows are diagnostic; leave them off for normal play.

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Auto-Download on Join | `autoDownload` | Toggle | false | Automatically start a download when you join a multiplayer server. |
| Save Speed | `encodeBudgetMillis` | Slider (1 to 10 ms) | 2 | How much time each tick the download spends writing already-received data into the save. Higher keeps the save caught up when you move fast; lower is easier on frame rate. It does not change how fast data arrives from the server. |
| Dump Received Item Frames | `dumpReceivedFrames` | Toggle | false | Diagnostic. Write every received Item Frame's position to `wdl/received-item-frames.txt` for a download-loss audit. Leave off for normal use. |
| Log Outline Timing | `outlineDebugTiming` | Toggle | false | Diagnostic. Log the container outline's per-frame and per-tick cost, for tuning the outline render distance on a dense base. Leave off for normal use. |

## When a change takes effect

Settings that decide what gets saved are read once, when a download starts. Changing one while it runs has no effect until the next one. Settings that only change what you see apply as soon as you save them: the coverage overlay and its two colors, the outline's colors and render distance, and the HUD options.

## The config file

Every setting on all three tabs also lives in the config file at `<config>/wdl.properties`. The settings screen is the normal way to edit them, and saving there rewrites the file. Editing the file by hand works too, and neither route needs a client restart.

The file also takes an override for any single game rule, including rules the settings screen does not list. See [World settings](/reference/config/world/).
