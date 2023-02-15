import css from '@/components/nutrient/nutrient.module.scss'

export const Nutrient = ({ nutrient }) => <article className={`${css.nutrient} ${css[nutrient]}`}>Nutrient</article>
