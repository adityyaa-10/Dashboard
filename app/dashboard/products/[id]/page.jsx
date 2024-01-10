import styles from '@/app/ui/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/noavatar.png"
                        alt="product"
                        fill
                    />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='John Doe' name='title' />
                    <label htmlFor="">Price</label>
                    <input type="number" name="price" />
                    <label htmlFor="">Stock</label>
                    <input type="number" name="stock" />
                    <label htmlFor="">Color</label>
                    <input type="text" name="color" />
                    <label htmlFor="">Size</label>
                    <input type="text" name="size" />
                    <label htmlFor="">Category</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label htmlFor="">Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder='Description'></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage
