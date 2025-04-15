let isDark = false;

function toggleWarna() {
  if (isDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  isDark = !isDark;
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("dark-mode");
  }