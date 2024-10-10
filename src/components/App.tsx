import footerGraphic from '@/assets/footer-graphic.png'
import Link from '@/components/Link'
import * as css from './App.css'

export default function App() {
	return (
		<div class={css.root}>
			<main>
				<div class={`${css.section} ${css.featureSection}`}>
					<div class={`${css.sectionContainer} ${css.featureSectionContainer}`}>
						<div class={css.featureSectionCard.versioning} />
						<div class={css.featureSectionCard.collaborate} />
						<div class={css.featureSectionCard.instant} />
						<div class={css.featureSectionCard.cta} />
						{/* <div class={css.featureSectionCard} />
						<div class={css.featureSectionCard} />
						<div class={css.featureSectionCard} /> */}
					</div>
				</div>
			</main>
			<footer class={css.footer}>
				<img class={css.footerGraphic} src={footerGraphic} alt="" />
				<h2 class={css.heading}>Take your files with you</h2>
				<div class={`${css.body} ${css.footerBody}`}>
					<p>
						Revolutionise your workflow and stay in sync across all of your
						devices.
					</p>
				</div>
				<Link variant="white" href="/signup" class={css.footerCta}>
					Sign up for free
				</Link>
			</footer>
		</div>
	)
}
