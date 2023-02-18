import css from '@/components/dashboard/hero/hero.module.scss'

export const Hero = ({ firstName }) => (
  <section className={css.hero}>
    <h1 className={css.title}>
      Bonjour <span className={css.firstName}>{firstName}</span>
    </h1>
    <p className={css.subtitle}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  </section>
)
