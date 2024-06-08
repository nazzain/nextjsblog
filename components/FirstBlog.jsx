
import React from 'react'
import Image from 'next/image'
import demoImage from '@/public/img/demo_image.jpg'
import { AiTwotoneCalendar } from "react-icons/ai";
import moment from "moment";
import Link from 'next/link'


const FirstBlog = ({firstBlog}) => {
    const timeStr = firstBlog?.createdAt;
      const time = moment(timeStr);
      const formattedTime = time.format("MMMM Do YYYY");
  return (
    <section>
        <Link href={`./blog/${firstBlog?._id}`}>
    <div className='flex flex-col md:flex-row itams-center gap-8'>
    <div className='w-full lg:w-2/5'>
        <Image src={firstBlog?.image ? firstBlog.image?.url: demoimage} 
        alt='first blog image' width={0} height={0} sizes='100vw' className='w-full h-full rounded-lg mx-4' 
        />
    </div>
        <div className='w-full lg:w-3/5 space-y-5 mx-4'>
        <div className='flex items-center gap-3 text-xs mx-2'>
         <p className="text-primaryColor">{firstBlog?.category}</p>
        <p className='flex items-center gap-1 mx-2 text-paragraphColor'>
        <AiTwotoneCalendar/>
        {formattedTime}
        </p>
        </div>
     
     <div className='space-y-2 mx-4'>
        <h2>{firstBlog?.title}</h2>
        <p className='text-sm text-paragraphColor'>
            {firstBlog?.excerpt}
        </p>
        </div>
        
        <div className='flex items-center gap-3 mx-4 py-8'>
            <Image src={firstBlog?.autherId?.avatar?.url
            ? firstBlog?.autherId?.url
            :demoImage
        }
        alt='picture of the auther'
        width={0}
        height={0}
        sizes='100vw'
        className='w-10 h-10   rounded-full'
        />
        <div className='text-xs '>
            <h4 className='mt-1 '>{firstBlog?.authorId.name}</h4>
            <p className='text-paragraphColor  mx-1'>{firstBlog?.authorId.designation}</p>
        </div>
            </div> 
    </div>
    </div>
    </Link>
    </section>
  );
}

export default FirstBlog;
