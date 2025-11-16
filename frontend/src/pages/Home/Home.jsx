import styles from './Home.module.css';
import Title from '../../components/Title/Title.jsx';
import { featuredProducts } from '../../mockdata.js';
import ProductsList from '../../components/ProductsList/ProductsList.jsx';
import Category from '../../components/Category/Category.jsx';
import { useCategories } from '../../context/CategoriesContext.jsx';

function Home() {
    const { categories } = useCategories();

    return (
        <div className={styles.homeContainer}>
            <header className={styles.landingHeader}>
                <div className={styles.overlay}></div>
                <video
                    src={'/landing.mp4'}
                    className={styles.landingImage}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
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