/** 메뉴버튼 */
const menuBtn = document.querySelector('.menu_btn');
const sidebar = document.querySelector('.sidebar');
const xBtn = document.querySelector('.x_btn');
const effect = document.querySelector('.effect');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('side');
  sidebar.classList.remove('slide_out');
  effect.classList.add('hide');
  effect.classList.remove('look');
});

xBtn.addEventListener('click', () => {
  sidebar.classList.add('slide_out');
  effect.classList.add('look');
  setTimeout(() => {sidebar.classList.remove('side')}, 600);
  setTimeout(() => {effect.classList.remove('hide')}, 600);
})

/** 헤더 메뉴 */
const navCenterBg = document.querySelector('.nav_center_bg');
const navCenterMenu = document.querySelectorAll('.nav_center a');

navCenterMenu.forEach(
  menu => menu.addEventListener('mouseenter',(e) => {
    navCenterBg.style.left = e.currentTarget.offsetLeft + "px";
    navCenterBg.style.top = e.currentTarget.offsetTop + "px";
    navCenterBg.style.width = e.currentTarget.offsetWidth + "px";
    navCenterBg.style.height = e.currentTarget.offsetHeight + "px";
    navCenterBg.style.backgroundColor = "rgba(0,0,0,0.05)";
  })
)