const background = document.querySelector('.animaheader');
const char = document.querySelector('.animachar');

lottie.loadAnimation({
    container: background,
    renderer: 'svg',
    bounce: true,
    loop: false,
    autoplay: true,
    path :'../bg/background.json'
});

lottie.loadAnimation({
    container: char,
    renderer: 'svg',
    bounce: true,
    loop: true,
    autoplay: true,
    path :'../char/promo.json'
});