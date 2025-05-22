let logs = [];

const keyInput = document.getElementById("keyInput");
const logList = document.getElementById("logList");

keyInput.addEventListener("keydown", function (e) {
  const log = `Tuş basıldı: ${e.key}`;
  logs.push(log);
  const li = document.createElement("li");
  li.textContent = log;
  logList.appendChild(li);
});

function clearLog() {
  logs = [];
  logList.innerHTML = "";
}

function downloadLog() {
  const blob = new Blob([logs.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "keylogger_logs.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function simulateEmail() {
  alert("📧 Bu sadece bir e-posta simülasyonudur. Gerçek bir gönderim yapılmaz.");
}