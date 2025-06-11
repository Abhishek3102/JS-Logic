- The `static` keyword defines a **method or property that belongs to the class itself**, not to any object instance created from the class.

- Static members are accessed using the **class name**, not the instance:

  ```js
  User.createId(); // ✅
  const user = new User("abc");
  user.createId(); // ❌ Error
  ```

- Static methods are useful for:

  - Utility or helper functions (e.g., factory methods)
  - Shared behavior not tied to any individual instance
  - Extending capabilities of a class itself

- Static methods **are inherited** by subclasses:

  ```js
  class A {
    static greet() {
      return "Hello";
    }
  }
  class B extends A {}

  B.greet(); // ✅ "Hello"
  ```

- To access a static method from an instance (indirectly), use:

  ```js
  user.constructor.createId();
  ```
