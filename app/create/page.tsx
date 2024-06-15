'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'

import Button from '../../components/Button'
import Input from '../../components/Input'

import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { IMovie } from '../admin/page'
import { useSearchParams } from 'next/navigation'
import { format } from 'date-fns'

const CreateMovieSchema = z.object({
  title: z.string(),
  directorName: z.string(),
  duration: z.string(),
  parentalRating: z.number(),
  startDate: z.date(),
  endDate: z.date(),
  posterUrl: z.any(),
  synopsis: z.string(),
})

export interface ICreateMovie extends z.infer<typeof CreateMovieSchema> {}

export default function Create() {
  const [movie, setMovie] = useState<Partial<IMovie>>({})
  const id = useSearchParams().get('id')

  const defaultValues: ICreateMovie = {
    title: movie.title!,
    directorName: movie.directorName!,
    duration: movie.duration!,
    endDate: movie.endDate!,
    parentalRating: movie.parentalRating!,
    startDate: movie.startDate!,
    synopsis: movie.synopsis!,
  }

  const { register, handleSubmit, reset } = useForm<ICreateMovie>({
    resolver: zodResolver(CreateMovieSchema),
    defaultValues,
  })

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        'https://cinenow-backend-a3.onrender.com/movie/' + id
      )
      setMovie(response.data)
      reset({
        ...response.data,
        startDate: format(response.data.startDate, 'yyyy-MM-dd'),
        endDate: format(response.data.endDate, 'yyyy-MM-dd'),
      })
    }

    getMovie()
  }, [id, reset])

  const uploadPoster = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append('file', file, file.name)

    try {
      const response = await axios.post(
        'https://cinenow-backend-a3.onrender.com/movie/upload',
        formData
      )
      return response.data.publicUrl
    } catch (error) {
      console.error('Error uploading poster:', error)
      throw error
    }
  }

  const createMovie = async (data: ICreateMovie, posterUrl: string) => {
    const movieData = {
      title: data.title,
      directorName: data.directorName,
      parentalRating: data.parentalRating,
      duration: data.duration,
      synopsis: data.synopsis,
      posterUrl,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    }

    try {
      await axios.post(
        'https://cinenow-backend-a3.onrender.com/movie',
        movieData
      )
    } catch (error) {
      console.error('Error creating movie:', error)
      throw error
    }
  }

  const onSubmit = async (data: ICreateMovie) => {
    console.log(data)
    try {
      const file = data.posterUrl[0]
      const posterUrl = await uploadPoster(file)
      await createMovie(data, posterUrl)
    } catch (error) {
      console.error('Error during submission:', error)
    }
  }

  return (
    <main className={styles.container}>
      <p>Adicionar/Editar</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <Input
            label="Nome do filme"
            placeholder="Digite o nome do filme"
            id="title"
            {...register('title')}
          />
          <Input
            label="Nome do diretor"
            placeholder="Digite o nome do diretor"
            id="directorName"
            {...register('directorName')}
          />
          <Input label="Duração" {...register('duration')} id="duration" />
          <Input
            label="Classificação indicativa"
            type="number"
            id="parentalRating"
            {...register('parentalRating')}
          />
          <Input
            label="Data de estreia"
            type="date"
            id="startDate"
            {...register('startDate')}
          />
          <Input
            label="Data de fim"
            type="date"
            {...register('endDate')}
            id="endDate"
          />
        </div>
        <div style={{ display: 'flex', gap: '16px', marginTop: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="synopsis" style={{ color: 'white' }}>
              Sinópse
            </label>
            <textarea
              style={{
                backgroundColor: 'white',
                border: '1px solid #E05252',
                borderRadius: '8px',
              }}
              id="synopsis"
              cols={60}
              rows={10}
              {...register('synopsis')}
            />
          </div>
          <Input
            type="file"
            label="Poster"
            {...register('posterUrl')}
            id="posterUrl"
          />
        </div>
        <Button variant="contained" type="submit">
          Concluir
        </Button>
      </form>
    </main>
  )
}
