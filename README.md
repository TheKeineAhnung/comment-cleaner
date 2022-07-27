# title

![Licence](https://img.shields.io/badge/License-CC--BY--3.0-yellow.svg?style=flat-square) ![Version](https://img.shields.io/github/package-json/v/thekeineahnung/comment-cleaner/main?style=flat-square&label=Version) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

comment-cleaner is a package which removes comments from a string. It is written in TypeScript. Please take a look to the [licence](https://github.com/TheKeineAhnung/comment-cleaner/blob/main/LICENSE.md) before using it.

## Prerequisites

This project requires NodeJS (version >= 16.0.0) and NPM. [NodeJS](https://nodejs.org/) and [NPM](https://www.npmjs.com/) are very easy to install. To make sure you have them available, you can try running the following command:

```
npm -v && node -v
```

## Installation

```
npm install comment-cleaner
```

## Quick start

After installation you can import the package with in your JavaScript or TypeScript file:

```
import {  } from 'comment-cleaner/';
```

To clear the string use the following function:

```
clean(lang: SupportedLanguages, content: string)
```

The lang parameter is the name of the language which is your code from. The parameter content is a string that specifies the content from which the comments are to be removed.

The function returns a the cleared `string`.

### Commands

- `npm run dev`: Starts the TypeScript compiler in watch mode.
- `npm run build`: Starts the TypeScript compiler in build mode.

## Bug reports

Have you found a bug? Please open an [issue](https://github.com/TheKeineAhnung/comment-cleaner/issues/new).

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA--4.0-yellow.svg?style=flat-square
