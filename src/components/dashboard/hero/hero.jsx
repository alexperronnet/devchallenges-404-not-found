import css from '@/components/dashboard/hero/hero.module.scss'

/**
 * Renders a hero section.
 * @function Hero
 * @param {Object} props - The component props.
 * @param {string} props.firstName - The user's first name.
 * @returns {JSX.Element} - The rendered component.
 */
export const Hero = ({ firstName }) => (
  <section className={css.hero}>
    <h1 className={css.title}>
      Bonjour <span className={css.firstName}>{firstName}</span>
    </h1>
    <p className={css.subtitle}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  </section>
)
