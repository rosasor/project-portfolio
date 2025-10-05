import React, { useCallback, useEffect, useState } from 'react'
// import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import ClassNames from 'embla-carousel-class-names'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './ui/EmblaCarouselArrowButtons'
import ImageCard from './ui/ImageCard'
// import { PauseIcon, PlayIcon } from "@radix-ui/react-icons"


const images = [
    "/Elena_Rosa_Wheelen_Headshot.jpeg",
    "/Elena_Rosa_Wheelen_Headshot.jpeg",
    "/Elena_Rosa_Wheelen_Headshot.jpeg",
    "/Elena_Rosa_Wheelen_Headshot.jpeg",
];


const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ watchDrag: false, loop: true}, [
    AutoScroll({
      playOnInit: true,
      speed: .6,
      stopOnFocusIn: false,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      startDelay: 0
    }),
    ClassNames()
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

//   const toggleAutoplay = useCallback(() => {
//     const autoScroll = emblaApi?.plugins()?.autoScroll
//     if (!autoScroll) return

//     const playOrStop = autoScroll.isPlaying()
//       ? autoScroll.stop
//       : autoScroll.play
//     playOrStop()
//   }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return (
    <div className="embla m-auto md:max-w-[80%] mt-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container group flex">
          {images.map((item, index) => (
            <div
              className="embla__slide min-w-60 pl-[var(--slide-spacing)] [transform:translate3d(0,0,0)] basis-[var(--slide-size)] shrink-0 grow-0"
              key={index}
            >
              <div className="embla__slide__number flex items-center justify-center h-[var(--slide-height)] select-none [user-select:none]">
                <ImageCard image={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex mt-8 gap-6">
            
            <PrevButton
                onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                disabled={prevBtnDisabled}
            />

            {/* <button
            className="
                min-w-10 px-3 py-1
                appearance-none cursor-pointer
                text-neutral-800 dark:text-neutral-200
                "
            onClick={toggleAutoplay}
            type="button"
            >
            {isPlaying ? 
                <PauseIcon 
                    aria-hidden
                    width={20}
                    height={20}
                    className="text-black dark:text-white 
                    rounded-lg
                    bg-none hover:bg-neutral-200 dark:hover:bg-neutral-700 
                    transition-colors hover:text-violet-600 dark:hover:text-violet-400 hidden"
                /> 
                : 
                <PlayIcon 
                    aria-hidden
                    width={20}
                    height={20}
                    className="text-black dark:text-white 
                    rounded-lg
                    bg-none hover:bg-neutral-200 dark:hover:bg-neutral-700 
                    transition-colors hover:text-violet-600 dark:hover:text-violet-400 hidden"
                />
            }
            </button> */}
            
            <NextButton
                onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                disabled={nextBtnDisabled}
            />
        </div>

        
      </div>
    </div>
  )
}

export default EmblaCarousel
