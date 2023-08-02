import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import icon1 from './Images/icon1.png';
import icon3 from './Images/Icon3.png';

import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">
          {/* Your logo image or text here */}
          <h2>Logo</h2>
        </div>
        <ul className="navbar__links">
          <li><a href="#about">אודות</a></li>
          <li><a href="#whyus">תכונות מרכזיות</a></li>
          <li><a href="#services">שירות ותמיכה</a></li>
          <li><a href="#downloads">הורדות</a></li>
          <li><a href="#contact">יצירת קשר</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="about">
        <h2 className="section-title">כל שירותי התקשורת לעסק במקום אחד</h2>
        <p className="section-description">
          בין אם אתם מנהלים מוקד מכירות, משרדים, עירייה או כל עסק אחר,
          אתם זקוקים למרכזיה טלפונית חכמה ואמינה שתתן לכם יעילות מקסימלית בכל נושא השיחות.
          החל מנתב שיחות חכם ידידותי וקל לתפעול, שליטה על כל זרימת השיחות עפ"י זמנים ומצבים מוגדרים מראש,
          חלוקה לפי מחלקות וכו'.
        </p>
        <p className="section-quote">
          בדיוק בשביל זה אנחנו כאן עם המענה המדוייק והמצקועי ביותר עבורכם!
        </p>
        <p className="section-contact">
          דברו איתנו עוד היום ותקבלו שיחת אפיון והצעת מחיר בהתאמה מושלמת ומדויקת עבורכם – ללא תשלום וללא שום התחייבות
          <br />
          0733-988-211 – גם בשיחת טלפון וגם בWhatsApp!
        </p>
      </section>

      <section id="whyus">
        <h2 className="section-title">:למה דווקא אנחנו</h2>
        <div className="cards-container">
          {/* Card 1 */}
          <div className="card">
              <img src={icon1} alt="Logo" />
            <p className="card-description">מוקדי טלמרקטינג</p>
          </div>

          {/* Card 2 */}
          <div className="card">
          <img src={icon1} alt="Logo" />
            <p className="card-description">עצמאים</p>
          </div>

          {/* Card 3 */}
          <div className="card">
          <img src={icon1} alt="Logo" />
            <p className="card-description">משרדים</p>
          </div>

          {/* Card 4 */}
          <div className="card">
          <img src={icon1} alt="Logo" />
            <p className="card-description">בתי עסק עם סניפים</p>
          </div>
           {/* Card 5 */}
           <div className="card">
          <img src={icon1} alt="Logo" />
            <p className="card-description">חברות</p>
          </div>
           {/* Card 6 */}
           <div className="card">
          <img src={icon1} alt="Logo" />
            <p className="card-description">מוסדות</p>
          </div>
           {/* Card 7 */}
           <div className="card">
          <img src={icon3} alt="Logo" />
            <p className="card-description">נותני שירות</p>
          </div>
           {/* Card 8 */}
           <div className="card">
          <img src={icon1} alt="Logo" />
            <p className="card-description">ארגונים ועמותות</p>
          </div>
          </div>
      </section>
      {/* New Section */}
      <section id="services">
        <div className="container">
          <div className="image-column">
            <img src={icon1} alt="Image" />
          </div>
          <div className="text-row">
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            ניהול יעיל של מענה המוקדנים
          </p>
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            שירותי קבלת פקס למייל
          </p>
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            ריכוז מס' סניפים למערכת אחת
          </p>
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            ניהול כניסת שיחות עפ"י ימים שעות ועוד
          </p>
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            שלוחה סלולרית כחלק מהמרכזיה
          </p>
        </div>

        {/* Second Row */}
        <div className="text-row">
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            הקלטת השיחות
          </p>
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            חייגן מהאפליקציה ומהמחשב
          </p>
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            נתב שיחות חכם
          </p>
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            שיוך מספרי בינלאומיים מכל העולם
          </p>
          <p className="text">
            <FontAwesomeIcon icon={faCheck} className="v-mark" />
            התממשקות לתוכנות CRM 
          </p>
        </div>
      </div>
  </section>

      <section id="downloads">
        {/* Your "הורדות" section content here */}
      </section>

      <section id="contact">
        {/* Your "יצירת קשר" section content here */}
      </section>
    </div>
  );
}

export default App;
