import { useIsMobile } from '@/hooks'
import { Loader, ErrorMessage, Hero, Analytics } from '@/components'
import { DataConsumer } from '@/context'
import css from '@/pages/dashboard/dashboard.module.scss'

export const Dashboard = () => {
  const { isMobile } = useIsMobile(640)

  return (
    <DataConsumer>
      {({ loading, error, data }) => {
        if (loading) return <Loader />
        if (error) return <ErrorMessage title="Erreur" message="Impossible de charger les données." />

        const firstName = data.mainData.userInfos.firstName

        return isMobile ? (
          <ErrorMessage title="Dashboard indisponible" message="Vos statistiques ne sont pas disponibles sur mobile." />
        ) : (
          <section className={css.dashboard}>
            <Hero firstName={firstName} />
            <Analytics data={data} />
          </section>
        )
      }}
    </DataConsumer>
  )
}
