import { Loader, ErrorMessage, Hero, Analytics } from '@/components'
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
          <Analytics data={data} />
        </section>
      )
    }}
  </DataConsumer>
)
