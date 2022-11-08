function slide() {
	var left = 0
	console.log(left)
	let button_right = document.getElementById('right')	
	let button_left = document.getElementById('left')
	let lenta = document.querySelector('.lenta')
	button_left.onclick = function() {
		left += 500
		lenta.style.left = left + 'px'		
		if (left >= -500) {
			left = -2500
		}
	}
	button_right.onclick = function() {
		left -= 500
		lenta.style.left = left + 'px'
		if (left <= -2000) {
			left = 500
		}
	}
}
slide()
