export const brands = [
  "نبيل",
  "دجلة",
  "الوادي",
  "الوطنية",
  "تب توب",
  "أمريكانا",
  "الإكرام",
  "لورباك",
  "هاربر",
  "غير ذلك"
];
export type Category = {
  id: string;
  name: string;
  icon: string;
  colorClass: string;
};

export type Product = {
  id: number;
  name: string;
  categoryId: string;
  brand?: string;
};

export const categories: Category[] = [
  { id: "cheese", name: "أجبان و مبشورة", icon: "🧀", colorClass: "category-cheese" },
  { id: "nabil", name: "منتجات نبيل", icon: "🍗", colorClass: "category-meat" },
  { id: "wadi", name: "منتجات الوادي", icon: "🍖", colorClass: "category-meat" },
  { id: "americana", name: "منتجات أمريكانا", icon: "🌽", colorClass: "category-vegetables" },
  { id: "ikram", name: "منتجات الإكرام", icon: "🫒", colorClass: "category-other" },
  { id: "fish", name: "أسماك", icon: "🐟", colorClass: "category-fish" },
  { id: "potato", name: "بطاطا", icon: "🍟", colorClass: "category-potato" },
  { id: "vegetables", name: "خضروات مجمدة", icon: "🥦", colorClass: "category-vegetables" },
  { id: "butter", name: "زبدة", icon: "🧈", colorClass: "category-butter" },
  { id: "sausage", name: "نقانق", icon: "🌭", colorClass: "category-sausage" },
  { id: "other", name: "منتجات أخرى", icon: "📦", colorClass: "category-other" },
];

export const products: Product[] = [
  // أجبان
  { id: 1, name: "مبشورة 1 كيلو تركي", categoryId: "cheese" },
  { id: 2, name: "مبشورة مصري", categoryId: "cheese" },
  { id: 3, name: "موزاريلا بلوك تركي أونر", categoryId: "cheese" },
  { id: 4, name: "موزاريلا بوك بلوك", categoryId: "cheese" },
  { id: 5, name: "موزاريلا بلوك", categoryId: "cheese" },
  { id: 6, name: "قشقوان بلوك", categoryId: "cheese" },
  { id: 7, name: "شيدر بلوك بلجيكي", categoryId: "cheese" },
  { id: 8, name: "شيدر بلوك ايرلندي", categoryId: "cheese" },
  { id: 9, name: "شيدر أحمر بلجيكي", categoryId: "cheese" },
  { id: 10, name: "شيدر أحمر ايرلندي", categoryId: "cheese" },
  { id: 11, name: "قشقوان 700 غم", categoryId: "cheese" },
  { id: 12, name: "جبنة دهن هنجاري 500 غم", categoryId: "cheese" },
  { id: 13, name: "جبنة دهن هنجاري 200 غم", categoryId: "cheese" },
  { id: 14, name: "جبنة شيدر هنجاري 370 غم", categoryId: "cheese" },
  { id: 100, name: "إكرام موزريلا بلوك", categoryId: "cheese" },
  { id: 101, name: "إكرام جبنة مكس مبروش 1 ك", categoryId: "cheese" },
  { id: 102, name: "إكرام جبنة موزاريلا مبروش 1 ك", categoryId: "cheese" },

  // نبيل
  { id: 15, name: "كوردن بلو نبيل 750 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 16, name: "زنجر نبيل 900 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 17, name: "زنجر نبيل حار 900 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 18, name: "تندر نبيل 900 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 19, name: "برغر لحمة نبيل 450 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 20, name: "برغر دجاج نبيل 450 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 21, name: "برغر لحمة نبيل 900 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 22, name: "برغر دجاج نبيل 900 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 23, name: "برغر جامبو نبيل لحمة", categoryId: "nabil", brand: "نبيل" },
  { id: 24, name: "برغر جامبو نبيل دجاج", categoryId: "nabil", brand: "نبيل" },
  { id: 25, name: "برغر 24 قطعة نبيل (شنتة)", categoryId: "nabil", brand: "نبيل" },
  { id: 26, name: "نجت نبيل 750 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 27, name: "نجت نبيل 900 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 28, name: "كبة نبيل 750 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 29, name: "كبة نبيل 900 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 30, name: "بوشار نبيل", categoryId: "nabil", brand: "نبيل" },
  { id: 31, name: "صدر نبيل 2 كيلو", categoryId: "nabil", brand: "نبيل" },
  { id: 103, name: "سمك فيليه نبيل", categoryId: "nabil", brand: "نبيل" },
  { id: 104, name: "نجت تمبورة نبيل", categoryId: "nabil", brand: "نبيل" },
  { id: 105, name: "نبيل أصابع جبنة موزريلا", categoryId: "nabil", brand: "نبيل" },
  { id: 106, name: "نبيل روست اقتصادي 500 غم", categoryId: "nabil", brand: "نبيل" },
  { id: 107, name: "نبيل ستربس عادي", categoryId: "nabil", brand: "نبيل" },
  { id: 108, name: "نبيل ستربس حار", categoryId: "nabil", brand: "نبيل" },
  { id: 32, name: "كبة دجلة", categoryId: "nabil", brand: "دجلة" },

  // الوادي
  { id: 33, name: "صدر الوادي 1 كيلو", categoryId: "wadi", brand: "الوادي" },
  { id: 34, name: "زنجر الوادي 900 غم", categoryId: "wadi", brand: "الوادي" },
  { id: 35, name: "تندر الوادي 900 غم", categoryId: "wadi", brand: "الوادي" },
  { id: 36, name: "برغر دجاج الوادي 450 غم", categoryId: "wadi", brand: "الوادي" },
  { id: 37, name: "برغر لحمة الوادي 450 غم", categoryId: "wadi", brand: "الوادي" },
  { id: 38, name: "سكالوب الوادي 450 غم", categoryId: "wadi", brand: "الوادي" },
  { id: 39, name: "سكالوب الوادي 24 قطعة", categoryId: "wadi", brand: "الوادي" },
  { id: 40, name: "برغر جامبو لحمة الوادي", categoryId: "wadi", brand: "الوادي" },
  { id: 41, name: "نجت الوادي 250 غم", categoryId: "wadi", brand: "الوادي" },
  { id: 42, name: "كرات لحمة الوادي", categoryId: "wadi", brand: "الوادي" },
  { id: 43, name: "مربعات لحمة الوادي", categoryId: "wadi", brand: "الوادي" },
  { id: 44, name: "نقانق كيس الوادي", categoryId: "wadi", brand: "الوادي" },

  // الوطنية
  { id: 45, name: "زنجر الوطنية", categoryId: "other", brand: "الوطنية" },
  { id: 46, name: "تندر الوطنية", categoryId: "other", brand: "الوطنية" },

  // تب توب
  { id: 109, name: "زنجر تب توب", categoryId: "other", brand: "تب توب" },
  { id: 110, name: "تندر تب توب", categoryId: "other", brand: "تب توب" },

  // أسماك
  { id: 47, name: "سمك فيليه فيتنامي", categoryId: "fish" },
  { id: 48, name: "سمك فيليه", categoryId: "fish" },
  { id: 49, name: "سمك فيليه صني سي", categoryId: "fish" },
  { id: 50, name: "سمك زبيدي", categoryId: "fish" },
  { id: 51, name: "سمك دنيس", categoryId: "fish" },
  { id: 52, name: "سمك فلاسترو", categoryId: "fish" },
  { id: 53, name: "سمك فوكلاند", categoryId: "fish" },
  { id: 54, name: "سمك مكيس", categoryId: "fish" },
  { id: 111, name: "روبيان", categoryId: "fish" },

  // بطاطا
  { id: 55, name: "بطاطا ويدجيز", categoryId: "potato" },
  { id: 56, name: "بطاطا بريميوم 2.5 كغم", categoryId: "potato" },
  { id: 57, name: "بطاطا بريميوم 7×7 / 2.5 كغم", categoryId: "potato" },
  { id: 58, name: "بطاطا بريميوم 9×9 / 2.5 كغم", categoryId: "potato" },
  { id: 59, name: "بطاطا الأرز 2.5 كغم", categoryId: "potato" },
  { id: 60, name: "بطاطا 900 غم الأرز", categoryId: "potato" },
  { id: 61, name: "بطاطا بلجيكي 1 كيلو", categoryId: "potato" },
  { id: 62, name: "بطاطا مصري 900 غم", categoryId: "potato" },
  { id: 112, name: "بطاطا ودجز 1 كيلو بلجيكي", categoryId: "potato" },
  { id: 113, name: "بطاطا 1 كيلو بلجيكي", categoryId: "potato" },
  { id: 114, name: "بطاطا كرنكل 2.5 كغم", categoryId: "potato" },
  { id: 115, name: "بطاطا كرنكل أمريكانا 1 كيلو", categoryId: "potato" },
  { id: 116, name: "بطاطا أمريكانا 1 كيلو", categoryId: "potato" },
  { id: 117, name: "بطاطا أمريكانا 2.5 كغم", categoryId: "potato" },
  { id: 118, name: "بطاطا بلجيكي 2.5 كغم 7×7", categoryId: "potato" },
  { id: 119, name: "بطاطا بلجيكي 2.5 كغم", categoryId: "potato" },
  { id: 120, name: "بطاطا مصري 2.5 كغم", categoryId: "potato" },
  { id: 121, name: "بطاطا Frigyes 2.5 / 7×7", categoryId: "potato" },
  { id: 122, name: "بطاطا 900 غم كانزا", categoryId: "potato" },

  // خضروات مجمدة
  { id: 63, name: "بازيلا و جزر هنجاري", categoryId: "vegetables" },
  { id: 64, name: "بازيلا سادة هنجاري", categoryId: "vegetables" },
  { id: 65, name: "ذرة هنجاري", categoryId: "vegetables" },
  { id: 66, name: "بازيلا و جزر مصري", categoryId: "vegetables" },
  { id: 67, name: "فراولة مصري", categoryId: "vegetables" },
  { id: 68, name: "ملوخية مصري", categoryId: "vegetables" },
  { id: 69, name: "بامية مصري نمرة", categoryId: "vegetables" },
  { id: 70, name: "بامية مصري زيرو", categoryId: "vegetables" },
  { id: 71, name: "بامية مصري إكسترا", categoryId: "vegetables" },
  { id: 72, name: "رمان 1 كيلو", categoryId: "vegetables" },
  { id: 123, name: "مانجا مصرية", categoryId: "vegetables" },
  { id: 124, name: "فاصوليا مصري", categoryId: "vegetables" },

  // أمريكانا
  { id: 73, name: "فراولة 1 كيلو أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 74, name: "بازيلا و جزر أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 75, name: "بازيلا سادة أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 76, name: "بامية زيرو أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 77, name: "بامية ممتاز أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 78, name: "بامية إكسترا أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 79, name: "ملوخية أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 80, name: "فاصوليا أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 81, name: "فول أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 82, name: "خضار 7 أصناف أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 83, name: "سبانخ أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 84, name: "شوربة خضار أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 85, name: "خضار أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 86, name: "ذرة أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 87, name: "فول علب أمريكانا", categoryId: "americana", brand: "أمريكانا" },
  { id: 125, name: "أمريكانا ستربس حار", categoryId: "americana", brand: "أمريكانا" },
  { id: 126, name: "أمريكانا ستربس عادي", categoryId: "americana", brand: "أمريكانا" },
  { id: 127, name: "أمريكانا برغر بقري جامبو", categoryId: "americana", brand: "أمريكانا" },
  { id: 128, name: "أمريكانا برغر دجاج جامبو", categoryId: "americana", brand: "أمريكانا" },
  { id: 129, name: "أمريكانا سمك فيليه", categoryId: "americana", brand: "أمريكانا" },
  { id: 130, name: "زنجر أمريكانا 1 كغم", categoryId: "americana", brand: "أمريكانا" },

  // إكرام
  { id: 88, name: "إكرام ملوخية", categoryId: "ikram", brand: "الإكرام" },
  { id: 89, name: "إكرام بازيلا وجزر", categoryId: "ikram", brand: "الإكرام" },
  { id: 90, name: "إكرام بامية إكسترا", categoryId: "ikram", brand: "الإكرام" },
  { id: 91, name: "إكرام بامية زيرو", categoryId: "ikram", brand: "الإكرام" },
  { id: 92, name: "إكرام يخنة", categoryId: "ikram", brand: "الإكرام" },
  { id: 93, name: "إكرام خضار 7 أصناف", categoryId: "ikram", brand: "الإكرام" },
  { id: 94, name: "إكرام معجون طماطم", categoryId: "ikram", brand: "الإكرام" },
  { id: 95, name: "إكرام زيتون 1.56 كيلو", categoryId: "ikram", brand: "الإكرام" },
  { id: 96, name: "إكرام زيتون 400 غم", categoryId: "ikram", brand: "الإكرام" },
  { id: 97, name: "إكرام جبنة فيتا 125 غم", categoryId: "ikram", brand: "الإكرام" },
  { id: 98, name: "إكرام جبنة فيتا 400 غم", categoryId: "ikram", brand: "الإكرام" },
  { id: 99, name: "إكرام ذرة 170 غم", categoryId: "ikram", brand: "الإكرام" },
  { id: 131, name: "إكرام ذرة 400 غم", categoryId: "ikram", brand: "الإكرام" },

  // زبدة
  { id: 132, name: "زبدة لورباك 100 غم", categoryId: "butter", brand: "لورباك" },
  { id: 133, name: "زبدة لورباك غير مملحة 100 غم", categoryId: "butter", brand: "لورباك" },
  { id: 134, name: "زبدة سنو واي 100 غم", categoryId: "butter" },
  { id: 135, name: "زبدة أوكراني 100 غم", categoryId: "butter" },
  { id: 136, name: "زبدة 500 غم", categoryId: "butter" },
  { id: 137, name: "زبدة 1 كيلو", categoryId: "butter" },
  { id: 138, name: "زبدة 25 كيلو", categoryId: "butter" },

  // نقانق
  { id: 139, name: "نقانق فروزن فريش", categoryId: "sausage" },
  { id: 140, name: "نقانق تركي", categoryId: "sausage" },
  { id: 141, name: "نقانق مايدا", categoryId: "sausage" },
  { id: 142, name: "نقانق هاربر", categoryId: "sausage" },
  { id: 143, name: "نقانق كويتي هاربر 24 حبة", categoryId: "sausage", brand: "هاربر" },

  // أخرى
  { id: 144, name: "مفتول بيتي", categoryId: "other" },
  { id: 145, name: "مفتول بسمة 700 غم", categoryId: "other" },
  { id: 146, name: "كبدة", categoryId: "other" },
  { id: 147, name: "شيشبرك 500 غم لحمة", categoryId: "other" },
  { id: 148, name: "شيشبرك 500 غم دجاج", categoryId: "other" },
  { id: 149, name: "عجينة الهنا", categoryId: "other" },
];
