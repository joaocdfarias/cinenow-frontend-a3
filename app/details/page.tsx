import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import ShowTimeTable from '../../components/ShowTimeTable'
import { startOfDay, addDays } from 'date-fns'

interface IMovieInfo {
  releaseYear: number
  director: string
  duration: number
  rating: number
}

interface ITimes {
  room: number
  time: string[]
}

export interface IShowTimes {
  date: Date
  times: ITimes[]
}

interface IMovie {
  posterUrl: string
  title: string
  info: IMovieInfo
  synopsis: string
  showTimes: IShowTimes[]
  trailerUrl: string
  backgroundImage: string
}

const today = new Date()

const movie: IMovie = {
  posterUrl: '/images/poster1.jpg',
  title: 'Dune: Part 2',
  info: {
    releaseYear: 2024,
    director: 'Denis Villeneuve',
    duration: 148,
    rating: 14,
  },
  synopsis:
    "Paul Atreides, agora conhecido como Muad'Dib, uniu-se aos Fremen e busca vingança contra os Harkonnen pelo massacre de sua família. Em meio a uma guerra santa em seu nome, ele precisa navegar entre o amor por Chani e o destino da humanidade, enquanto luta para evitar um futuro terrível que só ele pode prever.",
  showTimes: [
    {
      date: startOfDay(today),
      times: [
        {
          room: 1,
          time: ['14:00', '16:30', '19:00', '21:30'],
        },
        {
          room: 2,
          time: ['14:00', '16:30', '19:00', '21:30'],
        },
      ],
    },
    {
      date: startOfDay(addDays(today, 1)),
      times: [
        {
          room: 1,
          time: ['11:00', '13:30', '16:00', '18:30', '21:00'],
        },
        {
          room: 2,
          time: ['11:00', '13:30', '18:30', '21:00'],
        },
      ],
    },
    {
      date: startOfDay(addDays(today, 3)),
      times: [
        {
          room: 1,
          time: ['11:00', '13:30', '16:00', '18:30', '21:00'],
        },
        {
          room: 2,
          time: ['11:00', '18:30', '21:00'],
        },
      ],
    },
    {
      date: startOfDay(addDays(today, 4)),
      times: [
        {
          room: 1,
          time: ['11:00', '13:30', '21:00'],
        },
        {
          room: 2,
          time: ['11:00', '13:30', '16:00', '18:30', '21:00'],
        },
      ],
    },
    {
      date: startOfDay(addDays(today, 5)),
      times: [
        {
          room: 1,
          time: ['11:00', '13:30', '18:30', '21:00'],
        },
        {
          room: 2,
          time: ['11:00', '13:30', '16:00', '18:30', '21:00'],
        },
      ],
    },
    {
      date: startOfDay(addDays(today, 6)),
      times: [
        {
          room: 1,
          time: ['11:00', '13:30', '16:00', '18:30', '21:00'],
        },
        {
          room: 2,
          time: ['11:00', '13:30', '16:00', '18:30', '21:00'],
        },
      ],
    },
    {
      date: startOfDay(addDays(today, 7)),
      times: [
        {
          room: 1,
          time: ['11:00', '13:30', '16:00', '18:30', '21:00'],
        },
        {
          room: 2,
          time: ['11:00', '13:30', '16:00', '18:30', '21:00'],
        },
      ],
    },
  ],
  trailerUrl: 'https://www.youtube.com/watch?v=Way9Dexny3w',
  backgroundImage: '/images/image4.jpeg',
}

export default function Details() {
  return (
    <main className={styles.main}>
      <div
        className={styles.hero}
        style={{
          backgroundColor: 'red',
          backgroundImage: `linear-gradient(
        to bottom,
        rgb(0 0 0 / 40%),
        rgb(0 0 0 / 40%)
      ), url(${movie.backgroundImage})`,
        }}
      >
        <div className={styles.container}>
          <div className={styles.movieContainer}>
            <Image
              src={movie.posterUrl}
              width={210}
              height={303}
              alt={`Poster do filme ${movie.title}`}
              style={{ borderRadius: '8px' }}
            />
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <p className={styles.title}>{movie.title}</p>
                <ul className={styles.list}>
                  <li>
                    <strong>Ano de lançamento:</strong> {movie.info.releaseYear}
                  </li>
                  <li>
                    <strong>Diretor:</strong> {movie.info.director}
                  </li>
                  <li>
                    <strong>Tempo de filme:</strong> {movie.info.duration} min
                  </li>
                  <li>
                    <strong>Classificação indicativa:</strong>{' '}
                    {movie.info.rating} anos
                  </li>
                </ul>
              </div>
              <div className={styles.synopsis}>
                <p className={styles.synopsisTitle}>Sinópse</p>
                <p className={styles.synopsisText}>{movie.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.heading}>Horários</p>
        <ShowTimeTable showTimes={movie.showTimes} />
        <p className={styles.heading}>Trailer</p>
        <div className={styles.videoWrapper}>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/_YUzQa_1RCE?si=NoLtXS7UhZGuvsz1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={styles.video}
          ></iframe>
        </div>
      </div>
    </main>
  )
}
