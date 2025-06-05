**how `JSON.stringify()`** works to preserve the array format (i.e., the square brackets `[]` and the commas `,`), even though you’re injecting it into a string with **template literals**.

---

### 1. **What Does `JSON.stringify()` Do?**

`JSON.stringify()` is a function that converts **JavaScript objects, arrays, or primitive values** into a **JSON string representation**.

For **arrays**, `JSON.stringify()`:

- **Converts the array to a string** with square brackets `[]` around the elements.
- **Comma separates the elements**.

Here’s a simple example:

```javascript
const arr = [3, 9];
console.log(JSON.stringify(arr)); // Output: "[3,9]"
```

- It converts the array `[3, 9]` into the string `"3,9"`, but it **preserves the array structure** by wrapping it in square brackets `[]` and keeping the elements separated by commas.

---

### 2. **What Happens with Template Literals?**

Now, when you use **template literals** like:

```javascript
console.log(
  `Displaying nos. div by 3 using forEach loop ${JSON.stringify(divisibleBy3)}`
);
```

You're doing the following:

1. **Template literal**: You’re using **backticks (`` ` ``)** to create a string with dynamic content using `${}`.

2. **String interpolation**: The expression inside `${}` is evaluated (in this case, `JSON.stringify(divisibleBy3)`), and the result is **inserted directly into the string**.

3. **`JSON.stringify()`**: When `JSON.stringify(divisibleBy3)` is called, it converts the `divisibleBy3` array to its **JSON string representation** — `"[3,9]"` in your case.

   So instead of inserting the array directly, it inserts its **JSON stringified version** — which looks like an array but is actually just a string.

4. **Final result**: The string `"[3,9]"` is then **interpolated** into the final string, so you get:

   ```
   Displaying nos. div by 3 using forEach loop [3,9]
   ```

---

### Why does `JSON.stringify()` preserve array format?

- `JSON.stringify()` knows **how to handle arrays** and converts them into **proper JSON format** with square brackets and commas between the elements. When you insert it into a template literal, it gets **evaluated as a string**, but with the same array-like format (`[3,9]`).

  - **For example**: `divisibleBy3 = [3, 9]`
  - `JSON.stringify(divisibleBy3)` gives the string `"[3,9]"` (which includes the brackets `[]` and separates the numbers with commas).

So, even though you're injecting the result into a template literal, **the array stays formatted as a string that looks like an array**.

---

### Summary of Steps:

1. **Array**: `divisibleBy3 = [3, 9]`
2. **JSON.stringify()**: Converts it into a string: `"[3,9]"`.
3. **Template literal**: The string `"[3,9]"` is inserted into the final message.
4. **Final output**: `Displaying nos. div by 3 using forEach loop [3,9]`

---

### Example:

```javascript
const divisibleBy3 = [3, 9];
console.log(
  `Displaying nos. div by 3 using forEach loop ${JSON.stringify(divisibleBy3)}`
);
```

**Output:**

```
Displaying nos. div by 3 using forEach loop [3,9]
```

Here, the array gets **stringified** and then injected into the string — and **because it's an array**, `JSON.stringify()` makes sure it looks like an array with square brackets `[]` and the items separated by commas `,`.

---
