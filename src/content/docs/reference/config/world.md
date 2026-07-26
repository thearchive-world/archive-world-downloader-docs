---
title: World settings
description: Settings on the World tab of the Archive World Downloader settings screen.
---

The World tab holds three sections: Generation, Game Rules, and World Defaults. Each table lists the option's config-file key, its type, its default, and its effect. For the routes that open the settings screen, see [Opening the settings screen](/reference/commands/).

## Generation

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| World Type | `worldType` | Enum (VOID, DEFAULT, FLAT) | VOID | What fills the space between downloaded chunks. Your downloaded area is always the real terrain; this governs only the surroundings. VOID is empty air; DEFAULT generates normal terrain and FLAT generates superflat layers, both freshly generated and not the server's real land. |
| Seed | `worldSeed` | Number (64-bit; non-numeric text hashed) | 0 | Seed for DEFAULT and FLAT terrain, across the full 64-bit range. Non-numeric text is hashed the same way the vanilla seed field does. VOID ignores it. |
| Generate Structures | `generateFeatures` | Toggle | false | Generate structures (villages, strongholds, and the rest) in DEFAULT and FLAT terrain. |

## Game Rules

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Override Game Rules | `overrideGamerules` | Toggle | true | Write a curated safe set of game rules into the download so it opens calm and safe. Disabling writes none, so the world's own defaults stand. |

The screen lists the curated game rules below the master toggle. The exact set shown depends on your Minecraft version: the screen shows only the curated rules your version's game-rule registry defines, and skips any that version does not have, so treat the rules below as the current set rather than a fixed list. Each rule is a toggle. With **Override Game Rules** on, the safe set writes each rule's curated value; toggling a rule writes its own on or off value for the download instead. The curated values below turn everything off except Keep Inventory.

| Rule | Effect |
| --- | --- |
| Keep Inventory | Keep your items when you die instead of dropping them. The safe set turns this on. |
| Mob Spawning | Spawn mobs naturally over time. The safe set turns this off. |
| Daylight Cycle | Advance the time of day. The safe set turns this off, so the sun holds in place. A downloaded world always opens at noon, whatever this rule is set to. |
| Mob Griefing | Let mobs change blocks, such as Creeper craters and Endermen moving blocks. The safe set turns this off. |
| Weather Cycle | Advance the weather. The safe set turns this off, so the weather holds. |
| Fire Spread | Let fire spread to nearby blocks, out to a set distance from a player. The safe set turns this off. Turning the row on restores your Minecraft version's own default distance. |
| Vines Spread | Let vines grow onto new blocks. The safe set turns this off. |
| Trader Spawning | Spawn Wandering Traders. The safe set turns this off. |
| Patrol Spawning | Spawn Pillager patrols. The safe set turns this off. |
| Warden Spawning | Spawn Wardens from Sculk Shriekers. The safe set turns this off. |

### Setting a rule the screen does not list

The config file takes an override for any single game rule, as a `gamerule.<id>=<value>` line using this Minecraft version's rule ids (the ids differ across versions). An override applies only when Override Game Rules is on. An id that does not exist at your version, or a value that does not fit the rule, is skipped, so a typo cannot make the world fail to open. Toggling a rule in the settings screen writes only its own on or off value, so it replaces a custom value you hand-set this way.

The config file is at `<config>/wdl.properties`. See the [Download reference](/reference/config/download/) for how editing it by hand works.

## World Defaults

The rows below **Override World Defaults** gray out when it is off.

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Override World Defaults | `overrideWorldDefaults` | Toggle | true | Apply the download's game mode and cheats settings below. Disabling opens the world in the game mode you were in, with cheats off. |
| Force Creative Game Mode | `openInCreative` | Toggle | true | Open the downloaded world in Creative. Disabling opens it in the game mode you were in. Applies only under Override World Defaults. |
| Allow Cheats | `allowCommands` | Toggle | true | Enable cheats in the download so commands like /gamemode and /tp work in singleplayer. Applies only under Override World Defaults. |
