function goToPage(number) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById("page" + number).classList.add("active");
}

function chooseMood(mood) {
  let text = "";

  if (mood === "happy") {
    text = "aku senang melihat kamu bahagia hari ini, pertahankan senyum indahmu ya, dunia butuh cahaya dari kamu ✨";
  } 
  else if (mood === "sad") {
    text = "nggak apa-apa merasa sedih, kamu sudah kuat sampai hari ini, pelan-pelan ya, aku percaya kamu bisa 🤍";
  } 
  else if (mood === "disappointed") {
    text = "rasa kecewa memang berat, tapi jangan biarkan itu meredupkan harapanmu, kamu pantas dapat yang lebih baik 🌸";
  }

  document.getElementById("motivation").innerText = text;
  goToPage(3);
}
