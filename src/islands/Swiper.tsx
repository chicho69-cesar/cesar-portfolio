import { useEffect, useRef, useState } from 'react'

interface SwiperProps {
  images: string[]
}

export function Swiper({ images }: SwiperProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '')
  const [imageHeight, setImageHeight] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const previewImageRef = useRef<HTMLImageElement>(null)

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image)
  }

  const handlePreviewClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (!previewImageRef.current) return

    const observer = new ResizeObserver(() => {
      const newHeight = previewImageRef.current?.clientHeight
      if (newHeight) {
        setImageHeight(newHeight)
      }
    })

    observer.observe(previewImageRef.current)

    return () => observer.disconnect()
  }, [selectedImage])

  return (
    <div className='grid grid-cols-5 gap-4'>
      <div className='flex flex-row lg:flex-col items-center col-span-5 lg:col-span-1'>
        <div
          ref={scrollContainerRef}
          className='p-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto no-scrollbar border border-neutral-300/60 dark:border-neutral-700/60 bg-neutral-200/80 dark:bg-neutral-800/80 rounded my-scroll'
          style={{ height: imageHeight ?? 'auto' }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-24 object-contain object-center cursor-pointer rounded-md 
                ${selectedImage === image
                  ? 'border-2 border-blue-500'
                  : 'border border-neutral-300/60 dark:border-neutral-700/60'
                }`}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
      </div>

      <img
        ref={previewImageRef}
        src={selectedImage}
        alt='Imagen principal'
        className='block col-span-5 lg:col-span-4 object-contain rounded-md border border-neutral-300/60 dark:border-neutral-700/60 w-full cursor-zoom-in'
        onClick={handlePreviewClick}
      />

      {isModalOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4'
          onClick={handleCloseModal}
        >
          <div className='relative max-w-full max-h-full'>
            <img
              src={selectedImage}
              alt='Imagen en grande'
              className='max-w-full max-h-[90vh] object-contain rounded'
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className='absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
