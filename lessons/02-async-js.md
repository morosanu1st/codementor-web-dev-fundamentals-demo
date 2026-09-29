# Lesson 2 — Async JavaScript (`fetch`, Promises, async/await)

**Goal:** Read and write non-blocking network code confidently.

## Why async?

Network and disk I/O take time. Blocking the main thread freezes the UI. Promises and `async/await` let other work continue while we wait.

## Patterns you’ll use every day

```js
// Promise chain
fetch('/api/lessons')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// async/await (preferred in teaching sessions)
async function loadLessons() {
  try {
    const res = await fetch('/api/lessons');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
```

## Common pitfalls we fix live

- Forgetting `await` → you get a Promise, not data.
- Not checking `res.ok` → silent failures on 404/500.
- Updating the DOM before the request finishes → race conditions.

## Practice

In `public/app.js`, add a “Retry” path that runs again if the first fetch fails.

## Homework

Write a 10-line snippet that fetches two endpoints in parallel with `Promise.all` and logs both results.
