'use client'

import React, { useState } from 'react'
import { IShowTimes } from '../../app/details/page'
import { startOfDay, isSameDay } from 'date-fns'
import { format } from 'date-fns-tz'
import { ptBR } from 'date-fns/locale'

import styles from './showtimetable.module.css'

interface IShowTimeTableProps {
  showTimes: IShowTimes[]
}

const ShowTimeTable = ({ showTimes }: IShowTimeTableProps) => {
  const today = startOfDay(new Date())

  const [selectedDay, setSelectedDay] = useState<Date>(today)

  const filteredDay = showTimes.filter(
    (showTime) =>
      format(showTime.date, 'yyyy-MM-dd') === format(selectedDay, 'yyyy-MM-dd')
  )

  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          {showTimes.map((showTime) => {
            const isSelectedDay = isSameDay(showTime.date, selectedDay)

            return (
              <td
                className={`${styles.data} ${
                  isSelectedDay ? styles.active : ''
                }`}
                key={showTime.date.toString()}
                onClick={() => setSelectedDay(showTime.date)}
              >
                {format(showTime.date, 'EEEE', { locale: ptBR }).split('-')[0]}
              </td>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {filteredDay.map((day) =>
          day.times.map((times) => (
            <tr className={styles.row} key={`sala_${times.room}`}>
              <td>Sala {times.room}</td>
              {times.time.map((time) => (
                <td key={`showtime_${time}`}>
                  <p className={styles.chip}>{time}</p>
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default ShowTimeTable
