---
title: How coverage is measured
description: "How Archive World Downloader's map overlay splits saved chunks into two tones by entity coverage, why entities lag terrain, and how the mod measures the server's entity send range live instead of assuming a fixed value."
---

While a download records, the mod can highlight every already-saved chunk on your minimap and world map, so you can watch your coverage grow and spot the gaps. The highlight is drawn by XaeroPlus or JourneyMap, so without one of those installed there is nothing to see. It comes in two tones, and where the line between them falls is what the mod has to work out as you play.

## The two tones

A saved chunk is drawn in one of two tones, and the tone reports on the chunk's entities, not its terrain.

- One tone marks a chunk that was within the measured send range while it was recorded, so the server had sent its decorations: its Item Frames, Paintings, and Armor Stands are in the download, and a build decorated with frames is complete there. This is the covered tone, shown in teal by default.
- The other tone marks a chunk whose blocks are saved but whose entities were never confirmed within the server's send range. Anything hung on its walls, Item Frames and Armor Stands among them, may still be missing from the download. This is the unverified tone, shown in amber by default.

The tones never report on terrain. Every saved chunk already has its blocks; the two tones only say whether that chunk's entities were confirmed saved too.

To change either color, see the [Interface reference](/reference/config/interface/).

## Why entity coverage lags terrain

Terrain reaches you farther than entities do. As you explore, the server sends chunk data out to your render distance, but it tracks entities only within a shorter range around you. So a chunk can arrive and be saved while its entities are still outside the range at which the server would send them.

This is why a chunk you only ever saw from the far edge of your render distance looks complete on the map yet has no frames in the download. The terrain was sent; the entities were not. The unverified tone marks exactly those chunks, so a chunk missing its decorations is never mistaken for a finished one.

## Measuring the send range live

Every server decides its own entity send range, and the client is never told what it is. A vanilla server scales it from a percentage setting; server software in the Spigot and Paper family replaces it with per-category distances an operator can set to almost anything. Any fixed assumption would draw the boundary in the wrong place on some server, and in the worst case it would mark a chunk complete whose decorations were never sent.

So the mod measures the range instead of assuming it. It learns the range from what the server actually does, and it keeps the largest distance any observation proves:

- When the server sends you a nearby entity, it does so only because you are inside its range, so the distance the entity appeared at proves the range reaches at least that far.
- As each chunk is recorded, any qualifying entities already loaded around you are measured too. This lets a download calibrate without moving: stand still with a qualifying entity nearby and, after a short settling pause, the area around you can split into its two tones.
- When you move away from an entity until the server stops sending it, that moment marks the outer edge of the range. This calibrates the case of leaving your own map-art wall behind: start at the wall, move off, and the wall itself teaches the mod the true range as it drops out.

The measured range never shrinks within a session. Every observation is proof the range reached that far, and nothing the client sees later can disprove it.

### Which entities count

You never have to think about this to use the overlay, but the boundary is only as good as what the mod is willing to measure from, so the mod is careful about which entities it trusts.

The four static decorations the two tones are really about always count: Item Frames, Glow Item Frames, Paintings, and Armor Stands. Any other entity the server tracks at the same range as those decorations also counts, so the boundary calibrates even in wilderness where there are no frames. A Chicken and an Item Frame are equally good proof that the range reaches a certain distance, and the mod keeps the farthest proof it has.

Two kinds of entity are left out, because each would make the range look larger than it really is:

- Anything that can carry a rider. A passenger raises how far the server sends the vehicle, so a mounted animal or a Boat could report a distance well past the real decoration range.
- The invisible display and interaction markers that plugins use for holograms and for frames that follow the player. Servers commonly broadcast these farther than real decorations.

Entities the server tracks at a shorter range than the decorations are never used either. They cannot prove the decoration range, because the server stops sending them before that range is reached. Many hostile mobs fall in this group.

None of this changes what gets saved. Every entity the server sends is still saved into your download as normal. This classification only decides which entities help draw the boundary between the two tones.

## A conservative boundary

The covered tone is deliberately cautious, and it stops a little short of the line where entities actually appear.

Two things pull it in. The measured range only reaches the true value when an entity happens to arrive or leave right at the edge, so in practice it sits a few blocks under the real range. On top of that, the mod subtracts a small safety margin from a measurement taken from an entity leaving, and rounds every measurement down to whole chunks.

Entity pop-in traces the exact range circle around you, while the overlay draws whole chunks. So you will see mobs appear right outside the covered area, in the surrounding unverified chunks. Expect the covered area to hug about one chunk inside the line where entities appear.

The covered tone is a good guide rather than a guarantee. A decoration within about a chunk of the covered edge can fall on either side of it. For a build you care about, walk close enough to see its frames rather than trusting the boundary.

## What follows from measuring instead of assuming

A fresh download starts single-tone. Until the first measurement lands in a dimension, everything saved is drawn in the covered tone with no split, because no boundary has been measured yet and the mod never draws a guessed one. The split appears once the first qualifying entity has been measured.

An entity-sparse stretch gives the mod nothing to measure. Open ocean and the deep dark hold nothing in decoration range, so the boundary does not move there until you reach terrain that does. This is also why the split can take a while to appear on a still download in an empty area: the mod is waiting for the first qualifying entity to arrive or leave, which usually means moving.

A sudden jump pauses the measurement. Right after a teleport or a respawn, calibration pauses briefly so the jump is not mismeasured as an enormous range. It resumes on its own.

Lowering your render distance pulls the coverage in. The server caps the entity range at your render distance, so the overlay never draws coverage farther than the server is currently sending. Lower your render distance and the covered area shrinks to match; raise it again and the coverage you had before comes back.

If you have turned off saving entities entirely, every saved chunk shows in the unverified tone, because no entity is being saved to confirm.

## Resumed downloads

When you resume a download, the chunks already saved in earlier sessions are drawn in the covered tone, not the unverified one. They were saved under the same rules when you first visited them, and the current session's measurements never demote them: the resume coverage is kept apart from what this session measures, so recalibrating the range this time around leaves it untouched.

For how to fill the gaps the unverified tone marks, see [Check what you actually saved](/guides/check-coverage/).
