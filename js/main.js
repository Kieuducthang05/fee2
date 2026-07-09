const menu = document.querySelector("#studioMenu");

if (menu && window.bootstrap) {
  const collapse = window.bootstrap.Collapse.getOrCreateInstance(menu, {
    toggle: false
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        collapse.hide();
      }
    });
  });
}
