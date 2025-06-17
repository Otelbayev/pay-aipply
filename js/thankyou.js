const params = new URLSearchParams(window.location.search);
document.getElementById("userName").textContent = params.get("name") || "None";
document.getElementById("userPhone").textContent = params.get("phone") || "-";
document.getElementById("userType").textContent = params.get("type") || "-";
