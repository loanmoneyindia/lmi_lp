import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ThankYouGTM from "@/components/thank-you-gtm";

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'], // Optional: Specify font weights
  display: 'swap',         // Optional: improve loading behavior
});

export const metadata = {
  title: "Personal Loans from Banks & NBFCs at Lowest Interest Rates - LoanMoney",
  description: "Compare unsecured personal loans against salary from 30+ banks/NBFCs. Get fast approval, low interest, minimal paperwork & zero hassle with LoanMoney.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Global site tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17183337650"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17183337650');
          `}
        </Script>
         {/* Facebook Pixel Script */}
         <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '639130078622780');
            fbq('track', 'PageView');
          `}
         </Script>
        <ThankYouGTM />
      </head>
      <body className={roboto.className}>
        {/* Facebook Pixel NoScript Fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=639130078622780&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
