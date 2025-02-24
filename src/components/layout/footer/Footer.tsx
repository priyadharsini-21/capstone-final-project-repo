import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.footerColumns}>
                    <section>
                        <img src="/logo-vertical.png" alt="Little Lemon Logo" width="200" height="352" />
                    </section>
                    <section className={styles.contactUs}>
                        <h2>Contact</h2>
                        <address>
                            <p>📍 1234 Lemon St., Lemon City, LC 12345</p>
                            <p>
                                📞 <a href="tel:+1234567890">123-456-7890</a>
                            </p>
                            <p>
                                ✉️ <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
                            </p>
                        </address>
                        <h2>Follow Us</h2>
                        <div className={styles.socialIcons}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={40} color="#1877F2" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.instagramWrapper}
                            >
                                <FaInstagram size={40} className={styles.instagramIcon} />
                            </a>
                        </div>
                    </section>
                </div>
                <small>&copy; {year} Little Lemon. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
