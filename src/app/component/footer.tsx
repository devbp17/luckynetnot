import React from 'react'
import Image from "next/image";
import Link from 'next/link'

function Footer() {

  const href = ["Home", "Store", "Rules", "Staff"]
  const logo = ["/IG.png", "/Tiktok.png", "/YT.png"]
  const link = ["https://www.instagram.com/luckynetwork/", "https://www.tiktok.com/@luckynetworkofficial/", "https://www.youtube.com/@luckynetworkofficial/"]
  const alter = ["Instagram", "Tiktok", "Youtube"]

  return (
        <div className="w-full h-screen relative overflow-hidden bg-white/5">
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row pt-[80px] p-[30px] w-screen h-[400px] justify-center items-center gap-8">
          <Image
          src="/LN_Logo.avif"
          alt="Luckynetwork logo"
          width={250}
          height={250}
          />
          <div className="h-full w-0.5 bg-white rounded"></div>
          <div className="flex gap-6 ml-9 text-2xl font-bold flex-row text-white/50">
          <div className="flex flex-col gap-6">
             <div className="flex flex-row gap-8">
                {href.map((href, i) => (
              <Link key={i} href="">
                {href}
              </Link>
            ))}
              <p className="ml-32 pr-20">
                STAY CONNECTED
              </p>
              </div>
              <div className="flex flex-row">
              <p className="text-[17px]">© 2025 Lucky Network All Right Reserved</p>
              <div className="flex justify-center items-center gap-7 ml-44">
                {logo.map((logo, i) => (
                  <Link key={i} href={link [i]}>
                    <Image
                    src={logo}
                    alt={alter [i]}
                    width={35}
                    height={35}
                    />
                  </Link>
                ))}
              </div>
              </div>
          </div>
          </div>
        </div>
        <div>

        </div>
        <p className="text-center">This site is protected by reCAPTCHA and the Google
          <span className="block">
              <Link href="https://policies.google.com/privacy" className="underline hover:text-purple-700">Privacy Policy</Link> and <Link href="https://policies.google.com/terms" className="underline hover:text-purple-700">Terms of Service</Link> apply</span>
          </p>
    </div>
    </div>
  )
}

export default Footer
