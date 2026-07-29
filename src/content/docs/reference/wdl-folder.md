---
title: The wdl/ folder
description: "The five files Archive World Downloader keeps in the wdl/ subfolder of a downloaded world: what each one records, when it is written, and what deleting the folder costs."
---

Every downloaded world carries a `wdl/` subfolder holding the mod's own records. Vanilla Minecraft never looks inside it; it is there for you, not for the game. Why a download has one at all is covered in [what gets downloaded](/concepts/what-gets-downloaded/#it-opens-without-the-mod).

Five files can appear in that folder, and two of them only when you have turned something on.

`download.md` is the one written for you to read. It names the server the download came from and who made it, when it started and finished, how long it ran, and whether it finished cleanly. Below that it counts what was saved, with a chunk count for each dimension you visited, along with the entities and the containers, and it lists every setting you had changed from its default. A folder you have resumed reports both what the latest download added and what the save holds altogether, and once a folder holds more than one finished download the report grows a table with a row for each.

`download.jsonl` is the same record in the form the mod reads back, one line per finished download. It is what the downloads screen builds a row from, and it is what marks the folder as a download in the first place. A folder with neither this nor the pending file below is an ordinary world as far as the mod is concerned: it is not on the downloads screen, and `/wdl resume` will not find it.

`map-ids` keeps your filled Maps numbered the same way from one session to the next. It is written only with **"Protect Saved Maps"** on and removed when that is off, because whether it is there is how the mod knows which numbering the folder already uses. See [how filled Maps are saved](/concepts/maps/).

`download.pending` is written when a download starts and deleted when it finishes. Find it still sitting there and the game never got to finish, because it crashed or was killed. That is what puts the **"⟲ Recover"** chip on the download's row, covered in [when a download fails](/guides/download-failed/). The `.zip` written at the end leaves this one file out, so a copy you share never reads as a crash.

`received-item-frames.txt` is a diagnostic, written only with **"Dump Received Item Frames"** on. It lists where every Item Frame the server sent you was, so a missing frame can be traced.

Two of the five name you: `download.jsonl` and `download.pending`, which is where the identity in [what a shared download reveals about you](/concepts/what-gets-downloaded/#what-a-shared-download-reveals-about-you) is recorded. `map-ids` and the Item Frame list carry nothing but numbers.

Deleting the folder does not hurt the world. It opens in singleplayer exactly as before, because everything Minecraft reads sits outside `wdl/`. What you lose is on the mod's side: the world drops off the downloads screen and can no longer be resumed, its history goes with it, and without `map-ids` a later resume saves every filled Map again under a new number.
