import type { JSX } from 'solid-js'
import * as css from './Link.css'

export default function Link(props: {
	class?: string
	href?: string
	children?: JSX.Element
	variant: keyof typeof css.root
}) {
	props.class ??= ''

	return (
		<a href={props.href} class={`${props.class} ${css.root[props.variant]}`}>
			{props.children}
		</a>
	)
}
