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