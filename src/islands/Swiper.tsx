import { useEffect, useRef, useState } from 'react'

interface SwiperProps {
  images: string[]
}

export function Swiper({ images }: SwiperProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image)
  }

  // const scroll = (direction: 'up' | 'down') => {
  //   if (scrollContainerRef.current) {
  //     const scrollAmount = direction === 'up' ? -100 : 100
  //     scrollContainerRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' })
  //   }
  // }

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.maxHeight = '400px'
    }
  }, [])

  return (
    <div className='grid grid-cols-5 gap-4'>
      <div className='flex flex-row lg:flex-col items-center col-span-5 lg:col-span-1'>
        <div
          ref={scrollContainerRef}
          className='p-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto no-scrollbar border border-neutral-300/60 dark:border-neutral-700/60 bg-neutral-200/80 dark:bg-neutral-800/80 rounded my-scroll'
          style={{ maxHeight: '300px' }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-24 object-cover cursor-pointer rounded-md ${
                selectedImage === image ? 'border-2 border-blue-500' : 'border border-neutral-300/60 dark:border-neutral-700/60'
              }`}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
      </div>

      <div className='col-span-5 lg:col-span-4'>
        <img
          src={selectedImage}
          alt='Imagen principal'
          className='w-full h-full object-cover rounded-md border border-neutral-300/60 dark:border-neutral-700/60'
        />
      </div>
    </div>
  )
}
