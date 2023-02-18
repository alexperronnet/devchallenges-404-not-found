import { useDimensions, useD3 } from '@/hooks'
import * as d3 from 'd3'
import css from '@/components/dashboard/activity/activity.module.scss'

export const Activity = ({ activity }) => {
  const [parentReference, parentDimensions] = useDimensions()

  const { chartReference } = useD3(
    chart => {
      const { width, height } = parentDimensions
      const sizeRatio = percent => Math.round((percent / 100) * Math.min(width, height))
      const xAxisSize = { w: width, h: sizeRatio(15) }
      const yAxisSize = { w: sizeRatio(25), h: height }
      const chartSize = { w: width - yAxisSize.w, h: height - xAxisSize.h }

      chart.attr('width', width).attr('height', height).attr('viewBox', `0 0 ${width} ${height}`)
      const xAxisGroup = chart.append('g').attr('transform', `translate(0, ${chartSize.h})`)
      const yAxisGroup = chart.append('g').attr('transform', `translate(${chartSize.w}, 0)`)
      const gridLinesGroup = chart.append('g').attr('transform', `translate(${yAxisSize.w}, 0)`)

      const xScale = d3
        .scaleBand()
        .domain(activity.map(d => d.day))
        .range([0, chartSize.w])

      const yScaleKg = d3
        .scaleLinear()
        .domain([
          Math.floor(d3.min(activity, d => d.kilogram) / 5) * 5 - 5,
          Math.ceil(d3.max(activity, d => d.kilogram) / 5) * 5
        ])
        .range([chartSize.h, 0])

      const yScaleCal = d3
        .scaleLinear()
        .domain([0, d3.max(activity, d => d.calories)])
        .range([chartSize.h, 0])

      const xAxis = d3
        .axisBottom(xScale)
        .tickFormat((_, index) => index + 1)
        .tickSize(0)
        .tickPadding(sizeRatio(10))

      const yAxisKg = d3
        .axisRight(yScaleKg)
        .ticks(3)
        .tickFormat(d => d)
        .tickSize(0)
        .tickPadding(sizeRatio(15))

      xAxisGroup.call(xAxis).select('.domain').attr('stroke', 'var(--line)').attr('stroke-width', 2)
      xAxisGroup
        .selectAll('text')
        .attr('fill', 'var(--text)')
        .style('font-size', sizeRatio(7))
        .style('font-weight', 700)

      yAxisGroup.call(yAxisKg).select('.domain').remove()
      yAxisGroup
        .selectAll('text')
        .attr('fill', 'var(--text)')
        .style('font-size', sizeRatio(7))
        .style('font-weight', 700)

      gridLinesGroup
        .selectAll('line')
        .data(yScaleKg.ticks(3).slice(1))
        .join('line')
        .attr('x1', -yAxisSize.w)
        .attr('x2', chartSize.w - yAxisSize.w)
        .attr('y1', d => yScaleKg(d))
        .attr('y2', d => yScaleKg(d))
        .attr('stroke', 'var(--line)')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3')

      const barWidth = sizeRatio(5)
      const barGap = sizeRatio(5)

      const chartGroup = chart.append('g')
      const dayGroup = chartGroup
        .selectAll('g')
        .data(activity)
        .join('g')
        .attr('transform', d => `translate(${xScale(d.day) + xScale.bandwidth() / 2 - barWidth - barGap / 2}, 0)`)

      const barPathGenerator = ({ x, y, h }) => {
        const r = barWidth / 2
        const w = barWidth
        return `M${x} ${y} a${r} ${r} 0 0 1 ${r} -${r} h${w - 2 * r} a${r} ${r} 0 0 1 ${r} ${r} v${h} h-${w} Z`
      }

      dayGroup
        .append('path')
        .attr('fill', 'var(--poids)')
        .attr('d', barPathGenerator({ x: 0, y: chartSize.h, h: 0 }))
        .transition()
        .duration(750)
        .attr('d', d =>
          barPathGenerator({
            x: 0,
            y: yScaleKg(d.kilogram) + barWidth / 2,
            h: chartSize.h - yScaleKg(d.kilogram) - barWidth / 2
          })
        )

      dayGroup
        .append('path')
        .attr('fill', 'var(--calories)')
        .attr('d', barPathGenerator({ x: barWidth + barGap, y: chartSize.h, h: 0 }))
        .transition()
        .duration(750)
        .attr('d', d =>
          barPathGenerator({
            x: barWidth + barGap,
            y: yScaleCal(d.calories) + barWidth / 2,
            h: chartSize.h - yScaleCal(d.calories) - barWidth / 2
          })
        )

      const cursorsGroup = chart.append('g')

      const cursorRects = cursorsGroup
        .selectAll('rect')
        .data(activity)
        .join('rect')
        .attr('x', d => xScale(d.day))
        .attr('width', xScale.bandwidth())
        .attr('height', chartSize.h)
        .attr('fill', 'var(--cursor)')
        .attr('opacity', 0)

      const tooltipsGroup = chart.append('g')

      const tooltips = tooltipsGroup
        .selectAll('foreignObject')
        .data(activity)
        .enter()
        .append('foreignObject')
        .attr('class', css.tooltip)
        .attr('x', d => xScale(d.day) + xScale.bandwidth() / 1.3)
        .attr('y', -sizeRatio(10))
        .append('xhtml:div')
        .attr('class', css.tooltipContent)
        .html(
          d => `
          <span class="${css.tooltipPoids}">${d.kilogram} Kg</span>
          <span class="${css.tooltipCalories}">${d.calories} kCal</span>
        `
        )
        .style('font-size', `${sizeRatio(5)}px`)
        .style('opacity', 0)

      chart.on('mousemove', event => {
        const [x] = d3.pointer(event)
        const index = Math.floor(x / xScale.bandwidth())

        cursorRects.attr('opacity', (_, index_) => (index_ === index ? 1 : 0))
        tooltips.style('opacity', (_, index_) => (index_ === index ? 1 : 0))
      })

      chart.on('mouseleave', () => {
        cursorRects.attr('opacity', 0)
        tooltips.style('opacity', 0)
      })
    },
    [parentDimensions, activity]
  )

  return (
    <article className={css.activity}>
      <header className={css.header}>
        <h2 className={css.title}>Activité quotidienne</h2>
        <div className={css.legend}>
          <span className={`${css.legendItem} ${css.poids}`}>Poids (kg)</span>
          <span className={`${css.legendItem} ${css.calories}`}>Calories brûlées (kCal)</span>
        </div>
      </header>
      <div className={css.chartContainer} ref={parentReference}>
        <svg className={css.chart} ref={chartReference} />
      </div>
    </article>
  )
}
