import { ReactComponent as IconGear } from '@/assets/icon-gear.svg'
import css from '@/components/loader/loader.module.scss'

export const Loader = () => (
  <section className={css.loader}>
    <IconGear className={css.loaderIcon} />
    <h1 className={css.loaderText}>Chargement en cours...</h1>
  </section>
)
