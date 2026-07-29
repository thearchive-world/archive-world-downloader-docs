---
title: Why machines and redstone load stopped
description: "Why redstone clocks, farms, and other machinery load stopped in a downloaded world, why that is inherent to downloading from a client rather than a defect, and why any block update starts a stopped machine running again."
---

Redstone machinery in a downloaded world loads stopped. Clocks sit still, a Repeater holds a half-finished state, and a farm that was running when you downloaded it does not start again on its own. The blocks and wiring are all there; what is missing is the machine's motion. This is inherent to downloading from a client, not a defect in the download, and starting a machine again is usually one block update away.

## Why a machine loads stopped

A running circuit is more than its blocks. Every Repeater counting down its delay, every Torch about to flip, and every Observer mid-pulse has a scheduled tick waiting on the server, a note that says to come back to this position in a few ticks and finish what was started.

Scheduled ticks are server state. The server never sends them to your client, and the chunk data it does send has no field that could carry them. Your client can see that a Repeater is unpowered. It cannot see that the server means to power it two ticks from now.

A download therefore holds the blocks exactly as the server had them, with the pending work missing. If the moment you saved fell inside a Repeater's delay, the world records a Repeater with a signal going in, nothing coming out, and no instruction to ever resolve it.

Nothing repairs that when the world loads. Minecraft does not re-evaluate redstone on chunk load, so a circuit keeps whatever state it was saved with until something touches it. A machine caught mid-cycle stays mid-cycle for as long as the world sits.

A clock is the clearest case. A clock has no resting state, so you save it part-way through a cycle no matter when you look, and it loads stopped however long you waited or however carefully you timed it.

## State a download can never hold

Some redstone state does not live in the blocks at all. It lives in the block entity, the hidden record a block like a Comparator or a Hopper keeps for itself. A block entity sends the client only the part of that record the client needs to draw the block. The redstone-relevant values stay on the server and never reach any client, so no download can hold them.

Two examples:

- A Comparator's stored output. In a downloaded world it reads 0, because the server never sends the value the Comparator was holding.
- A Hopper's transfer cooldown. It arrives absent, so a Hopper is never saved part-way through its cycle, and it resumes on its own once it runs again.

The same principle covers any block entity's internal redstone state, including newer redstone blocks. A Crafter's crafting progress is server-only. A Sculk Sensor's vibration record and a Sculk Shrieker's warning level are server-only. None of that is sent to a client, so none of it is in a download. Most of it settles by itself once the block runs again, because the value is recomputed from the world around it.

A Crafter's disabled slots are the exception. They reach your client when you open the Crafter, because they are what draws the crossed-out slots on screen, and the mod records them along with the items. So open a Crafter whose slot pattern matters, the same way you open a Chest.

## The Comparator caveat

Comparators are the exception worth knowing about, for a reason that has nothing to do with ticks. A Comparator measures what a container holds, and a container's contents are only saved when you open it. A Chest you never opened is saved empty, so a Comparator reading that Chest computes 0 in the download even after the circuit runs again. A machine that depends on Comparator readings is only accurate if the containers it measures were opened while the download ran. To catch the ones you have not opened yet before you leave, [check what you actually saved](/guides/check-coverage/) while the download runs.

## A block update starts a machine again

A block update starts a stopped machine. A block update is what happens whenever a component's surroundings change, and it makes the whole connected circuit re-evaluate itself from its current blocks. Flicking the Lever or pressing the button that drives a machine is a block update. So is breaking any Redstone Dust, Repeater, or Torch in the line and placing it back, because breaking a component updates its neighbors and placing it updates them again.

One update per machine is enough. The circuit recomputes and runs normally from then on.

## Pistons

Pistons largely take care of themselves. A Piston saved mid-extension keeps the moving block with it and completes its movement a moment after the world loads. What can persist is a Piston left retracted while its input is on, or extended while its input is off. Like the rest of redstone it re-evaluates on the next block update, so the same fact applies.

## Nothing is lost

None of this damages the save, and no machine is lost. Every block, every block entity, and every connection is recorded as the server had it. A download records a machine as it stood at one instant, while it was not running. A single block update starts it again.
