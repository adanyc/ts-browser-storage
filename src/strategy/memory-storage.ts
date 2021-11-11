import { Strategy } from './strategy';
import { Validator } from './validator';

export class MemoryStorage extends Validator implements Strategy {
  private static instance: MemoryStorage;
  private map = new Map<string, string>();

  constructor() {
    super();
  }

  static getInstance() {
    if (!MemoryStorage.instance) {
      MemoryStorage.instance = new MemoryStorage();
    }
  }

  getItem(key: string) {
    return this.map.get(key);
  }

  setItem(key: string, value: string) {
    this.validateKey(key);
    this.map.set(key, value);
  }

  clear() {
    this.map.clear();
  }

  removeItem(key: string) {
    this.map.delete(key);
  }
}
