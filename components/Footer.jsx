import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white p-6 text-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Krishnaraj Irkal. All Rights Reserved.</p>
                <nav className="flex space-x-4 mt-2 md:mt-0">
                    <Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
                    <Link href="/sitemap" className="hover:text-blue-400">Site Map</Link>
                </nav>
            </div>
        </footer>
    );
}
