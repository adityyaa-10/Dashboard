
import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/users/users.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchUsers } from '@/app/lib/data'

const UsersPage = async () => {
    const users = await fetchUsers()
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td><div className={styles.user}>
                                <Image src={user.img || "noavatar.png"} width={40} height={40} className={styles.userImage} />
                                {user.username}
                            </div>
                            </td>
                            <td>{user.email}</td>
                            <td>06.01.2024</td>
                            <td>Admin</td>
                            <td>Active</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href="/dashboard/users/edit">
                                        <button className={`${styles.button} ${styles.view} `}>View</button>
                                    </Link>

                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UsersPage
