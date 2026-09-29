# Lesson 3 — Simple React component sketch

**Goal:** See how the same “fetch + render list” idea looks in React before we start a real Vite app.

> This is a **sketch for reading**, not a full React project. The runnable demo in this repo stays vanilla JS + Node so setup stays zero-friction.

```jsx
import { useEffect, useState } from 'react';

export function LessonList() {
  const [lessons, setLessons] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus('loading');
      try {
        const res = await fetch('/api/lessons');
        const data = await res.json();
        if (!cancelled) {
          setLessons(data.lessons);
          setStatus('ready');
        }
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  if (status === 'loading') return <p>Loading…</p>;
  if (status === 'error') return <p>Could not load lessons.</p>;

  return (
    <ul>
      {lessons.map((l) => (
        <li key={l.id}>
          {l.title} <em>({l.level})</em>
        </li>
      ))}
    </ul>
  );
}
```

## Concepts to notice

- **State** (`useState`) replaces manual `innerHTML`.
- **Effects** (`useEffect`) replace “run on button click only” when you want load-on-mount.
- **Cleanup** avoids setting state after unmount.

## Next steps after this demo

1. Scaffold Vite + React.
2. Move `/api/lessons` behind a real backend or mock.
3. Add React Router for multi-page learning tracks.

## Homework

Rewrite the sketch so data loads only when the user clicks a button (mirrors our vanilla demo).
