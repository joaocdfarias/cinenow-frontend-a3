'use client'

import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

import styles from './page.module.css'
import Card from '../../components/Card'
import Image from 'next/image'

const headings = ['Poster', 'Nome', 'Data de lançamento', 'Data de fim', '']
const movies = [
  {
    id: 1,
    posterUrl: '/images/poster1.jpg',
    title: 'Dune 2',
    startDate: '01/01/2024',
    endDate: '01/02/2024',
  },
  {
    id: 2,
    posterUrl: '/images/poster1.jpg',
    title: 'Dune 2',
    startDate: '01/01/2024',
    endDate: '01/02/2024',
  },
]

export default function Admin() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerSection}>
          <p className={styles.headerTitle}>Filmes</p>
          <Button variant="contained" size="default">
            Adicionar +
          </Button>
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
                    <p> {movie.startDate} </p>
                  </td>
                  <td>
                    <p> {movie.endDate} </p>
                  </td>
                  <td>
                    <Button variant="contained">Editar</Button>
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
