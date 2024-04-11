let dark = document.getElementById('moon');
let content = document.querySelector('.content');
let title = document.querySelector('.content-title');
let desc = document.querySelector('.content-description');
let light = document.getElementById('sun');
let bgImg = document.getElementById('bg-light');
let titleWallet = document.querySelector('.title-wallet')
let cardContainer = document.querySelectorAll('.carddata-container')
let iconTransfer = document.getElementById('iconTransfer')
let sla = document.querySelector('.from')
dark.style.fill = '#FFF'

dark.addEventListener('click', () => {
    document.body.style.background = '#294576';
    document.body.style.transition = 'background 1s ease'
    content.style.background = '#2A508F';
    content.style.transition = 'background 1s ease'
    title.style.color = '#FFF';
    desc.style.color = '#FFF';
    dark.style.display = 'none';
    light.style.display = 'block'
    light.style.fill = '#FFF'
    bgImg.src = '../img/profilebgdark.png'
    titleWallet.style.color = '#FFF'
    cardContainer.style.color = '#FFF'
    cardContainer.style.borderTop = '1px solid #FFF'
    cardContainer.style.borderBottom = '1px solid #FFF'
    iconTransfer.style.fill = '#FFF'
    sla.style.color = '#FFF'
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
    titleWallet.style.color = '#262626'
    iconTransfer.style.fill = 'black'
});