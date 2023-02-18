const days = Object.fromEntries([
  [1, 'lundi'],
  [2, 'mardi'],
  [3, 'mercredi'],
  [4, 'jeudi'],
  [5, 'vendredi'],
  [6, 'samedi'],
  [7, 'dimanche']
])

export const extractAverageSessions = averageSession => {
  const data = averageSession.data.sessions

  return data.map(({ day, sessionLength }) => ({
    day: days[day],
    sessionLength
  }))
}
