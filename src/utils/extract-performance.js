const PerformanceTranslation = {
  1: 'cardio',
  2: 'énergie',
  3: 'endurance',
  4: 'force',
  5: 'vitesse',
  6: 'intensité'
}

export const extractPerformance = ({ data: { data: performance } }) => {
  const performanceFormatted = performance.map(({ kind, value }) => ({
    kind: PerformanceTranslation[kind],
    value
  }))

  const performanceReverse = performanceFormatted.reverse()

  return performanceReverse
}
