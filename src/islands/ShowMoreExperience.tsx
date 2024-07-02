import { useState } from 'react'

export interface ShowMoreExperienceProps {
  items: string[]
  lang?: string
}

export default function ShowMoreExperience({ items, lang = 'es' }: ShowMoreExperienceProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      {showMore ? (
        <>
          <ul className='list-disc pl-6 flex flex-col gap-2'>
            {items.map((item) => (
              <li>
                {item}
              </li>
            ))}
          </ul>
  
          <div className='w-full flex justify-center'>
            <button onClick={() => setShowMore(false)} className='text-sm font-medium mt-2'>
              {lang === 'es' ? 'Mostrar menos' : 'Show less'}
            </button>
          </div>
        </>
      ) : (
        <div className='w-full flex justify-center'>
          <button onClick={() => setShowMore(true)} className='text-sm font-medium mt-2'>
            {lang === 'es' ? 'Mostrar más...' : 'Show more...'}
          </button>
        </div>
      )}
    </>
  )
}
