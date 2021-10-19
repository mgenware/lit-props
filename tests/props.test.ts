/* eslint-disable import/extensions */
import { html, fixture, expect, aTimeout } from 'qing-t';
import { LitElement, html as litHTML } from 'lit';
import { customElement } from 'lit/decorators.js';
import * as lp from '../dist/main.js';

it('string', async () => {
  @customElement('t-string')
  class T extends LitElement {
    @lp.string prop = '';
  }
  const el = await fixture<T>(html` <t-string prop="s"></t-string> `);

  expect(el.prop).to.eq('s');
});

it('number', async () => {
  @customElement('t-number')
  class T extends LitElement {
    @lp.number prop = '';
  }
  const el = await fixture<T>(html` <t-number prop="12"></t-number> `);

  expect(el.prop).to.eq(12);
});

it('bool', async () => {
  @customElement('t-bool')
  class T extends LitElement {
    @lp.bool prop = '';
  }
  const el = await fixture<T>(html` <t-bool prop></t-bool> `);

  expect(el.prop).to.eq(true);
});

it('object', async () => {
  @customElement('t-object')
  class T extends LitElement {
    @lp.object prop = '';
  }
  const el = await fixture<T>(html` <t-object prop="{&#x22;id&#x22;: 321}"></t-object> `);

  expect(el.prop).to.deep.eq({ id: 321 });
});

it('array', async () => {
  @customElement('t-array')
  class T extends LitElement {
    @lp.array prop = '';
  }
  const el = await fixture<T>(html` <t-array prop="[1,2,false,true]"></t-array> `);

  expect(el.prop).to.deep.eq([1, 2, false, true]);
});

it('state', async () => {
  @customElement('t-state')
  class T extends LitElement {
    @lp.state s = '';

    firstUpdated() {
      this.s = 'changed';
    }

    render() {
      return litHTML`<span>${this.s}</span>`;
    }
  }
  const el = await fixture<T>(html` <t-state></t-state> `);
  await aTimeout(100);
  expect(el.shadowRoot?.textContent).to.eq('changed');
});
