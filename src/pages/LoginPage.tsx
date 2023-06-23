import { useForm } from '../hooks/useform'
import styles from '../styles/loginAndRegister.module.css'


const LoginPage = () => {  

  const {values,changeForm,reset} = useForm();



  return (
    <div className={styles['container-login-logout']}>

      <div className={styles['form-container']}>
        <p className={styles.title}>Login</p>
        <form
          className={styles.form}
        >
          <div className={styles['input-group']}>
            <label >Email</label>
            <input
              type="text"
              name="email"
              autoComplete='off'
              onChange={changeForm}
            />
          </div>
          <div className={styles['input-group']}>
            <label >Password</label>
            <input
              autoComplete='off'
              type="password"
              name="password"
              onChange={changeForm}
            />
          </div>
          <button
            className={styles.sign}
            type='submit'
          >Sign in</button>
        </form>

      </div>
    </div>
  )
}

export default LoginPage
