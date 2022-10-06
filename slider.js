function slide() {
	var left = 0
	console.log(left)
	let button_left = document.getElementById('left')
	let lenta = document.querySelector('.lenta')
	button_left.onclick = function() {
		left -= '500'
		lenta.style.left = left + 'px'
	}
}
slide()
function slide1() {
	var left = 0
	let button_right = document.getElementById('right')
	let lenta = document.querySelector('.lenta')
	button_right.onclick = function() {
		left += '500'
		lenta.style.left = left + 'px'
	}
	
}
slide1()
