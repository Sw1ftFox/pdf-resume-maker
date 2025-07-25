export function initEditor() {
  const editables = document.querySelectorAll(".editable");

  editables.forEach((el) => {
    const id = el.dataset.id || el.textContent.trim();
    const saved = localStorage.getItem(`resume-${id}`);
    if (saved) el.innerHTML = saved;
  });

  editables.forEach((el) => {
    el.addEventListener("click", () => {
      el.contentEditable = true;
      el.focus();

      const save = () => {
        el.contentEditable = false;
        const id = el.dataset.id || el.textContent.trim();
        localStorage.setItem(`resume-${id}`, el.innerHTML);
        el.classList.add("content-updated");
        setTimeout(() => el.classList.remove("content-updated"), 1000);
      };

      el.addEventListener("blur", save);

      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          save();
        }
      });
    });
  });
}
