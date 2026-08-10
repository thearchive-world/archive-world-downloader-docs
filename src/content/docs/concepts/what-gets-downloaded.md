---
title: What gets downloaded
description: "What Archive World Downloader saves into your singleplayer copy of a multiplayer world, why a download only holds what your client saw, and what a shared copy reveals about you."
---

A download is a copy of a multiplayer world, built from what your own client sees as you play. What it holds, and what it cannot, both follow from that.

## What a download is

As you explore a multiplayer server, your client receives the world around you over the network: the terrain, the mobs nearby, the contents of a Chest the moment you open it. A download saves what your client sees into a local world you can open in singleplayer. It is a copy of your own view of the world, written to disk as you play.

Nothing runs on the server. There is no plugin to install and nothing to add anywhere but your own game.

Almost everything a download saves is data your client already received as you played. The one exception is statistics: while a download runs, the mod asks the server for yours from time to time, using the same request the vanilla statistics screen sends when you open it. Turning off **"Statistics"** on the Download tab stops that request.

## What gets saved

The terrain around you is always saved. It is the one thing a download never leaves out.

Everything else is a kind of data the mod records as it reaches your client while a download runs:

- Containers you open. A Chest, Barrel, or Shulker Box records its contents at the moment you open it, and a Lectern records its book when you open it to read. A few things carry contents the client is never sent even then, and those are recorded from your own right-click instead: the books you put into a Chiseled Bookshelf, a disc you put into a Jukebox, and what a Shulker Box or a Beehive holds at the moment you place it. The Jukebox and the Beehive work only for what you do yourself, so a Jukebox already playing or a hive already full of Bees when you arrived is saved empty.
- Entities in range: mobs, Item Frames and the Maps they carry, Paintings, and other entities, as far out as the server sends them to you. Another player you see nearby is never one of them: Minecraft itself refuses to write player entities into a world, and the mod leaves them out of everything it records, passenger lists included. The one trace a bystander can leave is an absence, because a mount only another player was riding may be missing from the copy.
- Your player data: your inventory, and your Ender Chest while you have it open.
- Filled Maps you saw, so they show their picture in the copy rather than blank.
- Your advancements and statistics.

Which of these extra kinds a download includes is governed by the Download tab of the settings screen. See the [Download reference](/reference/config/download/) for each toggle and its default.

## Why some things are limited

The client can only save what the server sends it. Every gap a download can have starts there.

The server sends a container's contents only when you open it, so a Chest you walked past but never opened is saved as an empty Chest. To spot which containers you have not opened yet before you leave, see [check what you actually saved](/guides/check-coverage/).

A Chest carried by a Minecart, a Boat, or an animal follows the same rule and has edges of its own, from a Minecart that rolled away after you opened it to one whose contents had nowhere to be written. See [Chests carried by Minecarts, Boats, and animals](/concepts/container-vehicles/).

Some data never leaves the server, or reaches your client in a form the mod cannot record, so it depends on the server's cooperation and on what your client actually receives. A download therefore reflects what you witnessed, not the server's full state. It holds the parts of the world you were present for and leaves out the rest.

Redstone machinery is a further case: it loads stopped, because the running state never reaches your client. See [why machines and redstone load stopped](/concepts/machines-load-stopped/).

All of that is a gap rather than a mistake. The Chest is empty, the machine is still, and nothing in the copy is wrong. Two cases where a download can hold something wrong instead, one of them on any server running inventory plugins, are covered in [when a download can hold the wrong thing](/concepts/wrong-contents/).

### When a container you opened is not saved

A container you did open can go unsaved too, and it does not stop at one: on an ordinary server running an inspector plugin, a single click the plugin answered was followed by seven containers that saved nothing over the next twenty seconds. It starts with a right-click that opens nothing: clicking a mob, turning an Item Frame, or clicking a Chest a plugin refused. Your client sent the click and no screen came back, and the mod cannot tell a click that will never be answered from a screen that is merely slow to arrive, so the containers you open next go unrecorded while it waits. The missed ones keep their outline, and twenty seconds without right-clicking anything puts things right; the check and the steps are in [an outline that stays after you opened it](/guides/check-coverage/#an-outline-that-stays-after-you-opened-it).

## Every dimension you travel

One download spans every dimension you visit. Walking through a Nether portal while a download runs does not begin a new download: the Nether saves into the same one.

The Overworld, the Nether, and the End each write to their own folder inside the saved world, the way a singleplayer world keeps its dimensions apart. A single download can hold all three at once. You do not start a separate download for the Nether, or for the End. Traveling there while a download runs is what saves it.

Those three are the only dimensions with a folder of their own. A custom dimension, the kind a datapack or a server plugin adds, is written into the Overworld's folder at its own coordinates, however much it looks like the Nether or the End. What decides the folder is the dimension type the pack declares, not the scenery, and a pack that builds its own place almost always declares a type of its own. The exception is a pack that reuses Minecraft's own Nether or End type rather than declaring one, and that dimension is written into the Nether's or the End's folder. Either way it shares that folder with whatever else lands in it, and where the two overlap they mix together in the copy. On a server with custom dimensions, give each one a download of its own.

A server that runs two worlds of the same kind, a resource world or a plot world alongside the main Overworld, shares a folder the same way. See [two server worlds of the same kind](/concepts/wrong-contents/#two-server-worlds-of-the-same-kind).

### The Ender Dragon in a downloaded End

An End you already cleared can start the dragon fight again in the copy. Minecraft keeps no record your client can see of the dragon being dead, so it works that out from the central island's exit portal the first time you return to the middle. Save that island while you download and the portal comes with it, and the End opens as already won; go straight out to the End cities without ever saving the center, and the game finds no portal, takes the dragon as unbeaten, and brings it back. Flying back through the center before you finish keeps it gone, and nothing is lost either way: the fight only reappears, and beating the dragon once in the copy settles it.

### A network that moves you between servers

Some server networks move you between backend servers behind one address, which you see as a brief **"Reconfiguring..."** screen. When that happens, the running download stops and saves itself, exactly as if you had disconnected; nothing from the new server is written into it. If a network instead switches you with only a respawn-style world change, no reconfiguration screen, the mod cannot tell the servers apart and the download continues, saving the new server's terrain into the same folder, the same mixing described in [two server worlds of the same kind](/concepts/wrong-contents/#two-server-worlds-of-the-same-kind).

The mod knows a server by your server-list entry, which on such a network is the network itself, so a download started after a switch offers to merge into the folder the previous server's download used; give each server's download its own name to keep them apart. With **"Auto-Download on Join"** on, a download starts by itself after a switch only when none was running; a download the switch stopped stays stopped until you start one yourself.

## It opens without the mod

A downloaded world is a normal singleplayer world. It opens in the vanilla game with Archive World Downloader uninstalled, the same as any world you made yourself. Everything the mod records goes into the standard save files Minecraft already reads, so opening the copy never depends on the mod being present.

The mod's own records sit in a `wdl/` subfolder of the world. That folder holds the download report and the mod's bookkeeping, and vanilla Minecraft never looks inside it. It is there for you, not for the game. What each file in it holds is listed in [The wdl/ folder](/reference/wdl-folder/).

## Bobby

Bobby caches the terrain you have already explored so it stays drawn after you move out of the server's range. That cached terrain is Bobby's own stored copy, not something the server sent again.

A download saves only the chunks the server sent to your client, and it skips Bobby's locally cached ones. So terrain you explored earlier, that your client now shows only from Bobby's cache, is not part of the download. It becomes part of the download once the server sends it to your client again.

Bobby is not the only mod that changes what a download holds, and two others do it in their own ways. See [how other mods affect a download](/concepts/other-mods/).

## What a shared download reveals about you

A download is a copy of a world, and it also carries a record of who made it and what they were carrying. Sharing one shares that record.

The `wdl/` folder keeps the download's report: a record of who made the download, which server it came from, and how it ran. It names you, with your Minecraft username and your account UUID (the identifier tied to your Minecraft account). It names the server, with the address you connected to, the server's name as it appears in your multiplayer list (the report's headline), and the server's MOTD (the description shown for it there). It records the download itself, with its name, the times it started and finished, how much it saved, and the download and world settings you changed from their defaults. The cosmetic settings (the HUD, the outline, and the overlay colors) are not recorded. And it notes the software involved: the mod loader and its version, the Minecraft and mod versions, and the server's own software and its simulation distance. This names both you and the server, and it is written for every download.

A download is also your player data. The saved world holds your inventory and, if you opened it, your Ender Chest. It opens at the spot where you were downloading, so it also shows where your base was.

The mod writes a shareable `.zip` when a download finishes, unless you turned that off in the Output settings. It is the whole world folder packed into one file, the one you would send to someone, and it carries everything the folder holds: the `wdl/` report with your identity, your player data, and the world itself.

Turning off the player-data settings changes part of this. With **"Your Inventory"** and **"Ender Chest"** off, the download holds neither. It still opens where you were downloading: those settings never touch your position, your facing, or your dimension, so your location is saved regardless.

No setting redacts the identity in the `wdl/` report. Nothing removes your username, your UUID, or the server details from it. Sharing a download without that record means editing or removing the `wdl/` files by hand first, because no toggle does it for you.
