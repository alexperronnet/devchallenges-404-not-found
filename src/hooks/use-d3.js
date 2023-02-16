import { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import PropTypes from 'prop-types'

export const useD3 = (renderChartFunction, dependencies) => {
  const chartReference = useRef()

  useEffect(() => {
    const chart = d3.select(chartReference.current)

    renderChartFunction(chart)

    return () => chart.selectAll('*').remove()
  }, dependencies)

  return { chartReference }
}

useD3.propTypes = {
  renderChartFunction: PropTypes.func.isRequired,
  dependencies: PropTypes.arrayOf(PropTypes.any).isRequired
}
