import flowerBox from "../../mobile/assetsMobile/buquetsMobile/flowerBox.jpg";
import rosesbuquet from "../../mobile/assetsMobile/buquetsMobile/rosesbuquet.jpg";
import zivoni from "../../mobile/assetsMobile/buquetsMobile/zivoni.jpg";
import hamaniotbuquet from "../../mobile/assetsMobile/buquetsMobile/hamaniotbuquet.jpg";
import sagol from "../../mobile/assetsMobile/buquetsMobile/sagol.jpg"
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


export const flowersMobile = [
    {
        name: 'אהבה בוערת',
        sell: true,
        procentege: 0.9,
        sells: 25,
        price: '270',
        image: flowerBox,
        description: "סידור ורדים בקופסא",
        story: 'אני מאוהב בך, אני לא בהכחשה עצמית, אני נהנה לומר דברים אמיתיים. אני מאוהב בך, ואני יודע שאהבה היא רק צעקה אל תוך החלל, אני יודע  שמהאדמה באנו ולאדמה נשוב, ואני מאוהב בך',
        productSlider: [flowerBox01, flowerBox02]
    },
    {
        name: 'תשוקה אינסופית',
        price: '200',
        sell: true,
        procentege: 0.8,
        sells: 29,
        image: rosesbuquet,
        productSlider: [rosesBuquet01, rosesBuquet02],
        description: "זר וורדים עשיר",
        story: 'אם אהבתי אלייך  תהיה אוקיינוס, לא תהיה עוד אדמה. אילו אהבתי תהיה מדבר, היית רואה רק חול. אם אהבתי תהיה כוכב - מאוחר בלילה, יהיה רק אור. ואם האהבה שלי יכולה לגדל כנפיים, אני אעוף אלייך'
    },
    {
        name: 'נעורים בוורוד',
        price: '120',
        sells: 19,
        sell: false,
        image: zivoni,
        productSlider: [pinkTeen01, pinkTeen02],
        description: "זר גרברות יפייפה",
        story: 'היום, פשוט קחי את  הזמן להריח את הזר, תהני מהדברים הקטנים של החיים , המשפחה שלך, בן זוג, חברים, עבודה. שכחי מהכל - ותהני מהחיים'
    },
    {
        name: 'טיול בגן',
        price: '100',
        sells: 45,
        sell: false,
        image: hamaniotbuquet,
        productSlider: [sunFlower01, sunFlower02],
        description: "זר חמניות גרברות וליזאנטוס",
        story: 'אם מראה השמים הכחולים ממלא אותך בשמחה, אם לריח של השדות יש כוח להזיז אותך, אם הדברים הפשוטים של הטבע גורמים לך להנעה, לשמחה, זה כי הנשמה שלך בחיים'
    },
    {
        name: 'סגול בטבע',
        sells: 12,
        price: '150',
        sell: false,
        image: sagol,
        productSlider: [purpleBuquet01, purpleBuquet02],
        description: "זר שושן צחור ליזאנטוס וחרצית",
        story: 'הטבע הוא המקור לכל הידע. יש לו היגיון משלו, חוקים משלו, אין לו השפעה ללא סיבה או המצאה ללא צורך.' +
            'הוא מעורר יראת כבוד, אלגנטי, נצחי. הוא מושלם מבחינה גיאומטרית. הוא זעיר וענקי. אפשר לנסוע רחוק כדי להיות בסביבה טבעית ויפה, או שאפשר להנות ממנו בגינה, או במקרה שלנו עם הזר "סגול בטבע'
    },
    {
        name: 'אהבה בוערת',
        sell: true,
        procentege: 0.9,
        sells: 25,
        price: '270',
        image: flowerBox,
        description: "סידור ורדים בקופסא",
        story: 'אני מאוהב בך, אני לא בהכחשה עצמית, אני נהנה לומר דברים אמיתיים. אני מאוהב בך, ואני יודע שאהבה היא רק צעקה אל תוך החלל, אני יודע  שמהאדמה באנו ולאדמה נשוב, ואני מאוהב בך',
        productSlider: [flowerBox01, flowerBox02]
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
