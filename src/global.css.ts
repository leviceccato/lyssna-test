import 'modern-normalize/modern-normalize.css'
import { globalStyle as g } from '@vanilla-extract/css'

g(':where(body)', {
	margin: 0,
	backgroundColor: 'transparent',
	/**
	 * Fixes bold looking fonts on macOS in Chrome & Safari
	 */
	WebkitFontSmoothing: 'antialiased',
	/**
	 * Fixes bold looking fonts on macOS in Firefox
	 */
	MozOsxFontSmoothing: 'grayscale',
	lineHeight: 1.4,
	fontFamily: 'sans-serif',
})

g(':where(blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre)', {
	margin: 0,
})

g(':where(iframe)', {
	border: 'none',
	width: '100%',
})

g(':where(ol, ul)', {
	listStyle: 'none',
	margin: 0,
	padding: 0,
})

g(':where(h1, h2, h3, h4, h5, h6)', {
	fontSize: 'inherit',
	fontWeight: 'inherit',
})

g(':where(a)', {
	color: 'inherit',
	textDecoration: 'inherit',
})

g(':where(input)', {
	fontFamily: 'inherit',
	fontSize: 'inherit',
	color: 'inherit',
})

g(':where(input::-webkit-input-placeholder)', {
	color: 'inherit',
})

g(':where(input::placeholder)', {
	color: 'inherit',
	opacity: 'inherit',
})

g(':where(input::-ms-clear)', {
	display: 'none',
	width: 0,
	height: 0,
})

/**
 * Clears the 'X' from Chrome
 */
g(
	':where(input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration)',
	{
		display: 'none',
	},
)

g(':where(input[type=range])', {
	WebkitAppearance: 'none',
	width: '100%',
	display: 'block',
})

g(':where(input[type=range]::-webkit-slider-thumb)', {
	WebkitAppearance: 'none',
})

g(':where(input[type=range]:focus)', {
	outline: 'none',
})

g(':where(input[type=range]::-ms-track)', {
	width: '100%',
	background: 'transparent',
	cursor: 'pointer',
	borderColor: 'transparent',
	color: 'transparent',
})

g(':where(button, textarea, input, select, a)', {
	WebkitTapHighlightColor: ['rgba(0, 0, 0, 0)', 'transparent'],
})

g(':where(button)', {
	color: 'inherit',
	background: 'none',
	border: 'none',
	fontFamily: 'inherit',
	textAlign: 'inherit',
	fontSize: 'inherit',
	letterSpacing: 'inherit',
	lineHeight: 'inherit',
	padding: 0,
})

g(':where(button:focus)', {
	outline: 'none',
})

g(':where(button:enabled)', {
	cursor: 'pointer',
})

g(':where(button:disabled)', {
	cursor: 'not-allowed',
})

g(':where(img, svg, video, canvas, audio, iframe, embed, object)', {
	maxWidth: '100%',
	display: 'block',
	verticalAlign: 'middle',
})

g(':where(svg)', {
	fill: 'currentColor',
})
