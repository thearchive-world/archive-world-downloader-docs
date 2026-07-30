---
title: When a download can hold the wrong thing
description: "Four limits on how far a downloaded world can be trusted: on a server running inventory plugins a plugin's own screen can be saved as the contents of the block you clicked, downloading two server worlds of the same kind mixes them into one saved world, a mount you ride between dimensions is saved in both of them, and a Minecart with a Chest, or an animal carrying one, keeps the items you take out of it."
---

A container in a download holds what your client was shown when you opened it. On most servers that is all there is to it. What you saw in the Chest is what the copy holds.

Four things break that. None is a defect waiting on a fix. All four come out of what a client can see, and there is nothing to do about any of them except know about it.

One further case comes from your own side rather than the server's. A mod that lets you join a server running an older version of Minecraft translates the world before your client ever sees it, and a download saves that translation. See [joining a server older than your client](/concepts/other-mods/#joining-a-server-older-than-your-client).

## A server can answer your click with a screen of its own

Your client is never told what a Chest holds until you open it, and it is never told which block the screen in front of you came from. It gets a screen with a number of slots and a title. Nothing in that names a block. So the mod matches the screen against the block you clicked: a 27-slot screen opening on a Chest is that Chest's contents, and they are saved into that Chest.

On a server running a plugin that answers a right-click with an inventory screen of its own, that match can hold and still be wrong. A shop block, a menu block, a `/backpack`, a vault, a claim plugin showing you a preview of someone else's Chest: if the plugin's screen has as many slots as the block you clicked, nothing separates it from the block's own contents, and the plugin's items are what the download writes into that Chest. Click an Ender Chest, get a plugin screen of the same size, and those items are saved as your Ender Chest.

The mod cannot spot this. A plugin's screen and a real one arrive at your client the same way, so there is no warning it could give you and nothing in the download report to mark it. From the client's side the two look identical.

It takes a plugin running on the server, one that opens inventory screens over real containers. Nothing in vanilla does that, and no datapack can. On a vanilla server, or one whose plugins leave containers alone, every container in your download is the block's own.

The setting that shuts it off is **"Containers"** on the Download tab (`captureContainers`). With it off, no container's contents are recorded at all, so nothing wrong can be written into one. That is a real trade rather than a safe default: it costs you every Chest, Barrel, and Shulker Box in the archive, and the container outline goes with it. The [Download reference](/reference/config/download/) covers the rest of what that setting turns off.

## Two server worlds of the same kind

A saved world keeps one folder for the Overworld, one for the Nether, and one for the End, the same as any singleplayer world. The mod files each server world by which of the three it is, rather than by the name the server gives it, and that is what lets a server with its own naming for its worlds download correctly at all. Anything that does not use Minecraft's own Nether or End type lands in the Overworld folder, a custom dimension from a datapack or a plugin included. See [every dimension you travel](/concepts/what-gets-downloaded/#every-dimension-you-travel) for that case.

Plenty of servers run more than one world of the same kind. A resource world that gets reset every few weeks is still an Overworld, and so is a plot world. Download in both under one download and both land in the Overworld folder. The terrain interleaves, and where the two worlds have a container at the same coordinates, one world's contents can end up on the other one's container. What you have then is a mixture of two worlds rather than a copy of either.

The container outline mixes them too. Open a Chest in the first world and its outline clears, as it should. A Chest at those coordinates in the second world is then drawn as though you had opened it as well, when none of it has been saved.

Nothing stops you and nothing warns you. The habit that avoids it is in [keep the wrong things out of a download](/guides/keep-wrong-things-out/).

This is not a limit on dimensions. Traveling from the Overworld through the Nether to the End under one download is what the mod is built to do, and none of this touches it. Those three are different kinds, and each gets its own folder. It is two worlds of the same kind that have to share one.

## A mount you ride between dimensions is saved in both

Ride a Horse, Boat, Pig, or Strider through a portal while a download is running, and the saved world keeps that mount twice: once in the dimension you rode it into, and once standing in the dimension you rode it out of. If it carries a Chest, both copies hold the Chest's contents.

Nothing is lost here, which is why this one is a leftover rather than a gap. The mount is in the dimension you took it to, with everything it was carrying. What the download also keeps is a copy of it in the dimension you left, of a mount that is no longer there.

The reason is in how Minecraft moves a mount between dimensions. It does not carry the mount across. It builds a fresh one in the dimension you arrive in and removes the one you left, and your client is told you are no longer riding anything a moment before it is told which dimension you are now in. By the time the download can act on the change, nothing on your client still says you brought a mount with you, and a download that guessed would risk dropping a mount you genuinely did leave behind.

The habit that avoids it, and how to clear an extra copy out of a finished download, are in [keep the wrong things out of a download](/guides/keep-wrong-things-out/).

## A Minecart with a Chest you empty keeps what you took out

This one is about the containers that are entities rather than blocks: a Minecart with a Chest, a Minecart with a Hopper, a Boat with a Chest, and a Donkey, Mule, or Llama carrying a Chest.

Open one during a download and the download records what is inside. Take everything out, keep playing, and the copy in the download can still hold the items you removed. For that to happen the container has to have been saved with something in it first, either earlier in the same download or in an earlier one you are resuming. A container you never saved full stays empty in the copy.

The reason is the same reason the mod records containers at all. Your client is told what a container holds only while its screen is open. Every other moment it reads as empty, including every moment you spend walking past it. A download that took that at face value would wipe the contents of every Minecart with a Chest you rode past, so it keeps what it already has. For a container that is a block, the mod can tell "you opened this and it was empty" apart from "nobody opened it", and it writes what you saw. For these it cannot, so the older contents stay.

Nothing warns you while it happens, and nothing in the download report marks it.

The habit that avoids it is in [keep the wrong things out of a download](/guides/keep-wrong-things-out/).
