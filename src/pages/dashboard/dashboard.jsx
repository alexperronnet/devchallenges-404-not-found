import { Hero, Activity, Sessions, Performance, Score, Nutrient } from '@/components'
import css from '@/pages/dashboard/dashboard.module.scss'

export const Dashboard = () => (
  <section className={css.dashboard}>
    <Hero firstName="Utilisateur" />
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
