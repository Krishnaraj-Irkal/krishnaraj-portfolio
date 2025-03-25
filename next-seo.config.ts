// next-seo.config.ts
import { DefaultSeoProps } from 'next-seo';

const title = "My Portfolio - Krishnaraj Irkal";
const description =
    "I create modern, responsive web applications and beautiful digital experiences using Next.js, React, and Tailwind CSS.";
const url = "https://www.krishnarajirkal.com";

const SEO: DefaultSeoProps = {
    title,
    description,
    canonical: url,
    openGraph: {
        url,
        title,
        description,
        images: [
            {
                url: `${url}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Og Image Alt",
            },
        ],
        site_name: "My Portfolio",
    },
    twitter: {
        handle: "@yourtwitterhandle",
        site: "@yourtwitterhandle",
        cardType: "summary_large_image",
    },
};

export default SEO;
