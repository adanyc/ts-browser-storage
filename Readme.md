# tyepscript-storage

```typescript
export class MyClass {
  private contextLocal  = new ContextStorage(new LocalStorage());
  this.contextLocal.setItem('name', 'alex');

  private contextSession  = new ContextStorage(new SessionStorage());
  this.contextSession.setItem('name', 'alex');

  private contextMemory  = new ContextStorage(MemoryStorage.getInstance());
  this.contextMemory.setItem('name', 'alex');
}
```
