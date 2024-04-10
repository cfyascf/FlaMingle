let dark = document.getElementById('moon');
let content = document.querySelector('.content');
let title = document.querySelector('.content-title');
let desc = document.querySelector('.content-description');
let light = document.getElementById('sun');
let bgImg = document.getElementById('bg-light');

dark.style.fill = '#FFF'

dark.addEventListener('click', () => {
    document.body.style.background = '#203354';
    document.body.style.transition = 'background 1s ease'
    content.style.background = '#23395d';
    content.style.transition = 'background 1s ease'
    title.style.color = '#FFF';
    desc.style.color = '#FFF';
    dark.style.display = 'none';
    light.style.display = 'block'
    light.style.fill = '#FFF'
    bgImg.src = '../img/bgDarkMode'
});

light.addEventListener('click', () => {
    document.body.style.background = '#FFF';
    document.body.style.transition = 'background 1s ease'
    content.style.background = '#FFF';
    content.style.transition = 'background 1s ease'
    title.style.color = '#262626';
    desc.style.color = '#262626';
    dark.style.display = 'block';
    light.style.display = 'none'
    dark.style.fill = '#FFF'
    bgImg.src = '../img/profilebg.png'
});