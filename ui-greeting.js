// --- Controller (Pure function) ---
function setGreeting() {
  const inputEl = document.getElementById("usernameInput");
  const greetEl = document.getElementById("greeting");
  if (!inputEl || !greetEl) return;

  const name = (inputEl.value || "").trim();
  greetEl.textContent = name
    ? `Welcome to my Portfolio, ${name}!`
    : "Welcome to my Portfolio!";
}

// --- Events ---
document
  .getElementById("setGreetingBtn")
  ?.addEventListener("click", setGreeting);

document
  .getElementById("usernameInput")
  ?.addEventListener("keyup", (e) => {
    if (e.key === "Enter") setGreeting();
  });

