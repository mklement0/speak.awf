[![npm version](https://img.shields.io/npm/v/speak.awf.svg)](https://npmjs.com/package/speak.awf) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mklement0/speak.awf/blob/master/LICENSE.md)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Contents**

- [speak.awf &mdash; introduction](#speakawf-&mdash-introduction)
  - [Speaking the active application's text with a specific voice](#speaking-the-active-applications-text-with-a-specific-voice)
  - [Speak specified text with one or more voices](#speak-specified-text-with-one-or-more-voices)
    - [Feature summary](#feature-summary)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Installation from the npm registry](#installation-from-the-npm-registry)
  - [Manual installation](#manual-installation)
- [Customization](#customization)
  - [Customizing the speaking-the-active-application's-text-with-a-specific-voice feature](#customizing-the-speaking-the-active-applications-text-with-a-specific-voice-feature)
    - [Configuration with a custom system keyboard shortcut](#configuration-with-a-custom-system-keyboard-shortcut)
  - [Customizing the speaking-given-text-with-one-or-more-voices feature](#customizing-the-speaking-given-text-with-one-or-more-voices-feature)
- [License](#license)
  - [Acknowledgements](#acknowledgements)
  - [npm dependencies](#npm-dependencies)
- [Changelog](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# speak.awf &mdash; introduction

An **[Alfred 2](http://alfredapp.com) workflow** that **uses OS X's TTS (text-to-speech) feature to speak text aloud**,
especially for **multi-lingual use** (OS X allows on-demand download of voices in other languages).  
<sup>Note: Use of workflows in Alfred 2 requires the paid [Power Pack](https://www.alfredapp.com/powerpack/) add-on - an investment well worth making.</sup>

The workflow comes with two distinct feature groups:

* Speak the **active application's text** with a **_specific_ voice**.
  * Useful for multi-lingual setups where you want to **have text spoken in one of several languages on demand**;
    for instance, you could have one global keyboard shortcut for speaking text in English, and another for Spanish.

* Speak **specified text** with **_one or more_ voices**, selectable by name(s) or language(s).
  * Useful for **interactive experimentation** with **multiple voices**, such as to contrast regional accents.

Note that both feature groups target _active_ voices; i.e., the set of voices
selected for _active use_ in `System Preferences`.  
If you know that a voice is installed, yet it doesn't show up in the workflows,
make sure it has a check mark in `System Preferences > Dictation & Speech > Text to Speech > Systme Voice > Customize...`.  
This is also where you download additional voices.  
You can get there more quickly from either the `speak` or `say` keywords with no arguments by pressing `⌥↩` (Option+Return). 
  
<sup>See also: CLI [voices](https://github.com/mklement0/voices), which this workflow uses behind the scenes.</sup>

## Speaking the active application's text with a specific voice

This feature group comprises:

* **Keyword `speak`** with an ad-hoc selectable voice; e.g.:
   * `speakalex` or `speak alex` or `speak @alex` speak with voice "Alex".
* Potentially **multiple global keyboard shortcuts** to **speak with a specific, predefined voice**, which
  is **particularly useful for _multilingual_ setups**: you can define **dedicated keyboard shortcuts** to **speak with _language-specific_ voices**;  
  for instance, you could have one keyboard shortcut for speaking English texts, and another for Spanish.

This feature is **based on the _system_ feature for speaking the active 
application's text**, wrapping it with the ability to speak with a _specific_ voice on demand.

This implies the following, whether you invoke the feature with keyword `speak` 
for ad-hoc voice selection or via a dedicated keyboard shortcut:

* It acts as a _toggle_: invoking the keyword or a shortcut again while speech
is still in progress _stops_ it.

* You _can_, but do not _need to_ select the text to speak - depending on the application,
_all_ text may be spoken implicitly (e.g., in `TextEdit.app`), or, in `Safari.app`,
Reader view (if available) is automatically activated to read only the text
of interest.  
Conversely, however, non-native OS X applications may not report even explicitly
selected text to the system; in that case, use the global keyboard shortcut
associated with the `say` keyword (see next chapter).

_Note_:

* A side effect of speaking with a given voice is that that voice implicitly
becomes the new _default_ voice.  
This means that, from that point on, invoking speech without specifying a voice 
will use that voice.

* Keystrokes are sent behind the scenes to activate the system 
feature for speaking the active application's text with the default voice.
For the most part, this works fine, but occasionally, especially under heavy system load, this may fail.  
(If you know of a way to invoke this system feature _programmatically_, do let me know.)
  * If speaking doesn't start, at least the part of switching to the target voice
    should have succeeded, so you can then try to use the _system_ keyboard 
    shortcut (`Option+Esc` by default) to tigger speaking.

## Speak specified text with one or more voices

This feature group comprises:

* **Keyword `say`**, which speaks **given text** as part of the Alfred 2 command line, with **_one or more_ voices selectable by name(s) or language(s)**.
* A **global keyboard shortcut that displays `say` with the _explicitly selected text_ in the active application**.  
This is not only useful for speaking an application's text with _multiple_ voices,
but also for speaking explicitly selected text in _non-native_ OS X applications, 
whose selected text the `speak` keyword wouldn't recognize.


**`say` redisplays itself** after speaking so as to facilitate **iterative experimentation**.

* `say[<voice>]` or `say @<voice,...>` selects one or more voices by name; e.g.
  * `sayalex Speak this.` speaks "Speak this." with voice "Alex".
  * `say @alex Speak this.` does the same.
  * `say @al,ji Speak this.` speaks with voice "Alex", then "Jill" - note how using name _prefixes_ is enough.
* `say #<lang,...>` selects one or more languages by their IDs; e.g.:
  * `say #enus,enin Speak this.` speaks with all US-English (`en_US`) and Indian English
    voices (`en_IN`) - note how case and punctuation do not matter.
  * The list of active voices shown by default shows each voice's language ID 
    in parentheses.
* The `@` or `#` specifier may be placed either before or after the text to speak.
* If you don't specify text to speak, the selected voices' demo text is spoken.
  
Additionally, using **modifier keys** alongside `↩` (Return) offers **additional functionality**:

* `⌥↩` (Option+Return)
  * When invoked on a specific voice: makes that voice the new default voice.
  * When invoked on the 1st item (the current default voice): opens `System Preferences` to the relevant
    pane to manage voices and TTS features.
* `⌃↩` (Control+Return)
  * Stops ongoing speech.
* `⇧↩` (Shift+Return)
  * Clears the current arguments on the Alfred command line.


### Feature summary

* Voice selection, optionally with voice-name and target-language filtering.
* Ability to speak text in sequence with multiple voices.
* Rich, dynamic feedback (name of default voice, voice languages, demo text).
* Selected voices can speak their demo text.
* Redisplays Alfred with the same query for interactive experimentation.
* Ability to change the default voice directly from Alfred.
* Option to open System Preferences to manage voices and TTS options.
* Option to use a hotkey to speak the selected text in _any_ application.

# Installation

## Prerequisites

 * OS X 10.10 or higher
    * If you only use the `say` keyword, you can use the workflow on older OS X versions too, provided you install it [manually](#manual-installation).
 * [Alfred 2](http://alfredapp.com) with its paid [Power Pack](https://www.alfredapp.com/powerpack/) add-on.
 * The global TTS keyboard shortcut must be activated:
    * Open `System Preferences`.
    * In pane `Dication & Speech`, anchor `Text to Speech`, ensure that `Speak selected text when the key is pressed` is _checked_.
    * No _extra_ customization steps are needed if you leave the _default_ global keyboard shortcut, `⌥⎋` (Option+Esc), in place (recommended).
       * If you do use a _custom_ shortcut, you must modify the workflow as described under [Configuration with a custom system keyboard shortcut](#configuration-with-a-custom-system-keyboard-shortcut) below.

## Installation from the npm registry

 <sup>Note: Even if you don't use Node.js itself: its package manager, `npm`, works across platforms and is easy to install; try  
 [`curl -L http://git.io/n-install | bash`](https://github.com/mklement0/n-install)</sup>

With [Node.js](http://nodejs.org/) installed, install [the package](https://www.npmjs.com/package/speak.awf) as follows:

    [sudo] npm install speak.awf -g

**Note**:

* Whether you need `sudo` depends on how you installed Node.js and whether you've [changed permissions later](https://docs.npmjs.com/getting-started/fixing-npm-permissions); if you get an `EACCES` error, try again with `sudo`.
* Alfred 2 will prompt you to import the workflow - select a category (optional; "Tools" recommended), and confirm.
* After importing, proceed with [customization](#customization) below.

## Manual installation

* **Click [here](https://github.com/mklement0/speak.awf/blob/stable/archive/speak.awf.alfredworkflow?raw=true)** to start the download.
* Open the downloaded file: Alfred 2 will prompt you to import the workflow - select a category (optional; "Tools" recommended), and confirm.
  * _Caveat_: If you _reinstall_, existing customizations will be lost, unfortunately, and have to be reapplied.
* After importing, proceed with [customization](#customization) below.

# Customization

_Caveat_: If you **reinstall or upgrade** this workflow, your custom keyboard shortcuts and customized keywords are retained,
but **the following aspects of customization must be performed _again_**:

* You must **reassign the specific voices** assigned to the **3 predefined hotkey workflows** for speaking the active application's text (see below).
  * If you've manually added _additional_ hotkeys, they are, unfortunately, lost, and have to be recreated.
* If you're using a custom _system_ hotkey for speaking the active application's text (not recommended), you must tell this workflow
  about it again (see below).

## Customizing the speaking-the-active-application's-text-with-a-specific-voice feature

Customization has two to three parts:

* Decide what predefined voices you want text to be spoken with _by global hotkey_ (keyboard shortcut).
* Assign a hotkey to each such voice.
* _If_ you've chosen a _custom_ hotkey for the `Speak selected text when the key is pressed` system feature (not recommended): see the next chapter.

Unless already there right after having installed the workflow, open Alfred 2's `Preferences...` dialog 
via Alfred 2's menu-bar icon and locate workflow `Speak Active App's Text`.

The workflow comes with three predefined hotkey-based definitions, based on 
preinstalled voices "Alex", "Vicki", and "Victoria"
Adapt them to your needs:

* Double-click on each `Hotkey` box:
   * Assign the desired hotkey by clicking in the `Hotkey` field and pressing the desired key combination.
     * Recommendation: use `⌥1` (Option+1), `⌥2`, ... for the voices of interest.
   * Specify the desired voice in the `Text` input field , using a voice name as displayed in `System Preferences > Dication & Speech > Text to Speech`

To define _additional_ hotkey-triggered voices:

* Control-click any existing `Hotkey` box and select `Copy`.
* Control-click again and select `Paste` - a new, empty `Hotkey` box will appear.
* Do the same thing for any existing `Run Script` box.
* From the right edge of the new `Hotkey` box, drag a connection to the new `Run Script` box.
* Customize the `Hotkey` box as described above.

### Configuration with a custom system keyboard shortcut

* Open Alfred's Preferences, locate this workflow (`Speak - TTS (Text-To-Speech) Workflows`), control-click on it in the list on the left, and select `Show in Finder`.
* Open file `toggleSpeaking` in a text editor and follow the instructions at the top of the file.

## Customizing the speaking-given-text-with-one-or-more-voices feature

To assign a hotkey (global keyboard shortcut) to the feature that invokes `say`
with the text currenctly selected in the active application:

* Double-click on the `Hotkey` box below the `say` keyword box.
* Assign a hotkey (global keyboard shortcut) of choice.
  * Recommendation: use `` ⌥` `` (Option+\`)


<!-- DO NOT EDIT THE NEXT CHAPTER and RETAIN THIS COMMENT: The next chapter is updated by `make update-readme/release` with the contents of 'LICENSE.md'. ALSO, LEAVE AT LEAST 1 BLANK LINE AFTER THIS COMMENT. -->

# License

Copyright (c) 2015 Michael Klement <mklement0@gmail.com> (http://same2u.net), released under the [MIT license](https://spdx.org/licenses/MIT#licenseText).

## Acknowledgements

This project gratefully depends on the following open-source components, according to the terms of their respective licenses.

[npm](https://www.npmjs.com/) dependencies below have optional suffixes denoting the type of dependency; the *absence* of a suffix denotes a required *run-time* dependency: `(D)` denotes a *development-time-only* dependency, `(O)` an *optional* dependency, and `(P)` a *peer* dependency.

<!-- DO NOT EDIT THE NEXT CHAPTER and RETAIN THIS COMMENT: The next chapter is updated by `make update-readme/release` with the dependencies from 'package.json'. ALSO, LEAVE AT LEAST 1 BLANK LINE AFTER THIS COMMENT. -->

## npm dependencies

* [doctoc (D)](https://github.com/thlorenz/doctoc)
* [json (D)](https://github.com/trentm/json)
* [replace (D)](https://github.com/harthur/replace)
* [semver (D)](https://github.com/npm/node-semver#readme)
* [tap (D)](https://github.com/isaacs/node-tap)

<!-- DO NOT EDIT THE NEXT CHAPTER and RETAIN THIS COMMENT: The next chapter is updated by `make update-readme/release` with the contents of 'CHANGELOG.md'. ALSO, LEAVE AT LEAST 1 BLANK LINE AFTER THIS COMMENT. -->

# Changelog

Versioning complies with [semantic versioning (semver)](http://semver.org/).

<!-- NOTE: An entry template for a new version is automatically added each time `make version` is called. Fill in changes afterwards. -->

* **[v0.3.3](https://github.com/mklement0/speak.awf/compare/v0.3.2...v0.3.3)** (2015-11-03):
  * [doc] `README.md` corrections and improvements.

* **[v0.3.2](https://github.com/mklement0/speak.awf/compare/v0.3.1...v0.3.2)** (2015-11-03):
  * [dev] The workflow's *source code* is now in Alfred 2's "Tools" category (was previously uncategorized),
    though it turns out that Alfred 2 defaults to "Uncategorised" on import (installation).

* **[v0.3.1](https://github.com/mklement0/speak.awf/compare/v0.3.0...v0.3.1)** (2015-11-03):
  * [enhancement] The `say`-invoking hotkey now appends a space to the pasted text
    so as to allow typing `@` right away to select a voice or voices of interest.
  * [fix] `say` now correctly reflects the current default voice even after changing it implicitly via hotkey.
  * [fix] Cache files are now stored in a folder that reflects the actual bundle ID: 
    `$HOME/Library/Caches/com.runningwithcrayons.Alfred-2/Workflow Data/net.same2u.speak.awf"` - the old folder
    can safely be removed: `$HOME/Library/Caches/com.runningwithcrayons.Alfred-2/Workflow Data/net.same2u.say.awf"`
  * [doc] `README.md` corrections and improvements.

* **[v0.3.0](https://github.com/mklement0/speak.awf/compare/v0.1.6...v0.3.0)** (2015-11-02):
  * [major enhancements] Added keyword `say` for interactive experimentation with 
    multiple voices, selectable by name(s) or language(s). Consistent use of modifiers
    keys across keywords `speak` and `say`: `⌥↩` to make a specific voice the new default /
    invoke `System Preferences` to manage voices, `⌃↩` to stop ongoing speech, `⇧↩` to clear
    the current argument list.

* **[v0.1.6](https://github.com/mklement0/speak.awf/compare/v0.1.5...v0.1.6)** (2015-11-01):
  * [enhancement] Option+Enter makes a specific voice the new default voice; on the
     speak-with-default-voice and no-matching-voice-found result items it instead displays
     System Preferences for managing the installed/active voices.
  * [enhancement] Speak-with-default-voice result item now names the current default voice.
  * [doc] `README.md` corrections.

* **[v0.1.5](https://github.com/mklement0/speak.awf/compare/v0.1.4...v0.1.5)** (2015-10-30):
  * [doc] `README.md` update: `npm` badge and install instructions added.

* **[v0.1.4](https://github.com/mklement0/speak.awf/compare/v0.1.3...v0.1.4)** (2015-10-30):
  * [fix] Removed accidentally-left-behind debug output.

* **[v0.1.3](https://github.com/mklement0/speak.awf/compare/v0.1.2...v0.1.3)** (2015-10-30):
  * First version to be published at the npm registry.

* **[v0.1.2](https://github.com/mklement0/speak.awf/compare/v0.1.1...v0.1.2)** (2015-10-30):
  * [fix] Fix for neglecting to include the updated-by-commit-hook alfredworkflow/version file in the commit.

* **[v0.1.1](https://github.com/mklement0/speak.awf/compare/v0.1.0...v0.1.1)** (2015-10-30):
  * [doc] `README.md` improvements.

* **v0.1.0** (2015-10-30):
  * Initial release.
