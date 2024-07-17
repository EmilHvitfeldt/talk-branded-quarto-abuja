const textArr = document.querySelectorAll('.text')
const colorArr = ["#fefefe", "#61ff66", "#00fab7", "#00e8f0", "#00d5ff", "#47bcff", "#7eb0f7"]
textArr.forEach((text, index) => {
	text.style.color = colorArr[index]
})
