
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'react-toastify/dist/ReactToastify.css';
import '../global/globals.css' 
export default function MyApp({ Component , ...rest}: AppProps) {
    const {pageProps} = rest;
    return (
        <>
        <Component {...pageProps} />
        <ToastContainer
            theme='colored'
        />
        </>
    )
}
