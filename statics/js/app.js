document.querySelector("main").addEventListener("mousewheel", e => {
	e.preventDefault()
	// document.documentElement.scrollLeft -= e.deltaY
	e.currentTarget.scrollLeft -= e.deltaY
})