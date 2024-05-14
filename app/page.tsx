'use client'

import CarouselComponent from '../components/Carousel'
import List from '../components/List'
import { IImages, IMovies } from '../types'
import styles from './page.module.css'

const images: IImages[] = [
  { id: 'image1', url: '/images/image1.jpg', description: 'Dune movie' },
  {
    id: 'image2',
    url: '/images/image2.jpg',
    description: 'Interstellar movie',
  },
  {
    id: 'image3',
    url: '/images/image3.jpeg',
    description: 'Pulp Fiction movie',
  },
]

const movies: IMovies[] = [
  {
    id: '1',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '2',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '3',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '4',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '5',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '6',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '7',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '8',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '9',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
  {
    id: '10',
    title: 'Dune 2',
    poster: '/images/poster1.jpg',
  },
]

export default function Home() {
  return (
    <main>
      <CarouselComponent images={images} />
      <div className={styles.container}>
        <div className={styles.movies}>
          <List title="Em cartaz" movies={movies} />
          <List title="Em breve" movies={movies} />
        </div>
      </div>
    </main>
  )
}
