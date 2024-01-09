import styles from '@/app/ui/products/products.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
const ProductsPage = () => {
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
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className={styles.product}>
                            <Image src="/noproduct.jpg" width={40} height={40} className={styles.productImage} />
                            Iphone
                        </div>
                        </td>
                        <td>Description</td>
                        <td>$4145</td>
                        <td>06.01.2024</td>
                        <td>72</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/users/edit">
                                    <button className={`${styles.button} ${styles.view} `}>View</button>
                                </Link>

                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductsPage
