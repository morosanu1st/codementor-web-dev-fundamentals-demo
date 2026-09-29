const btn = document.getElementById('load-btn');
const status = document.getElementById('status');
const list = document.getElementById('lesson-list');

btn.addEventListener('click', async () => {
  btn.disabled = true;
  status.textContent = 'Fetching /api/lessons …';
  list.innerHTML = '';

  try {
    const res = await fetch('/api/lessons');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    data.lessons.forEach((lesson) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span><strong>${lesson.id}.</strong> ${lesson.title}</span>
        <span class="badge">${lesson.level} · ${lesson.minutes} min</span>
      `;
      list.appendChild(li);
    });

    status.textContent = `Loaded ${data.count} lessons.`;
  } catch (err) {
    status.textContent = `Error: ${err.message}`;
  } finally {
    btn.disabled = false;
  }
});
