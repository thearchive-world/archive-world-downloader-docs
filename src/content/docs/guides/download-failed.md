---
title: When a download fails
description: "What each Archive World Downloader failure means and what to do about it: a save that failed outright, an empty download, a Partial chip on a finished one, a download a crash cut short, and the lines in the log that say what was lost."
---

A download can end badly in four ways, and each one says something different on screen. Find the one you saw.

The teal check the HUD leaves behind is not part of this. It means the save is over, not that it went well, and a save that failed draws the same check. What tells you is the chat line and the toast.

## "Save failed"

The download could not be written. This is the one failure that is never silenced: the line appears in chat whatever you have set, a **"Download error"** toast appears alongside it unless you turned toasts off, and the game log gets the whole thing.

The line reads *Save failed:* and then the reason.

| Reason | What happened | What to do |
| --- | --- | --- |
| *access denied* | The mod cannot write where it needs to. The saves folder or the download's own folder is read-only, another program is holding it open, or a sync client or antivirus has it locked. | Close anything that has the folder open, and check the game directory is not inside a folder your system protects. A saves folder inside OneDrive or Dropbox is the common one. |
| *path not found* | Something the mod expected is not there. The game directory moved, a removable or network drive is disconnected, or the folder was deleted while the download ran. | Reconnect the drive, or put the game directory back, then resume. |
| The operating system's own words | The reason came from your system rather than the mod, so it is worded the way your system words it. Out of disk space is the usual one. | Fix what it names. There is no check for free space before a download starts, so a full disk is found when a write hits it. |
| *unknown error* | Nothing usable came back with the failure. | The game log has the full error. |

Nothing is deleted and nothing is renamed. Whatever had already been written is still in the folder. Once you have fixed the cause, resume that download and it carries on into the same folder.

Resuming before you have fixed it is wasted effort. The same write fails again for the same reason.

## "Nothing downloaded. No chunks were saved."

The download finished with no terrain in it, so nothing was written rather than an empty world being left behind. This one is only a chat line, and with **"Show Chat Messages"** off it passes without a word.

Two things cause it.

The first is that no chunk was ever saved. Starting and stopping in the same breath does it, and so does a replay download where playback never ran, because a replay only records while it plays. See [download from a replay](/guides/replay-download/). Stay in the world, move around, and give the download something to save.

The second is that everything it saved was empty air and **"Skip Empty Chunks"** dropped all of it. That setting is off by default, so this only happens if you turned it on and then downloaded somewhere with nothing in it.

## A "Partial" download

A download that finished but lost something along the way is marked partial. You get the usual *Downloaded* line, then *Note: this download is incomplete. N could not be saved; check the log.*, and a **"Download incomplete"** toast. Afterwards its row on the downloads screen carries an amber **"Partial"** chip where the size would be.

Partial is not a broken save. The world is finalized and it opens in the vanilla game like any other, the shareable `.zip` is still written, and everything that did reach disk is in it. What the number counts is the things that did not: a chunk whose write failed, a Map that could not be written, the contents of a container that had nowhere to go.

Resume it. The download merges into the same folder, and walking back through the area is what actually refills the gaps, because a chunk is only saved again when you return to it.

Read the count as a floor rather than a total. It rises only for the losses the mod knows how to count, so a partial download has at least that much missing, and a clean one is not a promise that nothing was lost. To find gaps while you can still fix them, [check what you actually saved](/guides/check-coverage/) before you disconnect.

## After a crash

A download that a crash or a kill cut short is left unfinished on disk. The mod says nothing about it the next time you start the game, and nothing appears until you open the downloads screen. That download's row shows an amber **"⟲ Recover"** chip in place of its size, and no summary, because nothing about it can be trusted until it is finished.

Recovering it is a resume, and it needs a server: join the one you were downloading from, open the downloads screen, and click the chip. Everything that reached disk before the crash is kept, including any Map pictures, and the finalize step the crash never got to runs now. Once it has, the row shows a size or a **"Partial"** chip like any other finished download.

Until then it is an unfinished download on disk rather than a finished world, so recover it before you go looking for it in your singleplayer world list.

## When the mod refuses before it starts

A refusal is not a failure. The mod says no and changes nothing, which is the point: the name is taken by something that is not a download, the folder is gone, the world is open in singleplayer, a download is already running, or a save or restore is still finishing. Each one names itself and says what to do. They are all listed in [the downloads screen](/reference/downloads-screen/#when-an-action-is-blocked).

A resume into a world you opened in singleplayer is refused for a different reason and has its own remedy. See [restore a download you opened in singleplayer](/guides/restore-download/).

## What the log says

`logs/latest.log` in your game directory holds every chat line the mod showed you, plus the detail none of them have room for. Two things are worth searching for.

- `save failed` is the terminal failure, with the full error attached.
- `skipping chunk` names each chunk that could not be written, with the reason.

That last one is how you find out which part of the world is thin. The line that tells you the download is incomplete points here for exactly that.
