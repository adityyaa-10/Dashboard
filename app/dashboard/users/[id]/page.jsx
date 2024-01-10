import styles from '@/app/ui/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/noavatar.png"
                        alt="user"
                        fill
                    />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='John Doe' name='username' />
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" placeholder='JohnDoe@gmail.com' />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" placeholder='password' />
                    <label htmlFor="">Phone</label>
                    <input type="text" name="phone" id="phone" placeholder='1234567890' />
                    <label htmlFor="">Address</label>
                    <textarea name="address" id="address" cols="30" rows="10" placeholder='Address'></textarea>
                    <label htmlFor="">Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                    <label htmlFor="">Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage
