import { useNavigate } from 'react-router-dom'
import css from '@/pages/login/login.module.scss'

const ids = [12, 18]

export const Login = () => {
  const navigate = useNavigate()

  const handleLogin = id => localStorage.setItem('userId', id) || navigate('/app')

  return (
    <section className={css.login}>
      <h1 className={css.title}>Connexion</h1>
      <p className={css.alert}>
        Projet 12 de la formation OpenClassrooms, réalisation d&apos;un tableau de bord de suivi de sportifs. Pour
        accéder à l&apos;application,veuillez vous connecter avec l&apos;un des identifiants suivants :
      </p>
      <div className={css.form}>
        {ids.map(id => (
          <button className={css.formButton} key={id} onClick={() => handleLogin(id)}>
            Utilisateur {id}
          </button>
        ))}
      </div>
    </section>
  )
}
