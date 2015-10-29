<!-- Remove, once published/released. -->
![project status - not ready for release](https://img.shields.io/badge/status-not_ready_for_release-red.svg)

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mklement0/awf-speak-selection/blob/master/LICENSE.md)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Contents**

- [awf-SpeakActiveAppText &mdash; introduction](#awf-speakactiveapptext-&mdash-introduction)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Customization](#customization)
  - [Configuration with a custom system keyboard shortcut](#configuration-with-a-custom-system-keyboard-shortcut)
- [License](#license)
  - [Acknowledgements](#acknowledgements)
  - [npm dependencies](#npm-dependencies)
- [Changelog](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# awf-SpeakActiveAppText &mdash; introduction

[DO NOT USE YET]

This project is an **[Alfred 2](http://alfredapp.com) workflow** for **OS X 10.10+** that **speaks the active application's text with a _specific_ voice** (not just the default voice).  
Note: Use of workflows in Alfred 2 requires the paid [Power Pack](https://www.alfredapp.com/powerpack/) add-on - it's worth it.

The workflow comes with:

* The `speak [<voice>]` keyword that speaks either with the default voice or the specified voice.
* Templates for defining **multiple global keyboard shortcuts for speaking with a predefined voice each**.

This is **particularly useful for multilingual setups**: you can define 
**dedicated keyboard shortcuts** to **speak with language-specific voices**.
So, for instance, one keyboard shortcut could be defined to read English texts, while
another could be defined to read Spanish ones.

Since this workflow is **based on the system feature for speaking the active 
application's text**:

* It act as a _toggle_: invoking a shortcut again while speech
is still in progress _stops_ it.

* You _can_, but do not _need to_ select the text to speak - depending on the application,
_all_ text will be spoken implicitly (e.g., in `TextEdit.app`), or, in `Safari.app`,
Reader view, if available, is automatically activated to read only the text
of interest.

_Note_:

* A side effect of speaking with a given voice is that that voice implicitly
becomes the new _default_ voice.  
This means that invoking speech without specifying a voice will from then on
will use that voice by default.

* This workflow sends keystrokes behind the scenes to activate the system 
feature for speaking the active application's text with the default voice.
For the most part, this works fine, but occasionally, especially under heavy system load, this may fail.  
(If you know of a way to invoke that feature _programmatically_, do let me know.)

# Installation

## Prerequisites

 * OS X 10.10 or higher
 * [Alfred 2](http://alfredapp.com) with its paid [Power Pack](https://www.alfredapp.com/powerpack/) add-on.
 * Open `System Preferences` and ensure the following:
    * In pane `Dication & Speech`, anchor `Text to Speech`, ensure that `Speak selected text when the key is pressed` is _checked_.
    * No further steps are needed if you leave the _default_ global keyboard shortcut `Option+Esc`, in place (recommended).
       * If you DO use a _custom_ shortcut, you must modify the workflow as described under [Customization](#customization) below.

## Steps

* Download the latest stable version by clicking `View Raw` on the page that opens when you click [here](blob/stable/archive/awf-SpeakActiveAppText.alfredworkflow).
* Open the downloaded file in Finder: Alfred 2 will prompt you to import the workflow - confirm.
* After importing, proceed with customization below.

# Customization

Customization has two to three parts:

* Decide what predefined voices you want to text to be spoken with _by global hotkey_ (keyboard shortcut).
* Assign a hotkey to each such voice.
* _If_ you've chosen a _custom_ hotkey for the `Speak selected text when the key is pressed` system feature (not recommended): see the next chapter.

Unless already there right after having installed the workflow, open Alfred 2's `Preferences...` dialog 
via Alfred 2's menu-bar icon and locate workflow `Speak Active App's Text`.

The workflow comes with two predefined hotkey-based definitions, one for voice
"Alex", and one for "Vicki".  
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

## Configuration with a custom system keyboard shortcut

Note that you'll have to do the following _every time you reinstall/upgrade_ the workflow:

* Open Alfred's Preferences, locate this workflow (`Speak Active App's Text`), control-click on it in the list on the left, and select `Show in Finder`.
* Open file `toggleSpeaking` in a text editor and follow the instructions at the top of the file.


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
* [urchin (D)](https://github.com/tlevine/urchin)

<!-- DO NOT EDIT THE NEXT CHAPTER and RETAIN THIS COMMENT: The next chapter is updated by `make update-readme/release` with the contents of 'CHANGELOG.md'. ALSO, LEAVE AT LEAST 1 BLANK LINE AFTER THIS COMMENT. -->

# Changelog

Versioning complies with [semantic versioning (semver)](http://semver.org/).

<!-- NOTE: An entry template for a new version is automatically added each time `make version` is called. Fill in changes afterwards. -->

* **v0.0.1** (2015-10-28):
  * initial release
