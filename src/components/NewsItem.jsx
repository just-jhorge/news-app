import React from 'react'

const NewsItem = ({date, urlToImage, description, title, articleLink}) => {
  return (
    <div className='mx-auto w-[90%] md:w-72 flex flex-col bg-white rounded-md shadow-md'>
        <div className='h-[50%] bg-black'>
            <img src={urlToImage} alt='News Background' className='h-full w-full'/>
        </div>
        <div className='flex flex-col items-end p-2'>
            <div className='w-full flex items-center justify-between text-sm text-gray-500 font-semibold mb-2'>
                <h3>{date}</h3>
            </div>
            <h2 className='w-full mb-2 font-semibold'>{title}</h2>
            <p className='w-full flex-1 mb-2'>{description}</p>
            <a href={articleLink} className='capitalize border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-colors px-4 py-1 rounded-md text-sm' target='_blank'>read more</a>
        </div>
    </div>
  )
}

export default NewsItem