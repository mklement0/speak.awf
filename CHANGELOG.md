# Changelog

Versioning complies with [semantic versioning (semver)](http://semver.org/).

<!-- NOTE: An entry template for a new version is automatically added each time `make version` is called. Fill in changes afterwards. -->

* **[v0.3.1](https://github.com/mklement0/speak.awf/compare/v0.3.0...v0.3.1)** (2015-11-03):
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
