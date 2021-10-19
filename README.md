# lit-props

[![Build Status](https://github.com/mgenware/lit-props/workflows/Build/badge.svg)](https://github.com/mgenware/lit-props/actions)
[![npm version](https://img.shields.io/npm/v/lit-props.svg?style=flat-square)](https://npmjs.com/package/lit-props)
[![Node.js Version](http://img.shields.io/node/v/lit-props.svg?style=flat-square)](https://nodejs.org/en/)

Lit TypeScript properties made easy. Zero dependencies.

Without lit-props:

```ts
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: Object }) obj = {};
  @property({ type: Number }) id = 0;
  @property({ type: Boolean, reflect: true }) reflectedBool = false;
  @state() protected _counter = 0;
}
```

With lit-props:

```ts
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as lp from 'lit-props';

@customElement('my-element')
export class MyElement extends LitElement {
  @lp.object obj = {};
  @lp.number id = 0;
  @lp.reflected.bool reflectedBool = false;
  @lp.state protected _counter = 0;
}
```

## Installation

```sh
npm i lit-props
```

## Supported property types

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

State is also supported via `state`.
