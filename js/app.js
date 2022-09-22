// 3D Scroll

let zSpacing = -1000,
	lastPos = zSpacing / 5,
	frames = Array.from(
		document.getElementsByClassName('frame'),
	),
	zVals = []

window.onscroll = handleScroll

handleScroll()

function handleScroll() {
	let top = document.documentElement.scrollTop,
		delta = lastPos - top

	lastPos = top

	frames.forEach((n, i) => {
		zVals.push(i * zSpacing + zSpacing)
		zVals[i] += delta * -2

		let frame = frames[i],
			transform = `translateZ(${zVals[i]}px)`,
			opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0

		frame.setAttribute(
			'style',
			`transform: ${transform};
			opacity: ${opacity}`,
		)
	})
}
