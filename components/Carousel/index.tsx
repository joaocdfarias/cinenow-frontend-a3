'use client'

import React from 'react'

import Carousel from 'react-multi-carousel'

import { IImages } from '../../types'

import styles from './carousel.module.css'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'

interface ICarouselProps {
  images?: IImages[]
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const CarouselComponent = ({ images }: ICarouselProps) => {
  return (
    <Carousel
      ssr
      showDots
      keyBoardControl
      autoPlay
      infinite
      responsive={responsive}
      dotListClass={styles.dot}
      autoPlaySpeed={3000}
      arrows={false}
    >
      {images?.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          alt={image.description}
          className={styles.image}
          width={1920}
          height={1080}
        />
      ))}
    </Carousel>
  )
}

export default CarouselComponent
