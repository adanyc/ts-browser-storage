export abstract class Validator {
  validateKey(key: string) {
    if (!key.trim()) {
      throw new Error('key should not be empty');
    }
  }
}
