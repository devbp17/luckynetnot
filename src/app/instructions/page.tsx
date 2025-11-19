import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Instruction from '../component/instruction1';

function instruction() {

const label = ["Home", "Store", "Perks", "Famous", "Rules", "Staffs"]
  const link = ["/", "/store","https://perks.luckynetwork.net/", "https://famous.luckynetwork.net/", "/rules", "/staff"]

  return (
    <>
    <div className='w-screen h-[100px] bg-gradient-to-r from-indigo-950 to-blue-900 overflow-hidden'>
      <div className='flex flex-row justify-start items-center'>
        <div className='relative w-[200px] h-[100px] flex justify-center items-center mx-20'>
        <Image
        src="/luckylogo_oeAKByG9P.webp"
        alt='luckylogo'
        fill
        className='object-contain'
        />
        </div>
        <div className='ml-15'>
      {label.map ((label, i) => (
        <Link key={i} href= {link [i]} className='mx-5 text-[19px] cursor-pointer'>
          {label}
        </Link>
      ))}
      </div>
      <div className='relative w-[40px] h-[40px] rounded-full border-2 overflow-hidden'>
        <Image
        src="/devbp.png"
        alt='steve'
        fill
        className='object-contain'
        />
      </div>
      <p className='mx-3 font-bold text-[19px]'>Steve</p>
      </div>
    </div>
    <div className='w-screen bg-gray-900 pb-7'>
      <Link href="/store">
      <div className='inline-block bg-red-500 cursor-pointer'>
        <p className='mx-4 my-2 font-bold text-[15px]'>Kembali ke Store</p>
    </div>
    </Link>
     <div className='w-screen px-17 my-15 flex justify-center items-center'>
        <div className='w-[1100px] h-[600px] overflow-hidden border-2 border-amber-300 rounded-[10px]'>
      <iframe
        src="https://www.youtube.com/embed/YcxsO0uLBqw?si=lNA-xYrHsyOIzT3q"
        title="YouTube video player"
        className='w-full h-full'
        allowFullScreen
      ></iframe>
    </div>      
    </div>
    <div className='flex justify-between items-center px-20'>
      <div>
        <p className='ml-10 mr-56'><span className='font-bold text-4xl block mb-3'>Cara membeli LuckyCoin di LuckyNetwork:</span>LuckyNetwork Store</p>
      </div>
      <div className='px-8 py-10 bg-indigo-700 flex flex-col justify-start rounded mt-7'>
        <Instruction angka="1" kalimat="Ketik https://luckynet.work/store di browser Anda."/>
        <Instruction angka="2" kalimat="Silahkan masukkan nickname minecraft Anda. Pastikan nickname yang Anda masukkan tidak salah"/>
        <Instruction angka="3" kalimat="Setelah sudah dimasukkan, silahkan klik tombol Login."/>
        <Instruction angka="4" kalimat="Pilih LuckyCoin yang ingin Anda beli sesuai dengan rank yang Anda inginkan."/>
        <Instruction angka="5" kalimat={`Setelah dipilih, silahkan klik "ADD TO CART"`}/>
        <Instruction angka="6" kalimat={`Klik "CHECKOUT" untuk melanjutkan pembayaran.`}/>
        <Instruction angka="7" kalimat="Setelah itu, akan diarahkan ke halaman payment LuckyNetwork."/>
        <Instruction angka="8" kalimat="Untuk pembayaran, LuckyCoin bisa menggunakan Dompet Digital seperti OVO, GOPAY, DANA, dan SHOPEEPAY."/>
        <Instruction angka="9" kalimat={`Jika sudah dibayar, silahkan pencet tombol "CEK STATUS PEMBAYARAN".`}/>
        <Instruction angka="10" kalimat={`Jika sudah "Purchase Successful", maka LuckyCoin sudah di transfer ke akun kamu. Apabila belum, silahkan hubungi support@luckynetwork.net.`}/>
      </div>
    </div>
    </div>
     <div className='flex justify-between items-center px-20 py-10 w-screen bg-gray-800'>
         <div className='px-8 py-10 bg-indigo-700 flex flex-col justify-start rounded'>
        <Instruction angka="1" kalimat="Silahkan ke server Hub 1, 2, 3, atau 4."/>
        <Instruction angka="2" kalimat="Klik pada hotbar ke 9 yaitu Ingame Store atau ketik /store di chat."/>
        <Instruction angka="3" kalimat="Silahkan beli rank yang Anda ingin beli sesuai dengan LuckyCoin yang Anda punya."/>
      </div>
      <div>
        <p className='ml-64 mr-48'><span className='font-bold text-4xl block mb-3'>Cara membeli rank menggunakan LuckyCoin:</span>LuckyNetwork Store</p>
      </div>
    </div>
    </>
  )
}

export default instruction
