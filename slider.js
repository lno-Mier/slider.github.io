function slide() {
	let button_left = document.getElementById('left')
	let lenta = document.querySelector('.lenta')
	let left = '-500'
	button_left.onclick = function() {
		lenta.style.left = left
	}
}
slide()
