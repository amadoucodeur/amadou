import React from 'react';
import styles from "./styles/pricing.module.css";

export default function Pricing() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className={`${styles.card} ${styles.siteWeb}`}>
        <p className={styles.title}>Site Web</p>
        <div className={styles.pricecontainer}>
          <p className={styles.price}>$2.99</p>
          <p className={styles.pricedescriptor}>/month</p>
        </div>
        <p className={styles.includes}>This Plan Includes:</p>
        <ul className={styles.benefitlist}>
          <li>Awesome Benefits</li>
          <li>10% Discount</li>
        </ul>
        <div className={styles.btncontainer}>
          <button>Select This Plan</button>
        </div>
      </div>
      <div className={`${styles.card} ${styles.webApp}`}>
        <p className={styles.title}>Web App / SaaS</p>
        <div className={styles.pricecontainer}>
          <p className={styles.price}>$2.99</p>
          <p className={styles.pricedescriptor}>/month</p>
        </div>
        <p className={styles.includes}>This Plan Includes:</p>
        <ul className={styles.benefitlist}>
          <li>Awesome Benefits</li>
          <li>10% Discount</li>
        </ul>
        <div className={styles.btncontainer}>
          <button>Select This Plan</button>
        </div>
      </div>
      <div className={`${styles.card} ${styles.appMobile}`}>
        <p className={styles.title}>App Mobile</p>
        <div className={styles.pricecontainer}>
          <p className={styles.price}>$2.99</p>
          <p className={styles.pricedescriptor}>/month</p>
        </div>
        <p className={styles.includes}>This Plan Includes:</p>
        <ul className={styles.benefitlist}>
          <li>Awesome Benefits</li>
          <li>10% Discount</li>
        </ul>
        <div className={styles.btncontainer}>
          <button>Select This Plan</button>
        </div>
      </div>
    </div>
  );
}
