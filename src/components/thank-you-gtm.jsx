'use client'
import Script from "next/script";
import { usePathname } from 'next/navigation';

const ThankYouGTM = () => {
    const pathname = usePathname();
    if (pathname === '/thank-you') {
        return (
            <>
            {/* Google Ads Conversion Tracking */}
            <Script id="gtag-thank-you" strategy="afterInteractive">
            {`
                gtag('config', 'AW-17183337650');
            `}
            </Script>

            {/* Facebook Pixel Lead Event */}
            <Script id="fbq-lead" strategy="afterInteractive">
            {`
                fbq('track', 'Lead');
            `}
            </Script>
            </>
        );
    }
    return null;
};

export default ThankYouGTM