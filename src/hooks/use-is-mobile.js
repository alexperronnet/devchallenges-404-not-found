import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const useIsMobile = width => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < width)

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [width])

  return { isMobile }
}

useIsMobile.propTypes = {
  width: PropTypes.number.isRequired
}
