import { createContext } from 'react'
import { useAuth, useFetchData } from '@/hooks'
import PropTypes from 'prop-types'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const { userId } = useAuth()
  const { data, loading, error } = useFetchData(userId)

  return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>
}

export const DataConsumer = DataContext.Consumer

DataProvider.propTypes = {
  children: PropTypes.node.isRequired
}
