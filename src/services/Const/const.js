// icons
import fastDeliveryIcon from "../../mobile/assetsMobile/imagesMobile/bottomIcons/fastDeliveryIcon.png";
import freshDlowersIcon from "../../mobile/assetsMobile/imagesMobile/bottomIcons/freshDlowersIcon.png";
import uniqueDesignIcon from "../../mobile/assetsMobile/imagesMobile/bottomIcons/uniqueDesign.jpg";
import securePeyment from "../../mobile/assetsMobile/imagesMobile/bottomIcons/securePeyment.jpg";


import flowerBox01 from "../../mobile/assetsMobile/productPage/flowerBox01.jpg"
import flowerBox02 from "../../mobile/assetsMobile/productPage/flowerBox02.jpg";

import rosesBuquet01 from "../../mobile/assetsMobile/productPage/rosesBuquet01.jpg";
import rosesBuquet02 from "../../mobile/assetsMobile/productPage/rosesBuquet02.jpg";

import pinkTeen01 from "../../mobile/assetsMobile/productPage/pinkTeen01.jpg";
import pinkTeen02 from "../../mobile/assetsMobile/productPage/pinkTeen02.jpg";

import sunFlower01 from "../../mobile/assetsMobile/productPage/sunFlower01.jpg";
import sunFlower02 from "../../mobile/assetsMobile/productPage/sunFlower02.jpg";

import purpleBuquet01 from "../../mobile/assetsMobile/productPage/purpleBuquet01.jpg";
import purpleBuquet02 from "../../mobile/assetsMobile/productPage/purpleBuquet02.jpg";

import hagigatHava01 from "../../mobile/assetsMobile/productPage/hagigatHava01.jpg";
import hagigatHava02 from "../../mobile/assetsMobile/productPage/hagigatHavaTopView01.jpg";

import miLeidyWhite01 from "../../mobile/assetsMobile/productPage/miLeidyWhite01.jpg";
import miLeidyWhite02 from "../../mobile/assetsMobile/productPage/miLeidyWhite02.jpg";


export const flowersMobile = [
    {
        name: 'אהבה בוערת',
        sell: true,
        procentege: 0.9,
        sells: 25,
        price: '260',
        priceSizes: ['260', '310', '390'],
        image: flowerBox01,
        description: "סידור ורדים בקופסא",
        story: 'אני מאוהב בך, אני לא בהכחשה עצמית, אני נהנה לומר דברים אמיתיים. אני מאוהב בך, ואני יודע שאהבה היא רק צעקה אל תוך החלל, אני יודע  שמהאדמה באנו ולאדמה נשוב, ואני מאוהב בך',
        productSlider: [flowerBox01, flowerBox02]
    },
    {
        name: 'תשוקה אינסופית',
        price: '200',
        priceSizes: ["200", '260', '320'],
        sell: true,
        procentege: 0.8,
        sells: 29,
        image: rosesBuquet01,
        productSlider: [rosesBuquet01, rosesBuquet02,],
        description: "זר וורדים עשיר",
        story: 'אם אהבתי אלייך  תהיה אוקיינוס, לא תהיה עוד אדמה. אילו אהבתי תהיה מדבר, היית רואה רק חול. אם אהבתי תהיה כוכב - מאוחר בלילה, יהיה רק אור. ואם האהבה שלי יכולה לגדל כנפיים, אני אעוף אלייך'
    },
    {
        name: 'חגיגת אהבה',
        sell: true,
        procentege: 0.9,
        sells: 20,
        price: '200',
        priceSizes: ["200", '270', '350'],
        image: hagigatHava01,
        description: "סידור פרחי קיץ בקופסא",
        story: 'אני אוהבת לחגוג את חיי. יש לי חיים של ברת מזל, ולכן אני רוצה לוודא שכל דקה נספרת, ושאני צוברת את הזכרונות שלי עם אנשים שאני אוהבת, אני חולקת איתם את הרגעים הללו ואנחנו נהנים וצוחקים ביחד.',
        productSlider: [hagigatHava01, hagigatHava02]
    },
    {
        name: 'מיליידי וויט',
        sell: true,
        procentege: 0.9,
        sells: 20,
        priceSizes: ["190", '250', '330'],
        price: 190,
        image: miLeidyWhite01,
        description: "סידור פרחים בצורת לב",
        story: 'אם גבר אוהב אותך ... הוא מוכן להודות בזה...\n' +
            ' הוא ייתן לך תואר אחרי זמן מה. את תהיה  הליידי שלו הגברת שלו, האישה שלו, ארוסתו, אשתו, אמא של התינוק שלו, את תהיה כל עולמו.',
        productSlider: [miLeidyWhite02, miLeidyWhite01]
    },

    {
        name: 'טיול בגן',
        price: '140',
        priceSizes: ["140", '180', '235'],
        sells: 45,
        sell: false,
        image: sunFlower01,
        productSlider: [sunFlower01, sunFlower02],
        description: "זר חמניות גרברות וליזאנטוס",
        story: 'אם מראה השמים הכחולים ממלא אותך בשמחה, אם לריח של השדות יש כוח להזיז אותך, אם הדברים הפשוטים של הטבע גורמים לך להנעה, לשמחה, זה כי הנשמה שלך בחיים'
    },
    {
        name: 'סגול בטבע',
        sells: 12,
        price: '150',
        priceSizes: ["150", '190', '260'],
        sell: false,
        image: purpleBuquet01,
        productSlider: [purpleBuquet01, purpleBuquet02],
        description: "זר שושן צחור ליזאנטוס וחרצית",
        story: 'הטבע הוא המקור לכל הידע. יש לו היגיון משלו, חוקים משלו, אין לו השפעה ללא סיבה או המצאה ללא צורך.' +
            'הוא מעורר יראת כבוד, אלגנטי, נצחי. הוא מושלם מבחינה גיאומטרית. הוא זעיר וענקי. אפשר לנסוע רחוק כדי להיות בסביבה טבעית ויפה, או שאפשר להנות ממנו בגינה, או במקרה שלנו עם הזר "סגול בטבע'
    },
    {
        name: 'נעורים בוורוד',
        price: '120',
        priceSizes: ["120", '170', '220'],
        sells: 19,
        sell: false,
        image: pinkTeen01,
        productSlider: [pinkTeen01, pinkTeen02],
        description: "זר גרברות יפייפה",
        story: 'היום, פשוט קחי את  הזמן להריח את הזר, תהני מהדברים הקטנים של החיים , המשפחה שלך, בן זוג, חברים, עבודה. שכחי מהכל - ותהני מהחיים'
    },

];

export const bottomIcons = [
    {
        image: securePeyment,
        title: "תשלום מאובטח",
        description: "התשלום אצלנו ב 100% מאובטח, ניתן לשלם בכמה דרכים. הדרך הוותיקה טלפון מול הנציג, בווצאפ ביזנס מול הנציג, או לקבל מאיתנו לינק מאובטח של פייפאל."

    },
    {
        image: fastDeliveryIcon,
        title: "משלוח מהייייר",
        description: "אל דאגה, בעזרת מערכות מתקדמות שבנינו, משלוח מדויק ומהיר זה קל לנו. אין צורך להיות מודאגים לגבי האם קיבלו את המתנה היפה שהענקתם. אם תירצו בזמן ההספקה אנחנו נצלם סרטון או תמונה של מקבל המתנה ומיד נשלח אליכם (בהסכמתם כמובן)."

    },
    {
        image: freshDlowersIcon,
        title: "פרחים טריים ויפים",
        description: "אנחנו בונים את הזרים שלנו עם הפרחים הטריים ביותר בחנות שלנו. בוחרים את הפרחים בקפידה על מנת לתת לכם את חוויית הטבע שהפרחים מעניקים. פרחים טריים מובטחים לכם!"

    },
    {
        image: uniqueDesignIcon,
        title: "עיצוב מדהים ויחודי",
        description: "לרגעים הטובים ביותר בחיים, לחגיגה הכי מדהימה תמיד אפשר לסמוך על פרחים כדי לשפר את הרגע. חגיגות ואירועים מיוחדים נעשים עם פרחים, ופרחים נעשים עבורם. אנו מייצרים עיצובים פרחוניים ייחודיים לכל אירוע שיוצרים את האווירה החמה, האלגנטית והקלאסית שהיום המיוחד שלכם ראוי."

    },


    ]
