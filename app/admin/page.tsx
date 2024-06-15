'use client'

import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

import styles from './page.module.css'
import Card from '../../components/Card'
import Image from 'next/image'
import axios from 'axios'
import { format } from 'date-fns'
import Link from 'next/link'

const headings = ['Poster', 'Nome', 'Data de lançamento', 'Data de fim', '']

export interface IMovie {
  createdAt: Date
  directorName: string
  duration: string
  endDate: Date
  id: number
  parentalRating: string
  posterUrl: string
  startDate: Date
  synopsis: string
  title: string
  updateAt: Date
}

export default function Admin() {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        'https://cinenow-backend-a3.onrender.com/movie'
      )
      setMovies(response.data)
    }

    getMovies()
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerSection}>
          <p className={styles.headerTitle}>Filmes</p>

          <Link href="/create">
            <Button variant="contained" size="default">
              Adicionar +
            </Button>
          </Link>
        </div>
        <div className={styles.headerSection}>
          <Input placeholder="Digite aqui o nome do filme" />
          <Button variant="contained" size="default">
            Buscar
          </Button>
        </div>
      </div>
      <Card className={styles.table}>
        <table>
          <thead className={styles.head}>
            <tr>
              {headings.map((heading) => {
                return (
                  <td className={styles.data} key={heading}>
                    {heading}
                  </td>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie.id} className={styles.row}>
                  <td>
                    <Image
                      src={movie.posterUrl}
                      alt={`Poster do filme ${movie.title}`}
                      height={170}
                      width={117}
                    />
                  </td>
                  <td>
                    <p> {movie.title} </p>
                  </td>
                  <td>
                    <p> {format(movie.startDate, 'dd/MM/yyyy')} </p>
                  </td>
                  <td>
                    <p> {format(movie.endDate, 'dd/MM/yyyy')} </p>
                  </td>
                  <td>
                    <Link href={`/create?id=${movie.id}`}>
                      <Button variant="contained">Editar</Button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>
    </main>
  )
}
