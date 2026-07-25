---
title: Resume an interrupted download
description: "Continue an interrupted Archive World Downloader download into the same world: open the downloads screen, pick the existing world, and resume so new content merges into the same folder."
---

A download can be interrupted by a disconnect, a crash, or quitting the game. Continue an interrupted download into the same world, so you keep everything already saved and add to it.

## Open the downloads screen

Rejoin the server you were downloading from. Open the pause menu and click **"Download This World"**, or run `/wdl downloads` (see [Commands and keybinds](/reference/commands/) for the full list). Either opens the downloads screen. The command opens it with the existing-worlds list already expanded.

## Pick the download to continue

Expand **"Existing Worlds (N)"** and select the row for the world you want. Selecting it retargets the main action to **"Resume"**.

## Recover, resume, and restore

Three row actions read alike. Match the one to your situation:

- **"Resume"** continues the selected download and merges new content into its folder.
- **"⟲ Recover"** appears on a row left by a crash. It is a one-click resume of that exact download, the same as selecting the row and clicking **"Resume"**.
- **"⟲ Restore"** is destructive and belongs to a different situation, a download you opened in singleplayer. It replaces the folder with a clean backup rather than adding to it. See [Restore a download you opened in singleplayer](/guides/restore-download/).

Recover and Restore look similar and both carry the ⟲ mark, so read the action before you click. Recover continues a download; Restore replaces one. For every chip and button on the screen, see [The downloads screen](/reference/downloads-screen/).

## Resume and confirm the merge

Click **"Resume"**. A confirmation titled **"Existing world found"** opens. It states that the save already exists, that downloading merges into it, and that a backup is saved first. With `zipOnResume` on (the default), that backup is `<folder>-pre-resume.zip`. Click **"Continue"** to merge into that exact folder.

## A "Different map ID scheme" warning

This confirmation opens when the download you picked numbered its Maps differently than a new download would. That happens when **"Protect Saved Maps"** (`remapMapIds`) was set one way for the original download and the other way now.

The same number can then belong to two different Maps, so resuming can overwrite a saved Map's picture, or leave a Map in an Item Frame showing the wrong one. The fix is to cancel, set `remapMapIds` back to what the original download used, and resume again. See the [Download reference](/reference/config/download/) for the setting.

Continue merges anyway. With **"Backup Before Resume or Restore"** on, the folder is zipped first, so you have a way back to the state before the two numberings mixed. With it off there is no way back.

## A "Partial" download

A finished download that lost content to a write failure shows a **"Partial"** chip on its row. You may also have seen a "Download incomplete" message telling you to check the log. Either one means some content did not reach the save.

Open `logs/latest.log` to see what could not be saved. If the area is still reachable, resume to fill the gaps. To catch gaps before you disconnect next time, [check what you actually saved](/guides/check-coverage/) while the download runs.

## Backups

`zipOnResume` writes the pre-resume safety zip before a resume merges into an existing world. It is on by default. See the [Download reference](/reference/config/download/) for the setting.
