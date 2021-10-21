import { Strategy } from './strategy';
import { Validator } from './validator';

export class LocalStorage extends Validator implements Strategy {
  constructor() {
    super();
  }

  getItem(key: string) {
    return window.localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    this.validateKey(key);
    window.localStorage.setItem(key, value);
  }

  clear() {
    window.localStorage.clear();
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}
