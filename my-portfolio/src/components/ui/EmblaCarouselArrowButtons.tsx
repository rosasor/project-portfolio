import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons"
import { motion } from 'framer-motion'


type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <motion.div
            className=""
            whileHover={{
                scale: 1.1,
                transition: { duration: .1 }
                }}
                transition={{ duration: 0.1 }}
        >
            <button
            className="p-1 cursor-pointer
            rounded-lg bg-none hover:bg-neutral-200 dark:hover:bg-neutral-700
            transition-colors hover:text-violet-600 dark:hover:text-violet-400
            focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-lg"
            type="button"
            {...restProps}
            >
            <ChevronLeftIcon 
                    aria-hidden
                    width={20}
                    height={20}
                    className=""
            />
            {children}
            </button>
        </motion.div>
    )
}

export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <motion.div
        className=""
        whileHover={{
            scale: 1.1,
            transition: { duration: .1 }
            }}
            transition={{ duration: 0.1 }}
        > 
            <button
                className="p-1 cursor-pointer
                rounded-lg bg-none hover:bg-neutral-200 dark:hover:bg-neutral-700
                transition-colors hover:text-violet-600 dark:hover:text-violet-400
                focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-lg"
                type="button"
                {...restProps}
            >
        
                        <ChevronRightIcon
                            aria-hidden
                            width={20}
                            height={20}
                            className=""
                            />
                {children}
            </button>
        </motion.div>
    )
}
