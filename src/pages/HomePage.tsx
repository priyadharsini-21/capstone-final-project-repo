import { Helmet } from 'react-helmet-async';
import styles from './HomePage.module.css';
import { ButtonVariant } from '../components/base/button/Button.types';
import ButtonLink from '../components/base/button/ButtonLink';
import { useTranslations } from '../translations/TranslationContext';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import hamburger from '../assets/hamburger.jpg';
import dessert from '../assets/dessert.jpg';
import pasta from '../assets/italian-pasta-spaghetti-with-meatballs-parmesan-cheese-black-plate-dark-rustic-wood-background-dinner-slow-food-concept.jpg';
import pizza from '../assets/mixed-pizza-with-olive-bell-pepper-tomato.jpg';
import sushi from '../assets/sushi.avif';
import salad from '../assets/salad.avif';

const HomePage = () => {
    const { translations } = useTranslations();

    const foodItems = [
        {
            image: hamburger,
            title: 'Cheese Burger',
            content: 'A delicious cheesy burger with fresh lettuce and tomatoes.',
            rating: 4.5,
        },
        {
            image: pizza,
            title: 'Pepperoni Pizza',
            content: 'Crispy crust with spicy pepperoni and melted cheese.',
            rating: 4.8,
        },
        {
            image: pasta,
            title: 'Creamy Pasta',
            content: 'Rich and creamy Alfredo pasta with parmesan cheese.',
            rating: 4.7,
        },
        {
            image: sushi,
            title: 'Sushi Platter',
            content: 'Freshly prepared sushi rolls with wasabi and soy sauce.',
            rating: 4.6,
        },
        {
            image: salad,
            title: 'Caesar Salad',
            content: 'Healthy and fresh Caesar salad with grilled chicken.',
            rating: 4.4,
        },
        {
            image: dessert,
            title: 'Chocolate Cake',
            content: 'Decadent chocolate cake with a creamy ganache topping.',
            rating: 4.9,
        },
    ];

    return (
        <>
            <Helmet>
                <title>{translations.homepageMetaTitle}</title>
                <meta name="description" content={translations.homepageMetaDescription} />
                <meta property="og:title" content={translations.homepageMetaTitle} />
                <meta property="og:description" content={translations.homepageMetaDescription} />
                <meta property="og:image" content="/recipe.jpg" />
                <meta property="og:url" content="https://little-lemon-capstone-project.io" />
            </Helmet>

            <section className={`${styles.innerContainer}`} style={{ marginBottom: '40px' }}>
                <div>
                    <h1 className={styles.title} style={{ textTransform: 'uppercase' }}>
                        {translations.homepageTitle}
                    </h1>
                    <h2 className={styles.subTitle} style={{ textAlign: 'justify' }}>
                        {translations.homepageSubtitle}
                    </h2>
                    <p style={{ textAlign: 'justify' }}>{translations.homepageParagraph}</p>
                    <p style={{ textAlign: 'justify' }}>{translations.homepageParagraph2}</p>

                    <ButtonLink
                        className={styles.ctaButton}
                        href="/reserve"
                        variant={ButtonVariant.Secondary}
                        label={translations.reserveATable}
                    />
                </div>

                <img src="/recipe.jpg" alt={translations.deliciousRecipe} width="507" height="338" />
            </section>

            <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                mt={8}
                mb={3}
                color="white"
                sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}
            >
                Explore Our Delicious Menu
            </Typography>

            {/* Food Cards Grid */}
            <Grid container spacing={3} justifyContent="center" sx={{ padding: 3 }}>
                {foodItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{ width: '100%', height: 200, objectFit: 'cover' }} // Ensures uniform size
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mt={1}>
                                    {item.content}
                                </Typography>
                                <Typography color="gold" fontWeight="bold" mt={1}>
                                    ⭐ {item.rating}
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
                                    Order Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default HomePage;
