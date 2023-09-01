
import type { AppProps } from 'next/app'
import '../global/globals.css' 
export default function MyApp({ Component , ...rest}: AppProps) {
    const {pageProps} = rest;
    return (
        <Component {...pageProps} />
    )
}
