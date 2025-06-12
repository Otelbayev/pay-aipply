const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("tel").value.trim();
  const type = document.getElementById("type").value;

  if (name === "" || phone.length < 9 || !/^\d+$/.test(phone)) {
    alert("Iltimos, to‘g‘ri ism va telefon raqam kiriting!");
    return;
  }

  const params = new URLSearchParams({
    name: name,
    phone: phone,
    type: type,
  });

  window.location.href = "pay.html?" + params.toString();
});

function moveCaretToEnd(el) {
  if (typeof el.selectionStart == "number") {
    el.selectionStart = el.selectionEnd = el.value.length;
  } else if (typeof el.createTextRange != "undefined") {
    el.focus();
    var range = el.createTextRange();
    range.collapse(false);
    range.select();
  }
}
