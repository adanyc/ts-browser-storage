import { LocalStorage} from '../strategy/localStorage';

describe('Unit test', () => {
  let localStorage: LocalStorage;

  beforeEach(() => {
    localStorage = new LocalStorage();
  });

  it('#should get the value', () => {
    localStorage.setItem('name', 'alex');
    expect(localStorage.getItem('name')).toBe('alex');
  });

  it('#should throw an error when the key is empty', () => {
    localStorage.setItem('', 'alex');
  });
});
