import styles from '@/app/ui/login/login.module.css'
const Login = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder='Username' name='username' required />
                <input type="password" placeholder='Password' name='password' required />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
