import styles from './Home.module.css';
import { images } from '../../assets/';
import Title from '../../components/Title/Title.jsx';
import { featuredProducts } from '../../mockdata.js';
import ProductsList from '../../components/ProductsList/ProductsList.jsx';
import SubNavBar from '../../components/SubNavBar/SubNavBar.jsx';
import Category from '../../components/Category/Category.jsx';
import { useCategories } from '../../context/CategoriesContext.jsx';

function Home() {
    const { categories } = useCategories();

    return (
        <div className={styles.homeContainer}>
            <header className={styles.landingHeader}>
                <SubNavBar categories={categories} />
                <div className={styles.overlay}></div>
                <img src={images.landingImage} className={styles.landingImage} alt="Harmony House" />
                <div className={styles.introContainer}>
                    <div className={styles.introText}>
                        <h2>Welcome to Harmony Haven</h2>
                        <p className='secondaryText'>Harmony Haven offers a curated collection of high-quality instruments to inspire every note.</p>
                    </div>
                </div>
            </header>
            <main className={styles.mainContent}>
                <section className={styles.featuredInstruments}>
                    <Title text="Featured Instruments" />
                    <ProductsList products={featuredProducts} />
                </section>
                <section>
                    {
                        categories && categories.map(category => <Category key={category._id} category={category} />)
                    }
                </section>
            </main>
        </div>
    );
}

export default Home;