import { LocalStorage } from '../strategy/local-storage';

describe('@LocalStorage', () => {
  let localStorage: LocalStorage;

  beforeEach(() => {
    localStorage = new LocalStorage();
  });

  it('#Should get', () => {
    localStorage.setItem('name', 'alex');
    expect(localStorage.getItem('name')).toBe('alex');
  });

  it('#Should remove', () => {
    localStorage.setItem('name', 'alex');
    localStorage.removeItem('name');
    const value = localStorage.getItem('name');
    expect(value).toBeNull();
  });

  it('#Should clear', () => {
    localStorage.setItem('name', 'alex');
    localStorage.setItem('name', 'daniel');
    localStorage.clear();
    expect(localStorage).toEqual({});
  });

  it('#Should throw an error', () => {
    const fn = () => localStorage.setItem(' ', 'alex');
    expect(fn).toThrow(new Error('key should not be empty'));
  });
});
