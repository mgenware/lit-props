# lit-props

[![Build Status](https://github.com/mgenware/lit-props/workflows/Build/badge.svg)](https://github.com/mgenware/lit-props/actions)
[![npm version](https://img.shields.io/npm/v/lit-props.svg?style=flat-square)](https://npmjs.com/package/lit-props)
[![Node.js Version](http://img.shields.io/node/v/lit-props.svg?style=flat-square)](https://nodejs.org/en/)

Common lit-element TypeScript properties made easy.

Without lit-props:

```ts
import { LitElement, property, customElement } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: Object }) obj = {};
  @property({ type: Number }) id = 0;
  @property({ type: Boolean, reflect: true }) reflectedBool = false;
}
```

With lit-props:

```ts
import { LitElement, customElement } from 'lit-element';
import * as lp from 'lit-props';

@customElement('my-element')
export class MyElement extends LitElement {
  @lp.object obj = {};
  @lp.number id = 0;
  @lp.reflected.bool reflectedBool = false;
}
```

Features:

- Much shorter
- Strongly typed
- Tiny, zero dependencies

## Installation

```sh
yarn add lit-props
```

## Supported properties

```
string
bool
number
array
object

reflected
  string
  bool
  number
  array
  object
```
