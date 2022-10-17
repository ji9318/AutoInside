// open sidebar
const sidebarButton = document.querySelector(".sidebar-button");
const smSidebar = document.querySelector(".sm-sidebar");
const mdSidebar = document.querySelector(".md-sidebar");

sidebarButton.addEventListener("click", () => {
  smSidebar.classList.add("is-active");
  mdSidebar.classList.add("is-active");
  document.body.classList.add("no-scroll");
});

const sidebarExitButton = document.querySelector(".sidebar-exit-button");
const mdSidebarExitButton = document.querySelector(".md-sidebar-exit-button");

sidebarExitButton.addEventListener("click", () => {
  smSidebar.classList.remove("is-active");
  document.body.classList.remove("no-scroll");
});

mdSidebarExitButton.addEventListener("click", () => {
  mdSidebar.classList.remove("is-active");
  document.body.classList.remove("no-scroll");
});

// scrolling sidebar menu
const menuNav = document.querySelector(".menu-nav-button-wrap");

menuNav.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// active menu button
const menuNavButtons = document.querySelectorAll(".menu-nav-button");
menuNavButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    menuNavButtons.forEach((button) => {
      button.classList.remove("is-active");
    });
    e.currentTarget.classList.add("is-active");
  });
});

// Main - active tab button
const tabButtons = document.querySelectorAll(".tab-button");

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    tabButtons.forEach((tabButton) => {
      tabButton.classList.remove("is-tab");
    });
    tabButton.classList.add("is-tab");
  });
});

const findTabButton = document.querySelector(".tab-button.is-find");
const sellTabButton = document.querySelector(".tab-button.is-sell");

const findBox = document.querySelector(".find-box");
const sellBox = document.querySelector(".sell-box");

findTabButton.addEventListener("click", () => {
  sellTabButton.classList.remove("is-tab");
  findTabButton.classList.add("is-tab");
  findBox.classList.add("is-show");
  sellBox.classList.remove("is-show");
});

sellTabButton.addEventListener("click", () => {
  findTabButton.classList.remove("is-tab");
  sellTabButton.classList.add("is-tab");
  sellBox.classList.add("is-show");
  findBox.classList.remove("is-show");
});

// Global header
const globalheader = document.querySelector(".global-header");
addEventListener("wheel", (e) => {
  const direction =
    e.deltaY < 0
      ? globalheader.classList.add("is-transparent")
      : globalheader.classList.remove("is-transparent");
});

// Bottom menu
const bottomMenu = document.querySelector(".bottom-menu");

addEventListener("wheel", (e) => {
  const direction =
    e.deltaY > 0
      ? bottomMenu.classList.add("is-hidden")
      : bottomMenu.classList.remove("is-hidden");
});

// Select box

function categoryChange(e) {
  const hyun = [
    "그랜저",
    "스타렉스",
    "싼타페",
    "쏘나타",
    "아반떼",
    "엑센트",
    "투싼",
    "포터",
    "코나",
    "팰리세이드",
  ];
  const kia = [
    "모닝",
    "스포티지",
    "쏘렌토",
    "카니발",
    "프라이드",
    "니로",
    "스토닉",
    "셀로스",
    "K9",
    "K8",
    "K7",
    "K5",
  ];
  const chev = ["블레이저", "스파크", "크루즈", "말리부"];
  const ssang = ["렉스턴", "코란도", "티볼리"];
  const ren = ["SM3", "SM5", "SM6", "QM6", "XM3", "QM3"];
  const bmw = ["3시리즈", "5시리즈", "X"];
  const gene = ["EQ900", "G80", "G70", "G90", "GV80", "GV70"];
  const jeep = ["레니게이드"];
  const mini = ["쿠퍼", "클럽맨"];
  const benz = ["C클래스", "E클래스", "S클래스", "GLC클래스", "CLA클래스"];
  const audi = ["A6", "A1"];

  const target = document.querySelector("#brand");

  if (e.value == "hyun") var brand = hyun;
  else if (e.value == "kia") var brand = kia;
  else if (e.value == "chev") var brand = chev;
  else if (e.value == "ssang") var brand = ssang;
  else if (e.value == "ren") var brand = ren;
  else if (e.value == "bmw") var brand = bmw;
  else if (e.value == "gene") var brand = gene;
  else if (e.value == "jeep") var brand = jeep;
  else if (e.value == "mini") var brand = mini;
  else if (e.value == "benz") var brand = benz;
  else if (e.value == "audi") var brand = audi;

  target.options.length = 0;

  for (const x in brand) {
    let opt = document.createElement("option");
    opt.value = brand[x];
    opt.innerHTML = brand[x];
    target.appendChild(opt);
  }
}
