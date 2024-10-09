<!--
SPDX-SnippetBegin
SPDX-SnippetCopyrightText: © 2024 Matija Šuklje <https://matija.suklje.name>
SPDX-License-Identifier: CC0-1.0
-->

# Proof of Concept repo

The goal of this repository is to serve as a simple proof of concept how a JS/CSS package/repository can be equipped with license information in a way that this information will persist _in its relevant place_ even if the code is concatenated, minified or even uglified.

On the specification side, this is merely is applying [REUSE](https://reuse.software) community best practices and [SPDX](https://spdx.dev) ISO standard – specifically its [File Tags](https://spdx.github.io/spdx-spec/v2.3/file-tags/) and [Snippet Tags](https://spdx.github.io/spdx-spec/v2.3/file-tags/#h3-snippet-tags-format).

On the tooling side, this should work – _that is the PoC part!_ – with existing minifiers and uglifiers, without the need to modify your tooling.

**NB:** _All licenses and copyrigth notices in this repository are completely fictional, and serve only the purpose to show that/if they are preserved in the minified/uglified output._

---

(original README below from `pkg:github/Oliwerix/music-requests@185a48acac85c69b2fda8937f5079aa3cafd385c#README.md`)
<!-- SPDX-SnippetEnd -->

<!--
SPDX-SnippetBegin
SPDX-SnippetCopyrightText: © 2021 Oliver Wagner <oliwerix@oliwerix.com>
SPDX-License-Identifier: MIT
-->

# Music-requests
An app designed to allow user submission of music to a DJ. This does not download/play music.

# Install
This requires **music-requests-backend**
 - `npm i`
 - `npm run build`
 - Deploy `build` directory to your web server of choice

<!-- SPDX-SnippetEnd -->
