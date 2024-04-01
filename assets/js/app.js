const background = document.querySelector('#animaheader');
const char1 = document.querySelector('#animachar1');
const char2 = document.querySelector('#animachar2');

const ui1 = document.querySelector('.arrow');
const ui2 = document.querySelector('.arrow2');

lottie.loadAnimation({
  container: background,
  renderer: 'svg',
  bounce: true,
  loop: false,
  autoplay: true,
  path: 'https://pawpengaga.github.io/mypageanima/assets/anima/bg/background.json'
});

lottie.loadAnimation({
  container: char1,
  renderer: 'svg',
  bounce: true,
  loop: true,
  autoplay: true,
  path: 'https://pawpengaga.github.io/mypageanima/assets/anima/char1/promo.json'
});

lottie.loadAnimation({
  container: char2,
  renderer: 'svg',
  bounce: true,
  loop: true,
  autoplay: true,
  path: 'https://pawpengaga.github.io/mypageanima/assets/anima/char2/mom.json'
});

lottie.loadAnimation({
  container: ui1,
  renderer: 'svg',
  bounce: true,
  loop: true,
  autoplay: true,
  path: 'https://pawpengaga.github.io/mypageanima/assets/anima/ui/myarrow.json'
});

lottie.loadAnimation({
  container: ui2,
  renderer: 'svg',
  bounce: true,
  loop: true,
  autoplay: true,
  path: 'https://pawpengaga.github.io/mypageanima/assets/anima/ui/myarrow.json'
});
