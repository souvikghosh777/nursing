// Questions Database for Staff Nurse Grade-II Exam
// 4 Pages x 25 marks each = 100 questions (1 mark each)
// Bilingual: English and Bengali (বাংলা)

const examQuestions = {
    // PAGE 1: Core Nursing Subjects (25 Questions)
    // Anatomy, Physiology, Medical-Surgical Nursing, Child Health, Mental Health
    page1: [
        // Anatomy & Physiology (5 questions)
        {
            id: 1,
            question: "Which organ is responsible for producing insulin in the human body?",
            question_bn: "মানবদেহে ইনসুলিন উৎপাদনের জন্য কোন অঙ্গ দায়ী?",
            options: ["Liver", "Pancreas", "Kidney", "Spleen"],
            options_bn: ["যকৃত", "অগ্ন্যাশয়", "কিডনি", "প্লীহা"],
            correct: 1,
            marks: 1
        },
        {
            id: 2,
            question: "The largest artery in the human body is:",
            question_bn: "মানবদেহের সবচেয়ে বড় ধমনী হল:",
            options: ["Pulmonary artery", "Carotid artery", "Aorta", "Femoral artery"],
            options_bn: ["পালমোনারি ধমনী", "ক্যারোটিড ধমনী", "মহাধমনী", "ফিমোরাল ধমনী"],
            correct: 2,
            marks: 1
        },
        {
            id: 3,
            question: "How many pairs of cranial nerves are present in the human body?",
            question_bn: "মানবদেহে কতজোড়া করোটিক স্নায়ু আছে?",
            options: ["10 pairs", "12 pairs", "14 pairs", "8 pairs"],
            options_bn: ["১০ জোড়া", "১২ জোড়া", "১৪ জোড়া", "৮ জোড়া"],
            correct: 1,
            marks: 1
        },
        {
            id: 4,
            question: "The functional unit of the kidney is called:",
            question_bn: "কিডনির কার্যকরী একক বলা হয়:",
            options: ["Neuron", "Nephron", "Alveoli", "Lobule"],
            options_bn: ["নিউরন", "নেফ্রন", "অ্যালভিওলি", "লোবিউল"],
            correct: 1,
            marks: 1
        },
        {
            id: 5,
            question: "Which chamber of the heart receives oxygenated blood from the lungs?",
            question_bn: "হৃৎপিণ্ডের কোন প্রকোষ্ঠ ফুসফুস থেকে অক্সিজেনযুক্ত রক্ত গ্রহণ করে?",
            options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
            options_bn: ["ডান অলিন্দ", "ডান নিলয়", "বাম অলিন্দ", "বাম নিলয়"],
            correct: 2,
            marks: 1
        },
        // Medical-Surgical Nursing (8 questions)
        {
            id: 6,
            question: "The most common site for intramuscular injection in adults is:",
            question_bn: "প্রাপ্তবয়স্কদের মধ্যে ইন্ট্রামাসকুলার ইনজেকশনের সবচেয়ে সাধারণ স্থান হল:",
            options: ["Deltoid muscle", "Vastus lateralis", "Dorsogluteal", "Ventrogluteal"],
            options_bn: ["ডেলটয়েড পেশী", "ভাস্টাস ল্যাটারালিস", "ডরসোগ্লুটিয়াল", "ভেন্ট্রোগ্লুটিয়াল"],
            correct: 3,
            marks: 1
        },
        {
            id: 7,
            question: "Glasgow Coma Scale (GCS) assesses:",
            question_bn: "গ্লাসগো কোমা স্কেল (GCS) মূল্যায়ন করে:",
            options: ["Pain level", "Level of consciousness", "Respiratory function", "Cardiac output"],
            options_bn: ["ব্যথার মাত্রা", "চেতনার স্তর", "শ্বাসযন্ত্রের কার্যকারিতা", "কার্ডিয়াক আউটপুট"],
            correct: 1,
            marks: 1
        },
        {
            id: 8,
            question: "The normal range of blood glucose level in fasting state is:",
            question_bn: "খালি পেটে রক্তে গ্লুকোজের স্বাভাবিক মাত্রা হল:",
            options: ["50-70 mg/dL", "70-100 mg/dL", "100-140 mg/dL", "140-200 mg/dL"],
            options_bn: ["৫০-৭০ মিগ্রা/ডেসিলি", "৭০-১০০ মিগ্রা/ডেসিলি", "১০০-১৪০ মিগ্রা/ডেসিলি", "১৪০-২০০ মিগ্রা/ডেসিলি"],
            correct: 1,
            marks: 1
        },
        {
            id: 9,
            question: "Which position is recommended for a patient with dyspnea?",
            question_bn: "শ্বাসকষ্ট রোগীর জন্য কোন অবস্থান সুপারিশ করা হয়?",
            options: ["Supine position", "Prone position", "Fowler's position", "Trendelenburg position"],
            options_bn: ["সুপাইন পজিশন", "প্রোন পজিশন", "ফাউলারস পজিশন", "ট্রেন্ডেলেনবার্গ পজিশন"],
            correct: 2,
            marks: 1
        },
        {
            id: 10,
            question: "The first sign of shock is usually:",
            question_bn: "শকের প্রথম লক্ষণ সাধারণত হল:",
            options: ["Hypotension", "Tachycardia", "Decreased urine output", "Altered consciousness"],
            options_bn: ["হাইপোটেনশন", "ট্যাকিকার্ডিয়া", "প্রস্রাব কমে যাওয়া", "চেতনা পরিবর্তন"],
            correct: 1,
            marks: 1
        },
        {
            id: 11,
            question: "Normal central venous pressure (CVP) is:",
            question_bn: "স্বাভাবিক সেন্ট্রাল ভেনাস প্রেসার (CVP) হল:",
            options: ["0-4 cm H2O", "4-10 cm H2O", "10-15 cm H2O", "15-20 cm H2O"],
            options_bn: ["০-৪ সেমি H2O", "৪-১০ সেমি H2O", "১০-১৫ সেমি H2O", "১৫-২০ সেমি H2O"],
            correct: 1,
            marks: 1
        },
        {
            id: 12,
            question: "The best position for lumbar puncture is:",
            question_bn: "লাম্বার পাংচারের জন্য সবচেয়ে ভালো অবস্থান হল:",
            options: ["Supine", "Prone", "Lateral with knees flexed", "Sitting upright"],
            options_bn: ["সুপাইন", "প্রোন", "হাঁটু বাঁকা করে পাশে শোয়া", "সোজা হয়ে বসা"],
            correct: 2,
            marks: 1
        },
        {
            id: 13,
            question: "Trousseau's sign is positive in:",
            question_bn: "ট্রুসোর চিহ্ন পজিটিভ হয়:",
            options: ["Hypocalcemia", "Hypercalcemia", "Hypokalemia", "Hyperkalemia"],
            options_bn: ["হাইপোক্যালসেমিয়া", "হাইপারক্যালসেমিয়া", "হাইপোক্যালেমিয়া", "হাইপারক্যালেমিয়া"],
            correct: 0,
            marks: 1
        },
        // Child Health Nursing (6 questions)
        {
            id: 14,
            question: "The normal respiratory rate in a newborn is:",
            question_bn: "নবজাতকের স্বাভাবিক শ্বাস-প্রশ্বাসের হার হল:",
            options: ["12-20 breaths/min", "20-30 breaths/min", "30-60 breaths/min", "60-80 breaths/min"],
            options_bn: ["১২-২০ শ্বাস/মিনিট", "২০-৩০ শ্বাস/মিনিট", "৩০-৬০ শ্বাস/মিনিট", "৬০-৮০ শ্বাস/মিনিট"],
            correct: 2,
            marks: 1
        },
        {
            id: 15,
            question: "BCG vaccine is given to protect against:",
            question_bn: "BCG টিকা দেওয়া হয় যে রোগ থেকে রক্ষা করতে:",
            options: ["Polio", "Measles", "Tuberculosis", "Hepatitis B"],
            options_bn: ["পোলিও", "হাম", "যক্ষ্মা", "হেপাটাইটিস বি"],
            correct: 2,
            marks: 1
        },
        {
            id: 16,
            question: "The anterior fontanelle normally closes by:",
            question_bn: "সামনের তালু সাধারণত বন্ধ হয়:",
            options: ["6 months", "12-18 months", "24 months", "36 months"],
            options_bn: ["৬ মাস", "১২-১৮ মাস", "২৪ মাস", "৩৬ মাস"],
            correct: 1,
            marks: 1
        },
        {
            id: 17,
            question: "Exclusive breastfeeding is recommended for:",
            question_bn: "শুধুমাত্র বুকের দুধ খাওয়ানো সুপারিশ করা হয়:",
            options: ["3 months", "4 months", "6 months", "12 months"],
            options_bn: ["৩ মাস", "৪ মাস", "৬ মাস", "১২ মাস"],
            correct: 2,
            marks: 1
        },
        {
            id: 18,
            question: "The birth weight of a normal term baby usually doubles by:",
            question_bn: "একটি স্বাভাবিক পূর্ণ মেয়াদী শিশুর জন্ম ওজন সাধারণত দ্বিগুণ হয়:",
            options: ["3 months", "5 months", "7 months", "12 months"],
            options_bn: ["৩ মাস", "৫ মাস", "৭ মাস", "১২ মাস"],
            correct: 1,
            marks: 1
        },
        {
            id: 19,
            question: "Normal head circumference of a newborn is:",
            question_bn: "নবজাতকের স্বাভাবিক মাথার পরিধি হল:",
            options: ["30-32 cm", "33-35 cm", "36-38 cm", "39-41 cm"],
            options_bn: ["৩০-৩২ সেমি", "৩৩-৩৫ সেমি", "৩৬-৩৮ সেমি", "৩৯-৪১ সেমি"],
            correct: 1,
            marks: 1
        },
        // Mental Health Nursing (6 questions)
        {
            id: 20,
            question: "Which neurotransmitter is primarily associated with depression?",
            question_bn: "কোন নিউরোট্রান্সমিটার প্রাথমিকভাবে বিষণ্নতার সাথে যুক্ত?",
            options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"],
            options_bn: ["ডোপামিন", "সেরোটোনিন", "অ্যাসিটাইলকোলিন", "গাবা"],
            correct: 1,
            marks: 1
        },
        {
            id: 21,
            question: "The defense mechanism where unacceptable thoughts are pushed into the unconscious is:",
            question_bn: "যে প্রতিরক্ষা ব্যবস্থায় অগ্রহণযোগ্য চিন্তাগুলি অবচেতনে ঠেলে দেওয়া হয়:",
            options: ["Projection", "Denial", "Repression", "Rationalization"],
            options_bn: ["প্রজেকশন", "অস্বীকার", "দমন", "যুক্তিকরণ"],
            correct: 2,
            marks: 1
        },
        {
            id: 22,
            question: "Electroconvulsive therapy (ECT) is primarily used for:",
            question_bn: "ইলেক্ট্রোকনভালসিভ থেরাপি (ECT) প্রাথমিকভাবে ব্যবহৃত হয়:",
            options: ["Anxiety disorders", "Severe depression", "Personality disorders", "Phobias"],
            options_bn: ["উদ্বেগজনিত ব্যাধি", "গুরুতর বিষণ্নতা", "ব্যক্তিত্বের ব্যাধি", "ফোবিয়া"],
            correct: 1,
            marks: 1
        },
        {
            id: 23,
            question: "The therapeutic blood level of Lithium is:",
            question_bn: "লিথিয়ামের থেরাপিউটিক রক্তের মাত্রা হল:",
            options: ["0.2-0.5 mEq/L", "0.6-1.2 mEq/L", "1.5-2.0 mEq/L", "2.0-2.5 mEq/L"],
            options_bn: ["০.২-০.৫ mEq/L", "০.৬-১.২ mEq/L", "১.৫-২.০ mEq/L", "২.০-২.৫ mEq/L"],
            correct: 1,
            marks: 1
        },
        {
            id: 24,
            question: "Which of the following is a positive symptom of schizophrenia?",
            question_bn: "নিচের কোনটি সিজোফ্রেনিয়ার একটি ইতিবাচক লক্ষণ?",
            options: ["Flat affect", "Hallucinations", "Social withdrawal", "Poverty of speech"],
            options_bn: ["সমতল প্রভাব", "হ্যালুসিনেশন", "সামাজিক প্রত্যাহার", "বক্তৃতার দারিদ্র্য"],
            correct: 1,
            marks: 1
        },
        {
            id: 25,
            question: "Therapeutic communication includes:",
            question_bn: "থেরাপিউটিক যোগাযোগের মধ্যে রয়েছে:",
            options: ["Giving advice", "Active listening", "Changing the subject", "Arguing with patient"],
            options_bn: ["পরামর্শ দেওয়া", "সক্রিয় শ্রবণ", "বিষয় পরিবর্তন করা", "রোগীর সাথে তর্ক করা"],
            correct: 1,
            marks: 1
        }
    ],

    // PAGE 2: General Knowledge (25 Questions)
    // Health-related GK, Current Affairs, Nursing History
    page2: [
        {
            id: 26,
            question: "World Health Day is observed on:",
            question_bn: "বিশ্ব স্বাস্থ্য দিবস পালিত হয়:",
            options: ["April 7", "May 12", "October 24", "December 1"],
            options_bn: ["৭ এপ্রিল", "১২ মে", "২৪ অক্টোবর", "১ ডিসেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 27,
            question: "The headquarters of WHO is located in:",
            question_bn: "WHO-এর সদর দপ্তর অবস্থিত:",
            options: ["New York", "Geneva", "Paris", "London"],
            options_bn: ["নিউ ইয়র্ক", "জেনেভা", "প্যারিস", "লন্ডন"],
            correct: 1,
            marks: 1
        },
        {
            id: 28,
            question: "International Nurses Day is celebrated on:",
            question_bn: "আন্তর্জাতিক নার্স দিবস পালিত হয়:",
            options: ["May 1", "May 12", "June 5", "October 15"],
            options_bn: ["১ মে", "১২ মে", "৫ জুন", "১৫ অক্টোবর"],
            correct: 1,
            marks: 1
        },
        {
            id: 29,
            question: "Florence Nightingale was born in which year?",
            question_bn: "ফ্লোরেন্স নাইটিঙ্গেল কত সালে জন্মগ্রহণ করেন?",
            options: ["1810", "1820", "1830", "1840"],
            options_bn: ["১৮১০", "১৮২০", "১৮৩০", "১৮৪০"],
            correct: 1,
            marks: 1
        },
        {
            id: 30,
            question: "The Indian Nursing Council was established in:",
            question_bn: "ভারতীয় নার্সিং কাউন্সিল প্রতিষ্ঠিত হয়:",
            options: ["1947", "1949", "1952", "1960"],
            options_bn: ["১৯৪৭", "১৯৪৯", "১৯৫২", "১৯৬০"],
            correct: 1,
            marks: 1
        },
        {
            id: 31,
            question: "NRHM was launched in which year?",
            question_bn: "NRHM কত সালে চালু হয়েছিল?",
            options: ["2003", "2005", "2007", "2010"],
            options_bn: ["২০০৩", "২০০৫", "২০০৭", "২০১০"],
            correct: 1,
            marks: 1
        },
        {
            id: 32,
            question: "The full form of AYUSH is:",
            question_bn: "AYUSH-এর পূর্ণরূপ হল:",
            options: [
                "Ayurveda, Yoga, Unani, Siddha, Homeopathy",
                "Ayurveda, Yoga, Unani, Surgery, Homeopathy",
                "Ayurveda, Yoga, Universal, Siddha, Health",
                "Ayurveda, Youth, Unani, Siddha, Homeopathy"
            ],
            options_bn: [
                "আয়ুর্বেদ, যোগ, ইউনানি, সিদ্ধ, হোমিওপ্যাথি",
                "আয়ুর্বেদ, যোগ, ইউনানি, সার্জারি, হোমিওপ্যাথি",
                "আয়ুর্বেদ, যোগ, ইউনিভার্সাল, সিদ্ধ, স্বাস্থ্য",
                "আয়ুর্বেদ, যুব, ইউনানি, সিদ্ধ, হোমিওপ্যাথি"
            ],
            correct: 0,
            marks: 1
        },
        {
            id: 33,
            question: "National Health Policy was first formulated in:",
            question_bn: "জাতীয় স্বাস্থ্য নীতি প্রথম প্রণয়ন করা হয়:",
            options: ["1980", "1983", "1990", "2000"],
            options_bn: ["১৯৮০", "১৯৮৩", "১৯৯০", "২০০০"],
            correct: 1,
            marks: 1
        },
        {
            id: 34,
            question: "World AIDS Day is observed on:",
            question_bn: "বিশ্ব এইডস দিবস পালিত হয়:",
            options: ["November 1", "December 1", "October 1", "September 1"],
            options_bn: ["১ নভেম্বর", "১ ডিসেম্বর", "১ অক্টোবর", "১ সেপ্টেম্বর"],
            correct: 1,
            marks: 1
        },
        {
            id: 35,
            question: "The Red Cross was founded by:",
            question_bn: "রেড ক্রস প্রতিষ্ঠা করেন:",
            options: ["Florence Nightingale", "Henry Dunant", "Louis Pasteur", "Robert Koch"],
            options_bn: ["ফ্লোরেন্স নাইটিঙ্গেল", "হেনরি ডুনান্ট", "লুই পাস্তুর", "রবার্ট কোচ"],
            correct: 1,
            marks: 1
        },
        {
            id: 36,
            question: "World Tuberculosis Day is observed on:",
            question_bn: "বিশ্ব যক্ষ্মা দিবস পালিত হয়:",
            options: ["March 24", "April 24", "May 24", "June 24"],
            options_bn: ["২৪ মার্চ", "২৪ এপ্রিল", "২৪ মে", "২৪ জুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 37,
            question: "The Pulse Polio Programme was launched in India in:",
            question_bn: "ভারতে পালস পোলিও কর্মসূচি চালু হয়েছিল:",
            options: ["1990", "1994", "1995", "2000"],
            options_bn: ["১৯৯০", "১৯৯৪", "১৯৯৫", "২০০০"],
            correct: 2,
            marks: 1
        },
        {
            id: 38,
            question: "World Heart Day is celebrated on:",
            question_bn: "বিশ্ব হার্ট দিবস পালিত হয়:",
            options: ["September 29", "October 29", "November 29", "August 29"],
            options_bn: ["২৯ সেপ্টেম্বর", "২৯ অক্টোবর", "২৯ নভেম্বর", "২৯ আগস্ট"],
            correct: 0,
            marks: 1
        },
        {
            id: 39,
            question: "The first woman to receive the Nobel Prize was:",
            question_bn: "নোবেল পুরস্কার পাওয়া প্রথম মহিলা ছিলেন:",
            options: ["Marie Curie", "Mother Teresa", "Florence Nightingale", "Clara Barton"],
            options_bn: ["মেরি কুরি", "মাদার তেরেসা", "ফ্লোরেন্স নাইটিঙ্গেল", "ক্লারা বার্টন"],
            correct: 0,
            marks: 1
        },
        {
            id: 40,
            question: "UNICEF headquarters is located in:",
            question_bn: "UNICEF-এর সদর দপ্তর অবস্থিত:",
            options: ["Geneva", "New York", "Paris", "London"],
            options_bn: ["জেনেভা", "নিউ ইয়র্ক", "প্যারিস", "লন্ডন"],
            correct: 1,
            marks: 1
        },
        {
            id: 41,
            question: "World Population Day is observed on:",
            question_bn: "বিশ্ব জনসংখ্যা দিবস পালিত হয়:",
            options: ["July 11", "June 11", "August 11", "May 11"],
            options_bn: ["১১ জুলাই", "১১ জুন", "১১ আগস্ট", "১১ মে"],
            correct: 0,
            marks: 1
        },
        {
            id: 42,
            question: "The National Health Mission was launched in:",
            question_bn: "জাতীয় স্বাস্থ্য মিশন চালু হয়েছিল:",
            options: ["2010", "2012", "2013", "2015"],
            options_bn: ["২০১০", "২০১২", "২০১৩", "২০১৫"],
            correct: 2,
            marks: 1
        },
        {
            id: 43,
            question: "WHO was established in which year?",
            question_bn: "WHO কত সালে প্রতিষ্ঠিত হয়েছিল?",
            options: ["1945", "1946", "1948", "1950"],
            options_bn: ["১৯৪৫", "১৯৪৬", "১৯৪৮", "১৯৫০"],
            correct: 2,
            marks: 1
        },
        {
            id: 44,
            question: "World Mental Health Day is observed on:",
            question_bn: "বিশ্ব মানসিক স্বাস্থ্য দিবস পালিত হয়:",
            options: ["October 10", "September 10", "November 10", "December 10"],
            options_bn: ["১০ অক্টোবর", "১০ সেপ্টেম্বর", "১০ নভেম্বর", "১০ ডিসেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 45,
            question: "Janani Suraksha Yojana was launched in:",
            question_bn: "জননী সুরক্ষা যোজনা চালু হয়েছিল:",
            options: ["2003", "2005", "2007", "2009"],
            options_bn: ["২০০৩", "২০০৫", "২০০৭", "২০০৯"],
            correct: 1,
            marks: 1
        },
        {
            id: 46,
            question: "The theme of World Health Day 2024 was:",
            question_bn: "বিশ্ব স্বাস্থ্য দিবস ২০২৪-এর থিম ছিল:",
            options: ["My Health, My Right", "Universal Health Coverage", "Health for All", "Building a Fairer World"],
            options_bn: ["আমার স্বাস্থ্য, আমার অধিকার", "সার্বজনীন স্বাস্থ্য কভারেজ", "সকলের জন্য স্বাস্থ্য", "একটি ন্যায্য বিশ্ব গড়া"],
            correct: 0,
            marks: 1
        },
        {
            id: 47,
            question: "Ayushman Bharat was launched in which year?",
            question_bn: "আয়ুষ্মান ভারত কত সালে চালু হয়েছিল?",
            options: ["2016", "2017", "2018", "2019"],
            options_bn: ["২০১৬", "২০১৭", "২০১৮", "২০১৯"],
            correct: 2,
            marks: 1
        },
        {
            id: 48,
            question: "World Diabetes Day is observed on:",
            question_bn: "বিশ্ব ডায়াবেটিস দিবস পালিত হয়:",
            options: ["November 14", "October 14", "December 14", "September 14"],
            options_bn: ["১৪ নভেম্বর", "১৪ অক্টোবর", "১৪ ডিসেম্বর", "১৪ সেপ্টেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 49,
            question: "The first nursing school in India was established in:",
            question_bn: "ভারতের প্রথম নার্সিং স্কুল প্রতিষ্ঠিত হয়েছিল:",
            options: ["Chennai", "Mumbai", "Kolkata", "Delhi"],
            options_bn: ["চেন্নাই", "মুম্বাই", "কলকাতা", "দিল্লি"],
            correct: 0,
            marks: 1
        },
        {
            id: 50,
            question: "World Breastfeeding Week is observed in:",
            question_bn: "বিশ্ব স্তন্যপান সপ্তাহ পালিত হয়:",
            options: ["First week of August", "First week of July", "First week of September", "First week of October"],
            options_bn: ["আগস্টের প্রথম সপ্তাহ", "জুলাইয়ের প্রথম সপ্তাহ", "সেপ্টেম্বরের প্রথম সপ্তাহ", "অক্টোবরের প্রথম সপ্তাহ"],
            correct: 0,
            marks: 1
        }
    ],

    // PAGE 3: English, Pharmacology, Community Health, Midwifery (25 Questions)
    page3: [
        // English (6 questions)
        {
            id: 51,
            question: "Choose the correct spelling:",
            question_bn: "সঠিক বানান নির্বাচন করুন:",
            options: ["Diarrhoea", "Diarrhea", "Diarhea", "Both A and B are correct"],
            options_bn: ["Diarrhoea", "Diarrhea", "Diarhea", "A এবং B উভয়ই সঠিক"],
            correct: 3,
            marks: 1
        },
        {
            id: 52,
            question: "The synonym of 'acute' is:",
            question_bn: "'acute'-এর সমার্থক শব্দ হল:",
            options: ["Chronic", "Severe", "Mild", "Moderate"],
            options_bn: ["দীর্ঘস্থায়ী", "তীব্র", "মৃদু", "মাঝারি"],
            correct: 1,
            marks: 1
        },
        {
            id: 53,
            question: "Choose the correct sentence:",
            question_bn: "সঠিক বাক্যটি নির্বাচন করুন:",
            options: [
                "The patient was admitted yesterday",
                "The patient were admitted yesterday",
                "The patient have admitted yesterday",
                "The patient has admit yesterday"
            ],
            options_bn: [
                "রোগীকে গতকাল ভর্তি করা হয়েছিল",
                "রোগীকে গতকাল ভর্তি করা হয়েছিল (ভুল)",
                "রোগী গতকাল ভর্তি হয়েছে (ভুল)",
                "রোগী গতকাল ভর্তি (ভুল)"
            ],
            correct: 0,
            marks: 1
        },
        {
            id: 54,
            question: "The antonym of 'benign' is:",
            question_bn: "'benign'-এর বিপরীত শব্দ হল:",
            options: ["Harmless", "Malignant", "Gentle", "Kind"],
            options_bn: ["নিরীহ", "ম্যালিগন্যান্ট", "মৃদু", "দয়ালু"],
            correct: 1,
            marks: 1
        },
        {
            id: 55,
            question: "Fill in the blank: The nurse _____ the patient's vital signs.",
            question_bn: "শূন্যস্থান পূরণ করুন: নার্স রোগীর ভাইটাল সাইন _____ করেছেন।",
            options: ["monitored", "monitoring", "monitor", "monitors"],
            options_bn: ["মনিটর করেছেন", "মনিটর করছে", "মনিটর", "মনিটর করে"],
            correct: 0,
            marks: 1
        },
        {
            id: 56,
            question: "The meaning of 'prognosis' is:",
            question_bn: "'prognosis'-এর অর্থ হল:",
            options: ["Treatment plan", "Disease cause", "Predicted outcome", "Symptom analysis"],
            options_bn: ["চিকিৎসা পরিকল্পনা", "রোগের কারণ", "পূর্বাভাসিত ফলাফল", "লক্ষণ বিশ্লেষণ"],
            correct: 2,
            marks: 1
        },
        // Pharmacology (7 questions)
        {
            id: 57,
            question: "Which drug is the antidote for Heparin overdose?",
            question_bn: "হেপারিন ওভারডোজের প্রতিষেধক ওষুধ কোনটি?",
            options: ["Vitamin K", "Protamine sulfate", "Naloxone", "Flumazenil"],
            options_bn: ["ভিটামিন কে", "প্রোটামিন সালফেট", "নালোক্সোন", "ফ্লুমাজেনিল"],
            correct: 1,
            marks: 1
        },
        {
            id: 58,
            question: "Adrenaline is contraindicated in:",
            question_bn: "অ্যাড্রেনালিন নিষিদ্ধ:",
            options: ["Anaphylaxis", "Cardiac arrest", "Finger block anesthesia", "Asthma"],
            options_bn: ["অ্যানাফিল্যাক্সিস", "কার্ডিয়াক অ্যারেস্ট", "আঙুলের ব্লক অ্যানেস্থেসিয়া", "হাঁপানি"],
            correct: 2,
            marks: 1
        },
        {
            id: 59,
            question: "Which route provides the fastest drug absorption?",
            question_bn: "কোন পথে ওষুধ সবচেয়ে দ্রুত শোষিত হয়?",
            options: ["Oral", "Subcutaneous", "Intramuscular", "Intravenous"],
            options_bn: ["মুখে", "সাবকিউটেনিয়াস", "ইন্ট্রামাসকুলার", "ইন্ট্রাভেনাস"],
            correct: 3,
            marks: 1
        },
        {
            id: 60,
            question: "Aspirin works by inhibiting:",
            question_bn: "অ্যাসপিরিন কাজ করে বাধা দিয়ে:",
            options: ["Thrombin", "Cyclooxygenase", "Vitamin K", "Factor X"],
            options_bn: ["থ্রম্বিন", "সাইক্লোঅক্সিজেনেজ", "ভিটামিন কে", "ফ্যাক্টর এক্স"],
            correct: 1,
            marks: 1
        },
        {
            id: 61,
            question: "The drug of choice for malignant hyperthermia is:",
            question_bn: "ম্যালিগন্যান্ট হাইপারথার্মিয়ার জন্য পছন্দের ওষুধ হল:",
            options: ["Diazepam", "Dantrolene", "Propranolol", "Morphine"],
            options_bn: ["ডায়াজেপাম", "ড্যানট্রোলিন", "প্রোপ্রানোলল", "মরফিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 62,
            question: "Which drug is used as an antidote for morphine overdose?",
            question_bn: "মরফিন ওভারডোজের প্রতিষেধক হিসেবে কোন ওষুধ ব্যবহৃত হয়?",
            options: ["Flumazenil", "Naloxone", "Atropine", "Neostigmine"],
            options_bn: ["ফ্লুমাজেনিল", "নালোক্সোন", "অ্যাট্রোপিন", "নিওস্টিগমিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 63,
            question: "Insulin is stored at:",
            question_bn: "ইনসুলিন সংরক্ষণ করা হয়:",
            options: ["Room temperature", "2-8°C", "Freezer", "-20°C"],
            options_bn: ["ঘরের তাপমাত্রায়", "২-৮°সে", "ফ্রিজারে", "-২০°সে"],
            correct: 1,
            marks: 1
        },
        // Community Health Nursing (6 questions)
        {
            id: 64,
            question: "The concept of Primary Health Care was adopted at:",
            question_bn: "প্রাথমিক স্বাস্থ্যসেবার ধারণা গৃহীত হয়েছিল:",
            options: ["Geneva Conference", "Alma-Ata Conference", "Ottawa Conference", "Jakarta Conference"],
            options_bn: ["জেনেভা সম্মেলন", "আলমা-আতা সম্মেলন", "অটোয়া সম্মেলন", "জাকার্তা সম্মেলন"],
            correct: 1,
            marks: 1
        },
        {
            id: 65,
            question: "The minimum residual chlorine in drinking water should be:",
            question_bn: "পানীয় জলে ন্যূনতম অবশিষ্ট ক্লোরিন হওয়া উচিত:",
            options: ["0.1 mg/L", "0.2 mg/L", "0.5 mg/L", "1.0 mg/L"],
            options_bn: ["০.১ মিগ্রা/লি", "০.২ মিগ্রা/লি", "০.৫ মিগ্রা/লি", "১.০ মিগ্রা/লি"],
            correct: 2,
            marks: 1
        },
        {
            id: 66,
            question: "ASHA worker is selected from:",
            question_bn: "আশা কর্মী নির্বাচিত হয়:",
            options: ["Any village", "Same village she will serve", "Nearby city", "District headquarters"],
            options_bn: ["যেকোনো গ্রাম", "যে গ্রামে সে সেবা দেবে সেই গ্রাম", "কাছের শহর", "জেলা সদর"],
            correct: 1,
            marks: 1
        },
        {
            id: 67,
            question: "The causative agent of Typhoid fever is:",
            question_bn: "টাইফয়েড জ্বরের কারক হল:",
            options: ["Vibrio cholerae", "Salmonella typhi", "Shigella", "E. coli"],
            options_bn: ["ভিব্রিও কলেরা", "সালমোনেলা টাইফি", "শিগেলা", "ই. কোলাই"],
            correct: 1,
            marks: 1
        },
        {
            id: 68,
            question: "DDT is used for control of:",
            question_bn: "DDT ব্যবহার করা হয় নিয়ন্ত্রণের জন্য:",
            options: ["Water-borne diseases", "Air-borne diseases", "Vector-borne diseases", "Food-borne diseases"],
            options_bn: ["জলবাহিত রোগ", "বায়ুবাহিত রোগ", "ভেক্টরবাহিত রোগ", "খাদ্যবাহিত রোগ"],
            correct: 2,
            marks: 1
        },
        {
            id: 69,
            question: "The recommended daily protein intake for an adult is:",
            question_bn: "একজন প্রাপ্তবয়স্কের জন্য প্রস্তাবিত দৈনিক প্রোটিন গ্রহণ হল:",
            options: ["0.5 g/kg body weight", "1 g/kg body weight", "1.5 g/kg body weight", "2 g/kg body weight"],
            options_bn: ["০.৫ গ্রাম/কেজি শরীরের ওজন", "১ গ্রাম/কেজি শরীরের ওজন", "১.৫ গ্রাম/কেজি শরীরের ওজন", "২ গ্রাম/কেজি শরীরের ওজন"],
            correct: 1,
            marks: 1
        },
        // Midwifery (6 questions)
        {
            id: 70,
            question: "The normal duration of pregnancy is:",
            question_bn: "গর্ভাবস্থার স্বাভাবিক সময়কাল হল:",
            options: ["36 weeks", "38 weeks", "40 weeks", "42 weeks"],
            options_bn: ["৩৬ সপ্তাহ", "৩৮ সপ্তাহ", "৪০ সপ্তাহ", "৪২ সপ্তাহ"],
            correct: 2,
            marks: 1
        },
        {
            id: 71,
            question: "Engagement of fetal head in primigravida occurs at:",
            question_bn: "প্রাইমিগ্র্যাভিডায় ভ্রূণের মাথার এনগেজমেন্ট হয়:",
            options: ["32 weeks", "36 weeks", "38 weeks", "During labor"],
            options_bn: ["৩২ সপ্তাহ", "৩৬ সপ্তাহ", "৩৮ সপ্তাহ", "প্রসবের সময়"],
            correct: 1,
            marks: 1
        },
        {
            id: 72,
            question: "The hormone responsible for milk ejection is:",
            question_bn: "দুধ নিঃসরণের জন্য দায়ী হরমোন হল:",
            options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
            options_bn: ["প্রোল্যাক্টিন", "অক্সিটোসিন", "ইস্ট্রোজেন", "প্রোজেস্টেরন"],
            correct: 1,
            marks: 1
        },
        {
            id: 73,
            question: "Bishop score is used to assess:",
            question_bn: "বিশপ স্কোর ব্যবহার করা হয় মূল্যায়ন করতে:",
            options: ["Fetal maturity", "Cervical ripeness", "Amniotic fluid", "Placental function"],
            options_bn: ["ভ্রূণের পরিপক্বতা", "সার্ভিক্সের পরিপক্বতা", "অ্যামনিওটিক তরল", "প্লাসেন্টার কার্যকারিতা"],
            correct: 1,
            marks: 1
        },
        {
            id: 74,
            question: "The normal fetal heart rate is:",
            question_bn: "ভ্রূণের স্বাভাবিক হৃদস্পন্দন হল:",
            options: ["80-100 bpm", "100-120 bpm", "120-160 bpm", "160-200 bpm"],
            options_bn: ["৮০-১০০ বিপিএম", "১০০-১২০ বিপিএম", "১২০-১৬০ বিপিএম", "১৬০-২০০ বিপিএম"],
            correct: 2,
            marks: 1
        },
        {
            id: 75,
            question: "Lochia rubra is present for approximately:",
            question_bn: "লোকিয়া রুব্রা প্রায় কত দিন থাকে:",
            options: ["1-3 days", "4-10 days", "11-14 days", "15-21 days"],
            options_bn: ["১-৩ দিন", "৪-১০ দিন", "১১-১৪ দিন", "১৫-২১ দিন"],
            correct: 0,
            marks: 1
        }
    ],

    // PAGE 4: Aptitude (25 Questions)
    // Mathematical Reasoning, Logical Reasoning, Data Interpretation
    page4: [
        {
            id: 76,
            question: "If a nurse works 8 hours a day and earns ₹400 per hour, how much does she earn in 5 days?",
            question_bn: "যদি একজন নার্স দিনে ৮ ঘণ্টা কাজ করেন এবং প্রতি ঘণ্টায় ₹৪০০ আয় করেন, তাহলে ৫ দিনে তিনি কত আয় করবেন?",
            options: ["₹12,000", "₹16,000", "₹20,000", "₹24,000"],
            options_bn: ["₹১২,০০০", "₹১৬,০০০", "₹২০,০০০", "₹২৪,০০০"],
            correct: 1,
            marks: 1
        },
        {
            id: 77,
            question: "A patient needs 500 ml of IV fluid over 4 hours. What is the flow rate per hour?",
            question_bn: "একজন রোগীর ৪ ঘণ্টায় ৫০০ মিলি IV তরল প্রয়োজন। প্রতি ঘণ্টায় প্রবাহের হার কত?",
            options: ["100 ml/hr", "125 ml/hr", "150 ml/hr", "175 ml/hr"],
            options_bn: ["১০০ মিলি/ঘণ্টা", "১২৫ মিলি/ঘণ্টা", "১৫০ মিলি/ঘণ্টা", "১৭৫ মিলি/ঘণ্টা"],
            correct: 1,
            marks: 1
        },
        {
            id: 78,
            question: "If 3 nurses can complete a task in 12 hours, how long will 6 nurses take?",
            question_bn: "যদি ৩ জন নার্স ১২ ঘণ্টায় একটি কাজ শেষ করতে পারেন, তাহলে ৬ জন নার্স কত সময় নেবে?",
            options: ["4 hours", "6 hours", "8 hours", "24 hours"],
            options_bn: ["৪ ঘণ্টা", "৬ ঘণ্টা", "৮ ঘণ্টা", "২৪ ঘণ্টা"],
            correct: 1,
            marks: 1
        },
        {
            id: 79,
            question: "A medicine costs ₹240 after a 20% discount. What was the original price?",
            question_bn: "২০% ছাড়ের পরে একটি ওষুধের দাম ₹২৪০। আসল দাম কত ছিল?",
            options: ["₹280", "₹300", "₹320", "₹360"],
            options_bn: ["₹২৮০", "₹৩০০", "₹৩২০", "₹৩৬০"],
            correct: 1,
            marks: 1
        },
        {
            id: 80,
            question: "The ratio of doctors to nurses in a hospital is 2:5. If there are 40 doctors, how many nurses are there?",
            question_bn: "একটি হাসপাতালে ডাক্তার ও নার্সের অনুপাত ২:৫। যদি ৪০ জন ডাক্তার থাকে, তাহলে কতজন নার্স আছে?",
            options: ["80", "100", "120", "150"],
            options_bn: ["৮০", "১০০", "১২০", "১৫০"],
            correct: 1,
            marks: 1
        },
        {
            id: 81,
            question: "A patient's temperature increased from 98°F to 102°F. What is the percentage increase?",
            question_bn: "একজন রোগীর তাপমাত্রা ৯৮°F থেকে ১০২°F-এ বেড়েছে। শতাংশ বৃদ্ধি কত?",
            options: ["2.04%", "4.08%", "4%", "6%"],
            options_bn: ["২.০৪%", "৪.০৮%", "৪%", "৬%"],
            correct: 1,
            marks: 1
        },
        {
            id: 82,
            question: "If the average of 5 readings is 72, what is their sum?",
            question_bn: "যদি ৫টি রিডিংয়ের গড় ৭২ হয়, তাহলে তাদের যোগফল কত?",
            options: ["350", "360", "370", "380"],
            options_bn: ["৩৫০", "৩৬০", "৩৭০", "৩৮০"],
            correct: 1,
            marks: 1
        },
        {
            id: 83,
            question: "A hospital has 250 beds. If 80% are occupied, how many beds are empty?",
            question_bn: "একটি হাসপাতালে ২৫০টি বেড আছে। যদি ৮০% দখল থাকে, তাহলে কতটি বেড খালি?",
            options: ["40", "50", "60", "70"],
            options_bn: ["৪০", "৫০", "৬০", "৭০"],
            correct: 1,
            marks: 1
        },
        {
            id: 84,
            question: "Complete the series: 2, 6, 12, 20, 30, ?",
            question_bn: "সিরিজটি সম্পূর্ণ করুন: ২, ৬, ১২, ২০, ৩০, ?",
            options: ["40", "42", "44", "46"],
            options_bn: ["৪০", "৪২", "৪৪", "৪৬"],
            correct: 1,
            marks: 1
        },
        {
            id: 85,
            question: "A nurse administered 3/4 of a 200 ml medication. How much was given?",
            question_bn: "একজন নার্স ২০০ মিলি ওষুধের ৩/৪ অংশ দিয়েছেন। কত দেওয়া হয়েছে?",
            options: ["100 ml", "125 ml", "150 ml", "175 ml"],
            options_bn: ["১০০ মিলি", "১২৫ মিলি", "১৫০ মিলি", "১৭৫ মিলি"],
            correct: 2,
            marks: 1
        },
        {
            id: 86,
            question: "If a drug dose is 5 mg/kg and a patient weighs 60 kg, what is the total dose?",
            question_bn: "যদি ওষুধের ডোজ ৫ মিগ্রা/কেজি হয় এবং একজন রোগীর ওজন ৬০ কেজি হয়, তাহলে মোট ডোজ কত?",
            options: ["250 mg", "300 mg", "350 mg", "400 mg"],
            options_bn: ["২৫০ মিগ্রা", "৩০০ মিগ্রা", "৩৫০ মিগ্রা", "৪০০ মিগ্রা"],
            correct: 1,
            marks: 1
        },
        {
            id: 87,
            question: "Complete the series: A, C, F, J, ?",
            question_bn: "সিরিজটি সম্পূর্ণ করুন: A, C, F, J, ?",
            options: ["M", "N", "O", "P"],
            options_bn: ["M", "N", "O", "P"],
            correct: 2,
            marks: 1
        },
        {
            id: 88,
            question: "A 15% saline solution means how many grams of salt in 100 ml?",
            question_bn: "১৫% স্যালাইন সলিউশন মানে ১০০ মিলিতে কত গ্রাম লবণ?",
            options: ["10 g", "15 g", "20 g", "25 g"],
            options_bn: ["১০ গ্রাম", "১৫ গ্রাম", "২০ গ্রাম", "২৫ গ্রাম"],
            correct: 1,
            marks: 1
        },
        {
            id: 89,
            question: "If 1 inch = 2.54 cm, how many cm are in 10 inches?",
            question_bn: "যদি ১ ইঞ্চি = ২.৫৪ সেমি হয়, তাহলে ১০ ইঞ্চিতে কত সেমি?",
            options: ["20.4 cm", "25.4 cm", "30.4 cm", "35.4 cm"],
            options_bn: ["২০.৪ সেমি", "২৫.৪ সেমি", "৩০.৪ সেমি", "৩৫.৪ সেমি"],
            correct: 1,
            marks: 1
        },
        {
            id: 90,
            question: "A patient took medicine at 8:00 AM. If the next dose is after 6 hours, when is it due?",
            question_bn: "একজন রোগী সকাল ৮:০০ টায় ওষুধ খেয়েছেন। যদি পরবর্তী ডোজ ৬ ঘণ্টা পরে হয়, তাহলে কখন?",
            options: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
            options_bn: ["দুপুর ১:০০ টা", "দুপুর ২:০০ টা", "দুপুর ৩:০০ টা", "বিকাল ৪:০০ টা"],
            correct: 1,
            marks: 1
        },
        {
            id: 91,
            question: "Find the odd one out: Stethoscope, Sphygmomanometer, Thermometer, Stretcher",
            question_bn: "বেমানানটি খুঁজুন: স্টেথোস্কোপ, স্ফিগমোম্যানোমিটার, থার্মোমিটার, স্ট্রেচার",
            options: ["Stethoscope", "Sphygmomanometer", "Thermometer", "Stretcher"],
            options_bn: ["স্টেথোস্কোপ", "স্ফিগমোম্যানোমিটার", "থার্মোমিটার", "স্ট্রেচার"],
            correct: 3,
            marks: 1
        },
        {
            id: 92,
            question: "If today is Wednesday, what day will it be after 100 days?",
            question_bn: "যদি আজ বুধবার হয়, তাহলে ১০০ দিন পর কোন দিন হবে?",
            options: ["Thursday", "Friday", "Saturday", "Sunday"],
            options_bn: ["বৃহস্পতিবার", "শুক্রবার", "শনিবার", "রবিবার"],
            correct: 1,
            marks: 1
        },
        {
            id: 93,
            question: "A patient's weight reduced from 80 kg to 72 kg. What is the percentage decrease?",
            question_bn: "একজন রোগীর ওজন ৮০ কেজি থেকে ৭২ কেজিতে কমেছে। শতাংশ হ্রাস কত?",
            options: ["8%", "10%", "12%", "15%"],
            options_bn: ["৮%", "১০%", "১২%", "১৫%"],
            correct: 1,
            marks: 1
        },
        {
            id: 94,
            question: "How many seconds are there in 2.5 hours?",
            question_bn: "২.৫ ঘণ্টায় কত সেকেন্ড আছে?",
            options: ["7200", "9000", "10800", "12000"],
            options_bn: ["৭২০০", "৯০০০", "১০৮০০", "১২০০০"],
            correct: 1,
            marks: 1
        },
        {
            id: 95,
            question: "If A is B's sister and C is B's mother, what is A to C?",
            question_bn: "যদি A হল B-এর বোন এবং C হল B-এর মা, তাহলে A C-এর কী?",
            options: ["Mother", "Daughter", "Sister", "Aunt"],
            options_bn: ["মা", "মেয়ে", "বোন", "মাসি"],
            correct: 1,
            marks: 1
        },
        {
            id: 96,
            question: "A nurse walks 5 km North, then 3 km East. How far is she from the starting point?",
            question_bn: "একজন নার্স ৫ কিমি উত্তরে হেঁটেছেন, তারপর ৩ কিমি পূর্বে। তিনি শুরুর স্থান থেকে কত দূরে?",
            options: ["√34 km", "8 km", "4 km", "√25 km"],
            options_bn: ["√৩৪ কিমি", "৮ কিমি", "৪ কিমি", "√২৫ কিমি"],
            correct: 0,
            marks: 1
        },
        {
            id: 97,
            question: "If 20% of a number is 50, what is the number?",
            question_bn: "যদি একটি সংখ্যার ২০% হল ৫০, তাহলে সংখ্যাটি কত?",
            options: ["200", "250", "300", "350"],
            options_bn: ["২০০", "২৫০", "৩০০", "৩৫০"],
            correct: 1,
            marks: 1
        },
        {
            id: 98,
            question: "Complete the analogy: Doctor : Patient :: Teacher : ?",
            question_bn: "সাদৃশ্য সম্পূর্ণ করুন: ডাক্তার : রোগী :: শিক্ষক : ?",
            options: ["School", "Student", "Book", "Classroom"],
            options_bn: ["স্কুল", "ছাত্র", "বই", "শ্রেণিকক্ষ"],
            correct: 1,
            marks: 1
        },
        {
            id: 99,
            question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
            question_bn: "একটি ঘড়িতে ৩:১৫ দেখাচ্ছে। ঘণ্টা ও মিনিটের কাঁটার মধ্যে কোণ কত?",
            options: ["0°", "7.5°", "15°", "22.5°"],
            options_bn: ["০°", "৭.৫°", "১৫°", "২২.৫°"],
            correct: 1,
            marks: 1
        },
        {
            id: 100,
            question: "If a tablet costs ₹12.50 and a patient needs 4 tablets daily for 7 days, what is the total cost?",
            question_bn: "যদি একটি ট্যাবলেটের দাম ₹১২.৫০ হয় এবং একজন রোগীর দৈনিক ৪টি ট্যাবলেট ৭ দিনের জন্য প্রয়োজন, তাহলে মোট খরচ কত?",
            options: ["₹300", "₹350", "₹400", "₹450"],
            options_bn: ["₹৩০০", "₹৩৫০", "₹৪০০", "₹৪৫০"],
            correct: 1,
            marks: 1
        }
    ]
};

// Section names for display
const sectionNames = {
    1: "Core Nursing (Anatomy, Physiology, Medical-Surgical, Child Health, Mental Health)",
    2: "General Knowledge",
    3: "English, Pharmacology, Community Health & Midwifery",
    4: "Aptitude"
};
