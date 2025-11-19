'use client'
import React from 'react'
import { useState } from "react";
import Navbar from '../component/navbar';

function Rules() {
  const [showbox, boxstatus] = useState(false)
  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-r from-gray-900 to-gray-700 w-screen h-[370px] flex justify-center items-center pt-[160px] flex-col overflow-x-hidden'>
      <h1 className='font-bold text-white text-5xl'>Rules</h1>
      <p className='font-bold text-white text-2xl mt-4'>Updated 22/04/2023 - 2.1</p>
    </div>
    <div className='w-screen h-0.5 bg-purple-200'></div>
    <div className='w-screen pt-[130px] pr-[20px] p-[20px] relative overflow-hidden bg-gray-900'>
      <div className='absolute inset-0 bg-gray-800 animate-pulse delay-1000 duration-3000'></div>
      <div className='z-10 relative'>
      <h4 className='text-3xl italic mb-6'>CHAT RULES:</h4>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>No Spamming</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>We do not allow spamming. 3+ identical or very similiar messages in a short burst of time will be considered as <span className='text-amber-300'>Spamming</span>.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>No Flooding</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>We do not allow flooding. 10+ of the same characters or just gibberish will be considered as <span className='text-amber-300'>Flooding</span>.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>No Excessive Use of Capitalization</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>We do not allow excessive use of capitalization. Using caps for more than 4 words in a row or 15 characters can be considered as <span className='text-amber-300'>Excessive use of Capitalization</span>.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>No Being Disrespectful</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>This rule is self-explanatory. Do not be mean or disrespectful towards other players. This includes any discriminatory language such as the <span className='text-red-400'>N Word</span>.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>No Harsh Words</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>We do not allow using harsh words. Harsh words is a word or phrase that is generally considered obscene, vulgar, or offensive. This also includes <span className='text-amber-300'>Racism</span>.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>No Advertising</h5>
      <h5 className='mt-3 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>We do not allow advertising. Advertising is an attempt to recruit players to a competing server by giving out the <span className='text-red-400'>Discord Link</span>, <span className='text-red-400'>Server IP</span> or <span className='text-red-400'>Server Name</span>.</h5>
      <h5 className='mt-4 mb-9 text-pink-400'>Tip: Do not click a link that does not go to a trusted website. It is probably an IP grabber.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>No Harassment</h5>
      <h5 className='mt-3 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>We do not allow harassing other players. No spamming disrespectful comments, revealing personal information, and so on.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>No Misleading Information or Hoax</h5>
      <h5 className='mt-3 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>We do not allow spreading misleading information or hoaxes. Misleading information is incorrect information given to an eyewitness following an event. For example,</h5>
      <h5 className='mb-17 text-red-400'>Type ALT+F4 to get extra each.</h5>
      <div className='mb-14 border rounded-[10px] pr-7 pl-7 pt-4 pb-4 select-none border-gray-400 bg-gray-800'>
        <p className='text-[14px]'>No server criticism and suggestions are allowed with insults. We strive to make LuckyNetwork the best. Please respect each other since LuckyNetwork exists because of you or the community that was built. Therefore, we need your support in the form of criticism and suggestions, not in the form of a server insult.</p>
      </div>
      <h4 className='text-3xl italic mb-6'>GAMEPLAY RULES:</h4>
      <h5 className='text-[20px] mt-7'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Farm Killing</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>Any form of kill farming or stats farming are strictly prohibited and will lead to a punishment.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Team Griefing</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>Team griefing on purpose in a Team Mode is highly prohibited! You are not allowed to troll your team mate too! This makes no fun for your teammate.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Approved Modifications</h5>
      <button onClick={() => boxstatus(true)} className="mb-9 mt-8 flex items-center justify-center bg-amber-400 rounded p-2 pr-5 pl-5 text-[14px] text-black hover:bg-amber-500">
          Click here to see the approved momdifications
        </button>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Bug Abuse</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>Do not use bugs within plugins or Minecraft itself to your advantage <span className='text-red-400'>e.g. duping</span>.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Trading Game Items with Real Life Money</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>You cannot sell in-game item and LuckyNetwork in-game account using REAL LIFE MONEY. You can use the in-game balance instead to do item trade.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Inappropriate Skins, Capes, or Minecraft Usernames</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>Do not use inappropriate images on your skin or cape. If your nickname is inappropriate, the ban cannot be lifted. You will need to change your nickname in order to play again. But, you cannot avoid normal ban using this way. You will recieve another ban instead if you do this.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Ban Evading</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>Ban evade is where you use different account(s) to avoid a punishment on any of your account, and it is NOT ALLOWED.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Impersonation</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>You are not allowed to impersonate staff, famous, or other players. Just be yourself!</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Third Party Programs</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>Any use of Third-Party Program to either gain an advantage over other player or to disrupt other player is not allowed.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>TP-Trapping</h5>
      <h5 className='mt-3 mb-20 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>In a gamemode that is not Player vs Player (PvP) based, any way or idea to TP-Trap people is not allowed.</h5>
      <h4 className='text-3xl italic mb-6 '>OTHER RULES:</h4>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Scamming</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>If you agree to a deal and one person fulfills their end, you have to fulfill yours.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Account Selling</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>You are not allowed to advertise or messaging people that you are selling accounts. This is basically the same as <span className='text-amber-400'>Advertising</span>.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Rank or Account Reselling</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>You are not allowed to resell your rank or your LuckyNetwork account to another player.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Donator Ranks</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>After purchasing any ranks from our server, you cannot refund it. If you break the <span className='text-amber-400'>Rank Regulation</span>, we have the right to terminate your rank.</h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Rank Migration</h5>
      <h5 className='mt-3 mb-9 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>You are allowed to transfer rank withing 1 month after the past transfer. You are not allowed to transfer rank to any account except your account. <span className='text-pink-400'>NOTICE: Stats, Item, In game Money, etc will not be transferred</span></h5>
      <h5 className='text-[20px] mt-4'><span className='text-amber-300 text-2xl mr-5 select-none'>❯</span>Account Giveaway</h5>
      <h5 className='mt-3 mb-20 text-gray-300'><span className='text-amber-500 mr-6 select-none'>-</span>You are prohibited to transfer your rank or account to different player other than yourself.</h5>
      <h4 className='text-3xl italic mb-20 '>WARNING!</h4>
      <div className='mb-14 border rounded-[10px] pr-7 pl-7 pt-4 pb-4 select-none border-gray-400 bg-gray-800'>
        <p className='text-[14px]'>NEVER TELL or GIVE your password to anyone including staff member. We never asked for your password. If you found someone asking your password, please report it immediately. Lending or giving your account to someone is very dangerous.</p>
      </div>
      <div className='mb-30 border rounded-[10px] pr-7 pl-7 pt-4 pb-4 select-none border-gray-400 bg-gray-800'>
        <p className='text-[14px]'>We will not take any responsibility if something happened to your account. You account will be compromised if we find anything suspicious. You are not allowed to SELL OR TRADE your account to anyone! This will result a ban and revoke of the rank.</p>
      </div>
      <h2 className='text-center text-[20px] p-5 pb-15'>Rules may change all of a sudden! To get information about new rules, please read this rules once a month! For staff application, you cannot apply nor will be accepted if you break the rules above!</h2>
      </div>
    </div>
    {
      showbox &&(
        <>
        <div onClick={() => boxstatus(false)} className='flex justify-center items-center h-full overflow-y-auto w-full fixed inset-0 z-[999999] bg-black/50'>
        <div className='flex flex-col justify-start p-[20px] pt-[30px] pb-[40px] bg-gray-800 w-[530px] h-[450px] rounded-[10px] border border-gray-400 relative overflow-y-auto z-[99999]'>
        <div className='absolute top-2 right-4'>
        <button onClick={() => boxstatus(false)} className="flex justify-center items-cente font-bold text-[20px]">X</button>
        </div>
        <h1 className='font-bold text-white text-2xl'>Approved Modifications</h1>
        <h4 className='italic mb-6 mt-6 text-[18px]'>Clients:</h4>
        <h5 className='text-[20px] mb-9'><span className='text-amber-300 text-[20px] mr-3 select-none'>❯</span>Badlion Client</h5>
        <div className='mb-5 border rounded-[10px] pr-7 pl-7 pt-4 pb-4 select-none border-gray-400 bg-gray-800'>
        <p className='text-[15px]'>Any client that does not fall into this category will be considered as disallowed. Which means, any modifications to the client will be used at your own risk.</p>
        </div>
        <h4 className='italic mb-6 mt-6 text-[18px]'>Mods:</h4>
        <h5 className='text-[18px] mb-5'><span className='text-amber-300 text-[20px] mr-3 select-none'>❯</span>Client Performance Mods</h5>
        <h5 className='text-[18px] mb-5'><span className='text-amber-300 text-[20px] mr-3 select-none'>❯</span>Aesthetic Mods</h5>
        <h5 className='text-[18px] mb-5'><span className='text-amber-300 text-[20px] mr-3 select-none'>❯</span>Combat Mods</h5>
        <h5 className='text-[18px] mb-10'><span className='text-amber-300 text-[20px] mr-3 select-none'>❯</span>Brightness & Gamma Mods</h5>
        <div className='mb-5 border rounded-[10px] pr-7 pl-7 pt-4 pb-4 select-none border-gray-400 bg-gray-800'>
        <p className='text-[15px]'>Any client that does not fall into this category will be considered as disallowed.</p>
        </div>
        <h4 className='italic mb-6 mt-6 text-[23px]'>Approved Modifications With Restrictions</h4>
        <h5 className='text-[18px] mt-4'><span className='text-amber-300 text-2xl mr-3 select-none'>❯</span>Minimaps</h5>
        <h5 className='mt-3 text-gray-300'><span className='text-amber-500 mr-5 select-none'>-</span>The show entities and overground view option must be disabled.. The option Topography must also be disabled.</h5>
        <h5 className='text-[18px] mt-8'><span className='text-amber-300 text-2xl mr-3 select-none'>❯</span>Toggle Sprint & Sneak</h5>
        <h5 className='mt-3 text-gray-300'><span className='text-amber-500 mr-5 select-none'>-</span>The Fly Boost option must be disabled.</h5>
        <h5 className='text-[18px] mt-8'><span className='text-amber-300 text-2xl mr-3 select-none'>❯</span>Replay Mod</h5>
        <h5 className='mt-3 text-gray-300'><span className='text-amber-500 mr-5 select-none'>-</span>The mod is not allowed for xraying or freecam purposes. However, using it to inspect claimed bases is allowed.</h5>
        <h5 className='text-[18px] mt-8'><span className='text-amber-300 text-2xl mr-3 select-none'>❯</span>InvTweaks</h5>
        <h5 className='mt-3 text-gray-300'><span className='text-amber-500 mr-5 select-none'>-</span>The mod is not allowed for auto armour or auto soup purposes. There are ways to blacklist items from being moved. Blacklisting armours, soups, and splash potions is required.</h5>
        </div>
        </div>
        </>
      )
    }
    </>
  )
}

export default Rules