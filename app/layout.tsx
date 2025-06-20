import "./globals.css";
<<<<<<< HEAD
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
=======
import { Albert_Sans, Montserrat_Alternates } from 'next/font/google'

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
>>>>>>> e517dc4a8c05b989d7787ee227eb495b07ef1de1
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
<<<<<<< HEAD
  variable: "--font-montserrat-alternates"
=======
  variable: "--font-montserrat-alternates",
>>>>>>> e517dc4a8c05b989d7787ee227eb495b07ef1de1
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
            <div className="relative">
<<<<<<< HEAD
              {/* Desktop Logo */}
              <img
                src={"/printforge-logo.svg"}
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile Logo */}
              <img
                src={"/printforge-logo-icon.svg"}
=======
              {/* Desktop logo */}
              <img
                src="/printforge-logo.svg"
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile logo */}
              <img
                src="/printforge-logo-icon.svg"
>>>>>>> e517dc4a8c05b989d7787ee227eb495b07ef1de1
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
<<<<<<< HEAD
              <p href="/about">About</p>
=======
              <p>About</p>
>>>>>>> e517dc4a8c05b989d7787ee227eb495b07ef1de1
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> e517dc4a8c05b989d7787ee227eb495b07ef1de1
}
