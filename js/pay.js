const prices = {
  standart: "590,000",
  premium: "790,000",
  viponline: "1,390,000",
  vipoffline: "1,390,000",
};

const types = {
  standart: "Standart",
  premium: "Premium",
  viponline: "VIP online",
  vipoffline: "VIP offline",
};

const params = new URLSearchParams(window.location.search);
document.getElementById("name").textContent = params.get("name") || "Noma'lum";
document.getElementById("phone").textContent =
  params.get("phone") || "Noma'lum";
document.getElementById("type").textContent =
  types[params.get("type")] || "Noma'lum";

document.getElementById("price").textContent =
  prices[params.get("type")] + " so'm" || "Noma'lum";

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

window.onload = function () {
  const display = document.getElementById("timer");
  const countdownSeconds = 15 * 60;
  startCountdown(countdownSeconds, display);
};

const form = document.getElementById("lastform");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  window.location.href = "thankyou.html?" + params.toString();
});
