import App from '@/components/App'
import 'modern-normalize/modern-normalize.css'
import '@/global.css'
import { render } from 'solid-js/web'

const root = document.getElementById('root')
if (root) {
	render(() => <App />, root)
}
