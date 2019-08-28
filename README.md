# conceal-with-prefix ![NPM version](https://img.shields.io/npm/v/conceal-with-prefix.svg?style=flat) ![Linux Build Status](https://travis-ci.com/nbili/conceal-with-prefix.svg?branch=master)

conceal with prefix

## Install

```md
npm install --save conceal-with-prefix
```

## Usage

```ts
const proxy = concealWithPrefix(target);

proxy._xxx; // error
```
