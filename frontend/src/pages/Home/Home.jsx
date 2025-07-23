import styles from './Home.module.css';
import { images } from '../../assets/';
import Title from '../../components/Title/Title.jsx';
import { featuredProducts } from '../../mockdata.js';
import ProductsList from '../../components/ProductsList/ProductsList.jsx';
import SubNavBar from '../../components/SubNavBar/SubNavBar.jsx';
import Category from '../../components/Category/Category.jsx';

function Home() {

    const categories = [
        {
            name: "Pianos",
            description: "Elegant and timeless sound for all levels.",
            image: "https://res.cloudinary.com/dzihfojeo/image/upload/v1752359916/pbg_geqmwv.jpg",
            products: [
                { name: "Yamaha U1", image: "https://res.cloudinary.com/dzihfojeo/image/upload/v1752355958/p10_kaxohs.jpg", price: 2999 },
                { name: "Roland FP-30", image: "https://res.cloudinary.com/dzihfojeo/image/upload/v1752355954/p6_dxyr7i.jpg", price: 749 },
                { name: "Kawai ES110", image: "https://res.cloudinary.com/dzihfojeo/image/upload/v1752355951/p4_krsn3h.jpg", price: 699 }
            ]
        }
    ]


    return (
        <div className={styles.homeContainer}>
            <header className={styles.landingHeader}>
                <SubNavBar />
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
                    <Category category={categories[0]} />
                </section>
            </main>
        </div>
    );
}

export default Home;