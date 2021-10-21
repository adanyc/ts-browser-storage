import { Strategy } from './strategy/strategy';

export class ContextStorage {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  getItem(key: string) {
    return this.strategy.getItem(key);
  }

  setItem(key: string, value: string) {
    this.strategy.setItem(key, value);
  }

  clear() {
    this.strategy.clear();
  }

  removeItem(key: string) {
    this.strategy.removeItem(key);
  }
}
