'use client'
import React from 'react'
import Image from "next/image";

interface ContainerProps {
  gambar: string;
  coin: string | number;
  harga: string | number;
}


function Container({ gambar, coin, harga }: ContainerProps) {
  return (
    <div className='bg-indigo-950 w-[250px] h-[300px] mt-3 rounded-2xl flex flex-col justify-between items-center overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-200 ease-in-out'>
        <div className='flex-1 flex flex-col justify-center items-center'>
            <div className={`relative w-[100px] h-[100px]`}>
            <Image
            src={gambar}
            alt='LuckyCoin'
            fill
            className='object-contain'
            />
            </div>
            <div className='flex flex-row justify-center items-center mt-3'>
                <p className='font-bold text-amber-400 mr-2 text-3xl'>{coin}</p>
                <div className='relative w-[20px] h-[20px]'>
                    <Image
                    src="/coin.webp"
                    alt='LuckyCoin'
                    fill
                    className='object-contain'
                    />
                </div>
            </div>
        </div>
        <div className='bg-amber-400 w-full h-24 flex justify-center items-center'>
            <p className='font-bold text-4xl'>{harga}</p>
        </div>
    </div>
  )
}

export default Container
