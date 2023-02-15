const PerfomanceTranslation = {
  1: 'cardio',
  2: 'énergie',
  3: 'endurance',
  4: 'force',
  5: 'vitesse',
  6: 'intensité'
}

export const extractPerformance = performance => {
  const data = performance.data.data

  return data
    .map(({ kind, value }) => ({
      kind: PerfomanceTranslation[kind],
      value
    }))
    .reverse()
}
