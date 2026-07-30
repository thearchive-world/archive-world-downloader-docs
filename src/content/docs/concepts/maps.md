---
title: How filled Maps are saved
description: "Why a filled Map in a download shows its picture rather than blank, why downloaded Maps are locked, why their numbers change, and what the \"Different map ID scheme\" warning is telling you."
---

A filled Map in a downloaded world shows the picture it showed on the server. Getting it there takes more than copying the item, and two of the settings on the Download tab are about nothing else. This page covers what they do, and what the resume warning about Map numbering is telling you.

## A Map's picture is not in the item

The Map you hold is a number. The picture is separate data the server keeps, and it sends that data only for a Map you are carrying or standing near, because those are the only ones your screen has to draw.

A Map is saved with its picture if you carried it, or stood close enough to an Item Frame holding it to see what was on it. A Map you only ever saw sitting in a Chest is saved as a Map with no picture, and it opens blank. The same goes for a wall of Map art you only saw from across the valley: the frames are saved, and the pictures were never sent.

Carrying it once is enough, and the order does not matter. A Map first seen without its picture is filled in later if you get close to it.

Maps in Item Frames come in through the entity side of the download, so they need **"Entities"** on. See the [Download reference](/reference/config/download/).

## Why downloaded Maps are locked

A Map in Minecraft keeps redrawing itself. Hold one inside the area it covers and the game repaints it from the ground under you. That is fine on a server, where the ground is there. In a download it would cost you the picture, because everything outside the chunks you saved is empty air by default, so holding a Map over it repaints the Map to blank.

So the mod locks every Map it saves, the same lock a Glass Pane gives one at a Cartography Table. The picture is frozen, and the item shows "Locked" in its tooltip. **"Lock Downloaded Maps"** is on by default.

Turn it off and downloaded Maps are ordinary live Maps: extendable at a Cartography Table, and blank the first time you hold one under the default world type.

## Why the numbers change

A filled Map is a number, and the picture lives in a file named after that number. Everything that shows a Map, the item in your hand, the one in an Item Frame, the one in a Chest, points at the same number.

Some servers hand out those numbers fresh every session, so the number that meant one picture yesterday means another today. A download that kept the server's numbers would be fine on its own and dangerous to resume, because the second session could file a different picture under a number the first session had already used.

**"Protect Saved Maps"** is on by default, and it gives every Map a number of the mod's own instead, chosen by what the picture actually is. The same picture gets the same number every time, in this session and in every resume after it, and the mod keeps the list of which picture has which number in `wdl/map-ids` inside the world folder.

You see that as a small number in the Map's tooltip, usually far below the one the server used: a Map the server called 1234 opens as Id #0. Everything pointing at that Map is renumbered in the same pass, so an Item Frame still shows the right picture and a Map wall still hangs together.

Two Maps with an identical picture do collapse into one Map in the download, because the picture is what the number is chosen from.

Turn **"Protect Saved Maps"** off and the download keeps the server's own numbers exactly, which is what you want if faithfulness to the server matters more to you than resuming safely.

## The "Different map ID scheme" warning

This confirmation opens on a resume, and it is worth reading rather than clicking through.

It appears when the folder you are resuming into already holds saved Map pictures, and **"Protect Saved Maps"** is now set the other way from the way that folder was downloaded. A download that saved no Map at all never raises it, whatever you changed.

What it is telling you is not that a setting changed. It is that inside this one folder a Map number is about to stop meaning one thing and start meaning another, and nothing in the folder records which numbering wrote which file. Two things can go wrong from there, and they are the two the message names:

- The new session writes its picture under a number an earlier session already used, and the older picture is gone.
- An Item Frame saved earlier still points at that number, so it now shows a different Map.

Neither is something you can spot afterwards by looking.

What to click, and the backup that gives you a way back, are covered in [resume an interrupted download](/guides/resume-download/).

## What a crash keeps

A Map's picture is written to disk the moment you see it rather than at the end, so a download cut short by a crash keeps every Map it had already seen. [Recovering it](/guides/download-failed/) adds to that rather than starting the Maps over.

## A downloaded Map gives away no locations

Your client is never told where a Map is actually centered, only what it looks like, so every Map in a download is centered on 0,0. A shared download reveals plenty about you, covered in [what gets downloaded](/concepts/what-gets-downloaded/#what-a-shared-download-reveals-about-you), but a Map's picture does not carry the coordinates it was made at.
