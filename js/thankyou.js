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
document.getElementById("userName").textContent = params.get("name") || "None";
document.getElementById("userPhone").textContent = params.get("phone") || "-";
document.getElementById("userType").textContent =
  types[params.get("type")] || "-";
