import styles from '@/app/ui/users/addUser/addUser.module.css'

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Username' name='username' required />
                <input type="email" placeholder='Email' name='email' required />
                <input type="password" placeholder='Password' name='password' required />
                <input type="phone" placeholder='Phone' name='phone' />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={false}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    cols="30"
                    rows="10"
                    placeholder='Address'>
                </textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage