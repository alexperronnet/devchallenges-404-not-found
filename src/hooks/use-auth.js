import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState(localStorage.getItem('userId'))

  const handleStorageChange = useCallback(event => event.key === 'userId' && setUserId(event.newValue), [])

  useEffect(() => {
    !userId && navigate('/')
    window.addEventListener('storage', handleStorageChange)

    return () => window.removeEventListener('storage', handleStorageChange)
  }, [userId, navigate, handleStorageChange])

  return { userId }
}
