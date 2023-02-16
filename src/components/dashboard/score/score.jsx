import { useDimensions, useD3 } from '@/hooks'
import * as d3 from 'd3'
import css from '@/components/dashboard/score/score.module.scss'

export const Score = ({ score }) => {
  const [parentReference, parentDimensions] = useDimensions()

  const { chartReference } = useD3(
    chart => {
      const { width, height } = parentDimensions
      const sizeRatio = percent => Math.round((percent / 100) * Math.min(width, height))
      const margin = sizeRatio(13)
      const thickness = sizeRatio(5)
      const outerRadius = sizeRatio(50) - margin
      const innerRadius = outerRadius - thickness

      const arcGenerator = amount =>
        d3
          .arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
          .cornerRadius(thickness / 2)
          .startAngle(0)
          .endAngle(amount * 2 * Math.PI)

      chart.attr('width', width).attr('height', height).attr('viewBox', `0 0 ${width} ${height}`)
      const chartGroup = chart.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`)

      chartGroup.append('circle').attr('r', innerRadius).attr('fill', 'var(--background)')

      chartGroup.append('path').attr('fill', 'var(--remaining)').attr('d', arcGenerator(1))

      chartGroup
        .append('path')
        .attr('fill', 'var(--progress)')
        .transition()
        .duration(1000)
        .attrTween('d', () => {
          const interpolator = d3.interpolate(0, -score)
          return t => arcGenerator(interpolator(t))()
        })

      chartGroup
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'mathematical')
        .attr('dy', -sizeRatio(6))
        .attr('fill', 'var(--title)')
        .style('font-size', sizeRatio(8))
        .style('font-weight', 'bold')
        .transition()
        .duration(1000)
        .tween('text', () => {
          const interpolator = d3.interpolate(0, score)
          return t => chart.select('text').text(`${Math.round(interpolator(t) * 100)}%`)
        })

      chartGroup
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'mathematical')
        .attr('dy', sizeRatio(6))
        .attr('fill', 'var(--baseline)')
        .style('font-size', sizeRatio(5))
        .text('de votre objectif')
    },
    [parentDimensions, score]
  )

  return (
    <article className={css.score}>
      <h2 className={css.title}>Score</h2>
      <div className={css.chartContainer} ref={parentReference}>
        <svg className={css.chart} ref={chartReference} />
      </div>
    </article>
  )
}
