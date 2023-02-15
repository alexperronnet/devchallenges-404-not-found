import css from '@/components/activity/activity.module.scss'

export const Activity = () => (
  <article className={css.activity}>
    <header className={css.header}>
      <h2 className={css.title}>Activité quotidienne</h2>
      <div className={css.legend}>
        <span className={`${css.legendItem} ${css.poids}`}>Poids (kg)</span>
        <span className={`${css.legendItem} ${css.calories}`}>Calories brûlées (kCal)</span>
      </div>
    </header>
  </article>
)
