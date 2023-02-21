import { ReactComponent as IconFire } from '@/assets/icon-fire.svg'
import { ReactComponent as IconChicken } from '@/assets/icon-chicken.svg'
import { ReactComponent as IconApple } from '@/assets/icon-apple.svg'
import { ReactComponent as IconBurger } from '@/assets/icon-burger.svg'
import PropTypes from 'prop-types'
import css from '@/components/dashboard/nutrient/nutrient.module.scss'

/**
 * Renders a nutrient component.
 * @function Nutrient
 * @param {Object} nutrient - The nutrient data to display.
 * @param {string} nutrient.name - The name of the nutrient.
 * @param {string} nutrient.displayedName - The displayed name of the nutrient.
 * @param {number} nutrient.value - The value of the nutrient.
 * @param {string} nutrient.unit - The unit of the nutrient.
 * @returns {JSX.Element} - The rendered component.
 */
export const Nutrient = ({ nutrient }) => (
  <article className={`${css.nutrient} ${css[nutrient.name]}`}>
    <div className={css.iconWrapper}>
      {nutrient.name === 'calorie' && <IconFire className={css.icon} />}
      {nutrient.name === 'protein' && <IconChicken className={css.icon} />}
      {nutrient.name === 'carbohydrate' && <IconApple className={css.icon} />}
      {nutrient.name === 'lipid' && <IconBurger className={css.icon} />}
    </div>
    <div className={css.infos}>
      <h3 className={css.title}>
        {nutrient.value} {nutrient.unit}
      </h3>
      <p className={css.description}>{nutrient.displayedName}</p>
    </div>
  </article>
)

Nutrient.propTypes = {
  nutrient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    displayedName: PropTypes.string.isRequired
  }).isRequired
}
