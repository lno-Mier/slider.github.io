function slide() {
	var left = 0
	console.log(left)
	let button_right = document.getElementById('right')	
	let button_left = document.getElementById('left')
	let lenta = document.querySelector('.lenta')
	button_left.onclick = function() {
		left += 500		
		if (left >= 500) {
			left = -2000
		}
		lenta.style.left = left + 'px'
	}
	button_right.onclick = function() {
		left -= 500
		if (left <= -2500) {
			left = 0
		}
		lenta.style.left = left + 'px'		
	}
}
slide()
