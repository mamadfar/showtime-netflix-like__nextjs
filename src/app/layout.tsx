import './globals.scss'
import { Ubuntu } from 'next/font/google'
import {Footer, Header} from "@/components";
import {ReactNode} from "react";

const ubuntu = Ubuntu({weight: "500", subsets: ["latin"]})

export const metadata = {
  title: 'Showtime',
  description: 'Netflix-like',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen w-full p-2 ${ubuntu.className}`}>
      <Header/>
      <main className="w-full md:w-4/5 xl:w-3/4 mx-auto">{children}</main>
      <Footer/>
      </body>
    </html>
  )
}
