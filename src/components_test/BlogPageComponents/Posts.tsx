import React from 'react'

export interface BlogPost {
  img: string;
  date: string;
  icon: React.ReactNode;
  read: number;
  title: string;
  subtitle: string;
  views: number;
  comments: number;
  likes: number;
  heartIcon: React.ReactNode;
}

const Posts = ({arr}:any) => {

  return (
    <div className='pt-5 pb-5 md:p-20 flex flex-col items-center' style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <div className='flex flex-col gap-5'>
        {arr.map((item: BlogPost, index: number) => {
            return(
            <div key={index} className='border max-h-[400px] border-black flex w-full xl:min-w-[800px] xl:max-w-[800px] '>
                <div className=''>
                    <img className='max-w-[200px] h-full xl:max-w-[400px]' src={item.img} alt="" />
                </div>
                <div className='p-1 md:p-5 flex flex-col justify-between w-full border'>
                    <div className='flex items-center justify-between gap-5'>
                        <div className='flex items-center justify-center gap-3'>
                            <span className='font-light text-xs'>{item.date}</span>
                            <div className='flex items-center text-center mb-2'><p>.</p></div>
                            <span className='font-light text-xs'>{item.read} min read</span>
                        </div>
                        <div>
                            <div>{item.icon}</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-semibold'>{item.title}</h1>
                        <p className='font-light text-xs text-gray-500'>{item.subtitle}</p>
                    </div>
                    <div className='border-t-1 flex gap-2 p-2 justify-between'>
                        <div className='flex  gap-2'>
                            <p className='font-light text-xs text-gray-500'>{item.views} views</p>
                            <p className='font-light text-xs text-gray-500'>{item.comments} comments</p>
                        </div>
                        <div className='flex gap-1'>
                            <p className='font-light text-xs text-gray-500'>{item.likes} likes</p>
                            <div>{item.heartIcon}</div>
                        </div>
                    </div>

                </div>
            </div>
        )})}
        
      </div>
    </div>
  )
}

export default Posts


