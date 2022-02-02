import 'antd/dist/antd.css'
import '@material-tailwind/react/tailwind.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
