export interface Quote {
  id: string;
  quote: string;
  source: string;
  category: string;
  arabicText?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  quoteCount: number;
}

export const categories: Category[] = [
  {
    name: "Quran Quotes",
    slug: "quran-quotes",
    description: "Beautiful verses from the Holy Quran that guide us to the straight path.",
    quoteCount: 15,
  },
  {
    name: "Hadith Quotes",
    slug: "hadith-quotes",
    description: "Wisdom from the sayings and teachings of Prophet Muhammad (PBUH).",
    quoteCount: 12,
  },
  {
    name: "Islamic Reminders",
    slug: "islamic-reminders",
    description: "Daily reminders to strengthen your faith and connection with Allah.",
    quoteCount: 18,
  },
  {
    name: "Duas",
    slug: "duas",
    description: "Powerful supplications for every moment and situation in life.",
    quoteCount: 20,
  },
  {
    name: "Sabr & Patience",
    slug: "sabr-patience",
    description: "Inspirational quotes about patience, perseverance, and trust in Allah's plan.",
    quoteCount: 14,
  },
  {
    name: "Love in Islam",
    slug: "love-in-islam",
    description: "Beautiful teachings about love, mercy, and compassion in Islam.",
    quoteCount: 10,
  },
  {
    name: "Death & Akhirah",
    slug: "death-akhirah",
    description: "Reminders about the afterlife and preparing for our return to Allah.",
    quoteCount: 16,
  },
  {
    name: "Morning & Evening Duas",
    slug: "morning-evening-duas",
    description: "Essential supplications for starting and ending your day with blessings.",
    quoteCount: 22,
  },
];

export const quotes: Quote[] = [
  // Quran Quotes
  {
    id: "q1",
    quote: "Indeed, with hardship comes ease.",
    source: "Quran 94:6",
    category: "quran-quotes",
    arabicText: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
  },
  {
    id: "q2",
    quote: "And He found you lost and guided you.",
    source: "Quran 93:7",
    category: "quran-quotes",
    arabicText: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
  },
  {
    id: "q3",
    quote: "So verily, with the hardship, there is relief. Verily, with the hardship, there is relief.",
    source: "Quran 94:5-6",
    category: "quran-quotes",
  },
  {
    id: "q4",
    quote: "And whoever puts their trust in Allah, He will be enough for them.",
    source: "Quran 65:3",
    category: "quran-quotes",
    arabicText: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
  },
  
  // Hadith Quotes
  {
    id: "h1",
    quote: "The best among you are those who have the best manners and character.",
    source: "Sahih Bukhari",
    category: "hadith-quotes",
  },
  {
    id: "h2",
    quote: "Be in this world as though you were a stranger or a traveler.",
    source: "Sahih Bukhari",
    category: "hadith-quotes",
  },
  {
    id: "h3",
    quote: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.",
    source: "Sahih Bukhari",
    category: "hadith-quotes",
  },
  {
    id: "h4",
    quote: "None of you truly believes until he loves for his brother what he loves for himself.",
    source: "Sahih Bukhari & Muslim",
    category: "hadith-quotes",
  },
  
  // Islamic Reminders
  {
    id: "r1",
    quote: "When you feel like you have no one, remember Allah is always there. He never leaves you.",
    source: "Islamic Reminder",
    category: "islamic-reminders",
  },
  {
    id: "r2",
    quote: "Your prayers may not change the situation, but they will change you.",
    source: "Islamic Reminder",
    category: "islamic-reminders",
  },
  {
    id: "r3",
    quote: "Trust Allah's timing. His plan is always better than your dreams.",
    source: "Islamic Reminder",
    category: "islamic-reminders",
  },
  
  // Duas
  {
    id: "d1",
    quote: "Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.",
    source: "Quran 2:201",
    category: "duas",
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
  },
  {
    id: "d2",
    quote: "My Lord, expand for me my chest and ease for me my task.",
    source: "Quran 20:25-26",
    category: "duas",
    arabicText: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
  },
  
  // Sabr & Patience
  {
    id: "s1",
    quote: "Patience is the key to relief.",
    source: "Prophet Muhammad (PBUH)",
    category: "sabr-patience",
  },
  {
    id: "s2",
    quote: "Beautiful patience. It is Allah who is sought for help.",
    source: "Quran 12:18",
    category: "sabr-patience",
    arabicText: "فَصَبْرٌ جَمِيلٌ وَاللَّهُ الْمُسْتَعَانُ",
  },
  {
    id: "s3",
    quote: "And be patient, for indeed, Allah does not allow to be lost the reward of those who do good.",
    source: "Quran 11:115",
    category: "sabr-patience",
  },
  
  // Love in Islam
  {
    id: "l1",
    quote: "And live with them in kindness. For if you dislike them – perhaps you dislike a thing and Allah makes therein much good.",
    source: "Quran 4:19",
    category: "love-in-islam",
  },
  {
    id: "l2",
    quote: "The most perfect of believers in faith are those with the best character, and the best of you are those who are best to their women.",
    source: "Tirmidhi",
    category: "love-in-islam",
  },
  
  // Death & Akhirah
  {
    id: "a1",
    quote: "Every soul will taste death. And We test you with evil and with good as trial; and to Us you will be returned.",
    source: "Quran 21:35",
    category: "death-akhirah",
  },
  {
    id: "a2",
    quote: "Compete with one another to attain forgiveness from your Lord and a Paradise as vast as the heavens and the earth.",
    source: "Quran 57:21",
    category: "death-akhirah",
  },
  
  // Morning & Evening Duas
  {
    id: "m1",
    quote: "In the name of Allah with whose name nothing can harm in the earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
    source: "Morning/Evening Dua",
    category: "morning-evening-duas",
    arabicText: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
  },
  {
    id: "m2",
    quote: "O Allah, I ask You for the good of this day and the good of what follows it, and I seek refuge in You from the evil of this day and the evil of what follows it.",
    source: "Morning Dua",
    category: "morning-evening-duas",
  },
];

export const getQuotesByCategory = (slug: string): Quote[] => {
  return quotes.filter((quote) => quote.category === slug);
};

export const getFeaturedQuotes = (): Quote[] => {
  return quotes.slice(0, 6);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};
