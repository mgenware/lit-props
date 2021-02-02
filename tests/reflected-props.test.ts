/* eslint-disable import/extensions */
import { html, fixture, expect } from '@open-wc/testing';
import { LitElement, customElement } from 'lit-element';
import * as lp from '../dist/main.js';

it('reflected string', async () => {
  @customElement('t-string-r')
  class T extends LitElement {
    @lp.reflected.string prop = '';
  }
  const el = (await fixture(html` <t-string-r prop="s"></t-string-r> `)) as T;

  el.prop = 'updated';
  await el.updateComplete;
  expect(el.getAttribute('prop')).to.eq('updated');
});

it('reflected number', async () => {
  @customElement('t-number-r')
  class T extends LitElement {
    @lp.reflected.number prop = 0;
  }
  const el = (await fixture(html` <t-number-r prop="12"></t-number-r> `)) as T;

  el.prop = -32;
  await el.updateComplete;
  expect(el.getAttribute('prop')).to.eq('-32');
});

it('reflected bool', async () => {
  @customElement('t-bool-r')
  class T extends LitElement {
    @lp.reflected.bool prop = false;
  }
  const el = (await fixture(html` <t-bool-r prop></t-bool-r> `)) as T;

  el.prop = false;
  await el.updateComplete;
  expect(el.hasAttribute('prop')).to.eq(false);
});

it('reflected object', async () => {
  @customElement('t-object-r')
  class T extends LitElement {
    @lp.reflected.object prop = {};
  }
  const el = (await fixture(html` <t-object-r prop="{&#x22;id&#x22;: 321}"></t-object-r> `)) as T;

  el.prop = { name: 'Mgen' };
  await el.updateComplete;
  expect(el.getAttribute('prop')).to.eq('{"name":"Mgen"}');
});

it('reflected array', async () => {
  @customElement('t-array-r')
  class T extends LitElement {
    @lp.reflected.array prop: number[] = [];
  }
  const el = (await fixture(html` <t-array-r prop="[1,2,false,true]"></t-array-r> `)) as T;

  el.prop = [-3, 3];
  await el.updateComplete;
  expect(el.getAttribute('prop')).to.eq('[-3,3]');
});
