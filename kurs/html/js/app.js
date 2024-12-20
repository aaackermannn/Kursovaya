const swiper = new Swiper('.swiper', {
	mousewheel: true,
	direction: 'vertical',
	speed: 1700,
	parallax: true
})

document.querySelectorAll('.header-content h1').forEach(e => {
	e.innerHTML = e.textContent.replace(/ (-|#|@){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m => {
		return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
	})
	e.querySelectorAll('.letter').forEach(function(l, i) {
		l.setAttribute('style', `z-index: -${ i }; transition-duration: ${ i/5 + 1 }s`)
	})
})

swiper.on('slideChange', function() {
	document.querySelectorAll('.header-content__slide').forEach(function(e, i) {
		return swiper.activeIndex === i ? e.classList.add('active') : e.classList.remove('active')
	})
})
// Выбираем элементы
const menuButton = document.querySelector('.submenu');
const mainMenu = document.querySelector('.main-menu');


menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Удаляем активный класс со всех пунктов
        menuItems.forEach((el) => el.classList.remove('active'));
        // Добавляем активный класс к текущему
        item.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData);

        console.log('Данные формы регистрации:', data);

        // Здесь можно отправить данные на сервер
        alert('Регистрация успешно отправлена!');
        registerForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", () => {
	const icon = document.querySelector(".icon");
	const menu = document.querySelector(".notification-menu");
  });
  