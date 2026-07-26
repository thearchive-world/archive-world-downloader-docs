---
title: Interface settings
description: Settings on the Interface tab of the Archive World Downloader settings screen.
---

The Interface tab holds four sections. Each table lists the option's config-file key, its type, its default, and its effect. For the routes that open the settings screen, see [Opening the settings screen](/reference/commands/).

## HUD

The rows below **Show HUD** gray out when it is off.

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Show HUD | `showHud` | Toggle | true | Draw the live download status on screen while a download runs. Disabling hides it; the chat notices and the toasts have settings of their own. |
| Always Show Detailed HUD | `hudDetailed` | Toggle | false | Show the detailed multi-line HUD by default. When off, the peek key reveals it live. |
| Peek Key Mode | `hudPeekMode` | Enum (HOLD, TOGGLE) | HOLD | How the peek key reveals the detailed HUD: HOLD shows it while held, TOGGLE flips it per press. |
| HUD Anchor | `hudAnchor` | Enum (TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT) | TOP_CENTER | Which screen corner or edge the HUD anchors to. |
| Offset X | `hudOffsetX` | Slider (-200 to 200) | 0 | Pixel nudge left or right from the anchor, clamped to the screen. |
| Offset Y | `hudOffsetY` | Slider (-200 to 200) | 0 | Pixel nudge up or down from the anchor, clamped to the screen. |
| Show HUD Background Panel | `hudBackground` | Toggle | false | Draw a panel behind the HUD. Disabling draws the text with a drop shadow instead. |
| HUD Panel Opacity | `hudPanelOpacity` | Slider (0 to 100) | 56 | How opaque the HUD panel is when it is shown. |
| HUD Fade After Download | `hudDoneLingerSeconds` | Slider (0 to 30 s) | 8 | How long the finished HUD lingers after a save before it fades out. |

See [The download HUD](/reference/hud/) for what each part of it means while a download runs.

## Container Outline

The rows below **Outline by Download Status** gray out when it is off.

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Outline by Download Status | `renderUnsavedOutline` | Toggle | true | Outline containers you have not opened yet this download, so you can see which ones still need opening. Each outline clears as you open its container. |
| Outline Render Distance | `outlineDistance` | Slider (1 to 256 blocks) | 96 | How far the container outline reaches from you, in blocks. |
| Missing Container Color | `unscannedColor` | Color enum (RED, VIOLET, TEAL, AMBER, YELLOW, BLUE, REDDISH_PURPLE, WHITE) | RED | Outline color for a container still missing from the save. |
| Recovered Container Color | `recoveredColor` | Color enum (same set) | VIOLET | Outline color for a container recovered from a prior download. |
| Outline Thickness | `outlineLineWidthScale` | Slider (0.5 to 4.0) | 1.0 | Outline thickness, as a multiple of the game's default outline width. 1.0 matches the block-selection outline. |

The pair only works while the two values differ. Set **Missing Container Color** and **Recovered Container Color** to the same value and the outline stops telling the two states apart.

See [Check what you actually saved](/guides/check-coverage/) for how the outline is used during a download.

## Chunk Overlay

This whole section appears only when XaeroPlus or JourneyMap is installed. The two color rows gray out when **Show Chunk Overlay** is off.

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Show Chunk Overlay | `renderCoverageOverlay` | Toggle | true | Highlight already-saved chunks on your minimap and world map while a download runs. Disabling hides the highlight. |
| Entities Saved Chunk Color | `overlayCoveredColor` | Color enum (RED, VIOLET, TEAL, AMBER, YELLOW, BLUE, REDDISH_PURPLE, WHITE) | TEAL | Highlight color for a chunk saved with its Item Frames, Paintings, and Armor Stands. |
| Entities Unverified Chunk Color | `overlaySuspectColor` | Color enum (same set) | AMBER | Highlight color for a chunk whose blocks are saved but whose entities were never confirmed in send range, so its Item Frames and Armor Stands may still be missing. |

The same applies here: keep **Entities Saved Chunk Color** and **Entities Unverified Chunk Color** different, or the overlay stops distinguishing a covered chunk from an unverified one.

See [Check what you actually saved](/guides/check-coverage/) for how the overlay is used during a download, and [how coverage is measured](/concepts/coverage-measurement/) for the range that splits the two colors.

## Notifications

| Setting | Config key | Type | Default | Effect |
| --- | --- | --- | --- | --- |
| Show Toasts | `showToasts` | Toggle | true | Show a toast in the corner when a download finishes or fails, even with chat hidden. |
| Show Chat Messages | `showChatMessages` | Toggle | true | Show the mod's chat notices, like the update-available line. Notices inside the mod's own screens are unaffected. |
| Check for Updates on Startup | `checkForUpdates` | Toggle | true | At launch, check whether a newer release exists and say so if one does. The check sends only the loader id, your Minecraft version, and the mod version to Modrinth's public release index, and nothing else apart from the source IP that any HTTPS request exposes. |
