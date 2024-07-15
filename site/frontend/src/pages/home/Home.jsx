import React from 'react'
import HomeCategories from './layouts/HomeCategories'
import HomeHead from './layouts/HomeHead'
import WeekPlan from './WeekPlan'
import FavPlan from './layouts/FavPlan'
import Patner from './layouts/Patner'
import Popular from './layouts/Popular'
import AppSection from './AppSection'
import HomeEvent from './layouts/HomeEvent'

export default function Home() {
  return (
    <>
        <HomeHead />
        <HomeCategories />
        <WeekPlan />
        <HomeEvent />
        <FavPlan />
        <Patner />
        <Popular />
    </>
  )
}
