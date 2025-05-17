import React from 'react'
import SegevPhoto4 from '../../assets/SegevPhoto4.avif'
import SegevPhoto5 from '../../assets/SegevPhoto5.avif'
import SegevPhoto6 from '../../assets/SegevPhoto6.avif'


const WhyYou = () => {
  return (
    <div className='p-10 w-full flex flex-col items-center gap-5'> 
    <div className='flex flex-col gap-10 max-w-[850px]'>
      <div className=''>
        <h3 className='text-4xl' style={{ fontFamily: "Wix Madefor Text sans-serif" }}>Why you should<br /> choose Sapir Skincare</h3>
      </div>
      <div className='grid gap-25 md:flex justify-between'>
        <div className='flex flex-row gap-3 max-w-[230px] md:flex-col'>
            <div>
                <h3 className='block md:hidden text-4xl md:text-lg' style={{ fontFamily: "Wix Madefor Text sans-serif" }}>THE SAPIR DIFFERENCE </h3>
                <img src={SegevPhoto4} alt="" className='max-w-[230px] max-h-[230px]' />
                <h3 className='hidden md:block text-4xl md:text-lg' style={{ fontFamily: "Wix Madefor Text sans-serif" }}>THE SAPIR DIFFERENCE </h3>
            </div>
            <p className='font-light text-sm'>My approach to skincare is the combination of hands on treatment with the latest innovations in aesthetics.By intertwining my traditional hands on treatment with innovative new technology I aspire provide the best of both worlds.</p>
        </div>
        <div className='flex flex-row gap-3 max-w-[230px] md:flex-col '>
            <div className=''>
                <h3 className='block md:hidden text-4xl md:text-lg' style={{ fontFamily: "Wix Madefor Text sans-serif" }}>THE PRODUCTS</h3>
                <img src={SegevPhoto5} alt="" className='max-w-[230px] max-h-[230px]' />
                <h3 className='hidden md:block text-4xl md:text-lg' style={{ fontFamily: "Wix Madefor Text sans-serif" }}>THE PRODUCTS</h3>
            </div>
            <div>
                <p className='font-light text-sm'>The search for the prefect products took me a while.I was looking for professional products from clinical and medical grade brands, to completely natural, plant based.I carry a variety of products from Europe, Israel and USA, which enables me to build and tailor your treatments and after care to achieve the best results.</p>
            </div>
        </div>
        <div className='flex flex-row gap-3 max-w-[230px] md:flex-col'>
            <div>
                <h3 className='block md:hidden text-4xl md:text-lg' style={{ fontFamily: "Wix Madefor Text sans-serif" }}>THE SPA </h3>
                <img src={SegevPhoto6} alt="" className='max-w-[230px] max-h-[230px]'/>
                <h3 className='hidden md:block text-4xl md:text-lg' style={{ fontFamily: "Wix Madefor Text sans-serif" }}>THE SPA </h3>
            </div>
            <div>
                <p className='font-light text-sm'>Sapir Skincare, located in the heart of rodeo Drive, offering a private, immaculately-clean oasis spa.Take a well-deserved break from the stresses of your busy day to focus on you. With a full-range of professional treatments, inviting you to come and recharge your mind, body and Soul.</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WhyYou
