import { LocalStorage } from '../strategy/local-storage';

describe('Unit test', () => {
  let localStorage: LocalStorage;

  beforeEach(() => {
    localStorage = new LocalStorage();
  });

  it('#should get', () => {
    localStorage.setItem('name', 'alex');
    expect(localStorage.getItem('name')).toBe('alex');
  });

  it('#should remove', () => {
    localStorage.setItem('name', 'alex');
    localStorage.removeItem('name');
    const value = localStorage.getItem('name');
    expect(value).toBeNull();
  });

  it('#should clear', () => {
    localStorage.setItem('name', 'alex');
    localStorage.setItem('name', 'daniel');
    localStorage.clear();
    expect(localStorage).toEqual({});
  });

  it('#should throw an error', () => {
    const fn = () => localStorage.setItem(' ', 'alex');
    expect(fn).toThrow(new Error('key should not be empty'));
  });
});
