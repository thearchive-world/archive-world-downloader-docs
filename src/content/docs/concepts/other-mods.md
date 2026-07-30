---
title: How other mods affect a download
description: "Which of the mods you have installed the download is built to work with, and which ones change what it holds: the map mods draw its coverage and the replay mods give it a replay to read, while Bobby's cache and Distant Horizons' distant view stay out of a download and a version-translation mod can put terrain in one the server never had."
---

A download saves what the server sent your client. Almost every mod you have installed leaves that alone. Four of them the download is built to work with, and each one adds something you can see while you play. A few others change what ends up in a download without any arrangement on either side, and those are worth knowing about before you trust a copy.

## Mods the download works with

These four are the only mods the download does anything with, and it does it on its own. Nothing needs setting up, and none of it happens unless the mod is installed.

### XaeroPlus and JourneyMap

With either one installed, the mod highlights the chunks it has saved on your map, so you can watch your coverage grow and see the gaps while you still have time to fill them. [Check what you actually saved](/guides/check-coverage/) covers using it as you play, and [how coverage is measured](/concepts/coverage-measurement/) covers what its two tones mean.

Each map mod draws the highlight its own way. XaeroPlus tints saved chunks one by one, and JourneyMap fills the saved area as a single shape. The colors mean the same on both. Install both and both draw, and there is no setting that picks one; the overlay's whole section of the settings screen appears only when one of the two is installed, as the [Interface settings](/reference/config/interface/) reference notes.

In a replay, JourneyMap's own map can sit blank over ground the download has already saved. What the map has drawn and what the download holds are separate things: the saved-chunk highlight and the chunk count on the HUD are the ones to go by.

### ReplayMod and Flashback

A download runs from a replay recorded with either mod, with no server to join. [Download from a replay](/guides/replay-download/) covers that, including what each one does when you seek backward.

It works the other way around as well: you can record a replay with either mod while a download runs on a live server. Each of them reads what the server sends without holding it up or changing it.

Having Flashback installed does not make your own singleplayer world downloadable. The mod looks for a replay that is actually playing, so it still refuses an ordinary singleplayer or LAN world, exactly as it would without Flashback.

## Mods that change what a download holds

Nothing below is an integration, and none of it is something the mod offers you. Two of these keep terrain of their own that a download will not take, and the third changes the world your client is shown before a download ever sees it. Only Bobby has any code behind it, and that code keeps its cached terrain out of your save rather than adding anything.

### Bobby

Bobby draws terrain you explored earlier from a cache of its own, once you move out of the server's range. A download skips those chunks, and [what gets downloaded](/concepts/what-gets-downloaded/#bobby) covers why. The container outline skips them as well, so a Chest standing in cached terrain is never outlined. Once the server sends that chunk again, the terrain saves and any container in it you have not opened is outlined.

### Distant Horizons

Distant Horizons keeps terrain of its own too, and far more of it. What it draws out to the horizon comes from its own files and is never handed to your client as terrain the server sent, so a download neither saves it nor mistakes it for the real thing. The view and the save disagree, and the save is the smaller of the two, so the horizon is no sign of what you have.

### Joining a server older than your client

A mod like ViaFabricPlus lets a modern client join a server running an older version of Minecraft, by translating between the two versions, and a download saves that translation rather than the server's own world. A server one or two versions behind translates almost exactly. A 1.8 or 1.12 server is a different matter, because the translator has to supply blocks, block entities, and biomes that the old server has no equivalent for: a block it cannot match is filled in as air, some block entities are dropped, and biomes are picked from a fixed table.

Nothing marks any of it, in the chunk or in the download report. This is inherent to translating between versions rather than a fault in either mod. Across a wide gap, a copy is a reconstruction of that server rather than a record of it. For the other cases where a download can hold something the server did not have, see [when a download can hold the wrong thing](/concepts/wrong-contents/).

## Mods that change nothing

Most of what people run never touches a download. A mod that changes how the world is drawn, or how well the game runs, cannot change what the server sent. Sodium, Iris, Lithium, and Krypton were each checked against what a download reads, and none of them changes what it saves. Litematica is out of the way for a different reason: its schematic sits in a world of its own that your client never loads, so a ghost block is never saved as a real one.

What a rendering mod can cost you is the container outline, which is drawn into the world the way that mod draws everything else. If one ever makes the outline vanish, the download is unaffected. The outline is a marker on your screen, not part of the save.

For any mod not named here, the question to ask is what it does with world data. A mod that only draws something for you cannot reach the download. A mod that puts world data into your client that the server did not send can.
