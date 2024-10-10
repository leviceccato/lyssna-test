import { createVar, style, styleVariants } from '@vanilla-extract/css'

export const colourWhite = createVar()
export const colourPrimary3 = createVar()

export const root = style({
	vars: {
		[colourWhite]: '#FFFFFF',
		[colourPrimary3]: '#006E75',
	},
})

export const body = style({
	fontSize: 18,
	lineHeight: 1.4,
})

export const heading = style({
	fontSize: 60,
	lineHeight: 1.1,
})

export const section = style({
	paddingBlock: 200,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
})

export const sectionContainer = style({
	width: '100%',
	maxWidth: 1290,
})

export const featureSection = style({})

export const featureSectionContainer = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gap: 36,
	gridAutoRows: 'minmax(100px, auto)',
})

const featureSectionCardRoot = style({
	backgroundColor: 'grey',
})

export const featureSectionCard = styleVariants({
	versioning: [
		featureSectionCardRoot,
		{
			gridColumn: '1',
			gridRow: '1 / 3',
		},
	],
	collaborate: [
		featureSectionCardRoot,
		{
			gridColumn: '1',
			gridRow: '3 / 6',
		},
	],
	instant: [
		featureSectionCardRoot,
		{
			gridColumn: '2',
			gridRow: '1 / 5',
		},
	],
	cta: [
		featureSectionCardRoot,
		{
			gridColumn: '2',
			gridRow: '5',
		},
	],
})

export const footer = style({
	color: colourWhite,
	paddingBlock: 142,
	display: 'flex',
	position: 'relative',
	flexDirection: 'column',
	alignItems: 'center',
	textAlign: 'center',
	backgroundColor: colourPrimary3,
})

export const footerGraphic = style({
	position: 'absolute',
	insetBlockStart: 0,
	insetInlineEnd: 0,
})

export const footerBody = style({
	marginBlockStart: 26,
})

export const footerCta = style({
	marginBlockStart: 53,
})
