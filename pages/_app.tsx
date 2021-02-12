import "tailwindcss/tailwind.css";
import { AppWrapper } from '../context/state'

export default function App({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

