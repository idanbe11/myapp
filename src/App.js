import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import icon1 from './Images/icon1.png';
import icon3 from './Images/Icon3.png';
import appStore from './Images/appStore.webp';
import googlePlay from './Images/googlePlay.png';
import teamViewer from './Images/teamViewer.png';
import anyDesk from './Images/anyDesk.png';
import WhatsApp from './Images/WhatsApp.png';
import Phone from './Images/Phone.png';
import mail from './Images/mail.png';

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
      <div class="page-container">
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
            <img src={icon1} alt="Logo" />
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
    <h2 class="downloads-title">הורדות</h2>
    <div class="downloads-cards-container">
      <div class="downloads-card">
      <a href="https://www.microsip.org/download/MicroSIP-Lite-3.21.3.exe" download>
        <img src={icon1} alt="Logo" />
      </a>
        <p class="downloads-card-description">תיאום תורים אוטומטי</p>
      </div>

      <div class="downloads-card">
      <a href="https://panel.bluebe.net/login">
      <img src={icon3} alt="Logo" />
      </a>
        <p class="downloads-card-description">שיחות ישירות לטלפון</p>
      </div>
      
    </div>
  </section>
  <section id="remote-control">
      <h2 class="remote-control-title">תוכנות שליטה מרחוק</h2>
      <div class="remote-control-cards-container">
        <div class="remote-control-card">
        <a href="https://150.co.il/teamviewer/">
          <img src={teamViewer} alt="Logo" />
        </a>
        </div>
        <div class="remote-control-card">
        <a href="https://anydesk.com/en/downloads/windows">
          <img src={anyDesk} alt="Logo" />
        </a>
        </div>
      </div>
    </section>
    <div class="mobile-apps">
    <h3 class="mobile-apps__title">אפליקציות</h3>
    <div class="mobile-apps__buttons">
      <a href="/" class="mobile-apps__button mobile-apps__button--android">
      <img src={appStore} alt="Logo" />
      </a>
      <a href="/" class="mobile-apps__button mobile-apps__button--apple">
      <img src={googlePlay} alt="Logo" />
      </a>
    </div></div>
    <section id="contact">
      <h2 class="section-title">שירות ותמיכה</h2>
      <p class="section-description">
      אנו דוגלים בשירות מענה אנושי ישיר ומקצועי ללא המתנה, כתבו לנו הודעה ונשוב אליכם בתוך דקות!
      </p>
      <div class="contact-icons">
      <a href="tel:0733988211">
        <img src={Phone} alt="Logo" />
      </a>
      <a href="https://wa.me/972733988211">
        <img src={WhatsApp} alt="Logo" />

      </a>
      <a href="mailto:office@k-telecom.co.il">
        <img src={mail} alt="Logo" />
      </a>
    </div>
  </section>

    </div>
    </div>
  );
}

export default App;
