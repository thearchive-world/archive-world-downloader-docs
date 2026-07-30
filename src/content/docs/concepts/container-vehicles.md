---
title: Chests carried by Minecarts, Boats, and animals
description: "How a Minecart with a Chest, a Boat or Raft with a Chest, and a Donkey, Mule, or Llama wearing a Chest save what is inside them, which settings they need, where a moving one ends up in the copy, and the cases where their contents are lost."
---

Some containers are not blocks. A Minecart with a Chest rolls away, a Boat with a Chest floats off, and a Donkey wearing a Chest walks. They save the same way a Chest does, by being opened, and everything unusual about them follows from being an entity rather than a block. Which ones can hold anything at all is listed in the [Download reference](/reference/config/download/#containers-carried-by-entities).

## Opening one saves what is inside

The rule is the one every container follows: the contents reach your client only while the screen is open, so opening the screen is what saves them. How to open each one, and the outline that goes with them, is covered in [check what you actually saved](/guides/check-coverage/#containers-that-something-carries).

Open it again later and the download keeps what you saw the last time, so a container you keep topping up is saved as it stood the last time you looked in it.

A right-click that opens nothing saves nothing, and it can quietly cost you the next few containers as well. See [when a container you opened is not saved](/concepts/what-gets-downloaded/#when-a-container-you-opened-is-not-saved).

Saving these needs both **"Entities"** and **"Containers"** on. Entities is what carries the Minecart or the Donkey into the download at all, and Containers is what records the contents of anything you open. The [Download reference](/reference/config/download/) covers both.

## Finding the ones you have not opened

They are outlined in the world like any other container, and the outline clears when you open one. Those outlines follow the **"Entities"** setting rather than **"Containers"**, unlike every other outline. On a chested animal the box stops at chest height rather than covering the whole animal. See [check what you actually saved](/guides/check-coverage/#containers-that-something-carries), which also covers the one settings combination that leaves an outline no open can clear.

## Where a moving one ends up

A Minecart you opened and then let roll into the next chunk is written twice: once where it was when its chunk was first saved, and once where it ended up. Both copies hold the items. The mod would rather keep the loot in both places than guess which copy the game will load, so a Minecart you rode a long way can turn up more than once in the copy.

A vehicle you were riding when you stopped the download is saved with you rather than on its own, the same way Minecraft saves the Boat you log out in. It is under you when you open the copy, with whatever it was carrying.

A mount you rode between dimensions is a case of its own, and it leaves a copy behind in the dimension you left. See [a mount you ride between dimensions is saved in both](/concepts/wrong-contents/#a-mount-you-ride-between-dimensions-is-saved-in-both).

Break a Minecart after you opened it, or lose the animal you opened, and the download keeps it anyway. Your client is told the entity is gone, and never told whether that means killed or merely out of range, so the mod holds what it has and writes it at the last place it saw it.

## What you emptied stays in the copy

Take everything out of one of these after opening it, and the copy can still hold what you removed. That one is a real limit rather than a quirk of movement, and it is covered in [a Minecart with a Chest you empty keeps what you took out](/concepts/wrong-contents/#a-minecart-with-a-chest-you-empty-keeps-what-you-took-out).

Take out only some of it and the copy is right. The old contents are kept only when what the mod sees is completely empty.

## When the contents are lost

The items you opened are written onto the entity when the chunk it is standing in is saved. A vehicle whose surroundings were never saved has nowhere to be written to, so its contents go nowhere either. That is reported as a partial download rather than passing silently. See [when a download fails](/guides/download-failed/); the remedy while you are still there is in [check what you actually saved](/guides/check-coverage/#containers-that-something-carries).

## A Chest taken back off an animal

Taking the Chest off a chested animal is not something survival play allows, so this comes up only with commands. If it happens after you saved the animal, the items stay in the file and the game ignores them on load, because a Donkey with no Chest is read back without an inventory. What you have then is a Donkey saved without the items you opened.
