export interface Strategy {
  getItem: (key: string) => string | null | undefined;
  setItem: (key: string, value: string) => void;
  clear: () => void;
  removeItem: (key: string) => void;
}
