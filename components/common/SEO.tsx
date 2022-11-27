import { NextPage } from "next";
import Head from "next/head";

interface SEOProps {
    title: string;
    description: string;
}

const SEO: NextPage<SEOProps> = ({ title, description }) => {
    return (
        <Head>
            {/* Meta information */}
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
            <title>{title}</title>
            <link rel="https://limeoats.com" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="author" content="Limeoats" />
            <meta name="description" content={description} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.png" type="image/png" />
            <link rel="shortcut icon" href="/favicon.ico" />

            {/* Google Analytics */}
            {/* TODO: Add google analytics tag here */}

            {/* Twitter share script */}
            {/* TODO: Add twitter share tag here */}

            {/* Google Tag Manager */}
            {/* TODO: Add google tag manager tag here */}
        </Head>
    );
};

export default SEO;
