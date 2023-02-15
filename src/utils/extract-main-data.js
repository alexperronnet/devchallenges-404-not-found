export const extractMainData = mainData => ({
  todayScore: mainData.data.score || mainData.data.todayScore,
  userInfos: mainData.data.userInfos,
  keyData: [
    {
      name: 'calorie',
      displayedName: 'calories',
      value: mainData.data.keyData.calorieCount,
      unit: 'kCal'
    },
    {
      name: 'protein',
      displayedName: 'protéines',
      value: mainData.data.keyData.proteinCount,
      unit: 'g'
    },
    {
      name: 'carbohydrate',
      displayedName: 'glucides',
      value: mainData.data.keyData.carbohydrateCount,
      unit: 'g'
    },
    {
      name: 'lipid',
      displayedName: 'lipides',
      value: mainData.data.keyData.lipidCount,
      unit: 'g'
    }
  ]
})
