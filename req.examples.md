In Express.js, there are **several types of request data containers**, each used for different purposes. Each one holds data coming from different parts of the HTTP request, and just like `req.params`, the keys (names) you use are important and depend on how you define your route or structure your request.

---

## ✅ Overview: Types of Request Data in Express

| Type         | Accessed via  | Comes from                            | How to define/set it                                                     |
| ------------ | ------------- | ------------------------------------- | ------------------------------------------------------------------------ |
| Route Params | `req.params`  | URL path (e.g., `/user/:id`)          | Defined in the route path (e.g., `app.get('/user/:id')`)                 |
| Query Params | `req.query`   | URL query string (e.g., `?sort=name`) | Automatically parsed from the URL                                        |
| Request Body | `req.body`    | HTTP body (POST, PUT, PATCH)          | Sent by client (usually in JSON), requires body-parser or express.json() |
| Headers      | `req.headers` | HTTP headers                          | Set by client, e.g. via Postman or frontend                              |
| Cookies      | `req.cookies` | Cookies sent by browser               | Requires cookie-parser middleware                                        |

---

## 🔍 1. `req.params` – Route Parameters

Used for **dynamic segments in the URL**.

### Example:

```js
app.get("/user/:userId", (req, res) => {
  console.log(req.params.userId); // access userId from URL
});
```

- URL: `/user/123`
- `req.params` = `{ userId: '123' }`
- You **define the parameter name in the route path** using `:` (colon).

---

## 🔍 2. `req.query` – Query String Parameters

Used for **optional filters, sorting, or pagination**, etc., passed as part of the URL.

### Example:

```js
app.get("/search", (req, res) => {
  console.log(req.query.q); // access ?q=something
});
```

- URL: `/search?q=javascript`
- `req.query` = `{ q: 'javascript' }`
- You **do not define query parameters in the route**, they come from the request URL.

---

## 🔍 3. `req.body` – Request Body

Used for **sending data in POST, PUT, or PATCH requests** (like forms or JSON).

### Example:

```js
app.post("/user", (req, res) => {
  console.log(req.body.name); // access name from request body
});
```

- Body (JSON): `{ "name": "John" }`
- `req.body` = `{ name: 'John' }`
- Requires middleware: `app.use(express.json())` to parse JSON bodies.

---

## 🔍 4. `req.headers` – Request Headers

Used for **metadata** like content type, authorization, etc.

### Example:

```js
app.get("/data", (req, res) => {
  console.log(req.headers["authorization"]); // access auth header
});
```

- Headers: `{ Authorization: 'Bearer token123' }`
- `req.headers` is always available without any extra setup.
- Header keys are **case-insensitive** and typically lowercase in code.

---

## 🔍 5. `req.cookies` – Cookies

Used to access cookies sent from the browser (e.g. auth tokens).

### Example:

```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(req.cookies.token); // access cookie by name
});
```

- Cookies are set via `res.cookie('token', 'abc123')`
- Accessed via `req.cookies.token`
- Requires `cookie-parser` middleware

---

## 🧠 Recap of Where You Define Names:

| Type          | Where you define the name                                                    |
| ------------- | ---------------------------------------------------------------------------- |
| `req.params`  | In the route path using `:name`                                              |
| `req.query`   | Client adds it to the URL (`?key=value`)                                     |
| `req.body`    | Client sends it in POST/PUT/PATCH body                                       |
| `req.headers` | Client or browser sets header key                                            |
| `req.cookies` | Set using `res.cookie()` on server or from client side (like in the browser) |

---

## 🔧 Example Showing All Together

```js
app.post("/users/:id", (req, res) => {
  console.log("Params:", req.params); // { id: '123' }
  console.log("Query:", req.query); // { sort: 'name' }
  console.log("Body:", req.body); // { name: 'John' }
  console.log("Headers:", req.headers); // e.g. { authorization: 'Bearer token' }
  console.log("Cookies:", req.cookies); // { token: 'abc123' }
});
```

URL: `POST /users/123?sort=name`
Headers: `Authorization: Bearer token`
Body: `{ "name": "John" }`
Cookies: `{ token: 'abc123' }`

---

Let me know if you'd like a visual flow or Postman examples to practice all of these!
