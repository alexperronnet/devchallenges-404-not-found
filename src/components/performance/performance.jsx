import { useDimensions, useD3 } from '@/hooks'
import * as d3 from 'd3'
import css from '@/components/performance/performance.module.scss'

export const Performance = ({ performance }) => {
  const [parentReference, parentDimensions] = useDimensions()

  const { chartReference } = useD3(
    chart => {
      const { width, height } = parentDimensions
      const sizeRatio = percent => Math.round((percent / 100) * Math.min(width, height))
      const margin = sizeRatio(15)
      const radarRadius = sizeRatio(50) - margin

      chart.attr('width', width).attr('height', height).attr('viewBox', `0 0 ${width} ${height}`)
      const chartGroup = chart.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`)

      const scaleRadius = d3
        .scaleLinear()
        .domain([0, d3.max(performance, d => d.value)])
        .range([0, radarRadius])

      const scaleAngle = d3
        .scaleLinear()
        .domain([0, performance.length])
        .range([0, 2 * Math.PI])

      const levels = 5
      const radarGenerator = Array.from({ length: levels }, (_, index) =>
        d3
          .lineRadial()
          .angle((_, index_) => scaleAngle(index_))
          .radius(scaleRadius.range()[1] * (index + 1) * (1 / levels))
          .curve(d3.curveCardinalClosed.tension(0.8))
      )

      chartGroup
        .selectAll('path')
        .data(radarGenerator)
        .enter()
        .append('path')
        .attr('d', d => d(performance))
        .attr('fill', 'none')
        .attr('stroke', 'var(--radar)')
        .attr('stroke-width', 2)
        .attr('opacity', (_, index) => (index + 1) * (1 / levels))

      chartGroup
        .selectAll('text')
        .data(performance)
        .enter()
        .append('text')
        .attr('x', (_, index) => radarRadius * Math.cos(scaleAngle(index) - Math.PI / 2) * 1.35)
        .attr('y', (_, index) => radarRadius * Math.sin(scaleAngle(index) - Math.PI / 2) * 1.2)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .attr('fill', 'var(--radar)')
        .style('font-size', sizeRatio(4.25))
        .text(d => d.kind)

      const radarAreaGenerator = d3
        .areaRadial()
        .angle((_, index) => scaleAngle(index))
        .outerRadius(d => scaleRadius(d.value))
        .curve(d3.curveCardinalClosed.tension(0.8))

      chartGroup
        .append('path')
        .attr('fill', 'var(--performance)')
        .attr('fill-opacity', 0.5)
        .attr('stroke', 'var(--performance)')
        .attr('stroke-width', 2)
        .transition()
        .duration(1000)
        .attrTween('d', () => {
          const interpolator = d3.interpolate(
            performance.map(d => ({ ...d, value: 0 })),
            performance
          )
          return t => radarAreaGenerator(interpolator(t))
        })
    },
    [parentDimensions, performance]
  )

  return (
    <div className={css.performance} ref={parentReference}>
      <svg ref={chartReference} className={css.chart} />
    </div>
  )
}
