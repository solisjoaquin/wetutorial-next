import "tailwindcss/tailwind.css";
import { AppWrapper } from '../context/state'
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <AppWrapper>
                <Component {...pageProps} />
            </AppWrapper>
        </ThemeProvider>
    )
}


