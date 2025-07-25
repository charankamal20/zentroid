import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "auto",
  weight: ["700"],
});


export const metadata = {
  title: "Zentroid Studios",
  description: "A showcase application created for Zentroid Studios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.className}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..." crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
