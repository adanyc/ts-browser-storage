import { Strategy } from './strategy';
import { Validator } from './validator';

export class SessionStorage extends Validator implements Strategy {
  constructor() {
    super();
  }

  getItem(key: string) {
    return window.sessionStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    this.validateKey(key);
    window.sessionStorage.setItem(key, value);
  }

  clear() {
    window.sessionStorage.clear();
  }

  removeItem(key: string) {
    window.sessionStorage.removeItem(key);
  }
}