import { Loader, ErrorMessage, Hero, Activity, Sessions, Performance, Score, Nutrient } from '@/components'
import { DataConsumer } from '@/context'
import css from '@/pages/dashboard/dashboard.module.scss'

export const Dashboard = () => (
  <DataConsumer>
    {({ loading, error, data }) => {
      if (loading) return <Loader />
      if (error) return <ErrorMessage title="Erreur" message="Impossible de charger les données." />

      const firstName = data.mainData.userInfos.firstName

      return (
        <section className={css.dashboard}>
          <Hero firstName={firstName} />
          <section className={css.analytics}>
            <Activity />
            <Sessions />
            <Performance />
            <Score />
            <Nutrient nutrient="calorie" />
            <Nutrient nutrient="protein" />
            <Nutrient nutrient="carbohydrate" />
            <Nutrient nutrient="lipid" />
          </section>
        </section>
      )
    }}
  </DataConsumer>
)
