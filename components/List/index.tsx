'use client'

import React from 'react'
import Carousel, { ResponsiveType } from 'react-multi-carousel'
import { IMovies } from '../../types'

import styles from './list.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface IListProps {
  title: string
  movies?: IMovies[]
}

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
    partialVisibilityGutter: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
}

const List = ({ title, movies }: IListProps) => {
  return (
    <section>
      <h2 className={styles.heading}> {title} </h2>
      <Carousel
        ssr
        keyBoardControl
        partialVisible
        draggable={false}
        className={styles.movies}
        responsive={responsive}
      >
        {movies?.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className={styles.movie}>
              <Image
                className={styles.poster}
                src={movie.posterUrl}
                alt={movie.title}
                height={383}
                width={250}
              />
              <p className={styles.title}> {movie.title} </p>
            </div>
          </Link>
        ))}
      </Carousel>
    </section>
  )
}

export default List
