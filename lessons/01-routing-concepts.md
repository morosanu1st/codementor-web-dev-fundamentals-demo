# Lesson 1 — Routing concepts (mental model)

**Goal:** Understand how a browser request becomes a page or JSON response.

## Browser → server path

1. User types a URL or clicks a link.
2. Browser sends an HTTP request (`GET /`, `GET /api/lessons`).
3. Server matches the **path** and returns HTML, CSS, JS, or JSON.
4. Browser paints HTML and runs JS (which can fetch more JSON).

## Two kinds of “routing”

| Kind | Where it lives | Example |
|------|----------------|---------|
| Server routing | Node / Express / Next API | `GET /api/lessons` → JSON |
| Client routing | SPA (React Router) | `/dashboard` without full reload |

This demo uses **server routing only** (`server.js`). Later we sketch React client components in lesson 3.

## Practice

- Add a new endpoint `GET /api/health` that returns `{ "ok": true }`.
- Point the UI at it and log the response in DevTools.

## Homework

Draw a sequence diagram (pen/tablet is fine) for: button click → `fetch` → server → DOM update.
