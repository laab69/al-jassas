// ============================================================
// الجاسوس — لعبة اسلامية
// المحتوى: كلمات سرية، آيات، قصص الأنبياء
// ============================================================

const GAME_CONTENT = [
  // ---------- الأنبياء ----------
  { categorie: "نبي", mot: "يوسف عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "موسى عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "نوح عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "إبراهيم عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "يونس عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "صالح عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "عيسى عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "إسماعيل عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "هود عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "سليمان عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "داود عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "أيوب عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "لوط عليه السلام", theme: "histoire" },
  { categorie: "نبي", mot: "آدم عليه السلام", theme: "histoire" },

  // ---------- السور والآيات ----------
  { categorie: "سورة", mot: "الفاتحة", theme: "ayah" },
  { categorie: "سورة", mot: "الإخلاص", theme: "ayah" },
  { categorie: "سورة", mot: "الفلق والناس (المعوذتان)", theme: "ayah" },
  { categorie: "سورة", mot: "الضحى", theme: "ayah" },
  { categorie: "سورة", mot: "الكوثر", theme: "ayah" },
  { categorie: "سورة", mot: "يس", theme: "ayah" },
  { categorie: "سورة", mot: "الملك", theme: "ayah" },
  { categorie: "سورة", mot: "الكهف", theme: "ayah" },
  { categorie: "سورة", mot: "الفيل", theme: "ayah" },
  { categorie: "سورة", mot: "آية الكرسي", theme: "ayah" },

  // ---------- القصص والرجال ----------
  { categorie: "قصة", mot: "الإسراء والمعراج", theme: "histoire" },
  { categorie: "قصة", mot: "غزوة بدر", theme: "histoire" },
  { categorie: "قصة", mot: "غزوة أحد", theme: "histoire" },
  { categorie: "قصة", mot: "فتح مكة", theme: "histoire" },
  { categorie: "قصة", mot: "أصحاب الكهف", theme: "histoire" },
  { categorie: "قصة", mot: "انفلاق البحر لموسى", theme: "histoire" },
  { categorie: "قصة", mot: "ذبيحة إبراهيم", theme: "histoire" },
  { categorie: "قصة", mot: "الهجرة إلى المدينة", theme: "histoire" },
  { categorie: "قصة", mot: "قصة يوسف والجب", theme: "histoire" },
  { categorie: "قصة", mot: "مريم وولادة عيسى", theme: "histoire" },
  { categorie: "قصة", mot: "قوم عاد والريح", theme: "histoire" },
  { categorie: "قصة", mot: "سبأ وبلقيس", theme: "histoire" },
  { categorie: "قصة", mot: "طالوت وجالوت", theme: "histoire" },
  { categorie: "قصة", mot: "جنة الفردوس", theme: "histoire" },

  // ---------- الأماكن ----------
  { categorie: "مكان", mot: "الكعبة", theme: "lieu" },
  { categorie: "مكان", mot: "المسجد الأقصى", theme: "lieu" },
  { categorie: "مكان", mot: "المدينة المنورة", theme: "lieu" },
  { categorie: "مكان", mot: "جبل عرفات", theme: "lieu" },
  { categorie: "مكان", mot: "بئر زمزم", theme: "lieu" },
  { categorie: "مكان", mot: "غار حراء", theme: "lieu" },
  { categorie: "مكان", mot: "غار ثور", theme: "lieu" },
  { categorie: "مكان", mot: "جبل أحد", theme: "lieu" },
  { categorie: "مكان", mot: "منى ورمي الجمرات", theme: "lieu" },

  // ---------- الشخصيات ----------
  { categorie: "شخصية", mot: "أبو بكر الصديق", theme: "personnage" },
  { categorie: "شخصية", mot: "عمر بن الخطاب", theme: "personnage" },
  { categorie: "شخصية", mot: "عثمان بن عفان", theme: "personnage" },
  { categorie: "شخصية", mot: "علي بن أبي طالب", theme: "personnage" },
  { categorie: "شخصية", mot: "خالد بن الوليد", theme: "personnage" },
  { categorie: "شخصية", mot: "بلال بن رباح", theme: "personnage" },
  { categorie: "شخصية", mot: "عائشة رضي الله عنها", theme: "personnage" },
  { categorie: "شخصية", mot: "خديجة رضي الله عنها", theme: "personnage" },
  { categorie: "شخصية", mot: "حمزة بن عبد المطلب", theme: "personnage" },
  { categorie: "شخصية", mot: "فرعون", theme: "personnage" },
  { categorie: "شخصية", mot: "قارون", theme: "personnage" },
  { categorie: "شخصية", mot: "أبو لهب", theme: "personnage" },
  { categorie: "شخصية", mot: "بلقيس ملكة سبأ", theme: "personnage" },
  { categorie: "شخصية", mot: "يعقوب عليه السلام", theme: "personnage" },

  // ---------- الأركان والعبادات ----------
  { categorie: "ركن", mot: "الحج", theme: "pratique" },
  { categorie: "ركن", mot: "رمضان", theme: "pratique" },
  { categorie: "ركن", mot: "الزكاة", theme: "pratique" },
  { categorie: "ركن", mot: "الصلاة", theme: "pratique" },
  { categorie: "ركن", mot: "الشهادتان", theme: "pratique" },
  { categorie: "ركن", mot: "عيد الأضحى", theme: "pratique" },
  { categorie: "ركن", mot: "عيد الفطر", theme: "pratique" },
  { categorie: "ركن", mot: "الطواف", theme: "pratique" },
  { categorie: "ركن", mot: "السعي بين الصفا والمروة", theme: "pratique" },
  { categorie: "ركن", mot: "الوقوف بعرفات", theme: "pratique" }
];

// نصائح للجاسوس
const SPY_HINTS = [
  "استمع جيداً إلى تلميحات اللاعبين الآخرين",
  "ابقَ غامضاً: « أظنها قصة معروفة »",
  "تحدث عن التقوى والأنبياء والصلاة — لكن بغموض",
  "لا تكن دقيقاً جداً ولا صامتاً جداً",
  "إذا خمّنت الكلمة السرية يمكنك قولها وقت التصويت"
];
