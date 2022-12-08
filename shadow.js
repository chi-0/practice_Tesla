/** 헤더 메뉴 그림자*/
const navCenterBg = document.querySelector('.nav_center_bg');
const navCenterMenu = document.querySelectorAll('.nav_center a');
const navRightMenu = document.querySelectorAll('.nav_right a');

navCenterMenu.forEach(
  mup => mup.addEventListener('mouseover',(e) => {
    navCenterBg.style.left = e.currentTarget.offsetLeft + "px";
    navCenterBg.style.top = e.currentTarget.offsetTop + "px";
    navCenterBg.style.width = e.currentTarget.offsetWidth + "px";
    navCenterBg.style.height = e.currentTarget.offsetHeight + "px";
    navCenterBg.style.backgroundColor = "rgba(0,0,0,0.05)";
    navCenterBg.style.opacity = "1"
  })
)

navCenterMenu.forEach(
  mdown => mdown.addEventListener('mouseout', () => {
    navCenterBg.style.opacity = "0";
  })
)

navRightMenu.forEach(
  mup => mup.addEventListener('mouseover',(e) => {
    navCenterBg.style.left = e.currentTarget.offsetLeft + "px";
    navCenterBg.style.top = e.currentTarget.offsetTop + "px";
    navCenterBg.style.width = e.currentTarget.offsetWidth + "px";
    navCenterBg.style.height = e.currentTarget.offsetHeight + "px";
    navCenterBg.style.backgroundColor = "rgba(0,0,0,0.05)";
    navCenterBg.style.opacity = "1";
  })
)

navRightMenu.forEach(
  mdown => mdown.addEventListener('mouseout', () => {
    navCenterBg.style.opacity = "0";
  })
)