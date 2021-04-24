/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { property } from 'lit/decorators.js';

export function string(target: any, name: string) {
  return property({ type: String })(target, name);
}

export function number(target: any, name: string) {
  return property({ type: Number })(target, name);
}

export function bool(target: any, name: string) {
  return property({ type: Boolean })(target, name);
}

export function object(target: any, name: string) {
  return property({ type: Object })(target, name);
}

export function array(target: any, name: string) {
  return property({ type: Array })(target, name);
}

export const reflected = {
  string: (target: any, name: string) => {
    return property({ reflect: true, type: String })(target, name);
  },
  number: (target: any, name: string) => {
    return property({ reflect: true, type: Number })(target, name);
  },
  bool: (target: any, name: string) => {
    return property({ reflect: true, type: Boolean })(target, name);
  },
  object: (target: any, name: string) => {
    return property({ reflect: true, type: Object })(target, name);
  },
  array: (target: any, name: string) => {
    return property({ reflect: true, type: Array })(target, name);
  },
};
