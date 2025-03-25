import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-neutral-800 text-white">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                    <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
                    <p className="mt-4 text-lg">
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
                    </p>

                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">Information We Collect</h2>
                        <p className="mt-2">
                            We collect personal information such as your name, email address, and other relevant details that you provide voluntarily when using our services, signing up for newsletters, or contacting us.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
                        <p className="mt-2">
                            The information we collect is used to provide, maintain, and improve our services, communicate with you, and personalize your experience. We may also use the data for marketing and promotional purposes, but you can opt out at any time.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">How We Protect Your Information</h2>
                        <p className="mt-2">
                            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">Cookies and Tracking Technologies</h2>
                        <p className="mt-2">
                            We use cookies and similar tracking technologies to enhance your user experience. Cookies help us analyze trends, administer the site, and track users&apos; movements around the site. You can control the use of cookies at the browser level, but disabling them may affect your ability to use certain features.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">Sharing of Your Information</h2>
                        <p className="mt-2">
                            We do not sell or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us with functions such as data hosting, customer service, and marketing. These providers are obligated to keep your information confidential.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">Your Rights</h2>
                        <p className="mt-2">
                            Depending on your location, you may have the right to access, update, correct, or delete your personal information. To exercise any of these rights, please contact us using the details provided below.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">Changes to This Privacy Policy</h2>
                        <p className="mt-2">
                            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, with an updated effective date. We encourage you to review this policy periodically for any updates.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl font-semibold">Contact Us</h2>
                        <p className="mt-2">
                            If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:krishnarajirkal@gmail.com" className="underline">krishnarajirkal@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
