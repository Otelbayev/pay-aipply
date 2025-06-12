const params = new URLSearchParams(window.location.search);
document.getElementById("name").textContent = params.get("name") || "Noma'lum";
document.getElementById("phone").textContent =
  params.get("phone") || "Noma'lum";
document.getElementById("type").textContent =
  params.get("type").toUpperCase() || "Noma'lum";

function startCountdown(durationInSeconds, displayElement) {
  let timer = durationInSeconds;

  const interval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    // Format to always show 2 digits
    const formattedTime =
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

    displayElement.textContent = formattedTime;

    if (--timer < 0) {
      clearInterval(interval);
      displayElement.textContent = "00:00";
      // Shu yerda vaqt tugaganda boshqa ishlarni qilsa bo'ladi (alert, redirect, va h.k.)
      alert("Vaqt tugadi!");
    }
  }, 1000);
}

// Sahifa yuklanganda timer boshlansin
window.onload = function () {
  const display = document.getElementById("timer");
  const countdownSeconds = 15 * 60; // 15 minut = 900 sekund
  startCountdown(countdownSeconds, display);
};

function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  fetch("https://forms.tildacdn.com/proccess/", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (res.ok) {
        alert("Ma'lumot muvaffaqiyatli yuborildi!");
        form.reset();
      } else {
        alert("Xatolik yuz berdi.");
      }
    })
    .catch((err) => {
      console.error("Tarmoq xatosi:", err);
      alert("Tarmoqda muammo yuz berdi.");
    });

  return false;
}
