# ts-browser-storage

## Prerequisites

- Node: 18.16.0

## How to use

```typescript
export class SomeClass {
  private contextLocal  = new ContextStorage(new LocalStorage());
  this.contextLocal.setItem('name', 'alex');

  private contextSession  = new ContextStorage(new SessionStorage());
  this.contextSession.setItem('name', 'alex');

  private contextMemory  = new ContextStorage(MemoryStorage.getInstance());
  this.contextMemory.setItem('name', 'alex');
}
```
