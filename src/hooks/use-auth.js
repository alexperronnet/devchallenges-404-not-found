import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const checkAndRedirect = (userId, navigate) => !userId && navigate('/')

export const useAuth = () => {
  const [userId, setUserId] = useState(localStorage.getItem('userId'))
  const navigate = useNavigate()

  useEffect(() => {
    checkAndRedirect(userId, navigate)
  }, [userId, navigate])

  const handleStorageChange = useCallback(event => event.key === 'userId' && setUserId(event.newValue), [])

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)

    return () => window.removeEventListener('storage', handleStorageChange)
  }, [handleStorageChange])

  return { userId }
}
