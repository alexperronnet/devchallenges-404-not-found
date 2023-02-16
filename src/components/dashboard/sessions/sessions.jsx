import { useDimensions, useD3 } from '@/hooks'
import * as d3 from 'd3'
import css from '@/components/dashboard/sessions/sessions.module.scss'

export const Sessions = ({ sessions }) => {
  const [parentReference, parentDimensions] = useDimensions()

  const { chartReference } = useD3(
    chart => {
      const { width, height } = parentDimensions
      const sizeRatio = percent => Math.round((percent / 100) * Math.min(width, height))

      const xScale = d3
        .scaleBand()
        .domain(sessions.map(({ day }) => day))
        .range([0, width])

      const yScale = d3
        .scaleLinear()
        .domain([
          d3.min(sessions, ({ sessionLength }) => sessionLength),
          d3.max(sessions, ({ sessionLength }) => sessionLength)
        ])
        .range([height / 3, 0])

      const line = d3
        .line()
        .x(({ day }) => xScale(day) + xScale.bandwidth() / 2)
        .y(({ sessionLength }) => yScale(sessionLength))
        .curve(d3.curveNatural)

      const xAxis = d3
        .axisBottom(xScale)
        .tickSize(0)
        .tickPadding(sizeRatio(5))
        .tickFormat(day => day.slice(0, 1).toUpperCase())

      // Setup SVG
      chart.attr('width', width).attr('height', height).attr('viewBox', `0 0 ${width} ${height}`)
      const chartGroup = chart.append('g').attr('transform', `translate(0, ${height / 3})`)
      const lineGroup = chartGroup.append('g')
      const pointsGroup = chartGroup.append('g')
      const tooltipGroup = chartGroup.append('g')
      const cursorsGroup = chart.append('g')
      const chartAxis = chartGroup.append('g').attr('transform', `translate(0, ${height / 2})`)
      const gradient = chart.append('defs').append('linearGradient').attr('id', 'opacityGradient')
      gradient.append('stop').attr('offset', '10%').attr('stop-color', 'var(--line)').attr('stop-opacity', 0.1)
      gradient.append('stop').attr('offset', '100%').attr('stop-color', 'var(--line)').attr('stop-opacity', 1)

      // Draw line
      lineGroup
        .append('path')
        .datum(sessions)
        .attr('d', d => line(d))
        .attr('fill', 'none')
        .attr('stroke', 'url(#opacityGradient)')
        .attr('stroke-width', sizeRatio(1.25))
        .attr('stroke-linecap', 'round')
        .attr('stroke-dasharray', () => {
          const length = chartGroup.select('path').node().getTotalLength()
          return `${length} ${length}`
        })
        .attr('stroke-dashoffset', () => chartGroup.select('path').node().getTotalLength())
        .transition()
        .duration(1000)
        .attr('stroke-dashoffset', 0)

      // Draw points
      const points = pointsGroup
        .selectAll('circle')
        .data(sessions)
        .enter()
        .append('circle')
        .attr('cx', ({ day }) => xScale(day) + xScale.bandwidth() / 2)
        .attr('cy', ({ sessionLength }) => yScale(sessionLength))
        .attr('r', sizeRatio(1.5))
        .attr('fill', 'var(--line)')
        .attr('stroke', 'var(--line)')
        .attr('stroke-opacity', 0.2)
        .attr('stroke-width', sizeRatio(2.5))
        .attr('opacity', 0)

      // Draw tooltip
      const tooltip = tooltipGroup
        .selectAll('foreignObject')
        .data(sessions)
        .enter()
        .append('foreignObject')
        .attr('class', css.tooltip)
        .attr('x', d => {
          const tooltipWidth = sizeRatio(20)
          const x = xScale(d.day) + xScale.bandwidth() / 1.5
          return x + tooltipWidth > width ? width - tooltipWidth : x
        })
        .attr('y', d => yScale(d.sessionLength) - sizeRatio(12))
        .append('xhtml:span')
        .style('font-size', `${sizeRatio(4)}px`)
        .text(d => `${d.sessionLength} min`)
        .style('opacity', 0)

      // Draw ticks
      chartAxis
        .call(xAxis)
        .call(g => g.select('.domain').remove())
        .call(g => g.selectAll('.tick text').attr('fill', 'var(--legend)').style('font-size', sizeRatio(5)))

      // Draw cursor
      const cursorRects = cursorsGroup
        .selectAll('rect')
        .data(sessions)
        .enter()
        .append('rect')
        .attr('height', height)
        .attr('width', xScale.bandwidth())
        .attr('x', d => xScale(d.day))
        .attr('fill', 'var(--cursor)')
        .attr('stroke', 'none')
        .attr('opacity', 0)

      // Display elements on mousemove
      chart.on('mousemove', event => {
        const [x] = d3.pointer(event)
        const index = Math.floor(x / xScale.bandwidth())

        cursorRects.attr('opacity', (_, index_) => (index_ >= index ? 1 : 0))
        points.attr('opacity', (_, index_) => (index_ === index ? 1 : 0))
        tooltip.style('opacity', (_, index_) => (index_ === index ? 1 : 0))
      })

      // Hide elements on mouseout
      chart.on('mouseout', () => {
        cursorRects.attr('opacity', 0)
        points.attr('opacity', 0)
        tooltip.style('opacity', 0)
      })
    },
    [parentDimensions]
  )

  return (
    <article className={css.sessions}>
      <h2 className={css.title}>Durée moyenne des sessions</h2>
      <div className={css.chartContainer} ref={parentReference}>
        <svg className={css.chart} ref={chartReference} />
      </div>
    </article>
  )
}
