---
title: Install
description: Install Archive World Downloader on Fabric, NeoForge, or Quilt, and confirm it loaded.
---

Install Archive World Downloader and confirm it loaded. The mod runs on Minecraft: Java Edition only. Work through the steps in order for the loader you already run.

If you play through Prism Launcher, the Modrinth App, or the CurseForge App, install it from inside the launcher instead. That fetches the loader and the dependencies with it. See [Install with a launcher](/get-started/install-launcher/).

## Pick your build

Get the mod from its [Modrinth](https://modrinth.com/mod/wdl) or [CurseForge](https://www.curseforge.com/minecraft/mc-mods/wdl) page, and choose the build that matches your Minecraft version and loader. Each build lists the exact dependency versions it needs, so take those versions straight from the page.

## Install the loader and dependencies

Archive World Downloader runs on the client, so it installs on your own game and nothing runs on the server. It needs Java 21 or newer. The current Minecraft versions already run on Java 21, and the official launcher installs that for you.

Install the loader and dependencies for the build you picked.

### Fabric

Install Fabric Loader for your Minecraft version. The mod also needs Fabric API. Download the Fabric API version the Modrinth page lists for your build and keep it with the mod.

### NeoForge

Install NeoForge for your Minecraft version. It needs no extra library.

### Quilt

Quilt runs the Fabric build. On Quilt, install the Fabric jar of the mod together with Fabric API. Quilt reads Fabric mods directly, so there is no separate Quilt build.

## Add the jars to your mods folder

Put the downloaded jars in the `mods` folder inside your Minecraft game directory. On Fabric and Quilt that is the mod jar and the Fabric API jar. On NeoForge it is the mod jar on its own. Create the `mods` folder if it is not there yet.

## Launch and confirm it loaded

Start Minecraft with the profile for your loader. Once it loads, the mod appears by name, Archive World Downloader, in the in-game mod list: ModMenu on Fabric and Quilt, or the Mods screen on NeoForge. Seeing it there confirms it loaded.

![The in-game mod list with Archive World Downloader present](../../../assets/install-mod-list.png)

For a definitive check, search the game log for `loaded on Minecraft`. The mod writes that line at startup and names your Minecraft version in it.

## You need a multiplayer server to download

Downloads only work while you are joined to a multiplayer server. In a singleplayer world, or a LAN world you host yourself, the pause menu has no download button. Starting one from the keybind or a `/wdl` command answers with a notice telling you to join a server. Join one, and the button appears in the pause menu. From there, follow [Your first download](/get-started/first-download/) to save your first world.

A download can also start from a replay recorded with ReplayMod or Flashback, with no server connection at all. See [Download from a replay](/guides/replay-download/).

## If it does not load

If the mod is missing from both the mod list and the log, the cause is usually one of these:

- The jar is for a different loader than the one you launched.
- A dependency is missing, most often Fabric API on Fabric or Quilt.
- The build does not match your Minecraft version.

The fix is the same for all three. Go back to the Modrinth version selector and download the build, and its dependencies, for your exact Minecraft version and loader.
