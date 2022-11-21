import { Raleway } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const raleway = Raleway({});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-raleway: ${raleway.style.fontFamily};
                    }
                `}
            </style>
            <Component {...pageProps} />
        </>
    );
}
