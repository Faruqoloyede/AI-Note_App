import Link from 'next/link'
import React from 'react'

const Main = () => {
    const notes = [
        {
            id: 'note_1',
            title: 'First day in school',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt modi nihil eligendi natus nostrum placeat similique cum a beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae adipisci harum vitae eum voluptas quod hic asperiores, dolorem nam sint consequuntur cum distinctio earum suscipit, aliquam blanditiis commodi laborum. Quo, eius earum autem hic illo libero fugiat dolorem rem molestias.'
        },
        {
            id: 'note_2',
            title: 'Chemistry class',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt modi nihil eligendi natus nostrum placeat similique cum a beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae adipisci harum vitae eum voluptas quod hic asperiores, dolorem nam sint consequuntur cum distinctio earum suscipit, aliquam blanditiis commodi laborum. Quo, eius earum autem hic illo libero fugiat dolorem rem molestias.'
        },
        {
            id: 'note_3',
            title: 'Nextjs documentation',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt modi nihil eligendi natus nostrum placeat similique cum a beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae adipisci harum vitae eum voluptas quod hic asperiores, dolorem nam sint consequuntur cum distinctio earum suscipit, aliquam blanditiis commodi laborum. Quo, eius earum autem hic illo libero fugiat dolorem rem molestias.'
        },
        {
            id: 'note_4',
            title: 'React Hookss',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt modi nihil eligendi natus nostrum placeat similique cum a beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae adipisci harum vitae eum voluptas quod hic asperiores, dolorem nam sint consequuntur cum distinctio earum suscipit, aliquam blanditiis commodi laborum. Quo, eius earum autem hic illo libero fugiat dolorem rem molestias.'
        },
    ]

  return (
    <div className='bg-white py-6 px-6 dark:bg-secondary'>
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 justify-center mt-20'>
            <div className='bg-[#F5FBFF] dark:bg-[#222530] dark:border-[#222530] border-[1px] border-[#B9E6FE] flex items-center justify-center h-[250px]  rounded-md'>
                <Link href='/create' className='text-4xl text-[#B9E6FE] bg-white dark:bg-[#222530] dark:text-white rounded-[50%] border-[#B9E6FE]  px-4 py-2 text-center'>+</Link>
            </div>
            {notes.length === 0 ? <h1>You Don't have any saved note</h1> : (
                notes.map(({id, title, content})=>(
                    <Link href='/fullnote'>
                        <div key={id} className='bg-[#FCFCFD] dark:bg-[#222530] dark:border-[#222530] dark:text-white border-2 border-[#E4E7EC] flex flex-col h-[250px]  max-sm:w-full rounded-md'>
                        <div className='flex flex-col items-center p-4'>
                            <h4 className='font-bold text-xl'>{title}</h4>
                            <p className='text-center mt-5'>{content.substring(0, 100)}</p>
                        </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    </div>
  )
}

export default Main