import styles from '../styles/loginAndRegister.module.css'


const LoginPage = () => {
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
              // name="email"
              autoComplete='off'
            />
          </div>
          <div className={styles['input-group']}>
            <label >Password</label>
            <input
              autoComplete='off'
              type="password"
              // name="password"
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
