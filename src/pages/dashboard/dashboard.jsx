import { Loader, ErrorMessage, Hero, Activity, Sessions, Performance, Score, Nutrient } from '@/components'
import { DataConsumer } from '@/context'
import css from '@/pages/dashboard/dashboard.module.scss'

export const Dashboard = () => (
  <DataConsumer>
    {({ loading, error, data }) => {
      if (loading) return <Loader />
      if (error) return <ErrorMessage title="Erreur" message="Impossible de charger les données." />

      return (
        <section className={css.dashboard}>
          <Hero firstName={data.mainData.userInfos.firstName} />
          <section className={css.analytics}>
            <Activity />
            <Sessions />
            <Performance />
            <Score />
            {data.mainData.keyData.map((nutrient, index) => (
              <Nutrient key={index} nutrient={nutrient} />
            ))}
          </section>
        </section>
      )
    }}
  </DataConsumer>
)
