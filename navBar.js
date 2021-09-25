const menuIcon = document.getElementById('open-nav-bar');
const closeIcon = document.getElementById('close-nav-bar');
const navBar = document.getElementById('nav-bar');

menuIcon.addEventListener('click',function() {
    navBar.classList.add('show-links');
});
closeIcon.addEventListener('click',function() {
    navBar.classList.remove('show-links');
});