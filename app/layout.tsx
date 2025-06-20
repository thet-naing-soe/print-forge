import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Image from 'next/image'
import Link from 'next/link'
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">

            <Link href='/'>
              <div className="relative">
              {/* Desktop Logo */}
              <Image
                src={PFLogo}
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile Logo */}
              <Image
                src={PFLogoIcon}
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
              />
            </div>
            </Link>
            <ul className="flex items-center gap-2.5">
              <li className="text-sm uppercase cursor-pointer"><Link href="/">3D Models</Link></li>
              <li className="text-sm uppercase cursor-pointer"><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
