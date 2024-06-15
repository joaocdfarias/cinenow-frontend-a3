'use client'

import axios from 'axios'
import CarouselComponent from '../components/Carousel'
import List from '../components/List'
import { IImages, IMovies } from '../types'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

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

export default function Home() {
  const [movies, setMovies] = useState<IMovies[]>([])

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get('https://cinenow-backend-a3.onrender.com/movie')
      setMovies(response.data)
    }

    getMovies()
  }, [])

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
