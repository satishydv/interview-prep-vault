# Interview Prep Vault

<div align="center">

### A practical archive for becoming interview-ready, one pattern at a time.

Curated implementations, core concepts, and quick-review notes for modern web development interviews.

<p>
  <a href="#-whats-inside">What's inside</a> •
  <a href="#-study-path">Study path</a> •
  <a href="#-quick-start">Quick start</a> •
  <a href="#-how-to-use-this-vault">How to use it</a>
</p>

![Status](https://img.shields.io/badge/status-actively%20growing-7c3aed?style=for-the-badge)
![Focus](https://img.shields.io/badge/focus-web%20development-0891b2?style=for-the-badge)
![License](https://img.shields.io/badge/content-learning%20resource-334155?style=for-the-badge)

</div>

---

## ✨ What is this?

**Interview Prep Vault** is a centralized, low-friction study space for the concepts that show up again and again in technical interviews and day-to-day frontend/backend work.

Instead of scattered snippets and half-finished notes, this vault keeps the essentials close at hand:

- **Fundamentals** that make interview answers precise
- **Small implementations** that make concepts memorable
- **Reusable patterns** for solving common problems
- **Review notes** that are easy to revisit before an interview

> Learn the idea → read the implementation → modify it → explain it in your own words.

## 📚 What's inside

| Area | What you'll find | Start here |
| --- | --- | --- |
| **JavaScript** | Data types, functions, function styles, arrays, asynchronous code, promises, and common utilities | [`js/`](./js/) |
| **React** | Controlled inputs, uncontrolled inputs, Context API, custom hooks, Todo CRUD, counters, data fetching, memoization, routing, and debouncing | [`react/`](./react/) |
| **Backend** | A small Express REST API with CRUD operations, JSON parsing, and CORS | [`backend/`](./backend/) |
| **SQL** | Filtering, aggregation, grouping, joins, subqueries, ranking, duplicate cleanup, pattern matching, and updates | [`SQL/`](./SQL/) |

### At a glance

```text
interview-prep-vault/
├── js/                 # JavaScript foundations and async patterns
├── react/              # React concepts and practical components
├── backend/            # Express API examples
├── SQL/                # Query patterns and interview exercises
└── README.md           # This guide
```

## 🧭 Study path

Follow the material in layers rather than trying to memorize everything at once:

### 1. Build the JavaScript base

Start with [`js/1_data_type.js`](./js/1_data_type.js), then move through functions and arrays before tackling asynchronous execution:

1. [`1_data_type.js`](./js/1_data_type.js) — primitive and non-primitive values
2. [`2_functions.js`](./js/2_functions.js) — function fundamentals
3. [`3_way_of_function.js`](./js/3_way_of_function.js) — different ways to define functions
4. [`4_array.js`](./js/4_array.js) — array operations
5. [`5_asynchronus.js`](./js/5_asynchronus.js) — `async`/`await` and fetch
6. [`6_promise.js`](./js/6_promise.js) — Promise patterns
7. [`7_common.js`](./js/7_common.js) — commonly used JavaScript patterns
8. [`function.md`](./js/function.md) — function review notes

### 2. Practice React patterns

Move from state and input handling into reusable logic and performance:

- Input handling: [`1_controled.jsx`](./react/1_controled.jsx), [`2_uncontrold.jsx`](./react/2_uncontrold.jsx)
- Shared state: [`3_contextapi.jsx`](./react/3_contextapi.jsx)
- Reusable behavior: [`4_cstmhuk.jsx`](./react/4_cstmhuk.jsx), [`6_customhuk.jsx`](./react/6_customhuk.jsx)
- Practical state updates: [`5_todofull.jsx`](./react/5_todofull.jsx), [`7_counter.jsx`](./react/7_counter.jsx)
- Data and performance: [`8_fetch.jsx`](./react/8_fetch.jsx), [`9_usememo.jsx`](./react/9_usememo.jsx)
- Routing and interaction: [`10_routes.jsx`](./react/10_routes.jsx), [`11_debouncing.jsx`](./react/11_debouncing.jsx)

### 3. Connect the backend pieces

Explore [`backend/1_server.js`](./backend/1_server.js) for a compact Express API covering:

- `GET`, `POST`, `PUT`, and `DELETE` endpoints
- JSON request parsing
- CORS configuration
- In-memory user data
- Basic not-found responses

### 4. Drill SQL patterns

Use [`SQL/1_mc.sql`](./SQL/1_mc.sql) as a query-pattern reference for:

- `WHERE`, `LIKE`, `ORDER BY`, and `LIMIT`
- `COUNT`, `AVG`, `MIN`, `MAX`, `GROUP BY`, and `HAVING`
- Inner and left joins
- Anti-joins for missing records
- Second and nth highest values
- Duplicate removal
- Targeted updates

## 🚀 Quick start

This is intentionally a collection of standalone examples, so there is no build step or package installation required to browse it.

### Browse locally

```bash
git clone <your-repository-url>
cd interview-prep-vault
```

Open the folders in your editor and use the file links above as a guided route.

### Run the JavaScript examples

Make sure Node.js is installed, then run a standalone file:

```bash
node js/1_data_type.js
```

> Some examples are demonstrations rather than complete applications. Read the source first and adapt the surrounding setup when a snippet depends on a browser, React, or an external API.

### Run the Express example

The backend example expects an environment with `express` and `cors` available:

```bash
npm install express cors
node backend/1_server.js
```

The server listens on `http://localhost:3000`. Try:

```bash
curl http://localhost:3000/users
```

### Use the React examples

The `.jsx` files are component examples intended to be copied into a React project. They are not bundled as a standalone app in this repository; place a component in a Vite, Create React App, or similar React workspace to run it.

### Practice the SQL examples

The SQL file uses illustrative tables such as `employees`, `users`, and `orders`. Load the statements into your preferred SQL playground or local database, create matching sample tables, and rewrite each query from memory before checking the reference.

## 🧠 How to use this vault

For each topic, use a short four-pass loop:

1. **Understand** — read the example and identify the problem it solves.
2. **Recreate** — close the file and write the pattern from memory.
3. **Modify** — change the inputs, add an edge case, or extend the behavior.
4. **Explain** — describe the trade-offs as if answering an interviewer.

### Interview checklist

- [ ] Can I explain the concept without reading the code?
- [ ] Can I implement the smallest working version?
- [ ] Can I name at least one edge case?
- [ ] Can I discuss time or space complexity where relevant?
- [ ] Can I compare this pattern with an alternative?
- [ ] Can I explain when **not** to use it?

## 🗂️ Naming and organization

Examples are numbered in a learning-friendly order within each topic folder. When adding a new note:

- Keep it focused on one concept or pattern.
- Prefer a clear, ordered filename such as `12_error_boundaries.jsx`.
- Keep examples small enough to explain in an interview.
- Add a short comment only when the intent is not obvious.
- Update the relevant section of this README when a new topic is added.

## 🌱 Growing the vault

Good future additions include:

- Data structures and algorithm patterns
- TypeScript fundamentals
- Testing and debugging strategies
- Authentication and API design
- System design fundamentals
- Behavioral interview prompts and STAR notes
- Complexity and edge-case review sheets

## 🤝 Contributing

Have a useful implementation or a clearer explanation?

1. Create a focused branch.
2. Add the example to the most relevant folder.
3. Keep the code runnable or clearly label it as pseudocode.
4. Update the navigation in this README.
5. Open a pull request with the concept, use case, and any prerequisites.

## 📌 Note

This vault is a personal learning resource, not a production-ready framework. Examples are intentionally compact so the underlying idea stays visible. Always verify syntax, security, performance, and framework version details before using a pattern in production.

---

<div align="center">

**Keep learning. Keep building. Keep explaining.**

Made for focused interview preparation and stronger engineering fundamentals.

</div>
