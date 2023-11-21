import React from 'react'

import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import photo01 from '../../assets/home/photo-01.png'
import photo02 from '../../assets/home/photo-02.png'
import photo03 from '../../assets/home/photo-03.png'

import { Slider as SliderStyled } from '@/styles/components/slider'

function SliderComponent() {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 900px)': {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
      '(max-width: 600px)': {
        slides: {
          perView: 1,
        },
      },
    },
  })

  const images = [photo01, photo02, photo03, photo03]

  return (
    <SliderStyled ref={sliderRef} className="keen-slider">
      {images.map((img, index) => (
        <div key={index} className="keen-slider__slide">
          <Image src={img} width={300} alt="" />
        </div>
      ))}
    </SliderStyled>
  )
}

export const Slider = React.memo(SliderComponent)
