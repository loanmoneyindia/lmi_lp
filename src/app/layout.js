import { Roboto_Slab } from "next/font/google";
import "./globals.css";

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
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
