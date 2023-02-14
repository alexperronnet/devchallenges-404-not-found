import { ReactComponent as IconGithub } from '@/assets/icon-github.svg'
import css from '@/layouts/main/footer/footer.module.scss'

const currentYear = new Date().getFullYear()
const sourceUrl = 'https://github.com/alexperronnet/openclassrooms-p12-sportsee'

export const MainFooter = () => (
  <footer className={css.footer}>
    Copiryght, SportSee {currentYear}
    <a className={css.source} href={sourceUrl} target="_blank" rel="noreferrer noopener">
      <IconGithub className={css.sourceIcon} />
      <span className={css.sourceLabel}>Voir la source</span>
    </a>
  </footer>
)
