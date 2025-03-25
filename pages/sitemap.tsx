import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Sitemap() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <Head>
                <title>Sitemap - Krishnaraj Irkal</title>
                <meta
                    name="description"
                    content="Explore all available pages on the website of Krishnaraj Irkal. Discover resources, portfolio projects, blog posts, contact details, and more."
                />
                <meta name="robots" content="index,follow" />
            </Head>
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                    <h1 className="text-3xl font-bold text-center">Sitemap</h1>
                    <p className="mt-4 text-lg text-center">
                        Explore all available pages on our website.
                    </p>
                    <nav aria-label="Sitemap Navigation" className="mt-8">
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/#skills" className="hover:underline">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="hover:underline">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:underline">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/sitemap" className="hover:underline">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
            <Footer />
        </div>
    );
}
