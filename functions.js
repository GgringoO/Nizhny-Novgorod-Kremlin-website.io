var formDuo = document.querySelector('.form__duo')

formDuo.addEventListener('click', function () {
	this.style.background = '#FFFFFF' // Изменяем цвет фона при щелчке пользователем
	this.removeAttribute('placeholder') // Удаляем текст-плейсхолдер

	this.addEventListener('blur', function () {
		if (this.value === '') {
			// Если пользователь оставил поле ввода пустым
			this.style.background = '#D9D9D9' // Восстанавливаем цвет фона
			this.setAttribute('placeholder', '+7 (999) 999-99-99') // Восстанавливаем текст-плейсхолдер
		}
	})
})
var formDuo = document.querySelector('.form__one')

formDuo.addEventListener('click', function () {
	this.style.background = '#FFFFFF' // Изменяем цвет фона при щелчке пользователем
	this.removeAttribute('placeholder') // Удаляем текст-плейсхолдер

	this.addEventListener('blur', function () {
		if (this.value === '') {
			// Если пользователь оставил поле ввода пустым
			this.style.background = '#D9D9D9' // Восстанавливаем цвет фона
			this.setAttribute('placeholder', 'Иван') // Восстанавливаем текст-плейсхолдер
		}
	})
})
var formDuo = document.querySelector('.form__duo')
var formOne = document.querySelector('.form__one')
var submitBtn = document.querySelector('.button__discount')
var modal = document.getElementById('myModal')
var modalContent = modal.querySelector('.modal-content')
var closeBtn = document.getElementsByClassName('close')[0]

submitBtn.addEventListener('click', function () {
	if (formDuo.value !== '' && formOne.value !== '') {
		modalContent.innerHTML = 'Данные отправлены'
	} else {
		modalContent.innerHTML = 'Данные не введены'
	}
	modal.style.display = 'block'
})

closeBtn.addEventListener('click', function () {
	modal.style.display = 'none'
})

window.addEventListener('click', function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
	}
})
