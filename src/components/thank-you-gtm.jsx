'use client'
import Script from "next/script";
import { usePathname } from 'next/navigation';

const ThankYouGTM = () => {
    const pathname = usePathname();
    if (pathname === '/thank-you') {
        return (
            <script
                id="gtag-thank-you"
                dangerouslySetInnerHTML={{
                    __html: `gtag('config', 'AW-17183337650');`,
                }}
            />
        );
    }
    return null;
};

export default ThankYouGTM