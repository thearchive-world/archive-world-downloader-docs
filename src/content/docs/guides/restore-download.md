---
title: Restore a download you opened in singleplayer
description: "A download you opened in singleplayer is tagged and its Resume is blocked. When you see \"Resume blocked\" or \"Can't resume\", Restore replaces the modified folder with its clean backup."
---

Opening a downloaded world in singleplayer makes Minecraft write its own data into the folder and generate fresh terrain, so resuming that download afterward would bake the singleplayer changes into it. [What gets downloaded](/concepts/what-gets-downloaded/) covers the full reason. Restore a folder you opened in singleplayer to its clean copy.

## When Restore appears and Resume is blocked

A download you opened in singleplayer carries a **"Singleplayer"** tag on its row in the downloads screen. When a clean backup of that world exists, the same row shows a **"⟲ Restore"** button, unless that download is the world you have open right now. For every other chip and button on that row, see [The downloads screen](/reference/downloads-screen/).

**"Block Singleplayer-Opened Worlds"** (config key `blockTaintedResume`) is on by default. With it on, [resuming](/guides/resume-download/) a tagged download does not merge new content:

- If a clean backup exists, a **"Resume blocked"** confirmation opens and offers Restore instead.
- If there is no clean backup, resuming is refused outright with **"Can't resume"**, which tells you to start a fresh download. There is nothing to restore.

Turn `blockTaintedResume` off and the mod warns and asks before resuming rather than blocking. The warning still points you at Restore when a clean backup exists.

## What Restore does

There are two ways to start a restore, and each has its own confirmation. Nothing changes until you confirm.

- Click **"⟲ Restore"** on the row. This opens a confirmation titled **"Restore from backup"** that names the clean backup it will use.
- Accept the offer on the **"Resume blocked"** dialog. That dialog is itself the confirmation. It names the same clean backup and runs the restore when you accept, with no second screen.

Both confirmations name the clean backup the folder will be replaced with: the `.zip` written by **"Backup After Downloading"** (config key `zipOnFinish`) when the download finished. With **"Backup Before Resume or Restore"** (config key `zipOnResume`) on, the default, your current folder is zipped to `<folder>-singleplayer.zip` first, so the singleplayer version is kept; with that setting off, the current folder is discarded permanently.

While it works, the status reads **"Restoring `<name>`..."** with your folder's name. When it finishes, a **"Restore complete"** message confirms: *Restored `<name>` from its backup.* The downloads screen cleans up any leftover staging files for you the next time you open it.

## When Restore is refused

Restore checks the world again the moment you confirm, so a stale button cannot do the wrong thing. If something has changed, it stops without touching the folder and shows a **"Restore blocked"** message with the reason. Every refusal and its message is listed in [when an action is blocked](/reference/downloads-screen/#when-an-action-is-blocked); in every one of those cases your folder is left exactly as it was.

A failure partway through the swap is rarer, and there the mod does not quietly return the folder to how it was. If a restore cannot finish once the swap has started, it tells you what it left: the files it had to keep. If your folder's name was taken again in the meantime, it instead saves your previous download under a different name, and names it so you can find it.

There is also the hard refusal from the section above: with `blockTaintedResume` on and no clean backup, resuming ends at **"Can't resume"** and Restore is not offered, because there is no clean copy to restore to.

## Backups

Restore depends on the two backup settings, both on by default. See the [Download reference](/reference/config/download/) for each one.

- **"Backup After Downloading"** (`zipOnFinish`) writes a shareable `.zip` beside the folder when a download finishes. That same zip is the clean backup Restore recovers from. With it off, a download can finish with no backup, and Restore has nothing to run.
- **"Backup Before Resume or Restore"** (`zipOnResume`) zips your current folder first: `<folder>-pre-resume.zip` before a resume, `<folder>-singleplayer.zip` before a restore. Leaving it on keeps a copy of the current folder before either action changes it.
