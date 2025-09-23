const ft_list = document.getElementById("ft_list");
const newBtn = document.getElementById("new");

// โหลดจาก cookie ตอนเปิดเว็บ
window.onload = () => {
  const saved = getCookie("todos");
  if (saved) {
    const todos = JSON.parse(saved);
    todos.forEach(todo => addTodo(todo));
  }
};

// สร้าง To Do ใหม่
newBtn.addEventListener("click", () => {
  const task = prompt("Enter a new TO DO:");
  if (task && task.trim() !== "") {
    addTodo(task.trim(), true);
  }
});

// ฟังก์ชันเพิ่ม To Do
function addTodo(text, save = false) {
  const div = document.createElement("div");
  div.innerText = text;
  div.onclick = () => {
    if (confirm("Do you want to remove this TO DO?")) {
      div.remove();
      updateCookies();
    }
  };
  ft_list.insertBefore(div, ft_list.firstChild);
  if (save) updateCookies();
}

// บันทึก To Do ลง cookie
function updateCookies() {
  const todos = [];
  ft_list.querySelectorAll("div").forEach(d => todos.push(d.innerText));
  setCookie("todos", JSON.stringify(todos), 7);
}

// จัดการ cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}
