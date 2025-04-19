import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Lexplain - Understand Legals Instantly",
  description: "The AI-powered app that simplifies legal documents for you.",
  openGraph: {
    title: "Lexplain - Understand Legals Instantly",
    description: "The AI-powered app that simplifies legal documents for you.",
    url: `https://${process.env.NEXT_PUBLIC_HOST}`,
    images: ["/banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
