'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { temperatureOptions } from '../data-fetching/data'

export function TempData() {
  const { data } = useSuspenseQuery(temperatureOptions)

  return (
    <div>
      <figure>
        <h2>{data.temp}</h2>
        <h2>{data.date}</h2>
      </figure>
    </div>
  );
}