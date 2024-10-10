import { style, styleVariants } from '@vanilla-extract/css'
import { colourPrimary3, colourWhite } from './App.css'

const rootBase = style({
	paddingBlock: 13,
	paddingInline: 27,
	borderRadius: 8,
})

export const root = styleVariants({
	primary: [
		rootBase,
		{
			color: colourWhite,
			backgroundColor: colourPrimary3,
		},
	],
	white: [
		rootBase,
		{
			color: colourPrimary3,
			backgroundColor: colourWhite,
		},
	],
})
