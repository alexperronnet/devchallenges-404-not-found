import css from '@/layouts/main/footer/footer.module.scss'

const currentYear = new Date().getFullYear()

/**
 * Component that renders the main footer of the application.
 * @function MainFooter
 * @returns {JSX.Element} Returns a React element for the main footer of the application.
 */
export const MainFooter = () => <footer className={css.footer}>Copiryght, SportSee {currentYear}</footer>
