import { createContext } from 'react'
import { useAuth, useFetchData } from '@/hooks'
import PropTypes from 'prop-types'

const DataContext = createContext()

/**
 * Component that provides data to its children via a context API.
 * @function DataProvider
 * @param {object} children - The child elements that need to access the data.
 * @returns {JSX.Element} Returns a context provider that provides data to its children.
 */
export const DataProvider = ({ children }) => {
  const { userId } = useAuth()
  const { data, loading, error } = useFetchData(userId)

  return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>
}

/**
 * Component that consumes data provided by the DataProvider component.
 * @constant
 * @type {object}
 */
export const DataConsumer = DataContext.Consumer

DataProvider.propTypes = {
  children: PropTypes.node.isRequired
}
