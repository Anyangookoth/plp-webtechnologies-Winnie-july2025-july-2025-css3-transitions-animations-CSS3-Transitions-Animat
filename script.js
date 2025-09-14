// 📚 Part 2: Scope demonstration
let globalMessage = "Global scope active";

function showScope() {
  let localMessage = "Local scope active";
  console.log(globalMessage); // ✅ Accessible
  console.log(localMessage);  // ✅ Accessible
}
showScope();
// console.log(localMessage); // ❌ Uncommenting this causes error

// 📚 Part 2: Function with parameters and return value
function doubleValue(x) {
  return x * 2;
}
console.log("Double of 4 is:", doubleValue(4));

// 📚 Part 2: Reusable animation function
function toggleAnimation(id, className) {
  const el = document.getElementById(id);
  el.classList.toggle(className);
  return el.classList.contains(className);
}

// 🎬 Part 3: Animate box and show modal
document.getElementById("animateBtn").addEventListener("click", () => {
  const active = toggleAnimation("box", "animate");
  console.log("Box animation active:", active);
  if (active) showModal("modal");
});

// 🎬 Part 3: Modal control
function showModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("hidden");
  modal.classList.add("show");
}
function hideModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("show");
  modal.classList.add("hidden");
}
document.getElementById("closeModal").addEventListener("click", () => {
  hideModal("modal");
});

// 🎬 Part 3: Flip card logic
function flipCard(id) {
  const card = document.getElementById(id);
  card.classList.toggle("flipped");
  return card.classList.contains("flipped");
}
document.getElementById("flipBtn").addEventListener("click", () => {
  const flipped = flipCard("flipCard");
  console.log("Card flipped:", flipped);
});