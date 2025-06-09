### **Event Propagation in JavaScript**

**Event Propagation** is the process by which an event travels through the DOM (Document Object Model) when an event (like a click, keypress, etc.) is triggered on an element. Event propagation allows developers to handle events at different levels of the DOM tree: the target element where the event occurs and the ancestor elements.

Event propagation has **two main phases**:

1. **Event Capturing (or Capture Phase)**
2. **Event Bubbling (or Bubble Phase)**

### **1. Event Capturing (Capture Phase)**

In **Event Capturing**, the event starts from the **topmost ancestor** element (e.g., `document` or `window`) and travels down through the ancestors of the target element, ultimately reaching the target element itself.

#### How It Works:

1. The event starts at the root of the DOM tree.
2. It then goes through each ancestor element **in the order of their hierarchy** (from the top-most ancestor to the target).
3. The event finally reaches the target element.

#### Example: Event Capturing

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Capturing Example</title>
  </head>
  <body>
    <div id="parent">
      <div id="child">Click Me</div>
    </div>

    <script>
      // Add Event Listener with capturing phase (set to true)
      document.getElementById("parent").addEventListener(
        "click",
        function () {
          console.log("Parent Capturing Phase");
        },
        true
      ); // true enables capturing phase

      document.getElementById("child").addEventListener("click", function () {
        console.log("Child Clicked");
      });
    </script>
  </body>
</html>
```

#### Output in the console:

1. `Parent Capturing Phase`
2. `Child Clicked`

- When the `#child` div is clicked, the event first propagates from the top (the `document` and `parent`), and only then reaches the `child` div where it is handled in the bubbling phase.
- The key here is the third argument in `addEventListener()`: `true` enables the capturing phase.

### **2. Event Bubbling (Bubble Phase)**

**Event Bubbling** is the opposite of Event Capturing. In this phase, the event starts at the **target element** where the event occurred and then **bubbles up** to its parent elements, and continues upward through the DOM hierarchy to the top-most ancestor.

#### How It Works:

1. The event starts at the target element (where the event was triggered).
2. It then bubbles up to its parent, then to the parent's parent, and so on, until it reaches the root of the DOM.

#### Example: Event Bubbling

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Bubbling Example</title>
  </head>
  <body>
    <div id="parent">
      <div id="child">Click Me</div>
    </div>

    <script>
      // Add Event Listener with bubbling phase (default, no need to specify 'true')
      document.getElementById("parent").addEventListener("click", function () {
        console.log("Parent Clicked");
      });

      document.getElementById("child").addEventListener("click", function () {
        console.log("Child Clicked");
      });
    </script>
  </body>
</html>
```

#### Output in the console:

1. `Child Clicked`
2. `Parent Clicked`

- When you click on the `#child` div, the event is first handled on the `child` element, and then it bubbles up to the parent `#parent` div.
- **Event bubbling is the default behavior**, so no need to explicitly specify it in `addEventListener()`.

### **Comparison: Event Capturing vs Event Bubbling**

| Feature               | Event Capturing                                                              | Event Bubbling                                                              |
| --------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Phase**             | Starts from the root and goes down to the target element.                    | Starts from the target and bubbles up to the root.                          |
| **Event Propagation** | Root → Ancestors → Target                                                    | Target → Ancestors → Root                                                   |
| **Default**           | Not the default behavior                                                     | Default behavior in JavaScript                                              |
| **Event Listener**    | `addEventListener('event', handler, true)`                                   | `addEventListener('event', handler)`                                        |
| **Use Case**          | Useful for event delegation (e.g., listening for events on parent elements). | Useful for capturing events after they are triggered on the target element. |

### **Stopping Event Propagation**

You can stop the event from propagating further in either direction using the `stopPropagation()` method.

1. **`event.stopPropagation()`**: This method stops the event from propagating either during the capture phase or the bubble phase.
2. **`event.stopImmediatePropagation()`**: This method stops the event from propagating and prevents other event listeners on the same element from being triggered.

#### Example: Stopping Event Propagation

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stop Event Propagation</title>
  </head>
  <body>
    <div id="parent">
      <div id="child">Click Me</div>
    </div>

    <script>
      // Bubbling Phase (default)
      document.getElementById("parent").addEventListener("click", function () {
        console.log("Parent Clicked");
      });

      // Child Click
      document
        .getElementById("child")
        .addEventListener("click", function (event) {
          console.log("Child Clicked");
          event.stopPropagation(); // Stops bubbling here
        });
    </script>
  </body>
</html>
```

#### Output in the console:

1. `Child Clicked` (Only this appears because `stopPropagation` stops the event from reaching the parent).

### **Event Delegation**

Event delegation is a technique where you use a parent element to listen for events on its child elements. This technique works well with **event bubbling**, allowing you to handle events on dynamically created elements without attaching individual event listeners to each element.

#### Example: Event Delegation

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Delegation Example</title>
  </head>
  <body>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      document
        .getElementById("list")
        .addEventListener("click", function (event) {
          if (event.target && event.target.nodeName === "LI") {
            alert("Item clicked: " + event.target.textContent);
          }
        });
    </script>
  </body>
</html>
```

#### How It Works:

- The `click` event listener is attached to the parent `<ul>`.
- When any `<li>` is clicked, the event bubbles up to the `<ul>`, where it is caught by the event listener.
- This way, you only need one event listener to manage all the `<li>` items, even if they are dynamically added or removed.

### **Summary of Key Concepts**

1. **Event Capturing**:

   - Event travels from the root to the target.
   - Use `addEventListener('event', handler, true)` to enable capturing.

2. **Event Bubbling**:

   - Event starts at the target element and bubbles up to the root.
   - Default behavior in JavaScript.

3. **Stopping Propagation**:

   - `stopPropagation()` stops the event from propagating further.
   - `stopImmediatePropagation()` stops the event and prevents other listeners on the same element from firing.

4. **Event Delegation**:

   - Leverage bubbling by setting event listeners on parent elements to manage events for child elements, especially useful for dynamically added content.
