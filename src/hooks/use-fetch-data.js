import { useState, useEffect, useMemo } from 'react'
import { extractActivity, extractAverageSessions, extractMainData, extractPerformance } from '@/utils'

const dataUrl = import.meta.env.MODE === 'development' ? import.meta.env.VITE_MOCK_API : import.meta.env.VITE_API_URL
const extension = import.meta.env.MODE === 'development' ? '.json' : ''

export const useFetchData = userId => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const endpoints = useMemo(
    () => ({
      mainData: `${dataUrl}/${userId}${extension}`,
      activity: `${dataUrl}/${userId}/activity${extension}`,
      averageSessions: `${dataUrl}/${userId}/average-sessions${extension}`,
      performance: `${dataUrl}/${userId}/performance${extension}`
    }),
    [userId]
  )

  const fetchData = async () => {
    try {
      const [mainData, activity, averageSessions, performance] = await Promise.all(
        Object.values(endpoints).map(url => fetch(url).then(response => response.json()))
      )

      setData({
        mainData: extractMainData(mainData),
        activity: extractActivity(activity),
        averageSessions: extractAverageSessions(averageSessions),
        performance: extractPerformance(performance)
      })
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData()
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [userId])

  return { data, loading, error }
}
