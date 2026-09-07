---
title: Supported versions
description: The Minecraft versions and loaders Archive World Downloader ships builds for, and the settings that differ between them.
---

The mod ships one build per Minecraft version and loader. These are the exact versions built rather than a range, so a version missing from the table has no build.

## Versions and loaders

| Minecraft | Loaders |
| --- | --- |
| 1.10.2, 1.11.2, 1.12.2, 1.13.2 | Forge |
| 1.14.4, 1.15.2, 1.16.5, 1.17.1, 1.18.2, 1.19.4, 1.20.1, 1.20.2 | Fabric, Forge |
| 1.20.4, 1.20.6, 1.21.1, 1.21.3, 1.21.4, 1.21.5, 1.21.8, 1.21.10, 1.21.11, 26.1.2, 26.2 | Fabric, NeoForge |

Quilt runs the Fabric build on any version Quilt itself supports, so there is no separate Quilt build. The [CurseForge page](https://www.curseforge.com/minecraft/mc-mods/wdl) lists what is published right now.

## Settings your version does not show

A setting Minecraft gives the mod no way to honor is left out of the settings screen rather than shown doing nothing.

| Setting | Not shown on |
| --- | --- |
| [Advancements](/reference/config/download/) | 1.11.2 and older |
| [Lock Downloaded Maps](/reference/config/download/) | 1.13.2 and older |
| [Item Location Data](/reference/config/download/) | 1.14.4 and older |
| [Outline Thickness](/reference/config/interface/) | 1.15.2 through 1.21.10 |

## Other differences between versions

On 1.16.5 and older, reaching the server through a version-bridging proxy such as ViaBackwards can drop your connection when a download starts. [When a download fails](/guides/download-failed/#the-server-disconnects-you-when-a-download-starts) has the symptom and the fix.
