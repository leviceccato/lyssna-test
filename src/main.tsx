import '@/global.css'
import App from '@/components/App'
import { render } from 'solid-js/web'

const root = document.getElementById('root')
if (root) {
	render(() => <App />, root)
}
