---
title: Commands and keybinds
description: The /wdl chat commands, the three Archive World Downloader keybinds and their default bindings, and the routes to the settings screen.
---

Archive World Downloader is driven from three places: the buttons on the pause menu, the keybinds in the vanilla Controls screen, and the `/wdl` chat commands. This page lists each command and keybind and states what it does.

## Commands

Every command is a subcommand of `/wdl`.

| Command | Effect |
| --- | --- |
| `/wdl` | Shows the current download status in chat. Never starts a download. |
| `/wdl start` | Prompts for a name. Bare `/wdl start` does not start a download; it replies `A download needs a name. Use /wdl start <name> to begin.` |
| `/wdl start <name>` | Starts a new download under that name. This is the runnable start form. Refuses a name that already exists. |
| `/wdl stop` | Stops the running download and saves it to disk. Replies that nothing is downloading when the mod is idle. |
| `/wdl status` | Shows the current download status in chat. Same as bare `/wdl`. |
| `/wdl config` | Prints the config-file path and a digest of the current settings values in chat. Does not open the settings screen. |
| `/wdl downloads` | Opens the downloads screen with the existing-worlds list expanded. |
| `/wdl resume <folder>` | Resumes an existing download folder, which the mod suggests as you type the name. The folder name is required; bare `/wdl resume` is not runnable. |

The start verb is `/wdl start`. There is no `download` subcommand; start a new download with `/wdl start <name>` or from the downloads screen.

## Keybinds

The mod registers three keybinds under the "Archive World Downloader" category in the vanilla Controls screen. Rebind them there. Two ship unbound, so bind them before use.

| Keybind | Default | Effect |
| --- | --- | --- |
| "Toggle World Download" | Unbound | Starts a download named after the server when idle, and stops and saves the running download when one is in progress. Does not open a screen. |
| "Open Downloads Screen" | Unbound | Opens the downloads screen. |
| "Peek Detailed HUD" | Left Alt | Reveals the detailed HUD layout while held. The "Peek Key Mode" setting can switch it to a toggle. |

The Toggle World Download key does not open a screen. To open the downloads screen, use the pause-menu download button, the Open Downloads Screen key, or `/wdl downloads`.

In a replay there is no server to name a download after, so the Toggle World Download key refuses and asks you to use `/wdl start <name>`. See [Download from a replay](/guides/replay-download/).

## Opening the settings screen

The settings screen, titled "Archive World Downloader Settings", holds the mod's options across the Interface, World, and Download tabs. Three routes open it:

- **Pause-menu settings button.** In the pause menu on a server, a small "..." button sits beside the download button and opens the settings screen. It is not shown in your own local world.
- **ModMenu on Fabric.** With ModMenu installed, its config button for Archive World Downloader opens the settings screen.
- **Mods screen on NeoForge.** NeoForge shows a config button for the mod in its mods list, which opens the settings screen.

On Fabric without ModMenu, off a server, there is no route to the settings screen: the pause-menu button appears only on a server, and there is no config-list button without ModMenu. Join a server to reach it.

`/wdl config` prints the config-file path and current values in chat, but does not open the settings screen.

For what each setting does, see the [Interface](/reference/config/interface/), [World](/reference/config/world/), and [Download](/reference/config/download/) settings pages. For the screen the download button and `/wdl downloads` open, see [The downloads screen](/reference/downloads-screen/).
