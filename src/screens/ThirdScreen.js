import styles from "./ThirdScreen.module.css"
import shame from "../images/הורה מאוכזב.png"
import happy from "../images/ילד נהנה.png"
import LessonBubble from "../components/steps/Step"
import MinimalistBox from "../components/house/House"
const ThirdScreen=()=>{

return <>
<div className={styles.description}>סביבה של הורים נוספים עם ילדים בני אותו גיל שתקנה לך:</div>
<div className={styles.row}>
<MinimalistBox title="תמיכה רגשית" description="להיות הורה לתינוקות זה תהליך מלא באתגרים, ושיתוף החוויות עם הורים אחרים באותו שלב יכול לספק תמיכה רגשית משמעותית. הידיעה שיש עוד הורים שמתמודדים עם חוויות דומות יכולה להקל על תחושת הבדידות ולחזק את תחושת השייכות."/>
<MinimalistBox title="למידה הדדית" description="אינטראקציה עם הורים לתינוקות בני אותו גיל מאפשרת חילופי ידע, עצות וטיפים מעשיים. כל הורה יכול לשתף שיטות שעבדו עבורו או להתמודד עם קשיים, וההבנה שכולם חווים אתגרים דומים יכולה לעודד ולתת פרספקטיבות חדשות."/>
<MinimalistBox title="השוואה בריאה" description="כשאתם פוגשים הורים נוספים לתינוקות בני אותו גיל, אתם יכולים להבין טוב יותר אם ההתפתחות של ילדכם נורמלית או אם יש משהו שמצריך תשומת לב נוספת. אף על פי שכל תינוק מתפתח בקצב שלו, זה מרגיע לראות את הדמיון וההבדלים בהתקדמות של ילדים באותו טווח גילאים."/>
</div>
<div className={styles.row}>
<MinimalistBox title="פיתוח רשת חברתית" description=" קבוצות הורים מספקות הזדמנות לבנות רשת חברתית הן להורים והן לילדים. הקשרים שנוצרים במפגשים אלה יכולים להתפתח לחברויות ארוכות טווח, שמועילות הן להורים (כתמיכה ושיתוף) והן לילדים (ללמידה חברתית ולמשחק משותף)."/>
<MinimalistBox title="סביבה תומכת" description=" הורים הנמצאים בסביבה עם אחרים הנמצאים באותו שלב בחיים יכולים להרגיש יותר מובנים ומקובלים. כולם מכירים את הקשיים והאתגרים של גידול תינוקות, מה שיוצר אווירה פחות שיפוטית ויותר מכילה, שבה אפשר לדבר בחופשיות על חוויות חיוביות וקשות כאחד."/>
<MinimalistBox title="פיתוח כישורי הורות" description="דרך התצפית על הורים אחרים ודרך האינטראקציה איתם, הורים יכולים ללמוד דרכים חדשות לגשת לסיטואציות הוריות שונות."/>
</div>
{/* 
<div className={styles.center}><img src={shame} alt="אכזבה" className={styles.image} /></div>
<div className={styles.more}>הילד לא מוציא את הראש מהמסכים</div>
<div className={styles.more}>ואת/ה רק מקווה שהוא ייצא לשחק בחוץ עם החברים שלו</div>
<div className={styles.description}>לשחק במחשב זה מעולה!</div>
<div className={styles.more}>אבל</div>
<div className={styles.description}>בכל יום שהילד נשאר תקוע במסך הוא ממשיך לאבד אינטרקציות חברתיות</div>
<div className={styles.more}>מה שגורם לחוסר בטחון עצמי,חסכים בכישורים חברתיים שיחמירו עם ההתבגרות של הילד, חוסר הכרה ברגשות שלהם וחוסר בתקשורת בין אישית</div>
<div className={styles.more}>חלק מהתופעות הנלוות לכך הן..</div>
<div className={styles.row}>
<LessonBubble title="חוסר תקשורת" description="ילדים שמרותקים למסכים עלולים להתקשות בתקשורת פנים אל פנים. הם מפתחים העדפה לתקשורת דיגיטלית על פני שיחות אמיתיות."/>
<LessonBubble title="אי הבנות" description="שימוש מוגזם במסכים מקשה על הבנת רמזים חברתיים ושפת גוף. זה מוביל לאי הבנות תכופות בתקשורת עם אחרים."/>
<LessonBubble title="התפרצויות זעם" description="כשמנסים להגביל את זמן המסך, ילדים עלולים להגיב בהתפרצויות זעם. הם מתקשים לווסת את רגשותיהם כשנלקח מהם מקור הגירוי הדיגיטלי."/>
</div>
<div className={styles.row}>
<LessonBubble title="טנטרומים" description="ילדים שרגילים לסיפוק מיידי ממסכים עלולים לפתח טנטרומים כשנתקלים בתסכול בעולם האמיתי. הם מתקשים להתמודד עם דחיית סיפוקים."/>
<LessonBubble title="חוסר בטחון של הילדים" description="חשיפה מוגזמת למסכים עלולה לפגוע בביטחון העצמי של ילדים. הם עלולים להשוות את עצמם לדימויים לא מציאותיים שהם רואים באינטרנט."/>
<LessonBubble title="חוסר ויסות רגשי של הילדים" description="שימוש יתר במסכים מקשה על פיתוח מיומנויות ויסות רגשי. ילדים עלולים להתקשות להתמודד עם מצבים רגשיים מורכבים בחיי היומיום."/>
</div>
<div className={styles.title}>לעומת זאת</div>
<div className={styles.center}><img src={happy} alt="שמחה" className={styles.image}/></div>
<div className={styles.more}>כשהילד יוצא מהבית</div>
<div className={styles.more}>הילד יוצר קשרים ואינטרקציות חברתיות!</div>
<div className={styles.more}>הילד מזיז את הגוף ויוצר חוויות!</div>
<div className={styles.description}>הפערים כאן הם עצומים וההבדל הוא לא רק בפעילות של הילד</div>
<div className={styles.more}>אלא - בפיתוח הכישורים שהילד צובר בגילאים המוקדמים שלו!</div> */}
</>


}
export default ThirdScreen