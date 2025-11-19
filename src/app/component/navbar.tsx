import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function Navbar() {

  const label = ["Home", "Rules", "Store", "Discord", "Staff", "Apply"]
  const link = ["/", "/rules","/store", "https://discord.gg/xfcYZewb", "/staff", "/apply"]

  return (
    <div className='w-[1110px] h-18 bg-black/20 backdrop-blur-sm rounded fixed inset-0 mt-8 mx-20 flex flex-row items-center justify-start overflow-hidden z-[99999]'>
      <div className='inset-0 w-40 h-52 bg-amber-400 relative overflow-hidden flex justify-center items-center'>
    <Image
      src = "/LN_LOGO_HEADER.avif"
      alt = "tes"
      width={200}
      height={200}
      className='object-cover'
      />
      </div>
      <div className='ml-15'>
      {label.map ((label, i) => (
        <Link key={i} href= {link [i]} className='mx-5 font-bold cursor-pointer'>
          {label}
        </Link>
      ))}
      </div>
      <div className='flex justify-center items-center ml-52 m-5 h-10 w-30 bg-amber-400 rounded'>
      <p className='text-black font-bold text-[15px]'>Support</p>
      </div>
    </div>
  )
}

export default Navbar
