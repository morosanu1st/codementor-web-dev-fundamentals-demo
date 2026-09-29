# Web Development Fundamentals — Codementor teaching demo

A small, runnable teaching sample for long-term **web development mentoring**: HTML/CSS/JS → Node basics → a React/Next mental model.

> Teaching demo, not a production app. Built so we can share a screen, change one file, refresh, and learn.

## Quick start

```bash
npm start
# open http://localhost:3000
# click “Load lessons via fetch()”
```

No extra dependencies — just Node 18+.

## Learning roadmap (beginner → project)

| Stage | Focus | Outcome |
|-------|--------|---------|
| 1. Foundations | HTML semantics, CSS flex/grid, DevTools | Clean static page |
| 2. Interactivity | DOM events, `fetch`, async/await | This demo’s UI |
| 3. Server basics | Node `http`, routes, JSON APIs | `server.js` |
| 4. Structure | Folders, modules, simple deployment | Repo hygiene |
| 5. Framework overview | React components, Next.js pages/API | Lesson 3 sketch → next project |

Lesson notes live in [`lessons/`](./lessons/):

1. [Routing concepts](./lessons/01-routing-concepts.md)
2. [Async JavaScript](./lessons/02-async-js.md)
3. [React component sketch](./lessons/03-react-component-sketch.md)

## What’s in the box

- `server.js` — tiny Node HTTP server + `/api/lessons`
- `public/` — vanilla HTML/CSS/JS that fetches and renders the list
- `lessons/` — short notes for async JS, routing, and a React sketch

## How I’d help on live Codementor sessions

I tutor on Codementor at **US$15 / 15 minutes** (first 15 minutes free). Skills I teach include JavaScript, Node.js, Algorithms, SQL, Data modeling, and related web topics.

Typical live-session shape:

1. **Goals (2–3 min)** — What should work by the end of this call? (e.g. “button loads lessons without errors”).
2. **Practice (bulk of the session)** — We edit this repo together: add an endpoint, fix a CSS layout, or translate the vanilla list into a React sketch.
3. **Homework (last minutes)** — One concrete task (see each lesson file) plus a short write-up or PR-style commit so progress sticks between sessions.

Long-term mentoring rhythm:

- Week 1–2: HTML/CSS + DOM + `fetch`
- Week 3–4: Node API + project folder structure
- Week 5+: React/Next overview and a small personal project you own

Bring questions, broken code, or a blank repo — we’ll turn it into a clear next step.

## License

MIT — use freely for learning.
