---
title: The download HUD
description: "What each part of the Archive World Downloader HUD means: the dot, the timer, the three counts, the peek key, the bar the save draws and its stages, and the frame left behind when a download finishes."
---

While a download runs, the mod draws a short status line on screen. It is what you watch for the whole download: it says the download is running, how long it has been going, and how much it has saved. This page names each part of it.

Where the HUD sits and how it is drawn are yours to set. The HUD section of the [Interface reference](/reference/config/interface/) covers the anchor, the offset, the background panel, and the rest.

## The one-line HUD

Out of the box the HUD is a single line, and it opens with a dot that reports the state: red while the download records, gray while it saves. A teal check replaces the dot once the save has finished.

The time beside it is how long the download has been recording, as minutes and seconds. It stops the moment you stop the download, so it never counts the save. Minutes are not rolled up into hours, so an hour and a minute into a download it reads `61:01`.

The line ends with the word **"chunks"** and how many are saved. That count is shortened once it passes 9999, so 12999 reads `12.9k`.

## Peek at the detailed HUD

Hold Left Alt to swap that one line for the full layout, which adds a row for each thing the download counts: **"chunks"**, **"entities"**, **"containers"**, and **"time"**. The chunk count is written out in full here, so the same download can read `12.9k` on the one-line HUD and `12999` while you peek.

Left Alt is the mod's only keybind that ships bound. Rebind it in the vanilla Controls screen, under "Archive World Downloader", where it is listed as "Peek Detailed HUD". See [Commands and keybinds](/reference/commands/).

Two settings change how you get there. **"Peek Key Mode"** set to Toggle flips the detailed layout on and off per press instead of asking you to hold the key. **"Always Show Detailed HUD"** leaves it up all the time, and with that on the peek key does nothing.

![The detailed HUD, showing chunks, entities, containers, and time each on their own row during a download](../../../assets/hud-detailed-peek.png)

## What the counts mean

Each one counts distinct things the download recorded, rather than how many times something happened.

- **"chunks"** counts the chunks the download has recorded. A chunk you cross twice counts once. Every dimension adds to the same number, so walking into the Nether keeps the count climbing rather than starting a new one.
- **"entities"** counts the mobs, Item Frames, Paintings, and other entities recorded, each one once however often it comes back into view. Players are left out, and a passenger counts with whatever it is riding rather than on its own. With **"Entities"** off it stays at 0.
- **"containers"** counts the containers whose contents are recorded. A double chest counts as one, and every Ender Chest shares an inventory, so they count as one however many you open.

All three count what the mod recorded, not what reached disk. A chunk whose write fails later is still in the number. What reports that is the chat line and the **"Partial"** chip on the download's row. See [when a download fails](/guides/download-failed/).

## The bar the save draws

Stop the download and the dot turns gray. A bar appears under the line, labeled with the stage the save is working on:

- **"chunks"** writes the terrain and the entities.
- **"maps"** writes the pictures of the filled Maps you saw. A download that saw none goes straight from chunks to compressing.
- **"compressing"** writes the shareable `.zip` beside the folder. It runs only with **"Backup After Downloading"** on, and it is skipped when the save hit an error.

The percentage belongs to the stage rather than to the save as a whole. It fills to 100, then starts again at 0 under the next label, up to three times. The first stage also tends to open well above 0, because the mod has been writing to disk all along and most of that work is already done by the time you stop.

## The frame left behind

When the save finishes, the HUD holds a last frame: the teal check, the counts, and the time, with no bar. It stays for eight seconds and then fades out over half a second. **"HUD Fade After Download"** sets that wait, anywhere from 0 to 30 seconds.

The counts in this frame are the totals actually written, which is why they can be a little higher than what you saw a moment before. The time is still recording time, frozen where it stopped.

The check means the save is over, not that it went well. A save that failed draws the same check. What tells you is the chat line and the toast, covered in [when a download fails](/guides/download-failed/).

## When the HUD is not drawn

- While any screen is open, apart from the chat screen. The HUD stays up while you type in chat.
- While the interface is hidden with F1.
- Once the finished frame has faded, until the next download starts.
- While a restore is running.

The F3 debug screen does not hide it, so the two are drawn together.

## With the HUD turned off

**"Show HUD"** off draws nothing on screen, and nothing takes its place. The mod's chat notices carry on as they were: a line when a download starts, one when you stop it, and one when it finishes, all governed by **"Show Chat Messages"**. `/wdl status` reports the same three counts whenever you ask for them, and the toast at the end still arrives.

What you give up is the live readout: there is no elapsed timer and no saving bar anywhere outside the HUD.
