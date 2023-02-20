export const extractMainData = ({ data: mainData }) => {
  const {
    score,
    todayScore,
    userInfos,
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount }
  } = mainData

  const mainDataFormatted = {
    todayScore: score || todayScore,
    userInfos,
    keyData: [
      {
        name: 'calorie',
        displayedName: 'calories',
        value: calorieCount,
        unit: 'kCal'
      },
      {
        name: 'protein',
        displayedName: 'protéines',
        value: proteinCount,
        unit: 'g'
      },
      {
        name: 'carbohydrate',
        displayedName: 'glucides',
        value: carbohydrateCount,
        unit: 'g'
      },
      {
        name: 'lipid',
        displayedName: 'lipides',
        value: lipidCount,
        unit: 'g'
      }
    ]
  }

  return mainDataFormatted
}
