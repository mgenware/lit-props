/* eslint-disable import/extensions */
import { html, fixture, expect } from '@open-wc/testing';
import { LitElement, customElement } from 'lit-element';
import * as lp from '../dist/main.js';

it('string', async () => {
  @customElement('t-string')
  class T extends LitElement {
    @lp.string prop = '';
  }
  const el = (await fixture(html` <t-string prop="s"></t-string> `)) as T;

  expect(el.prop).to.eq('s');
});

it('number', async () => {
  @customElement('t-number')
  class T extends LitElement {
    @lp.number prop = '';
  }
  const el = (await fixture(html` <t-number prop="12"></t-number> `)) as T;

  expect(el.prop).to.eq(12);
});

it('bool', async () => {
  @customElement('t-bool')
  class T extends LitElement {
    @lp.bool prop = '';
  }
  const el = (await fixture(html` <t-bool prop></t-bool> `)) as T;

  expect(el.prop).to.eq(true);
});

it('object', async () => {
  @customElement('t-object')
  class T extends LitElement {
    @lp.object prop = '';
  }
  const el = (await fixture(html` <t-object prop="{&#x22;id&#x22;: 321}"></t-object> `)) as T;

  expect(el.prop).to.deep.eq({ id: 321 });
});

it('array', async () => {
  @customElement('t-array')
  class T extends LitElement {
    @lp.array prop = '';
  }
  const el = (await fixture(html` <t-array prop="[1,2,false,true]"></t-array> `)) as T;

  expect(el.prop).to.deep.eq([1, 2, false, true]);
});
