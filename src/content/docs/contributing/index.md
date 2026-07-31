---
title: Contributing
description: "How to help with Archive World Downloader: build the mod, report an issue, or open a pull request, and where the full contributor guide lives."
---

Contributions are welcome. The canonical contributor guide is the [CONTRIBUTING.md](https://github.com/thearchive-world/archive-world-downloader/blob/dev/CONTRIBUTING.md) in the code repository, which covers the build, the code conventions, and how a change gets reviewed. This page is a short pointer to it.

## How to help

- [Build the mod](https://github.com/thearchive-world/archive-world-downloader/blob/dev/CONTRIBUTING.md#building) and try a change. `./gradlew build` compiles it and runs the checks. Then run a dev client to test the change in game.
- [File an issue](https://github.com/thearchive-world/archive-world-downloader/blob/dev/CONTRIBUTING.md#reporting-issues) for a bug or a request. The issue templates ask for the details a report needs to be actionable.
- [Open a pull request](https://github.com/thearchive-world/archive-world-downloader/blob/dev/CONTRIBUTING.md#pull-requests) once the build passes. Keep it focused on one change and base it on the `dev` branch.

## Translate the mod

The mod ships text in 33 of Minecraft's languages, and it is shown in whichever one your game is set to. The language files live in the code repository under `common/src/main/resources/assets/wdl/lang/`, one `<locale>.json` per language, with `en_us.json` as the source of truth for which keys exist and what order they come in.

To report text that is wrong, missing, or out of date in your language, [open an issue](https://github.com/thearchive-world/archive-world-downloader/issues/new/choose) with the Translation issue template. Someone can apply the change for you.

To make the change yourself, [open a pull request](https://github.com/thearchive-world/archive-world-downloader/blob/dev/CONTRIBUTING.md#translations) editing the matching `<locale>.json`. Copy `en_us.json` to start a language the mod does not have yet. Keep every key `en_us.json` has, in the same order, and keep the format placeholders (`%s`, `%1$s`, and `\n`) intact, so that only the words around them change. Leave a key you have not translated equal to the English rather than deleting it, because Minecraft falls back to English for a key a language file does not have. The test suite checks the key set, the order, and the placeholders, so a submission that drops a key or breaks one fails the build. `./gradlew build` runs that check before you submit.

That is what the build checks. It cannot check whether the words read like Minecraft, which is what a review turns on, so read [Translation style](/contributing/translation-style/) before you start.

## How the code is laid out

The mod is [three Gradle subprojects](https://github.com/thearchive-world/archive-world-downloader/blob/dev/CONTRIBUTING.md#project-layout). `common` holds the shared, loader-independent code, which is most of the mod. `fabric` and `neoforge` are the thin per-loader entry points. Inside `common`, the `core` package is Minecraft-free and compiles on Java 8, and the build fails if a change breaks either rule. The [code repository](https://github.com/thearchive-world/archive-world-downloader) has the rest.

## Improve these docs

This site has its own [documentation repository](https://github.com/thearchive-world/archive-world-downloader-docs). If you spot a typo or something out of date, open an issue or a pull request there.
