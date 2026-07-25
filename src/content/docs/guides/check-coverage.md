---
title: Check what you actually saved
description: "While an Archive World Downloader download runs, the in-world container outline and the map chunk overlay show what is already saved and what still has gaps, so you can fill them before you leave."
---

While a download records, two in-game aids show what is already saved and what still has gaps, so you can fill them before you leave. Red outlines in the world mark containers you have not opened; amber chunks on your map mark terrain saved without its entities.

## Fill the gaps

Do this while the download is still running, before you disconnect.

1. Walk back into the amber area, close enough for the server to send its entities. Those chunks turn teal as the entities arrive.
2. Open every outlined container you pass. Each outline clears as you open it.
3. Check the map again. Anything still amber has not been covered.

The rest of this page explains what each outline and each tone means, and the few cases where an outline will not clear.

## Container outline

Containers you have not opened yet this download are outlined in the world, in red by default. Open a container to save its contents, and its outline clears. The outline reaches only so far around you, so an outlined Chest is one you can still walk over to and open.

Chests, Barrels, Shulker Boxes, Furnaces, Hoppers, and every other container that opens a screen are outlined, and so are Ender Chests. A double chest is outlined as one box and clears as one. Every Ender Chest shares one inventory, so opening any of them saves it and clears the outline on all of them. A Lectern is outlined only while it holds a book, and clears when you open it to read.

### Containers that something carries

Containers that something carries are outlined too: Minecarts with a Chest or Hopper, Boats and Rafts with a Chest, and a Donkey, Mule, or Llama wearing a Chest. Those outlines follow the **Entities** setting, while every outline above follows **Containers**, and on a chested animal the box stops at chest height rather than covering the whole animal. Which ones can hold anything at all is listed in the [Download reference](/reference/config/download/#containers-carried-by-entities).

How you open each one is Minecraft's own business:

- Right-click a Minecart with a Chest or a Hopper.
- Sneak and right-click a Boat or Raft with a Chest. A plain right-click puts you in it instead.
- Sneak and right-click a tamed, grown Donkey, Mule, or Llama.
- While you are riding one, press your inventory key.

One combination leaves an outline that never clears. With **Entities** on and **Containers** off, these are still outlined, and opening one saves nothing, because Containers off is what stops the mod recording any container you open. The outline goes on asking you to open something it cannot record. Turn Containers back on, or turn **"Outline by Download Status"** off in the [Interface reference](/reference/config/interface/).

One of these you opened can still lose its contents: the items are written onto the entity when the chunk it stands in is saved, so a vehicle whose surroundings were never saved is reported as a partial download. The remedy while you are still there is to walk back to it. The chunk saves, the vehicle is written into it, and the contents you opened go with it.

### A red outline that will not clear

A Chiseled Bookshelf opens no screen, so the mod cannot read its books the way it reads a Chest. A slot is saved when you put a book into it yourself. To save a shelf someone else filled, take each book out and put it back. The outline clears once every occupied slot is saved.

Three more things carry contents the mod cannot read any other way, and each is saved from your own right-click: a disc you put into a Jukebox, what a Shulker Box holds at the moment you place it, and the Bees in a Beehive you place. Of those three only the Shulker Box is outlined, and placing it is what clears its outline.

A Jukebox or a Beehive that was already in the world when you arrived is the one case with no remedy. The mod can record only a disc you put in yourself and a hive you place yourself, and neither block is ever outlined, so a Jukebox spinning a disc in someone else's base is saved empty with nothing to tell you.

### An outline that stays after you opened it

An outline that stays after you did open the container is a different case, and one that clears on a second try. Close the container and look at it: if the outline is gone, the contents are in the download, and if it is still there, nothing was saved.

Twenty seconds without right-clicking anything clears the stale click, and everything you open after that records normally. Give it half a minute to be safe. Opening a container during the wait starts it over, and so does right-clicking a mob, so leave both alone until the time is up. Then go back and open the containers that stayed outlined, and each outline clears as you do.

One habit works against you. Clicking the Chest that refused you keeps that stale click fresh, and clicking it again is what most people do when a Chest will not open. Leave it alone, wait, and then carry on with the containers you can open.

Do this while the download is still running. An outlined container is one you can still walk back to. Once you disconnect, the ones it missed stay missing until you download there again. Why the mod cannot spot the swallowed click is covered in [when a container you opened is not saved](/concepts/what-gets-downloaded/#when-a-container-you-opened-is-not-saved).

### The settings all of this depends on

The Chiseled Bookshelf, the Jukebox, the placed Shulker Box, and the placed Beehive all need **Containers** on, and **Keep Chunks Current** set to Nearby or Everywhere. What each level of that setting records, and the one gap Nearby keeps, are in the [Download reference](/reference/config/download/).

### The second outline color

A container outlined in violet was saved by an earlier session of this download, not this one. It is already in the save, so you do not need to open it again. Opening it anyway brings its contents up to date.

Put a book into a Chiseled Bookshelf that an earlier session saved and it turns from violet to red. Saving that shelf again replaces its stored books rather than adding to them. The red warns that the slots the earlier session saved are at risk until you save the shelf again.

To change either color, see **"Missing Container Color"** and **"Recovered Container Color"** in the [Interface reference](/reference/config/interface/).

![Two containers in the world, one outlined red as still unopened and one outlined violet as recovered from an earlier session](../../../assets/check-coverage-outline-colors.png)

## Map chunk overlay

With [XaeroPlus](https://modrinth.com/mod/xaeroplus) or [JourneyMap](https://modrinth.com/mod/journeymap) installed, the mod highlights every already-saved chunk on your minimap and world map, so you can watch your coverage grow and spot the gaps as you go. Either map mod enables it; without one, the overlay does nothing.

A saved chunk shows in one of two tones. Teal, by default, means its entities were saved with it, so its Item Frames, Paintings, and Armor Stands are in the download. Amber means its blocks are saved but it was never close enough for the server to send its entities, so anything hung on its walls may be missing. Revisit an amber chunk up close and it turns teal.

To change either color, see **"Entities Saved Chunk Color"** and **"Entities Unverified Chunk Color"** in the [Interface reference](/reference/config/interface/). For why the two tones exist and how the mod works out the range that splits them, see [how coverage is measured](/concepts/coverage-measurement/).

![The world map with a mix of teal covered chunks and amber unverified chunks near the edge of explored terrain](../../../assets/check-coverage-chunk-overlay.png)
