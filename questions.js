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
        },
        // Additional Core Nursing Questions (126-175)
        {
            id: 126,
            question: "The normal blood glucose level in a fasting adult is:",
            question_bn: "একজন উপবাসী প্রাপ্তবয়স্কের স্বাভাবিক রক্তের গ্লুকোজ মাত্রা হল:",
            options: ["50-70 mg/dL", "70-100 mg/dL", "100-140 mg/dL", "140-180 mg/dL"],
            options_bn: ["৫০-৭০ মিগ্রা/ডেসিলি", "৭০-১০০ মিগ্রা/ডেসিলি", "১০০-১৪০ মিগ্রা/ডেসিলি", "১৪০-১৮০ মিগ্রা/ডেসিলি"],
            correct: 1,
            marks: 1
        },
        {
            id: 127,
            question: "Which bone is known as the collar bone?",
            question_bn: "কোন হাড়কে কলার বোন বলা হয়?",
            options: ["Scapula", "Clavicle", "Sternum", "Humerus"],
            options_bn: ["স্ক্যাপুলা", "ক্ল্যাভিকল", "স্টার্নাম", "হিউমেরাস"],
            correct: 1,
            marks: 1
        },
        {
            id: 128,
            question: "The pH of normal blood is:",
            question_bn: "স্বাভাবিক রক্তের pH হল:",
            options: ["7.15-7.25", "7.25-7.35", "7.35-7.45", "7.45-7.55"],
            options_bn: ["৭.১৫-৭.২৫", "৭.২৫-৭.৩৫", "৭.৩৫-৭.৪৫", "৭.৪৫-৭.৫৫"],
            correct: 2,
            marks: 1
        },
        {
            id: 129,
            question: "The normal platelet count is:",
            question_bn: "স্বাভাবিক প্লেটলেট সংখ্যা হল:",
            options: ["50,000-100,000/mm³", "150,000-400,000/mm³", "500,000-700,000/mm³", "800,000-1,000,000/mm³"],
            options_bn: ["৫০,০০০-১,০০,০০০/মিমি³", "১,৫০,০০০-৪,০০,০০০/মিমি³", "৫,০০,০০০-৭,০০,০০০/মিমি³", "৮,০০,০০০-১০,০০,০০০/মিমি³"],
            correct: 1,
            marks: 1
        },
        {
            id: 130,
            question: "The largest organ of the human body is:",
            question_bn: "মানবদেহের সবচেয়ে বড় অঙ্গ হল:",
            options: ["Liver", "Skin", "Brain", "Heart"],
            options_bn: ["যকৃত", "ত্বক", "মস্তিষ্ক", "হৃদয়"],
            correct: 1,
            marks: 1
        },
        {
            id: 131,
            question: "The normal specific gravity of urine is:",
            question_bn: "প্রস্রাবের স্বাভাবিক আপেক্ষিক গুরুত্ব হল:",
            options: ["1.001-1.010", "1.010-1.025", "1.025-1.040", "1.040-1.060"],
            options_bn: ["১.০০১-১.০১০", "১.০১০-১.০২৫", "১.০২৫-১.০৪০", "১.০৪০-১.০৬০"],
            correct: 1,
            marks: 1
        },
        {
            id: 132,
            question: "Sims position is used for:",
            question_bn: "সিমস পজিশন ব্যবহার করা হয়:",
            options: ["Cardiac examination", "Rectal examination", "Eye examination", "Chest examination"],
            options_bn: ["কার্ডিয়াক পরীক্ষা", "রেক্টাল পরীক্ষা", "চোখের পরীক্ষা", "বুকের পরীক্ষা"],
            correct: 1,
            marks: 1
        },
        {
            id: 133,
            question: "The causative organism of tuberculosis is:",
            question_bn: "যক্ষ্মার জীবাণু হল:",
            options: ["Streptococcus", "Mycobacterium tuberculosis", "Staphylococcus", "E. coli"],
            options_bn: ["স্ট্রেপ্টোকক্কাস", "মাইকোব্যাক্টেরিয়াম টিউবারকুলোসিস", "স্ট্যাফাইলোকক্কাস", "ই. কোলাই"],
            correct: 1,
            marks: 1
        },
        {
            id: 134,
            question: "A patient in shock will have:",
            question_bn: "শকে থাকা রোগীর থাকবে:",
            options: ["High BP, slow pulse", "Low BP, rapid pulse", "High BP, rapid pulse", "Normal BP, slow pulse"],
            options_bn: ["উচ্চ রক্তচাপ, ধীর পালস", "নিম্ন রক্তচাপ, দ্রুত পালস", "উচ্চ রক্তচাপ, দ্রুত পালস", "স্বাভাবিক রক্তচাপ, ধীর পালস"],
            correct: 1,
            marks: 1
        },
        {
            id: 135,
            question: "The normal ESR for males is:",
            question_bn: "পুরুষদের জন্য স্বাভাবিক ESR হল:",
            options: ["0-5 mm/hr", "0-10 mm/hr", "15-20 mm/hr", "20-30 mm/hr"],
            options_bn: ["০-৫ মিমি/ঘণ্টা", "০-১০ মিমি/ঘণ্টা", "১৫-২০ মিমি/ঘণ্টা", "২০-৩০ মিমি/ঘণ্টা"],
            correct: 1,
            marks: 1
        },
        {
            id: 136,
            question: "Which vitamin is known as anti-sterility vitamin?",
            question_bn: "কোন ভিটামিনকে অ্যান্টি-স্টেরিলিটি ভিটামিন বলা হয়?",
            options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
            options_bn: ["ভিটামিন এ", "ভিটামিন ডি", "ভিটামিন ই", "ভিটামিন কে"],
            correct: 2,
            marks: 1
        },
        {
            id: 137,
            question: "The medical term for difficulty in breathing is:",
            question_bn: "শ্বাসকষ্টের চিকিৎসা পরিভাষা হল:",
            options: ["Apnea", "Dyspnea", "Tachypnea", "Bradypnea"],
            options_bn: ["অ্যাপনিয়া", "ডিসপনিয়া", "ট্যাকিপনিয়া", "ব্র্যাডিপনিয়া"],
            correct: 1,
            marks: 1
        },
        {
            id: 138,
            question: "The normal CSF pressure is:",
            question_bn: "স্বাভাবিক CSF চাপ হল:",
            options: ["50-100 mmH2O", "100-180 mmH2O", "200-300 mmH2O", "300-400 mmH2O"],
            options_bn: ["৫০-১০০ মিমি জল", "১০০-১৮০ মিমি জল", "২০০-৩০০ মিমি জল", "৩০০-৪০০ মিমি জল"],
            correct: 1,
            marks: 1
        },
        {
            id: 139,
            question: "Trousseau's sign is seen in:",
            question_bn: "ট্রুসোর সাইন দেখা যায়:",
            options: ["Hypercalcemia", "Hypocalcemia", "Hyperkalemia", "Hypokalemia"],
            options_bn: ["হাইপারক্যালসেমিয়া", "হাইপোক্যালসেমিয়া", "হাইপারক্যালেমিয়া", "হাইপোক্যালেমিয়া"],
            correct: 1,
            marks: 1
        },
        {
            id: 140,
            question: "Fowler's position is:",
            question_bn: "ফাউলারের পজিশন হল:",
            options: ["Lying flat", "Semi-sitting", "Prone position", "Side-lying"],
            options_bn: ["সমতলে শোয়া", "আধা-বসা", "উপুড় পজিশন", "পাশ ফিরে শোয়া"],
            correct: 1,
            marks: 1
        },
        {
            id: 141,
            question: "The first milk secreted after delivery is called:",
            question_bn: "প্রসবের পর প্রথম যে দুধ নিঃসৃত হয় তাকে বলে:",
            options: ["Mature milk", "Colostrum", "Foremilk", "Hindmilk"],
            options_bn: ["পরিণত দুধ", "কোলোস্ট্রাম", "ফোরমিল্ক", "হিন্ডমিল্ক"],
            correct: 1,
            marks: 1
        },
        {
            id: 142,
            question: "The vaccine stored in the freezer at -20°C is:",
            question_bn: "-২০°সে-তে ফ্রিজারে সংরক্ষিত টিকা হল:",
            options: ["BCG", "DPT", "OPV", "Hepatitis B"],
            options_bn: ["বিসিজি", "ডিপিটি", "ওপিভি", "হেপাটাইটিস বি"],
            correct: 2,
            marks: 1
        },
        {
            id: 143,
            question: "The normal hemoglobin level for adult males is:",
            question_bn: "প্রাপ্তবয়স্ক পুরুষদের জন্য স্বাভাবিক হিমোগ্লোবিন মাত্রা হল:",
            options: ["10-12 g/dL", "12-14 g/dL", "14-18 g/dL", "18-22 g/dL"],
            options_bn: ["১০-১২ গ্রা/ডেসিলি", "১২-১৪ গ্রা/ডেসিলি", "১৪-১৮ গ্রা/ডেসিলি", "১৮-২২ গ্রা/ডেসিলি"],
            correct: 2,
            marks: 1
        },
        {
            id: 144,
            question: "Koplik's spots are seen in:",
            question_bn: "কোপলিকের দাগ দেখা যায়:",
            options: ["Chicken pox", "Measles", "Mumps", "Rubella"],
            options_bn: ["চিকেন পক্স", "হাম", "মাম্পস", "রুবেলা"],
            correct: 1,
            marks: 1
        },
        {
            id: 145,
            question: "The injection site for intramuscular injection in infants is:",
            question_bn: "শিশুদের ইন্ট্রামাসকুলার ইনজেকশনের স্থান হল:",
            options: ["Deltoid", "Gluteus maximus", "Vastus lateralis", "Dorsogluteal"],
            options_bn: ["ডেলটয়েড", "গ্লুটিয়াস ম্যাক্সিমাস", "ভ্যাস্টাস ল্যাটারালিস", "ডর্সোগ্লুটিয়াল"],
            correct: 2,
            marks: 1
        },
        {
            id: 146,
            question: "The normal respiratory rate in newborn is:",
            question_bn: "নবজাতকের স্বাভাবিক শ্বাস-প্রশ্বাসের হার হল:",
            options: ["12-16/min", "20-30/min", "30-60/min", "60-80/min"],
            options_bn: ["১২-১৬/মিনিট", "২০-৩০/মিনিট", "৩০-৬০/মিনিট", "৬০-৮০/মিনিট"],
            correct: 2,
            marks: 1
        },
        {
            id: 147,
            question: "Universal blood donor is:",
            question_bn: "সার্বজনীন রক্তদাতা হল:",
            options: ["A positive", "B positive", "AB positive", "O negative"],
            options_bn: ["এ পজিটিভ", "বি পজিটিভ", "এবি পজিটিভ", "ও নেগেটিভ"],
            correct: 3,
            marks: 1
        },
        {
            id: 148,
            question: "The normal urine output per day in adults is:",
            question_bn: "প্রাপ্তবয়স্কদের দৈনিক স্বাভাবিক প্রস্রাবের পরিমাণ হল:",
            options: ["500-800 ml", "800-1200 ml", "1200-1500 ml", "1500-2000 ml"],
            options_bn: ["৫০০-৮০০ মিলি", "৮০০-১২০০ মিলি", "১২০০-১৫০০ মিলি", "১৫০০-২০০০ মিলি"],
            correct: 2,
            marks: 1
        },
        {
            id: 149,
            question: "Oral temperature is lower than rectal temperature by:",
            question_bn: "মুখের তাপমাত্রা মলদ্বারের তাপমাত্রার চেয়ে কম:",
            options: ["0.1°F", "0.5°F", "1°F", "2°F"],
            options_bn: ["০.১°F", "০.৫°F", "১°F", "২°F"],
            correct: 2,
            marks: 1
        },
        {
            id: 150,
            question: "BCG vaccine is given to prevent:",
            question_bn: "বিসিজি টিকা দেওয়া হয় প্রতিরোধের জন্য:",
            options: ["Polio", "Measles", "Tuberculosis", "Hepatitis"],
            options_bn: ["পোলিও", "হাম", "যক্ষ্মা", "হেপাটাইটিস"],
            correct: 2,
            marks: 1
        },
        // More Core Nursing Questions (176-250)
        {
            id: 176,
            question: "The normal WBC count in adults is:",
            question_bn: "প্রাপ্তবয়স্কদের স্বাভাবিক WBC সংখ্যা হল:",
            options: ["2000-4000/mm³", "4000-11000/mm³", "15000-20000/mm³", "25000-30000/mm³"],
            options_bn: ["২০০০-৪০০০/মিমি³", "৪০০০-১১০০০/মিমি³", "১৫০০০-২০০০০/মিমি³", "২৫০০০-৩০০০০/মিমি³"],
            correct: 1,
            marks: 1
        },
        {
            id: 177,
            question: "The normal serum sodium level is:",
            question_bn: "সিরামে স্বাভাবিক সোডিয়ামের মাত্রা হল:",
            options: ["120-130 mEq/L", "135-145 mEq/L", "150-160 mEq/L", "165-175 mEq/L"],
            options_bn: ["১২০-১৩০ mEq/L", "১৩৫-১৪৫ mEq/L", "১৫০-১৬০ mEq/L", "১৬৫-১৭৫ mEq/L"],
            correct: 1,
            marks: 1
        },
        {
            id: 178,
            question: "Cheyne-Stokes respiration is characterized by:",
            question_bn: "চেইন-স্টোকস শ্বাস-প্রশ্বাসের বৈশিষ্ট্য হল:",
            options: ["Rapid shallow breathing", "Alternating periods of apnea and hyperpnea", "Deep rapid breathing", "Slow shallow breathing"],
            options_bn: ["দ্রুত অগভীর শ্বাস", "অ্যাপনিয়া ও হাইপারপনিয়ার পর্যায়ক্রমিক সময়", "গভীর দ্রুত শ্বাস", "ধীর অগভীর শ্বাস"],
            correct: 1,
            marks: 1
        },
        {
            id: 179,
            question: "The Glasgow Coma Scale ranges from:",
            question_bn: "গ্লাসগো কোমা স্কেলের পরিসীমা হল:",
            options: ["0-10", "1-12", "3-15", "5-20"],
            options_bn: ["০-১০", "১-১২", "৩-১৫", "৫-২০"],
            correct: 2,
            marks: 1
        },
        {
            id: 180,
            question: "Homan's sign is used to detect:",
            question_bn: "হোম্যানের সাইন ব্যবহার করা হয় সনাক্ত করতে:",
            options: ["Appendicitis", "Deep vein thrombosis", "Cholecystitis", "Peritonitis"],
            options_bn: ["অ্যাপেন্ডিসাইটিস", "গভীর শিরা থ্রম্বোসিস", "কোলেসিস্টাইটিস", "পেরিটোনাইটিস"],
            correct: 1,
            marks: 1
        },
        {
            id: 181,
            question: "The normal serum potassium level is:",
            question_bn: "সিরামে স্বাভাবিক পটাসিয়ামের মাত্রা হল:",
            options: ["2.5-3.0 mEq/L", "3.5-5.0 mEq/L", "5.5-6.5 mEq/L", "7.0-8.0 mEq/L"],
            options_bn: ["২.৫-৩.০ mEq/L", "৩.৫-৫.০ mEq/L", "৫.৫-৬.৫ mEq/L", "৭.০-৮.০ mEq/L"],
            correct: 1,
            marks: 1
        },
        {
            id: 182,
            question: "Kernig's sign is positive in:",
            question_bn: "কার্নিগের সাইন পজিটিভ হয়:",
            options: ["Appendicitis", "Meningitis", "Cholecystitis", "Pancreatitis"],
            options_bn: ["অ্যাপেন্ডিসাইটিস", "মেনিনজাইটিস", "কোলেসিস্টাইটিস", "প্যানক্রিয়াটাইটিস"],
            correct: 1,
            marks: 1
        },
        {
            id: 183,
            question: "The leading cause of maternal mortality in India is:",
            question_bn: "ভারতে মাতৃমৃত্যুর প্রধান কারণ হল:",
            options: ["Eclampsia", "Hemorrhage", "Sepsis", "Obstructed labor"],
            options_bn: ["একলাম্পসিয়া", "রক্তক্ষরণ", "সেপসিস", "বাধাপ্রাপ্ত প্রসব"],
            correct: 1,
            marks: 1
        },
        {
            id: 184,
            question: "The antidote for heparin overdose is:",
            question_bn: "হেপারিন ওভারডোজের প্রতিষেধক হল:",
            options: ["Vitamin K", "Protamine sulfate", "Calcium gluconate", "Naloxone"],
            options_bn: ["ভিটামিন কে", "প্রোটামিন সালফেট", "ক্যালসিয়াম গ্লুকোনেট", "নালোক্সোন"],
            correct: 1,
            marks: 1
        },
        {
            id: 185,
            question: "Normal intraocular pressure is:",
            question_bn: "স্বাভাবিক ইন্ট্রাওকুলার প্রেসার হল:",
            options: ["5-10 mmHg", "10-21 mmHg", "25-35 mmHg", "40-50 mmHg"],
            options_bn: ["৫-১০ mmHg", "১০-২১ mmHg", "২৫-৩৫ mmHg", "৪০-৫০ mmHg"],
            correct: 1,
            marks: 1
        },
        {
            id: 186,
            question: "McBurney's point is located in:",
            question_bn: "ম্যাকবার্নির পয়েন্ট অবস্থিত:",
            options: ["Left upper quadrant", "Right lower quadrant", "Left lower quadrant", "Right upper quadrant"],
            options_bn: ["বাম উপরের কোয়াড্রান্ট", "ডান নিচের কোয়াড্রান্ট", "বাম নিচের কোয়াড্রান্ট", "ডান উপরের কোয়াড্রান্ট"],
            correct: 1,
            marks: 1
        },
        {
            id: 187,
            question: "The normal bilirubin level in blood is:",
            question_bn: "রক্তে স্বাভাবিক বিলিরুবিনের মাত্রা হল:",
            options: ["0.1-0.5 mg/dL", "0.3-1.0 mg/dL", "1.5-2.5 mg/dL", "3.0-4.0 mg/dL"],
            options_bn: ["০.১-০.৫ মিগ্রা/ডেসিলি", "০.৩-১.০ মিগ্রা/ডেসিলি", "১.৫-২.৫ মিগ্রা/ডেসিলি", "৩.০-৪.০ মিগ্রা/ডেসিলি"],
            correct: 1,
            marks: 1
        },
        {
            id: 188,
            question: "Lithotomy position is used for:",
            question_bn: "লিথোটমি পজিশন ব্যবহার করা হয়:",
            options: ["Abdominal surgery", "Vaginal examination", "Lumbar puncture", "Chest examination"],
            options_bn: ["পেটের অস্ত্রোপচার", "যোনি পরীক্ষা", "লাম্বার পাংচার", "বুকের পরীক্ষা"],
            correct: 1,
            marks: 1
        },
        {
            id: 189,
            question: "The most common type of anemia in pregnancy is:",
            question_bn: "গর্ভাবস্থায় সবচেয়ে সাধারণ ধরনের রক্তস্বল্পতা হল:",
            options: ["Pernicious anemia", "Iron deficiency anemia", "Aplastic anemia", "Hemolytic anemia"],
            options_bn: ["পার্নিশিয়াস অ্যানিমিয়া", "আয়রন ঘাটতি রক্তস্বল্পতা", "অ্যাপ্লাস্টিক অ্যানিমিয়া", "হেমোলাইটিক অ্যানিমিয়া"],
            correct: 1,
            marks: 1
        },
        {
            id: 190,
            question: "Cullen's sign indicates:",
            question_bn: "কালেনের সাইন নির্দেশ করে:",
            options: ["Liver disease", "Intra-abdominal hemorrhage", "Kidney disease", "Heart failure"],
            options_bn: ["লিভারের রোগ", "পেটের অভ্যন্তরে রক্তক্ষরণ", "কিডনির রোগ", "হার্ট ফেইলিওর"],
            correct: 1,
            marks: 1
        },
        {
            id: 191,
            question: "The normal intracranial pressure is:",
            question_bn: "স্বাভাবিক ইন্ট্রাক্রেনিয়াল প্রেসার হল:",
            options: ["0-5 mmHg", "5-15 mmHg", "20-30 mmHg", "35-45 mmHg"],
            options_bn: ["০-৫ mmHg", "৫-১৫ mmHg", "২০-৩০ mmHg", "৩৫-৪৫ mmHg"],
            correct: 1,
            marks: 1
        },
        {
            id: 192,
            question: "Apgar score is assessed at:",
            question_bn: "অ্যাপগার স্কোর মূল্যায়ন করা হয়:",
            options: ["Birth only", "1 and 5 minutes after birth", "10 and 15 minutes after birth", "Every hour for 24 hours"],
            options_bn: ["শুধু জন্মের সময়", "জন্মের ১ ও ৫ মিনিট পরে", "জন্মের ১০ ও ১৫ মিনিট পরে", "২৪ ঘণ্টা প্রতি ঘণ্টায়"],
            correct: 1,
            marks: 1
        },
        {
            id: 193,
            question: "Murphy's sign is positive in:",
            question_bn: "মার্ফির সাইন পজিটিভ হয়:",
            options: ["Appendicitis", "Cholecystitis", "Pancreatitis", "Peritonitis"],
            options_bn: ["অ্যাপেন্ডিসাইটিস", "কোলেসিস্টাইটিস", "প্যানক্রিয়াটাইটিস", "পেরিটোনাইটিস"],
            correct: 1,
            marks: 1
        },
        {
            id: 194,
            question: "The normal serum creatinine level is:",
            question_bn: "সিরামে স্বাভাবিক ক্রিয়েটিনিনের মাত্রা হল:",
            options: ["0.2-0.5 mg/dL", "0.6-1.2 mg/dL", "1.5-2.5 mg/dL", "3.0-4.0 mg/dL"],
            options_bn: ["০.২-০.৫ মিগ্রা/ডেসিলি", "০.৬-১.২ মিগ্রা/ডেসিলি", "১.৫-২.৫ মিগ্রা/ডেসিলি", "৩.০-৪.০ মিগ্রা/ডেসিলি"],
            correct: 1,
            marks: 1
        },
        {
            id: 195,
            question: "The antidote for benzodiazepine overdose is:",
            question_bn: "বেনজোডায়াজেপাইন ওভারডোজের প্রতিষেধক হল:",
            options: ["Naloxone", "Flumazenil", "Atropine", "Calcium gluconate"],
            options_bn: ["নালোক্সোন", "ফ্লুমাজেনিল", "অ্যাট্রোপিন", "ক্যালসিয়াম গ্লুকোনেট"],
            correct: 1,
            marks: 1
        },
        {
            id: 196,
            question: "Normal cardiac output is:",
            question_bn: "স্বাভাবিক কার্ডিয়াক আউটপুট হল:",
            options: ["2-3 L/min", "4-8 L/min", "10-12 L/min", "15-18 L/min"],
            options_bn: ["২-৩ লি/মিনিট", "৪-৮ লি/মিনিট", "১০-১২ লি/মিনিট", "১৫-১৮ লি/মিনিট"],
            correct: 1,
            marks: 1
        },
        {
            id: 197,
            question: "Romberg's test is used to assess:",
            question_bn: "রমবার্গ টেস্ট ব্যবহার করা হয় মূল্যায়ন করতে:",
            options: ["Vision", "Balance and coordination", "Hearing", "Memory"],
            options_bn: ["দৃষ্টি", "ভারসাম্য ও সমন্বয়", "শ্রবণ", "স্মৃতি"],
            correct: 1,
            marks: 1
        },
        {
            id: 198,
            question: "The leading cause of death in burn patients is:",
            question_bn: "বার্ন রোগীদের মৃত্যুর প্রধান কারণ হল:",
            options: ["Pain", "Infection", "Dehydration", "Hemorrhage"],
            options_bn: ["ব্যথা", "সংক্রমণ", "ডিহাইড্রেশন", "রক্তক্ষরণ"],
            correct: 1,
            marks: 1
        },
        {
            id: 199,
            question: "Normal blood urea level is:",
            question_bn: "স্বাভাবিক রক্তের ইউরিয়া মাত্রা হল:",
            options: ["5-10 mg/dL", "15-40 mg/dL", "50-70 mg/dL", "80-100 mg/dL"],
            options_bn: ["৫-১০ মিগ্রা/ডেসিলি", "১৫-৪০ মিগ্রা/ডেসিলি", "৫০-৭০ মিগ্রা/ডেসিলি", "৮০-১০০ মিগ্রা/ডেসিলি"],
            correct: 1,
            marks: 1
        },
        {
            id: 200,
            question: "Babinski's reflex is normal in:",
            question_bn: "বাবিনস্কির রিফ্লেক্স স্বাভাবিক হয়:",
            options: ["Adults", "Infants up to 1 year", "Elderly", "Adolescents"],
            options_bn: ["প্রাপ্তবয়স্কদের", "১ বছর পর্যন্ত শিশুদের", "বৃদ্ধদের", "কিশোরদের"],
            correct: 1,
            marks: 1
        },
        {
            id: 201,
            question: "The normal RBC count in males is:",
            question_bn: "পুরুষদের স্বাভাবিক RBC সংখ্যা হল:",
            options: ["3-4 million/mm³", "4.5-5.5 million/mm³", "6-7 million/mm³", "8-9 million/mm³"],
            options_bn: ["৩-৪ মিলিয়ন/মিমি³", "৪.৫-৫.৫ মিলিয়ন/মিমি³", "৬-৭ মিলিয়ন/মিমি³", "৮-৯ মিলিয়ন/মিমি³"],
            correct: 1,
            marks: 1
        },
        {
            id: 202,
            question: "Trendelenburg position is used for:",
            question_bn: "ট্রেন্ডেলেনবার্গ পজিশন ব্যবহার করা হয়:",
            options: ["Respiratory distress", "Shock", "Head injury", "Eye surgery"],
            options_bn: ["শ্বাসকষ্ট", "শক", "মাথায় আঘাত", "চোখের সার্জারি"],
            correct: 1,
            marks: 1
        },
        {
            id: 203,
            question: "The incubation period of measles is:",
            question_bn: "হামের ইনকিউবেশন পিরিয়ড হল:",
            options: ["1-3 days", "7-14 days", "21-28 days", "30-40 days"],
            options_bn: ["১-৩ দিন", "৭-১৪ দিন", "২১-২৮ দিন", "৩০-৪০ দিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 204,
            question: "The normal albumin level in serum is:",
            question_bn: "সিরামে স্বাভাবিক অ্যালবুমিনের মাত্রা হল:",
            options: ["1.5-2.5 g/dL", "3.5-5.0 g/dL", "6.0-7.5 g/dL", "8.0-9.5 g/dL"],
            options_bn: ["১.৫-২.৫ গ্রা/ডেসিলি", "৩.৫-৫.০ গ্রা/ডেসিলি", "৬.০-৭.৫ গ্রা/ডেসিলি", "৮.০-৯.৫ গ্রা/ডেসিলি"],
            correct: 1,
            marks: 1
        },
        {
            id: 205,
            question: "Brudzinski's sign is positive in:",
            question_bn: "ব্রুডজিনস্কির সাইন পজিটিভ হয়:",
            options: ["Appendicitis", "Meningitis", "Cholecystitis", "Pancreatitis"],
            options_bn: ["অ্যাপেন্ডিসাইটিস", "মেনিনজাইটিস", "কোলেসিস্টাইটিস", "প্যানক্রিয়াটাইটিস"],
            correct: 1,
            marks: 1
        },
        {
            id: 206,
            question: "The antidote for warfarin overdose is:",
            question_bn: "ওয়ারফারিন ওভারডোজের প্রতিষেধক হল:",
            options: ["Protamine sulfate", "Vitamin K", "Naloxone", "Flumazenil"],
            options_bn: ["প্রোটামিন সালফেট", "ভিটামিন কে", "নালোক্সোন", "ফ্লুমাজেনিল"],
            correct: 1,
            marks: 1
        },
        {
            id: 207,
            question: "The normal PT (Prothrombin Time) is:",
            question_bn: "স্বাভাবিক PT (প্রোথ্রম্বিন টাইম) হল:",
            options: ["5-8 seconds", "11-15 seconds", "20-25 seconds", "30-35 seconds"],
            options_bn: ["৫-৮ সেকেন্ড", "১১-১৫ সেকেন্ড", "২০-২৫ সেকেন্ড", "৩০-৩৫ সেকেন্ড"],
            correct: 1,
            marks: 1
        },
        {
            id: 208,
            question: "The causative organism of tetanus is:",
            question_bn: "টিটেনাসের কারক জীবাণু হল:",
            options: ["Clostridium tetani", "Clostridium botulinum", "Clostridium perfringens", "Clostridium difficile"],
            options_bn: ["ক্লস্ট্রিডিয়াম টিটেনি", "ক্লস্ট্রিডিয়াম বটুলিনাম", "ক্লস্ট্রিডিয়াম পারফ্রিনজেন্স", "ক্লস্ট্রিডিয়াম ডিফিসিল"],
            correct: 0,
            marks: 1
        },
        {
            id: 209,
            question: "Chvostek's sign is seen in:",
            question_bn: "কভোস্টেকের সাইন দেখা যায়:",
            options: ["Hypercalcemia", "Hypocalcemia", "Hyperkalemia", "Hypokalemia"],
            options_bn: ["হাইপারক্যালসেমিয়া", "হাইপোক্যালসেমিয়া", "হাইপারক্যালেমিয়া", "হাইপোক্যালেমিয়া"],
            correct: 1,
            marks: 1
        },
        {
            id: 210,
            question: "Normal central venous pressure (CVP) is:",
            question_bn: "স্বাভাবিক সেন্ট্রাল ভেনাস প্রেসার (CVP) হল:",
            options: ["0-2 cmH2O", "5-10 cmH2O", "15-20 cmH2O", "25-30 cmH2O"],
            options_bn: ["০-২ সেমি জল", "৫-১০ সেমি জল", "১৫-২০ সেমি জল", "২৫-৩০ সেমি জল"],
            correct: 1,
            marks: 1
        },
        {
            id: 211,
            question: "The most common site for bedsores is:",
            question_bn: "বেডসোরের সবচেয়ে সাধারণ স্থান হল:",
            options: ["Elbow", "Sacrum", "Shoulder", "Knee"],
            options_bn: ["কনুই", "স্যাক্রাম", "কাঁধ", "হাঁটু"],
            correct: 1,
            marks: 1
        },
        {
            id: 212,
            question: "Oral rehydration solution (ORS) contains:",
            question_bn: "ওরাল রিহাইড্রেশন সলিউশন (ORS) থাকে:",
            options: ["Salt, sugar, water", "Salt, water only", "Sugar, water only", "Salt, sugar, baking soda, water"],
            options_bn: ["লবণ, চিনি, জল", "শুধু লবণ, জল", "শুধু চিনি, জল", "লবণ, চিনি, বেকিং সোডা, জল"],
            correct: 3,
            marks: 1
        },
        {
            id: 213,
            question: "The incubation period of chickenpox is:",
            question_bn: "চিকেন পক্সের ইনকিউবেশন পিরিয়ড হল:",
            options: ["1-3 days", "7-10 days", "14-21 days", "28-35 days"],
            options_bn: ["১-৩ দিন", "৭-১০ দিন", "১৪-২১ দিন", "২৮-৩৫ দিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 214,
            question: "The normal APTT (Activated Partial Thromboplastin Time) is:",
            question_bn: "স্বাভাবিক APTT হল:",
            options: ["10-20 seconds", "25-35 seconds", "45-55 seconds", "60-70 seconds"],
            options_bn: ["১০-২০ সেকেন্ড", "২৫-৩৫ সেকেন্ড", "৪৫-৫৫ সেকেন্ড", "৬০-৭০ সেকেন্ড"],
            correct: 1,
            marks: 1
        },
        {
            id: 215,
            question: "Mantoux test is used to diagnose:",
            question_bn: "ম্যানটক্স টেস্ট ব্যবহার করা হয় নির্ণয় করতে:",
            options: ["Typhoid", "Tuberculosis", "Malaria", "Dengue"],
            options_bn: ["টাইফয়েড", "যক্ষ্মা", "ম্যালেরিয়া", "ডেঙ্গু"],
            correct: 1,
            marks: 1
        },
        {
            id: 216,
            question: "The landmark for lumbar puncture is:",
            question_bn: "লাম্বার পাংচারের ল্যান্ডমার্ক হল:",
            options: ["L1-L2", "L2-L3", "L3-L4 or L4-L5", "L5-S1"],
            options_bn: ["L1-L2", "L2-L3", "L3-L4 বা L4-L5", "L5-S1"],
            correct: 2,
            marks: 1
        },
        {
            id: 217,
            question: "The normal blood ammonia level is:",
            question_bn: "স্বাভাবিক রক্তের অ্যামোনিয়া মাত্রা হল:",
            options: ["5-15 µg/dL", "15-45 µg/dL", "60-80 µg/dL", "100-120 µg/dL"],
            options_bn: ["৫-১৫ µg/dL", "১৫-৪৫ µg/dL", "৬০-৮০ µg/dL", "১০০-১২০ µg/dL"],
            correct: 1,
            marks: 1
        },
        {
            id: 218,
            question: "The incubation period of mumps is:",
            question_bn: "মাম্পসের ইনকিউবেশন পিরিয়ড হল:",
            options: ["1-5 days", "7-10 days", "14-21 days", "30-40 days"],
            options_bn: ["১-৫ দিন", "৭-১০ দিন", "১৪-২১ দিন", "৩০-৪০ দিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 219,
            question: "Knee-chest position is used for:",
            question_bn: "নি-চেস্ট পজিশন ব্যবহার করা হয়:",
            options: ["Eye examination", "Rectal/sigmoidoscopy", "Chest examination", "Abdominal surgery"],
            options_bn: ["চোখের পরীক্ষা", "রেক্টাল/সিগময়ডোস্কোপি", "বুকের পরীক্ষা", "পেটের সার্জারি"],
            correct: 1,
            marks: 1
        },
        {
            id: 220,
            question: "The antidote for iron poisoning is:",
            question_bn: "আয়রন বিষক্রিয়ার প্রতিষেধক হল:",
            options: ["EDTA", "Deferoxamine", "Dimercaprol", "Penicillamine"],
            options_bn: ["EDTA", "ডেফারোক্সামিন", "ডাইমারক্যাপ্রল", "পেনিসিলামিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 221,
            question: "Normal bleeding time is:",
            question_bn: "স্বাভাবিক ব্লিডিং টাইম হল:",
            options: ["1-4 minutes", "5-8 minutes", "10-15 minutes", "20-25 minutes"],
            options_bn: ["১-৪ মিনিট", "৫-৮ মিনিট", "১০-১৫ মিনিট", "২০-২৫ মিনিট"],
            correct: 0,
            marks: 1
        },
        {
            id: 222,
            question: "Widal test is used to diagnose:",
            question_bn: "উইডাল টেস্ট ব্যবহার করা হয় নির্ণয় করতে:",
            options: ["Malaria", "Typhoid", "Tuberculosis", "Dengue"],
            options_bn: ["ম্যালেরিয়া", "টাইফয়েড", "যক্ষ্মা", "ডেঙ্গু"],
            correct: 1,
            marks: 1
        },
        {
            id: 223,
            question: "The first sign of puberty in girls is:",
            question_bn: "মেয়েদের বয়ঃসন্ধির প্রথম লক্ষণ হল:",
            options: ["Menarche", "Breast development", "Pubic hair", "Growth spurt"],
            options_bn: ["মেনার্কে", "স্তন বিকাশ", "পিউবিক হেয়ার", "গ্রোথ স্পার্ট"],
            correct: 1,
            marks: 1
        },
        {
            id: 224,
            question: "The causative organism of diphtheria is:",
            question_bn: "ডিপথেরিয়ার কারক জীবাণু হল:",
            options: ["Corynebacterium diphtheriae", "Bordetella pertussis", "Clostridium tetani", "Haemophilus influenzae"],
            options_bn: ["কোরাইনেব্যাক্টেরিয়াম ডিপথেরিয়া", "বর্ডেটেলা পারটুসিস", "ক্লস্ট্রিডিয়াম টিটেনি", "হিমোফাইলাস ইনফ্লুয়েঞ্জা"],
            correct: 0,
            marks: 1
        },
        {
            id: 225,
            question: "Normal clotting time is:",
            question_bn: "স্বাভাবিক ক্লটিং টাইম হল:",
            options: ["1-3 minutes", "5-11 minutes", "15-20 minutes", "25-30 minutes"],
            options_bn: ["১-৩ মিনিট", "৫-১১ মিনিট", "১৫-২০ মিনিট", "২৫-৩০ মিনিট"],
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
        },
        // Additional GK Questions (51-125)
        {
            id: 51,
            question: "World Health Day is celebrated on:",
            question_bn: "বিশ্ব স্বাস্থ্য দিবস পালিত হয়:",
            options: ["April 7", "May 7", "June 7", "March 7"],
            options_bn: ["৭ এপ্রিল", "৭ মে", "৭ জুন", "৭ মার্চ"],
            correct: 0,
            marks: 1
        },
        {
            id: 52,
            question: "International Nurses Day is observed on:",
            question_bn: "আন্তর্জাতিক নার্স দিবস পালিত হয়:",
            options: ["May 12", "May 8", "June 12", "April 12"],
            options_bn: ["১২ মে", "৮ মে", "১২ জুন", "১২ এপ্রিল"],
            correct: 0,
            marks: 1
        },
        {
            id: 53,
            question: "World AIDS Day is observed on:",
            question_bn: "বিশ্ব এইডস দিবস পালিত হয়:",
            options: ["December 1", "November 1", "October 1", "January 1"],
            options_bn: ["১ ডিসেম্বর", "১ নভেম্বর", "১ অক্টোবর", "১ জানুয়ারি"],
            correct: 0,
            marks: 1
        },
        {
            id: 54,
            question: "World Tuberculosis Day is observed on:",
            question_bn: "বিশ্ব যক্ষ্মা দিবস পালিত হয়:",
            options: ["March 24", "April 24", "May 24", "February 24"],
            options_bn: ["২৪ মার্চ", "২৪ এপ্রিল", "২৪ মে", "২৪ ফেব্রুয়ারি"],
            correct: 0,
            marks: 1
        },
        {
            id: 55,
            question: "World Malaria Day is observed on:",
            question_bn: "বিশ্ব ম্যালেরিয়া দিবস পালিত হয়:",
            options: ["April 25", "May 25", "June 25", "March 25"],
            options_bn: ["২৫ এপ্রিল", "২৫ মে", "২৫ জুন", "২৫ মার্চ"],
            correct: 0,
            marks: 1
        },
        {
            id: 56,
            question: "World No Tobacco Day is observed on:",
            question_bn: "বিশ্ব তামাকমুক্ত দিবস পালিত হয়:",
            options: ["May 31", "June 31", "April 30", "May 1"],
            options_bn: ["৩১ মে", "৩১ জুন", "৩০ এপ্রিল", "১ মে"],
            correct: 0,
            marks: 1
        },
        {
            id: 57,
            question: "World Blood Donor Day is observed on:",
            question_bn: "বিশ্ব রক্তদাতা দিবস পালিত হয়:",
            options: ["June 14", "July 14", "May 14", "August 14"],
            options_bn: ["১৪ জুন", "১৪ জুলাই", "১৪ মে", "১৪ আগস্ট"],
            correct: 0,
            marks: 1
        },
        {
            id: 58,
            question: "World Hepatitis Day is observed on:",
            question_bn: "বিশ্ব হেপাটাইটিস দিবস পালিত হয়:",
            options: ["July 28", "August 28", "June 28", "September 28"],
            options_bn: ["২৮ জুলাই", "২৮ আগস্ট", "২৮ জুন", "২৮ সেপ্টেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 59,
            question: "World Suicide Prevention Day is observed on:",
            question_bn: "বিশ্ব আত্মহত্যা প্রতিরোধ দিবস পালিত হয়:",
            options: ["September 10", "October 10", "August 10", "November 10"],
            options_bn: ["১০ সেপ্টেম্বর", "১০ অক্টোবর", "১০ আগস্ট", "১০ নভেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 60,
            question: "World Mental Health Day is observed on:",
            question_bn: "বিশ্ব মানসিক স্বাস্থ্য দিবস পালিত হয়:",
            options: ["October 10", "November 10", "September 10", "December 10"],
            options_bn: ["১০ অক্টোবর", "১০ নভেম্বর", "১০ সেপ্টেম্বর", "১০ ডিসেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 61,
            question: "World Polio Day is observed on:",
            question_bn: "বিশ্ব পোলিও দিবস পালিত হয়:",
            options: ["October 24", "November 24", "September 24", "December 24"],
            options_bn: ["২৪ অক্টোবর", "২৪ নভেম্বর", "২৪ সেপ্টেম্বর", "২৪ ডিসেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 62,
            question: "World Pneumonia Day is observed on:",
            question_bn: "বিশ্ব নিউমোনিয়া দিবস পালিত হয়:",
            options: ["November 12", "October 12", "December 12", "September 12"],
            options_bn: ["১২ নভেম্বর", "১২ অক্টোবর", "১২ ডিসেম্বর", "১২ সেপ্টেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 63,
            question: "World Cancer Day is observed on:",
            question_bn: "বিশ্ব ক্যান্সার দিবস পালিত হয়:",
            options: ["February 4", "March 4", "January 4", "April 4"],
            options_bn: ["৪ ফেব্রুয়ারি", "৪ মার্চ", "৪ জানুয়ারি", "৪ এপ্রিল"],
            correct: 0,
            marks: 1
        },
        {
            id: 64,
            question: "World Leprosy Day is observed on:",
            question_bn: "বিশ্ব কুষ্ঠ দিবস পালিত হয়:",
            options: ["Last Sunday of January", "First Sunday of February", "Last Sunday of February", "First Sunday of March"],
            options_bn: ["জানুয়ারির শেষ রবিবার", "ফেব্রুয়ারির প্রথম রবিবার", "ফেব্রুয়ারির শেষ রবিবার", "মার্চের প্রথম রবিবার"],
            correct: 0,
            marks: 1
        },
        {
            id: 65,
            question: "The headquarters of WHO is located in:",
            question_bn: "বিশ্ব স্বাস্থ্য সংস্থার সদর দপ্তর অবস্থিত:",
            options: ["Geneva, Switzerland", "New York, USA", "Paris, France", "London, UK"],
            options_bn: ["জেনেভা, সুইজারল্যান্ড", "নিউ ইয়র্ক, মার্কিন যুক্তরাষ্ট্র", "প্যারিস, ফ্রান্স", "লন্ডন, যুক্তরাজ্য"],
            correct: 0,
            marks: 1
        },
        {
            id: 66,
            question: "UNICEF stands for:",
            question_bn: "UNICEF এর পূর্ণ রূপ:",
            options: ["United Nations International Children's Emergency Fund", "United Nations International Child Education Fund", "United Nations Internal Children's Emergency Fund", "Universal Nations International Children's Emergency Fund"],
            options_bn: ["ইউনাইটেড নেশনস ইন্টারন্যাশনাল চিলড্রেনস ইমার্জেন্সি ফান্ড", "ইউনাইটেড নেশনস ইন্টারন্যাশনাল চাইল্ড এডুকেশন ফান্ড", "ইউনাইটেড নেশনস ইন্টারনাল চিলড্রেনস ইমার্জেন্সি ফান্ড", "ইউনিভার্সাল নেশনস ইন্টারন্যাশনাল চিলড্রেনস ইমার্জেন্সি ফান্ড"],
            correct: 0,
            marks: 1
        },
        {
            id: 67,
            question: "The Indian Nursing Council was established in:",
            question_bn: "ভারতীয় নার্সিং কাউন্সিল প্রতিষ্ঠিত হয়েছিল:",
            options: ["1947", "1950", "1952", "1960"],
            options_bn: ["১৯৪৭", "১৯৫০", "১৯৫২", "১৯৬০"],
            correct: 0,
            marks: 1
        },
        {
            id: 68,
            question: "National Health Mission was launched in:",
            question_bn: "জাতীয় স্বাস্থ্য মিশন চালু হয়েছিল:",
            options: ["2013", "2005", "2010", "2015"],
            options_bn: ["২০১৩", "২০০৫", "২০১০", "২০১৫"],
            correct: 0,
            marks: 1
        },
        {
            id: 69,
            question: "Ayushman Bharat was launched in:",
            question_bn: "আয়ুষ্মান ভারত চালু হয়েছিল:",
            options: ["2018", "2017", "2019", "2020"],
            options_bn: ["২০১৮", "২০১৭", "২০১৯", "২০২০"],
            correct: 0,
            marks: 1
        },
        {
            id: 70,
            question: "Janani Suraksha Yojana was launched in:",
            question_bn: "জননী সুরক্ষা যোজনা চালু হয়েছিল:",
            options: ["2005", "2006", "2007", "2008"],
            options_bn: ["২০০৫", "২০০৬", "২০০৭", "২০০৮"],
            correct: 0,
            marks: 1
        },
        {
            id: 71,
            question: "Polio was eradicated from India in:",
            question_bn: "ভারত থেকে পোলিও নির্মূল হয়েছিল:",
            options: ["2014", "2011", "2012", "2013"],
            options_bn: ["২০১৪", "২০১১", "২০১২", "২০১৩"],
            correct: 0,
            marks: 1
        },
        {
            id: 72,
            question: "Pulse Polio Programme was launched in India in:",
            question_bn: "ভারতে পালস পোলিও কর্মসূচি চালু হয়েছিল:",
            options: ["1995", "1994", "1996", "1997"],
            options_bn: ["১৯৯৫", "১৯৯৪", "১৯৯৬", "১৯৯৭"],
            correct: 0,
            marks: 1
        },
        {
            id: 73,
            question: "National Rural Health Mission (NRHM) was launched in:",
            question_bn: "জাতীয় গ্রামীণ স্বাস্থ্য মিশন (NRHM) চালু হয়েছিল:",
            options: ["2005", "2006", "2007", "2004"],
            options_bn: ["২০০৫", "২০০৬", "২০০৭", "২০০৪"],
            correct: 0,
            marks: 1
        },
        {
            id: 74,
            question: "The theme of World Health Day 2024 was:",
            question_bn: "২০২৪ সালের বিশ্ব স্বাস্থ্য দিবসের প্রতিপাদ্য ছিল:",
            options: ["My Health, My Right", "Universal Health Coverage", "Health for All", "Building a Fairer, Healthier World"],
            options_bn: ["আমার স্বাস্থ্য, আমার অধিকার", "সর্বজনীন স্বাস্থ্য কভারেজ", "সবার জন্য স্বাস্থ্য", "একটি ন্যায্য, স্বাস্থ্যকর বিশ্ব গড়া"],
            correct: 0,
            marks: 1
        },
        {
            id: 75,
            question: "The first woman nurse in modern nursing was:",
            question_bn: "আধুনিক নার্সিংয়ের প্রথম মহিলা নার্স ছিলেন:",
            options: ["Florence Nightingale", "Clara Barton", "Mary Seacole", "Dorothea Dix"],
            options_bn: ["ফ্লোরেন্স নাইটিঙ্গেল", "ক্লারা বার্টন", "মেরি সিকোল", "ডোরোথিয়া ডিক্স"],
            correct: 0,
            marks: 1
        },
        {
            id: 76,
            question: "Florence Nightingale was born in:",
            question_bn: "ফ্লোরেন্স নাইটিঙ্গেল জন্মগ্রহণ করেন:",
            options: ["1820", "1825", "1830", "1815"],
            options_bn: ["১৮২০", "১৮২৫", "১৮৩০", "১৮১৫"],
            correct: 0,
            marks: 1
        },
        {
            id: 77,
            question: "The Nightingale Pledge was written by:",
            question_bn: "নাইটিঙ্গেল প্রতিজ্ঞা লিখেছিলেন:",
            options: ["Lystra Gretter", "Florence Nightingale", "Clara Barton", "Virginia Henderson"],
            options_bn: ["লিস্ট্রা গ্রেটার", "ফ্লোরেন্স নাইটিঙ্গেল", "ক্লারা বার্টন", "ভার্জিনিয়া হেন্ডারসন"],
            correct: 0,
            marks: 1
        },
        {
            id: 78,
            question: "The book 'Notes on Nursing' was written by:",
            question_bn: "'নোটস অন নার্সিং' বইটি লিখেছিলেন:",
            options: ["Florence Nightingale", "Virginia Henderson", "Clara Barton", "Dorothea Orem"],
            options_bn: ["ফ্লোরেন্স নাইটিঙ্গেল", "ভার্জিনিয়া হেন্ডারসন", "ক্লারা বার্টন", "ডোরোথিয়া ওরেম"],
            correct: 0,
            marks: 1
        },
        {
            id: 79,
            question: "The definition of nursing given by Virginia Henderson includes:",
            question_bn: "ভার্জিনিয়া হেন্ডারসন প্রদত্ত নার্সিংয়ের সংজ্ঞায় অন্তর্ভুক্ত:",
            options: ["14 basic needs", "12 basic needs", "10 basic needs", "16 basic needs"],
            options_bn: ["১৪টি মৌলিক চাহিদা", "১২টি মৌলিক চাহিদা", "১০টি মৌলিক চাহিদা", "১৬টি মৌলিক চাহিদা"],
            correct: 0,
            marks: 1
        },
        {
            id: 80,
            question: "Self-Care Deficit Theory was given by:",
            question_bn: "স্ব-যত্ন ঘাটতি তত্ত্ব প্রদান করেছিলেন:",
            options: ["Dorothea Orem", "Virginia Henderson", "Florence Nightingale", "Hildegard Peplau"],
            options_bn: ["ডোরোথিয়া ওরেম", "ভার্জিনিয়া হেন্ডারসন", "ফ্লোরেন্স নাইটিঙ্গেল", "হিল্ডেগার্ড পেপলাউ"],
            correct: 0,
            marks: 1
        },
        {
            id: 81,
            question: "Interpersonal Relations Theory in nursing was given by:",
            question_bn: "নার্সিংয়ে আন্তঃব্যক্তিক সম্পর্ক তত্ত্ব প্রদান করেছিলেন:",
            options: ["Hildegard Peplau", "Dorothea Orem", "Jean Watson", "Martha Rogers"],
            options_bn: ["হিল্ডেগার্ড পেপলাউ", "ডোরোথিয়া ওরেম", "জিন ওয়াটসন", "মার্থা রজার্স"],
            correct: 0,
            marks: 1
        },
        {
            id: 82,
            question: "Adaptation Model of nursing was given by:",
            question_bn: "নার্সিংয়ের অভিযোজন মডেল প্রদান করেছিলেন:",
            options: ["Sister Callista Roy", "Betty Neuman", "Imogene King", "Patricia Benner"],
            options_bn: ["সিস্টার ক্যালিস্টা রায়", "বেটি নিউম্যান", "ইমোজিন কিং", "প্যাট্রিসিয়া বেনার"],
            correct: 0,
            marks: 1
        },
        {
            id: 83,
            question: "The capital of India is:",
            question_bn: "ভারতের রাজধানী হল:",
            options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
            options_bn: ["নতুন দিল্লি", "মুম্বাই", "কলকাতা", "চেন্নাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 84,
            question: "The largest state of India by area is:",
            question_bn: "আয়তনে ভারতের বৃহত্তম রাজ্য হল:",
            options: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
            options_bn: ["রাজস্থান", "মধ্যপ্রদেশ", "মহারাষ্ট্র", "উত্তরপ্রদেশ"],
            correct: 0,
            marks: 1
        },
        {
            id: 85,
            question: "The national flower of India is:",
            question_bn: "ভারতের জাতীয় ফুল হল:",
            options: ["Lotus", "Rose", "Marigold", "Jasmine"],
            options_bn: ["পদ্ম", "গোলাপ", "গাঁদা", "জুঁই"],
            correct: 0,
            marks: 1
        },
        {
            id: 86,
            question: "The national bird of India is:",
            question_bn: "ভারতের জাতীয় পাখি হল:",
            options: ["Peacock", "Sparrow", "Parrot", "Pigeon"],
            options_bn: ["ময়ূর", "চড়ুই", "টিয়া", "পায়রা"],
            correct: 0,
            marks: 1
        },
        {
            id: 87,
            question: "The national animal of India is:",
            question_bn: "ভারতের জাতীয় পশু হল:",
            options: ["Tiger", "Lion", "Elephant", "Deer"],
            options_bn: ["বাঘ", "সিংহ", "হাতি", "হরিণ"],
            correct: 0,
            marks: 1
        },
        {
            id: 88,
            question: "India got independence in:",
            question_bn: "ভারত স্বাধীনতা পেয়েছিল:",
            options: ["1947", "1948", "1946", "1950"],
            options_bn: ["১৯৪৭", "১৯৪৮", "১৯৪৬", "১৯৫০"],
            correct: 0,
            marks: 1
        },
        {
            id: 89,
            question: "The Constitution of India came into effect on:",
            question_bn: "ভারতের সংবিধান কার্যকর হয়েছিল:",
            options: ["January 26, 1950", "August 15, 1947", "November 26, 1949", "January 26, 1947"],
            options_bn: ["২৬ জানুয়ারি, ১৯৫০", "১৫ আগস্ট, ১৯৪৭", "২৬ নভেম্বর, ১৯৪৯", "২৬ জানুয়ারি, ১৯৪৭"],
            correct: 0,
            marks: 1
        },
        {
            id: 90,
            question: "The first Prime Minister of India was:",
            question_bn: "ভারতের প্রথম প্রধানমন্ত্রী ছিলেন:",
            options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Dr. Rajendra Prasad"],
            options_bn: ["জওহরলাল নেহরু", "মহাত্মা গান্ধী", "সর্দার প্যাটেল", "ড. রাজেন্দ্র প্রসাদ"],
            correct: 0,
            marks: 1
        },
        {
            id: 91,
            question: "The first President of India was:",
            question_bn: "ভারতের প্রথম রাষ্ট্রপতি ছিলেন:",
            options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Dr. S. Radhakrishnan", "Dr. Zakir Hussain"],
            options_bn: ["ড. রাজেন্দ্র প্রসাদ", "জওহরলাল নেহরু", "ড. এস. রাধাকৃষ্ণন", "ড. জাকির হুসেন"],
            correct: 0,
            marks: 1
        },
        {
            id: 92,
            question: "The Father of the Nation of India is:",
            question_bn: "ভারতের জাতির পিতা হলেন:",
            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bhagat Singh"],
            options_bn: ["মহাত্মা গান্ধী", "জওহরলাল নেহরু", "সুভাষ চন্দ্র বসু", "ভগত সিং"],
            correct: 0,
            marks: 1
        },
        {
            id: 93,
            question: "The longest river in India is:",
            question_bn: "ভারতের দীর্ঘতম নদী হল:",
            options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
            options_bn: ["গঙ্গা", "যমুনা", "ব্রহ্মপুত্র", "গোদাবরী"],
            correct: 0,
            marks: 1
        },
        {
            id: 94,
            question: "The highest peak in India is:",
            question_bn: "ভারতের সর্বোচ্চ শৃঙ্গ হল:",
            options: ["Kanchenjunga", "Mount Everest", "Nanda Devi", "K2"],
            options_bn: ["কাঞ্চনজঙ্ঘা", "মাউন্ট এভারেস্ট", "নন্দা দেবী", "কে২"],
            correct: 0,
            marks: 1
        },
        {
            id: 95,
            question: "World Population Day is observed on:",
            question_bn: "বিশ্ব জনসংখ্যা দিবস পালিত হয়:",
            options: ["July 11", "August 11", "June 11", "September 11"],
            options_bn: ["১১ জুলাই", "১১ আগস্ট", "১১ জুন", "১১ সেপ্টেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 96,
            question: "World Environment Day is observed on:",
            question_bn: "বিশ্ব পরিবেশ দিবস পালিত হয়:",
            options: ["June 5", "July 5", "August 5", "May 5"],
            options_bn: ["৫ জুন", "৫ জুলাই", "৫ আগস্ট", "৫ মে"],
            correct: 0,
            marks: 1
        },
        {
            id: 97,
            question: "World Water Day is observed on:",
            question_bn: "বিশ্ব জল দিবস পালিত হয়:",
            options: ["March 22", "April 22", "May 22", "February 22"],
            options_bn: ["২২ মার্চ", "২২ এপ্রিল", "২২ মে", "২২ ফেব্রুয়ারি"],
            correct: 0,
            marks: 1
        },
        {
            id: 98,
            question: "World Heart Day is observed on:",
            question_bn: "বিশ্ব হৃদয় দিবস পালিত হয়:",
            options: ["September 29", "October 29", "August 29", "November 29"],
            options_bn: ["২৯ সেপ্টেম্বর", "২৯ অক্টোবর", "২৯ আগস্ট", "২৯ নভেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 99,
            question: "World Kidney Day is observed on:",
            question_bn: "বিশ্ব কিডনি দিবস পালিত হয়:",
            options: ["Second Thursday of March", "First Thursday of March", "Third Thursday of March", "Last Thursday of March"],
            options_bn: ["মার্চের দ্বিতীয় বৃহস্পতিবার", "মার্চের প্রথম বৃহস্পতিবার", "মার্চের তৃতীয় বৃহস্পতিবার", "মার্চের শেষ বৃহস্পতিবার"],
            correct: 0,
            marks: 1
        },
        {
            id: 100,
            question: "World Sight Day is observed on:",
            question_bn: "বিশ্ব দৃষ্টি দিবস পালিত হয়:",
            options: ["Second Thursday of October", "First Thursday of October", "Third Thursday of October", "Last Thursday of October"],
            options_bn: ["অক্টোবরের দ্বিতীয় বৃহস্পতিবার", "অক্টোবরের প্রথম বৃহস্পতিবার", "অক্টোবরের তৃতীয় বৃহস্পতিবার", "অক্টোবরের শেষ বৃহস্পতিবার"],
            correct: 0,
            marks: 1
        },
        {
            id: 101,
            question: "World Alzheimer's Day is observed on:",
            question_bn: "বিশ্ব আলঝেইমার দিবস পালিত হয়:",
            options: ["September 21", "October 21", "August 21", "November 21"],
            options_bn: ["২১ সেপ্টেম্বর", "২১ অক্টোবর", "২১ আগস্ট", "২১ নভেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 102,
            question: "World Parkinson's Day is observed on:",
            question_bn: "বিশ্ব পার্কিনসন দিবস পালিত হয়:",
            options: ["April 11", "May 11", "March 11", "June 11"],
            options_bn: ["১১ এপ্রিল", "১১ মে", "১১ মার্চ", "১১ জুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 103,
            question: "World Autism Awareness Day is observed on:",
            question_bn: "বিশ্ব অটিজম সচেতনতা দিবস পালিত হয়:",
            options: ["April 2", "May 2", "March 2", "June 2"],
            options_bn: ["২ এপ্রিল", "২ মে", "২ মার্চ", "২ জুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 104,
            question: "World Down Syndrome Day is observed on:",
            question_bn: "বিশ্ব ডাউন সিনড্রোম দিবস পালিত হয়:",
            options: ["March 21", "April 21", "February 21", "May 21"],
            options_bn: ["২১ মার্চ", "২১ এপ্রিল", "২১ ফেব্রুয়ারি", "২১ মে"],
            correct: 0,
            marks: 1
        },
        {
            id: 105,
            question: "World Thalassemia Day is observed on:",
            question_bn: "বিশ্ব থ্যালাসেমিয়া দিবস পালিত হয়:",
            options: ["May 8", "June 8", "April 8", "July 8"],
            options_bn: ["৮ মে", "৮ জুন", "৮ এপ্রিল", "৮ জুলাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 106,
            question: "World Hemophilia Day is observed on:",
            question_bn: "বিশ্ব হিমোফিলিয়া দিবস পালিত হয়:",
            options: ["April 17", "May 17", "March 17", "June 17"],
            options_bn: ["১৭ এপ্রিল", "১৭ মে", "১৭ মার্চ", "১৭ জুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 107,
            question: "World Asthma Day is observed on:",
            question_bn: "বিশ্ব হাঁপানি দিবস পালিত হয়:",
            options: ["First Tuesday of May", "Second Tuesday of May", "Third Tuesday of May", "Last Tuesday of May"],
            options_bn: ["মে মাসের প্রথম মঙ্গলবার", "মে মাসের দ্বিতীয় মঙ্গলবার", "মে মাসের তৃতীয় মঙ্গলবার", "মে মাসের শেষ মঙ্গলবার"],
            correct: 0,
            marks: 1
        },
        {
            id: 108,
            question: "World Hypertension Day is observed on:",
            question_bn: "বিশ্ব উচ্চ রক্তচাপ দিবস পালিত হয়:",
            options: ["May 17", "June 17", "April 17", "July 17"],
            options_bn: ["১৭ মে", "১৭ জুন", "১৭ এপ্রিল", "১৭ জুলাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 109,
            question: "World Thyroid Day is observed on:",
            question_bn: "বিশ্ব থাইরয়েড দিবস পালিত হয়:",
            options: ["May 25", "June 25", "April 25", "July 25"],
            options_bn: ["২৫ মে", "২৫ জুন", "২৫ এপ্রিল", "২৫ জুলাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 110,
            question: "World Osteoporosis Day is observed on:",
            question_bn: "বিশ্ব অস্টিওপোরোসিস দিবস পালিত হয়:",
            options: ["October 20", "November 20", "September 20", "December 20"],
            options_bn: ["২০ অক্টোবর", "২০ নভেম্বর", "২০ সেপ্টেম্বর", "২০ ডিসেম্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 111,
            question: "World Lupus Day is observed on:",
            question_bn: "বিশ্ব লুপাস দিবস পালিত হয়:",
            options: ["May 10", "June 10", "April 10", "July 10"],
            options_bn: ["১০ মে", "১০ জুন", "১০ এপ্রিল", "১০ জুলাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 112,
            question: "ASHA stands for:",
            question_bn: "ASHA এর পূর্ণ রূপ:",
            options: ["Accredited Social Health Activist", "Approved Social Health Activist", "Associated Social Health Activist", "Authorized Social Health Activist"],
            options_bn: ["অ্যাক্রেডিটেড সোশ্যাল হেলথ অ্যাক্টিভিস্ট", "অ্যাপ্রুভড সোশ্যাল হেলথ অ্যাক্টিভিস্ট", "অ্যাসোসিয়েটেড সোশ্যাল হেলথ অ্যাক্টিভিস্ট", "অথরাইজড সোশ্যাল হেলথ অ্যাক্টিভিস্ট"],
            correct: 0,
            marks: 1
        },
        {
            id: 113,
            question: "PHC stands for:",
            question_bn: "PHC এর পূর্ণ রূপ:",
            options: ["Primary Health Centre", "Public Health Centre", "Private Health Centre", "Provincial Health Centre"],
            options_bn: ["প্রাইমারি হেলথ সেন্টার", "পাবলিক হেলথ সেন্টার", "প্রাইভেট হেলথ সেন্টার", "প্রভিন্সিয়াল হেলথ সেন্টার"],
            correct: 0,
            marks: 1
        },
        {
            id: 114,
            question: "CHC stands for:",
            question_bn: "CHC এর পূর্ণ রূপ:",
            options: ["Community Health Centre", "Central Health Centre", "Common Health Centre", "City Health Centre"],
            options_bn: ["কমিউনিটি হেলথ সেন্টার", "সেন্ট্রাল হেলথ সেন্টার", "কমন হেলথ সেন্টার", "সিটি হেলথ সেন্টার"],
            correct: 0,
            marks: 1
        },
        {
            id: 115,
            question: "AWW stands for:",
            question_bn: "AWW এর পূর্ণ রূপ:",
            options: ["Anganwadi Worker", "Auxiliary Ward Worker", "Associated Woman Worker", "Approved Welfare Worker"],
            options_bn: ["অঙ্গনওয়াড়ি কর্মী", "অক্সিলিয়ারি ওয়ার্ড ওয়ার্কার", "অ্যাসোসিয়েটেড উইমেন ওয়ার্কার", "অ্যাপ্রুভড ওয়েলফেয়ার ওয়ার্কার"],
            correct: 0,
            marks: 1
        },
        {
            id: 116,
            question: "ANM stands for:",
            question_bn: "ANM এর পূর্ণ রূপ:",
            options: ["Auxiliary Nurse Midwife", "Assistant Nurse Midwife", "Associate Nurse Midwife", "Approved Nurse Midwife"],
            options_bn: ["অক্সিলিয়ারি নার্স মিডওয়াইফ", "অ্যাসিস্ট্যান্ট নার্স মিডওয়াইফ", "অ্যাসোসিয়েট নার্স মিডওয়াইফ", "অ্যাপ্রুভড নার্স মিডওয়াইফ"],
            correct: 0,
            marks: 1
        },
        {
            id: 117,
            question: "GNM stands for:",
            question_bn: "GNM এর পূর্ণ রূপ:",
            options: ["General Nursing and Midwifery", "Graduate Nursing and Midwifery", "Government Nursing and Midwifery", "Global Nursing and Midwifery"],
            options_bn: ["জেনারেল নার্সিং অ্যান্ড মিডওয়াইফারি", "গ্র্যাজুয়েট নার্সিং অ্যান্ড মিডওয়াইফারি", "গভর্নমেন্ট নার্সিং অ্যান্ড মিডওয়াইফারি", "গ্লোবাল নার্সিং অ্যান্ড মিডওয়াইফারি"],
            correct: 0,
            marks: 1
        },
        {
            id: 118,
            question: "BSc Nursing course duration is:",
            question_bn: "B.Sc নার্সিং কোর্সের সময়কাল:",
            options: ["4 years", "3 years", "5 years", "2 years"],
            options_bn: ["৪ বছর", "৩ বছর", "৫ বছর", "২ বছর"],
            correct: 0,
            marks: 1
        },
        {
            id: 119,
            question: "GNM course duration is:",
            question_bn: "GNM কোর্সের সময়কাল:",
            options: ["3.5 years", "3 years", "4 years", "2.5 years"],
            options_bn: ["৩.৫ বছর", "৩ বছর", "৪ বছর", "২.৫ বছর"],
            correct: 0,
            marks: 1
        },
        {
            id: 120,
            question: "ANM course duration is:",
            question_bn: "ANM কোর্সের সময়কাল:",
            options: ["2 years", "1.5 years", "3 years", "1 year"],
            options_bn: ["২ বছর", "১.৫ বছর", "৩ বছর", "১ বছর"],
            correct: 0,
            marks: 1
        },
        {
            id: 121,
            question: "MSc Nursing course duration is:",
            question_bn: "M.Sc নার্সিং কোর্সের সময়কাল:",
            options: ["2 years", "3 years", "1.5 years", "4 years"],
            options_bn: ["২ বছর", "৩ বছর", "১.৫ বছর", "৪ বছর"],
            correct: 0,
            marks: 1
        },
        {
            id: 122,
            question: "The term 'vital signs' includes:",
            question_bn: "'ভাইটাল সাইনস' শব্দটির মধ্যে অন্তর্ভুক্ত:",
            options: ["Temperature, Pulse, Respiration, Blood Pressure", "Temperature, Weight, Height, Pulse", "Pulse, Weight, Blood Pressure, Height", "Temperature, Weight, Blood Pressure, Respiration"],
            options_bn: ["তাপমাত্রা, নাড়ি, শ্বসন, রক্তচাপ", "তাপমাত্রা, ওজন, উচ্চতা, নাড়ি", "নাড়ি, ওজন, রক্তচাপ, উচ্চতা", "তাপমাত্রা, ওজন, রক্তচাপ, শ্বসন"],
            correct: 0,
            marks: 1
        },
        {
            id: 123,
            question: "Swachh Bharat Mission was launched in:",
            question_bn: "স্বচ্ছ ভারত মিশন চালু হয়েছিল:",
            options: ["2014", "2015", "2013", "2016"],
            options_bn: ["২০১৪", "২০১৫", "২০১৩", "২০১৬"],
            correct: 0,
            marks: 1
        },
        {
            id: 124,
            question: "Poshan Abhiyaan is related to:",
            question_bn: "পোষণ অভিযান সম্পর্কিত:",
            options: ["Nutrition", "Sanitation", "Education", "Employment"],
            options_bn: ["পুষ্টি", "স্বাস্থ্যবিধি", "শিক্ষা", "কর্মসংস্থান"],
            correct: 0,
            marks: 1
        },
        {
            id: 125,
            question: "Beti Bachao Beti Padhao was launched in:",
            question_bn: "বেটি বাঁচাও বেটি পড়াও চালু হয়েছিল:",
            options: ["2015", "2014", "2016", "2017"],
            options_bn: ["২০১৫", "২০১৪", "২০১৬", "২০১৭"],
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
        },
        // Additional English, Pharmacology, Community Health, Midwifery Questions (76-150)
        // English Grammar
        {
            id: 76,
            question: "Choose the correct form: She ___ to the hospital yesterday.",
            question_bn: "সঠিক রূপ নির্বাচন করুন: She ___ to the hospital yesterday.",
            options: ["went", "go", "goes", "going"],
            options_bn: ["went", "go", "goes", "going"],
            correct: 0,
            marks: 1
        },
        {
            id: 77,
            question: "The plural of 'child' is:",
            question_bn: "'child' এর বহুবচন হল:",
            options: ["children", "childs", "childes", "childern"],
            options_bn: ["children", "childs", "childes", "childern"],
            correct: 0,
            marks: 1
        },
        {
            id: 78,
            question: "Choose the correct spelling:",
            question_bn: "সঠিক বানান নির্বাচন করুন:",
            options: ["Occurrence", "Occurence", "Occurrance", "Occurance"],
            options_bn: ["Occurrence", "Occurence", "Occurrance", "Occurance"],
            correct: 0,
            marks: 1
        },
        {
            id: 79,
            question: "The synonym of 'abundant' is:",
            question_bn: "'abundant' এর সমার্থক শব্দ হল:",
            options: ["plentiful", "scarce", "rare", "limited"],
            options_bn: ["প্রচুর", "দুর্লভ", "বিরল", "সীমিত"],
            correct: 0,
            marks: 1
        },
        {
            id: 80,
            question: "The antonym of 'benign' is:",
            question_bn: "'benign' এর বিপরীতার্থক শব্দ হল:",
            options: ["malignant", "kind", "gentle", "harmless"],
            options_bn: ["ক্ষতিকর", "দয়ালু", "মৃদু", "নিরীহ"],
            correct: 0,
            marks: 1
        },
        {
            id: 81,
            question: "Fill in the blank: The patient is ___ good hands.",
            question_bn: "শূন্যস্থান পূরণ করুন: The patient is ___ good hands.",
            options: ["in", "on", "at", "with"],
            options_bn: ["in", "on", "at", "with"],
            correct: 0,
            marks: 1
        },
        {
            id: 82,
            question: "The meaning of 'prognosis' is:",
            question_bn: "'prognosis' এর অর্থ হল:",
            options: ["prediction of disease outcome", "study of disease", "treatment of disease", "cause of disease"],
            options_bn: ["রোগের ফলাফল সম্পর্কে পূর্বাভাস", "রোগের অধ্যয়ন", "রোগের চিকিৎসা", "রোগের কারণ"],
            correct: 0,
            marks: 1
        },
        {
            id: 83,
            question: "Choose the correct sentence:",
            question_bn: "সঠিক বাক্য নির্বাচন করুন:",
            options: ["The nurse gave the patient his medicine.", "The nurse gave the patient her medicine.", "The nurse give the patient his medicine.", "The nurse gived the patient his medicine."],
            options_bn: ["The nurse gave the patient his medicine.", "The nurse gave the patient her medicine.", "The nurse give the patient his medicine.", "The nurse gived the patient his medicine."],
            correct: 0,
            marks: 1
        },
        {
            id: 84,
            question: "The prefix 'hypo' means:",
            question_bn: "'hypo' উপসর্গের অর্থ হল:",
            options: ["below normal", "above normal", "equal to", "opposite of"],
            options_bn: ["স্বাভাবিকের নীচে", "স্বাভাবিকের উপরে", "সমান", "বিপরীত"],
            correct: 0,
            marks: 1
        },
        {
            id: 85,
            question: "The suffix '-itis' indicates:",
            question_bn: "'-itis' প্রত্যয় নির্দেশ করে:",
            options: ["inflammation", "tumor", "condition", "study of"],
            options_bn: ["প্রদাহ", "টিউমার", "অবস্থা", "অধ্যয়ন"],
            correct: 0,
            marks: 1
        },
        // Pharmacology
        {
            id: 86,
            question: "Paracetamol is classified as:",
            question_bn: "প্যারাসিটামল শ্রেণীবদ্ধ করা হয়:",
            options: ["Antipyretic and analgesic", "Antibiotic", "Antihypertensive", "Antidiabetic"],
            options_bn: ["জ্বরনাশক এবং ব্যথানাশক", "অ্যান্টিবায়োটিক", "উচ্চ রক্তচাপ বিরোধী", "ডায়াবেটিস বিরোধী"],
            correct: 0,
            marks: 1
        },
        {
            id: 87,
            question: "The antidote for heparin overdose is:",
            question_bn: "হেপারিন অতিরিক্ত মাত্রার প্রতিষেধক হল:",
            options: ["Protamine sulfate", "Vitamin K", "Naloxone", "Flumazenil"],
            options_bn: ["প্রোটামাইন সালফেট", "ভিটামিন কে", "নালোক্সোন", "ফ্লুমাজেনিল"],
            correct: 0,
            marks: 1
        },
        {
            id: 88,
            question: "The antidote for warfarin overdose is:",
            question_bn: "ওয়ারফারিন অতিরিক্ত মাত্রার প্রতিষেধক হল:",
            options: ["Vitamin K", "Protamine sulfate", "Naloxone", "Atropine"],
            options_bn: ["ভিটামিন কে", "প্রোটামাইন সালফেট", "নালোক্সোন", "অ্যাট্রোপিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 89,
            question: "Naloxone is used as an antidote for:",
            question_bn: "নালোক্সোন প্রতিষেধক হিসাবে ব্যবহৃত হয়:",
            options: ["Opioid overdose", "Benzodiazepine overdose", "Paracetamol overdose", "Organophosphate poisoning"],
            options_bn: ["ওপিওয়েড অতিরিক্ত মাত্রা", "বেনজোডায়াজেপাইন অতিরিক্ত মাত্রা", "প্যারাসিটামল অতিরিক্ত মাত্রা", "অর্গানোফসফেট বিষক্রিয়া"],
            correct: 0,
            marks: 1
        },
        {
            id: 90,
            question: "Atropine is the antidote for:",
            question_bn: "অ্যাট্রোপিন প্রতিষেধক হল:",
            options: ["Organophosphate poisoning", "Opioid overdose", "Paracetamol overdose", "Warfarin overdose"],
            options_bn: ["অর্গানোফসফেট বিষক্রিয়া", "ওপিওয়েড অতিরিক্ত মাত্রা", "প্যারাসিটামল অতিরিক্ত মাত্রা", "ওয়ারফারিন অতিরিক্ত মাত্রা"],
            correct: 0,
            marks: 1
        },
        {
            id: 91,
            question: "N-acetylcysteine is used in overdose of:",
            question_bn: "N-অ্যাসিটাইলসিস্টিন ব্যবহৃত হয় কোন ওষুধের অতিরিক্ত মাত্রায়:",
            options: ["Paracetamol", "Aspirin", "Ibuprofen", "Morphine"],
            options_bn: ["প্যারাসিটামল", "অ্যাসপিরিন", "আইবুপ্রোফেন", "মরফিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 92,
            question: "Which route provides fastest drug action?",
            question_bn: "কোন পথে ওষুধ সবচেয়ে দ্রুত কাজ করে?",
            options: ["Intravenous", "Intramuscular", "Subcutaneous", "Oral"],
            options_bn: ["শিরার মধ্যে", "পেশীর মধ্যে", "ত্বকের নীচে", "মুখে"],
            correct: 0,
            marks: 1
        },
        {
            id: 93,
            question: "Insulin is administered via which route?",
            question_bn: "ইনসুলিন কোন পথে প্রদান করা হয়?",
            options: ["Subcutaneous", "Oral", "Intravenous only", "Intramuscular only"],
            options_bn: ["ত্বকের নীচে", "মুখে", "শুধুমাত্র শিরার মধ্যে", "শুধুমাত্র পেশীর মধ্যে"],
            correct: 0,
            marks: 1
        },
        {
            id: 94,
            question: "The action of adrenaline is:",
            question_bn: "অ্যাড্রেনালিনের কাজ হল:",
            options: ["Bronchodilation and vasoconstriction", "Bronchospasm and vasodilation", "Sedation", "Muscle relaxation"],
            options_bn: ["ব্রঙ্কোডাইলেশন এবং ভাসোকনস্ট্রিকশন", "ব্রঙ্কোস্প্যাজম এবং ভাসোডাইলেশন", "শান্তকরণ", "পেশী শিথিলকরণ"],
            correct: 0,
            marks: 1
        },
        {
            id: 95,
            question: "Digoxin is used in treatment of:",
            question_bn: "ডিগক্সিন ব্যবহৃত হয় চিকিৎসায়:",
            options: ["Heart failure and atrial fibrillation", "Hypertension", "Diabetes", "Asthma"],
            options_bn: ["হার্ট ফেইলিওর এবং অ্যাট্রিয়াল ফাইব্রিলেশন", "উচ্চ রক্তচাপ", "ডায়াবেটিস", "হাঁপানি"],
            correct: 0,
            marks: 1
        },
        {
            id: 96,
            question: "The therapeutic range of digoxin is:",
            question_bn: "ডিগক্সিনের থেরাপিউটিক পরিসীমা হল:",
            options: ["0.8-2.0 ng/mL", "1-5 ng/mL", "5-10 ng/mL", "10-20 ng/mL"],
            options_bn: ["০.৮-২.০ এনজি/এমএল", "১-৫ এনজি/এমএল", "৫-১০ এনজি/এমএল", "১০-২০ এনজি/এমএল"],
            correct: 0,
            marks: 1
        },
        {
            id: 97,
            question: "Nitroglycerin is used for:",
            question_bn: "নাইট্রোগ্লিসারিন ব্যবহৃত হয়:",
            options: ["Angina pectoris", "Hypertension only", "Diabetes", "Infection"],
            options_bn: ["এনজাইনা পেক্টোরিস", "শুধুমাত্র উচ্চ রক্তচাপ", "ডায়াবেটিস", "সংক্রমণ"],
            correct: 0,
            marks: 1
        },
        {
            id: 98,
            question: "Metformin is classified as:",
            question_bn: "মেটফর্মিন শ্রেণীবদ্ধ করা হয়:",
            options: ["Biguanide", "Sulfonylurea", "Insulin", "DPP-4 inhibitor"],
            options_bn: ["বাইগুয়ানাইড", "সালফোনাইলুরিয়া", "ইনসুলিন", "ডিপিপি-৪ ইনহিবিটর"],
            correct: 0,
            marks: 1
        },
        {
            id: 99,
            question: "The most common side effect of NSAIDs is:",
            question_bn: "NSAIDs এর সবচেয়ে সাধারণ পার্শ্বপ্রতিক্রিয়া হল:",
            options: ["GI bleeding and ulcers", "Hair loss", "Weight gain", "Drowsiness"],
            options_bn: ["জিআই রক্তপাত এবং আলসার", "চুল পড়া", "ওজন বৃদ্ধি", "তন্দ্রা"],
            correct: 0,
            marks: 1
        },
        {
            id: 100,
            question: "Amoxicillin belongs to which class of antibiotics?",
            question_bn: "অ্যামোক্সিসিলিন কোন শ্রেণীর অ্যান্টিবায়োটিকের অন্তর্গত?",
            options: ["Penicillins", "Cephalosporins", "Macrolides", "Aminoglycosides"],
            options_bn: ["পেনিসিলিন", "সেফালোস্পোরিন", "ম্যাক্রোলাইড", "অ্যামিনোগ্লাইকোসাইড"],
            correct: 0,
            marks: 1
        },
        // Community Health
        {
            id: 101,
            question: "The primary health care approach was recommended at:",
            question_bn: "প্রাথমিক স্বাস্থ্য সেবা পদ্ধতি সুপারিশ করা হয়েছিল:",
            options: ["Alma-Ata Conference 1978", "Ottawa Conference 1986", "Jakarta Conference 1997", "Geneva Conference 1980"],
            options_bn: ["আলমা-আতা সম্মেলন ১৯৭৮", "অটোয়া সম্মেলন ১৯৮৬", "জাকার্তা সম্মেলন ১৯৯৭", "জেনেভা সম্মেলন ১৯৮০"],
            correct: 0,
            marks: 1
        },
        {
            id: 102,
            question: "The Ottawa Charter focuses on:",
            question_bn: "অটোয়া সনদ কিসের উপর দৃষ্টি নিবদ্ধ করে:",
            options: ["Health promotion", "Disease prevention only", "Treatment", "Rehabilitation"],
            options_bn: ["স্বাস্থ্য উন্নয়ন", "শুধুমাত্র রোগ প্রতিরোধ", "চিকিৎসা", "পুনর্বাসন"],
            correct: 0,
            marks: 1
        },
        {
            id: 103,
            question: "PHC serves a population of approximately:",
            question_bn: "PHC প্রায় কত জনসংখ্যাকে সেবা প্রদান করে:",
            options: ["20,000-30,000", "5,000-10,000", "50,000-80,000", "1,00,000-1,20,000"],
            options_bn: ["২০,০০০-৩০,০০০", "৫,০০০-১০,০০০", "৫০,০০০-৮০,০০০", "১,০০,০০০-১,২০,০০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 104,
            question: "CHC serves a population of approximately:",
            question_bn: "CHC প্রায় কত জনসংখ্যাকে সেবা প্রদান করে:",
            options: ["80,000-1,20,000", "20,000-30,000", "5,000-10,000", "50,000-60,000"],
            options_bn: ["৮০,০০০-১,২০,০০০", "২০,০০০-৩০,০০০", "৫,০০০-১০,০০০", "৫০,০০০-৬০,০০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 105,
            question: "Sub-centre serves a population of approximately:",
            question_bn: "সাব-সেন্টার প্রায় কত জনসংখ্যাকে সেবা প্রদান করে:",
            options: ["3,000-5,000", "10,000-15,000", "20,000-25,000", "50,000-60,000"],
            options_bn: ["৩,০০০-৫,০০০", "১০,০০০-১৫,০০০", "২০,০০০-২৫,০০০", "৫০,০০০-৬০,০০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 106,
            question: "The vector of malaria is:",
            question_bn: "ম্যালেরিয়ার বাহক হল:",
            options: ["Female Anopheles mosquito", "Male Anopheles mosquito", "Aedes mosquito", "Culex mosquito"],
            options_bn: ["স্ত্রী অ্যানোফিলিস মশা", "পুরুষ অ্যানোফিলিস মশা", "এডিস মশা", "কিউলেক্স মশা"],
            correct: 0,
            marks: 1
        },
        {
            id: 107,
            question: "The vector of dengue is:",
            question_bn: "ডেঙ্গির বাহক হল:",
            options: ["Aedes aegypti", "Anopheles mosquito", "Culex mosquito", "Sandfly"],
            options_bn: ["এডিস ইজিপ্টি", "অ্যানোফিলিস মশা", "কিউলেক্স মশা", "স্যান্ডফ্লাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 108,
            question: "The vector of filariasis is:",
            question_bn: "ফাইলেরিয়াসিসের বাহক হল:",
            options: ["Culex mosquito", "Anopheles mosquito", "Aedes mosquito", "Housefly"],
            options_bn: ["কিউলেক্স মশা", "অ্যানোফিলিস মশা", "এডিস মশা", "ঘরের মাছি"],
            correct: 0,
            marks: 1
        },
        {
            id: 109,
            question: "The incubation period of measles is:",
            question_bn: "হামের ইনকিউবেশন পিরিয়ড হল:",
            options: ["10-14 days", "2-3 days", "21-28 days", "1-2 days"],
            options_bn: ["১০-১৪ দিন", "২-৩ দিন", "২১-২৮ দিন", "১-২ দিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 110,
            question: "The incubation period of chickenpox is:",
            question_bn: "জলবসন্তের ইনকিউবেশন পিরিয়ড হল:",
            options: ["14-21 days", "2-3 days", "7-10 days", "1-2 days"],
            options_bn: ["১৪-২১ দিন", "২-৩ দিন", "৭-১০ দিন", "১-২ দিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 111,
            question: "The incubation period of mumps is:",
            question_bn: "মাম্পসের ইনকিউবেশন পিরিয়ড হল:",
            options: ["14-21 days", "2-3 days", "7-10 days", "1-2 days"],
            options_bn: ["১৪-২১ দিন", "২-৩ দিন", "৭-১০ দিন", "১-২ দিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 112,
            question: "BCG vaccine is given at:",
            question_bn: "BCG টিকা দেওয়া হয়:",
            options: ["At birth", "6 weeks", "10 weeks", "14 weeks"],
            options_bn: ["জন্মের সময়", "৬ সপ্তাহে", "১০ সপ্তাহে", "১৪ সপ্তাহে"],
            correct: 0,
            marks: 1
        },
        {
            id: 113,
            question: "OPV is given at:",
            question_bn: "OPV দেওয়া হয়:",
            options: ["Birth, 6, 10, 14 weeks", "Only at birth", "Only at 6 weeks", "9 months only"],
            options_bn: ["জন্মের সময়, ৬, ১০, ১৪ সপ্তাহে", "শুধুমাত্র জন্মের সময়", "শুধুমাত্র ৬ সপ্তাহে", "শুধুমাত্র ৯ মাসে"],
            correct: 0,
            marks: 1
        },
        {
            id: 114,
            question: "Measles vaccine is given at:",
            question_bn: "হামের টিকা দেওয়া হয়:",
            options: ["9-12 months", "At birth", "6 weeks", "14 weeks"],
            options_bn: ["৯-১২ মাস", "জন্মের সময়", "৬ সপ্তাহে", "১৪ সপ্তাহে"],
            correct: 0,
            marks: 1
        },
        {
            id: 115,
            question: "DPT vaccine protects against:",
            question_bn: "DPT টিকা সুরক্ষা প্রদান করে:",
            options: ["Diphtheria, Pertussis, Tetanus", "Dengue, Polio, Typhoid", "Diarrhea, Pneumonia, TB", "Dengue, Pertussis, TB"],
            options_bn: ["ডিপথেরিয়া, হুপিং কাশি, টিটেনাস", "ডেঙ্গি, পোলিও, টাইফয়েড", "ডায়রিয়া, নিউমোনিয়া, টিবি", "ডেঙ্গি, হুপিং কাশি, টিবি"],
            correct: 0,
            marks: 1
        },
        {
            id: 116,
            question: "Cold chain temperature should be maintained at:",
            question_bn: "কোল্ড চেইন তাপমাত্রা বজায় রাখতে হবে:",
            options: ["+2°C to +8°C", "0°C to +2°C", "-20°C to -10°C", "+10°C to +15°C"],
            options_bn: ["+২°C থেকে +৮°C", "০°C থেকে +২°C", "-২০°C থেকে -১০°C", "+১০°C থেকে +১৫°C"],
            correct: 0,
            marks: 1
        },
        {
            id: 117,
            question: "Safe drinking water should have chlorine level of:",
            question_bn: "নিরাপদ পানীয় জলে ক্লোরিনের মাত্রা থাকা উচিত:",
            options: ["0.5 mg/L", "1.5 mg/L", "2.0 mg/L", "5.0 mg/L"],
            options_bn: ["০.৫ মিগ্রা/লিটার", "১.৫ মিগ্রা/লিটার", "২.০ মিগ্রা/লিটার", "৫.০ মিগ্রা/লিটার"],
            correct: 0,
            marks: 1
        },
        {
            id: 118,
            question: "Crude birth rate is expressed per:",
            question_bn: "স্থূল জন্মহার প্রকাশ করা হয় প্রতি:",
            options: ["1000 population", "100 population", "10000 population", "100000 population"],
            options_bn: ["১০০০ জনসংখ্যা", "১০০ জনসংখ্যা", "১০০০০ জনসংখ্যা", "১০০০০০ জনসংখ্যা"],
            correct: 0,
            marks: 1
        },
        {
            id: 119,
            question: "Infant mortality rate is expressed per:",
            question_bn: "শিশু মৃত্যুহার প্রকাশ করা হয় প্রতি:",
            options: ["1000 live births", "100 live births", "10000 live births", "100000 live births"],
            options_bn: ["১০০০ জীবিত জন্ম", "১০০ জীবিত জন্ম", "১০০০০ জীবিত জন্ম", "১০০০০০ জীবিত জন্ম"],
            correct: 0,
            marks: 1
        },
        {
            id: 120,
            question: "Neonatal period is defined as:",
            question_bn: "নবজাতক কাল সংজ্ঞায়িত করা হয়:",
            options: ["Birth to 28 days", "Birth to 7 days", "Birth to 1 year", "Birth to 42 days"],
            options_bn: ["জন্ম থেকে ২৮ দিন", "জন্ম থেকে ৭ দিন", "জন্ম থেকে ১ বছর", "জন্ম থেকে ৪২ দিন"],
            correct: 0,
            marks: 1
        },
        // Midwifery
        {
            id: 121,
            question: "The normal duration of pregnancy is:",
            question_bn: "গর্ভাবস্থার স্বাভাবিক সময়কাল হল:",
            options: ["280 days (40 weeks)", "270 days (38 weeks)", "300 days (43 weeks)", "250 days (36 weeks)"],
            options_bn: ["২৮০ দিন (৪০ সপ্তাহ)", "২৭০ দিন (৩৮ সপ্তাহ)", "৩০০ দিন (৪৩ সপ্তাহ)", "২৫০ দিন (৩৬ সপ্তাহ)"],
            correct: 0,
            marks: 1
        },
        {
            id: 122,
            question: "Quickening is usually felt at:",
            question_bn: "কুইকেনিং সাধারণত অনুভূত হয়:",
            options: ["18-20 weeks in primigravida", "10-12 weeks", "28-30 weeks", "36-38 weeks"],
            options_bn: ["১৮-২০ সপ্তাহে প্রাইমিগ্রাভিডায়", "১০-১২ সপ্তাহে", "২৮-৩০ সপ্তাহে", "৩৬-৩৮ সপ্তাহে"],
            correct: 0,
            marks: 1
        },
        {
            id: 123,
            question: "Lightening occurs at:",
            question_bn: "লাইটেনিং ঘটে:",
            options: ["2-3 weeks before delivery in primigravida", "At the time of labor", "First trimester", "Second trimester"],
            options_bn: ["প্রাইমিগ্রাভিডায় প্রসবের ২-৩ সপ্তাহ আগে", "প্রসব যন্ত্রণার সময়", "প্রথম ত্রৈমাসিকে", "দ্বিতীয় ত্রৈমাসিকে"],
            correct: 0,
            marks: 1
        },
        {
            id: 124,
            question: "The first stage of labor ends with:",
            question_bn: "প্রসবের প্রথম পর্যায় শেষ হয়:",
            options: ["Full dilatation of cervix", "Delivery of baby", "Delivery of placenta", "Onset of contractions"],
            options_bn: ["জরায়ুমুখের সম্পূর্ণ প্রসারণ", "শিশুর প্রসব", "গর্ভফুলের প্রসব", "সংকোচন শুরু"],
            correct: 0,
            marks: 1
        },
        {
            id: 125,
            question: "The second stage of labor ends with:",
            question_bn: "প্রসবের দ্বিতীয় পর্যায় শেষ হয়:",
            options: ["Delivery of baby", "Full dilatation of cervix", "Delivery of placenta", "Onset of contractions"],
            options_bn: ["শিশুর প্রসব", "জরায়ুমুখের সম্পূর্ণ প্রসারণ", "গর্ভফুলের প্রসব", "সংকোচন শুরু"],
            correct: 0,
            marks: 1
        },
        {
            id: 126,
            question: "The third stage of labor ends with:",
            question_bn: "প্রসবের তৃতীয় পর্যায় শেষ হয়:",
            options: ["Delivery of placenta", "Delivery of baby", "Full dilatation of cervix", "Onset of contractions"],
            options_bn: ["গর্ভফুলের প্রসব", "শিশুর প্রসব", "জরায়ুমুখের সম্পূর্ণ প্রসারণ", "সংকোচন শুরু"],
            correct: 0,
            marks: 1
        },
        {
            id: 127,
            question: "Postpartum hemorrhage is blood loss of more than:",
            question_bn: "প্রসবোত্তর রক্তক্ষরণ হল রক্তক্ষয়ের পরিমাণ:",
            options: ["500 mL", "250 mL", "100 mL", "1000 mL"],
            options_bn: ["৫০০ মিলি", "২৫০ মিলি", "১০০ মিলি", "১০০০ মিলি"],
            correct: 0,
            marks: 1
        },
        {
            id: 128,
            question: "The most common cause of PPH is:",
            question_bn: "প্রসবোত্তর রক্তক্ষরণের সবচেয়ে সাধারণ কারণ হল:",
            options: ["Uterine atony", "Cervical tear", "Retained placenta", "Coagulation disorder"],
            options_bn: ["জরায়ু অ্যাটনি", "সার্ভিক্সের ছিঁড়ে যাওয়া", "অবশিষ্ট গর্ভফুল", "জমাট বাঁধার ব্যাধি"],
            correct: 0,
            marks: 1
        },
        {
            id: 129,
            question: "APGAR score is assessed at:",
            question_bn: "APGAR স্কোর মূল্যায়ন করা হয়:",
            options: ["1 and 5 minutes after birth", "At birth only", "10 minutes only", "30 minutes only"],
            options_bn: ["জন্মের ১ এবং ৫ মিনিট পরে", "শুধুমাত্র জন্মের সময়", "শুধুমাত্র ১০ মিনিটে", "শুধুমাত্র ৩০ মিনিটে"],
            correct: 0,
            marks: 1
        },
        {
            id: 130,
            question: "Normal APGAR score is:",
            question_bn: "স্বাভাবিক APGAR স্কোর হল:",
            options: ["7-10", "0-3", "4-6", "11-15"],
            options_bn: ["৭-১০", "০-৩", "৪-৬", "১১-১৫"],
            correct: 0,
            marks: 1
        },
        {
            id: 131,
            question: "Eclampsia is characterized by:",
            question_bn: "একলাম্পসিয়ার বৈশিষ্ট্য হল:",
            options: ["Convulsions in pregnancy with hypertension", "Bleeding in pregnancy", "Infection in pregnancy", "Diabetes in pregnancy"],
            options_bn: ["উচ্চ রক্তচাপ সহ গর্ভাবস্থায় খিঁচুনি", "গর্ভাবস্থায় রক্তপাত", "গর্ভাবস্থায় সংক্রমণ", "গর্ভাবস্থায় ডায়াবেটিস"],
            correct: 0,
            marks: 1
        },
        {
            id: 132,
            question: "Pre-eclampsia is diagnosed by:",
            question_bn: "প্রি-একলাম্পসিয়া নির্ণয় করা হয়:",
            options: ["Hypertension and proteinuria after 20 weeks", "Bleeding after 20 weeks", "Fever after 20 weeks", "Anemia after 20 weeks"],
            options_bn: ["২০ সপ্তাহ পরে উচ্চ রক্তচাপ এবং প্রোটিনিউরিয়া", "২০ সপ্তাহ পরে রক্তপাত", "২০ সপ্তাহ পরে জ্বর", "২০ সপ্তাহ পরে রক্তাল্পতা"],
            correct: 0,
            marks: 1
        },
        {
            id: 133,
            question: "Magnesium sulfate is used in:",
            question_bn: "ম্যাগনেসিয়াম সালফেট ব্যবহৃত হয়:",
            options: ["Eclampsia and pre-eclampsia", "Anemia", "Diabetes", "Infection"],
            options_bn: ["একলাম্পসিয়া এবং প্রি-একলাম্পসিয়া", "রক্তাল্পতা", "ডায়াবেটিস", "সংক্রমণ"],
            correct: 0,
            marks: 1
        },
        {
            id: 134,
            question: "The antidote for magnesium sulfate toxicity is:",
            question_bn: "ম্যাগনেসিয়াম সালফেট বিষক্রিয়ার প্রতিষেধক হল:",
            options: ["Calcium gluconate", "Vitamin K", "Protamine sulfate", "Naloxone"],
            options_bn: ["ক্যালসিয়াম গ্লুকোনেট", "ভিটামিন কে", "প্রোটামাইন সালফেট", "নালোক্সোন"],
            correct: 0,
            marks: 1
        },
        {
            id: 135,
            question: "Ectopic pregnancy most commonly occurs in:",
            question_bn: "একটোপিক গর্ভাবস্থা সাধারণত ঘটে:",
            options: ["Fallopian tube", "Ovary", "Cervix", "Abdomen"],
            options_bn: ["ফ্যালোপিয়ান টিউবে", "ডিম্বাশয়ে", "জরায়ুমুখে", "পেটে"],
            correct: 0,
            marks: 1
        },
        {
            id: 136,
            question: "Placenta previa is characterized by:",
            question_bn: "প্লাসেন্টা প্রিভিয়ার বৈশিষ্ট্য হল:",
            options: ["Painless vaginal bleeding", "Painful vaginal bleeding", "No bleeding", "Fever"],
            options_bn: ["যন্ত্রণাহীন যোনি রক্তপাত", "যন্ত্রণাদায়ক যোনি রক্তপাত", "কোন রক্তপাত নেই", "জ্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 137,
            question: "Abruptio placentae is characterized by:",
            question_bn: "অ্যাব্রাপশিও প্লাসেন্টির বৈশিষ্ট্য হল:",
            options: ["Painful vaginal bleeding with board-like rigidity", "Painless vaginal bleeding", "No bleeding", "Fever"],
            options_bn: ["বোর্ডের মতো শক্ততা সহ যন্ত্রণাদায়ক যোনি রক্তপাত", "যন্ত্রণাহীন যোনি রক্তপাত", "কোন রক্তপাত নেই", "জ্বর"],
            correct: 0,
            marks: 1
        },
        {
            id: 138,
            question: "The Rh factor in pregnancy is important because:",
            question_bn: "গর্ভাবস্থায় Rh ফ্যাক্টর গুরুত্বপূর্ণ কারণ:",
            options: ["It can cause hemolytic disease of newborn", "It causes diabetes", "It causes hypertension", "It causes infection"],
            options_bn: ["এটি নবজাতকের হেমোলাইটিক রোগ সৃষ্টি করতে পারে", "এটি ডায়াবেটিস সৃষ্টি করে", "এটি উচ্চ রক্তচাপ সৃষ্টি করে", "এটি সংক্রমণ সৃষ্টি করে"],
            correct: 0,
            marks: 1
        },
        {
            id: 139,
            question: "Anti-D immunoglobulin is given to:",
            question_bn: "অ্যান্টি-ডি ইমিউনোগ্লোবুলিন দেওয়া হয়:",
            options: ["Rh-negative mother with Rh-positive baby", "All pregnant women", "Rh-positive mother only", "All newborns"],
            options_bn: ["Rh-পজিটিভ শিশুর সাথে Rh-নেগেটিভ মাকে", "সমস্ত গর্ভবতী মহিলাকে", "শুধুমাত্র Rh-পজিটিভ মাকে", "সমস্ত নবজাতককে"],
            correct: 0,
            marks: 1
        },
        {
            id: 140,
            question: "Gestational diabetes is first screened at:",
            question_bn: "গর্ভাবস্থায় ডায়াবেটিস প্রথম স্ক্রিন করা হয়:",
            options: ["24-28 weeks", "8-12 weeks", "36-40 weeks", "At delivery"],
            options_bn: ["২৪-২৮ সপ্তাহে", "৮-১২ সপ্তাহে", "৩৬-৪০ সপ্তাহে", "প্রসবের সময়"],
            correct: 0,
            marks: 1
        },
        {
            id: 141,
            question: "The normal duration of puerperium is:",
            question_bn: "প্রসবোত্তর সময়কালের স্বাভাবিক সময়কাল হল:",
            options: ["6 weeks", "2 weeks", "4 weeks", "8 weeks"],
            options_bn: ["৬ সপ্তাহ", "২ সপ্তাহ", "৪ সপ্তাহ", "৮ সপ্তাহ"],
            correct: 0,
            marks: 1
        },
        {
            id: 142,
            question: "Colostrum is rich in:",
            question_bn: "কোলস্ট্রাম সমৃদ্ধ:",
            options: ["Antibodies (IgA)", "Fat", "Carbohydrates", "Iron"],
            options_bn: ["অ্যান্টিবডি (IgA)", "চর্বি", "কার্বোহাইড্রেট", "আয়রন"],
            correct: 0,
            marks: 1
        },
        {
            id: 143,
            question: "Exclusive breastfeeding is recommended for:",
            question_bn: "শুধুমাত্র বুকের দুধ খাওয়ানো সুপারিশ করা হয়:",
            options: ["First 6 months", "First 3 months", "First 9 months", "First 12 months"],
            options_bn: ["প্রথম ৬ মাস", "প্রথম ৩ মাস", "প্রথম ৯ মাস", "প্রথম ১২ মাস"],
            correct: 0,
            marks: 1
        },
        {
            id: 144,
            question: "Weaning should be started at:",
            question_bn: "দুধ ছাড়ানো শুরু করা উচিত:",
            options: ["6 months", "3 months", "9 months", "12 months"],
            options_bn: ["৬ মাস", "৩ মাস", "৯ মাস", "১২ মাস"],
            correct: 0,
            marks: 1
        },
        {
            id: 145,
            question: "Kangaroo Mother Care is especially beneficial for:",
            question_bn: "ক্যাঙ্গারু মাদার কেয়ার বিশেষভাবে উপকারী:",
            options: ["Low birth weight babies", "Normal weight babies only", "Overweight babies", "Mothers only"],
            options_bn: ["কম জন্ম ওজনের শিশুদের জন্য", "শুধুমাত্র স্বাভাবিক ওজনের শিশুদের জন্য", "অতিরিক্ত ওজনের শিশুদের জন্য", "শুধুমাত্র মায়েদের জন্য"],
            correct: 0,
            marks: 1
        },
        {
            id: 146,
            question: "Low birth weight is defined as weight less than:",
            question_bn: "কম জন্ম ওজন সংজ্ঞায়িত করা হয় ওজন কম:",
            options: ["2500 grams", "3000 grams", "2000 grams", "1500 grams"],
            options_bn: ["২৫০০ গ্রাম", "৩০০০ গ্রাম", "২০০০ গ্রাম", "১৫০০ গ্রাম"],
            correct: 0,
            marks: 1
        },
        {
            id: 147,
            question: "Very low birth weight is defined as weight less than:",
            question_bn: "খুব কম জন্ম ওজন সংজ্ঞায়িত করা হয় ওজন কম:",
            options: ["1500 grams", "2500 grams", "1000 grams", "2000 grams"],
            options_bn: ["১৫০০ গ্রাম", "২৫০০ গ্রাম", "১০০০ গ্রাম", "২০০০ গ্রাম"],
            correct: 0,
            marks: 1
        },
        {
            id: 148,
            question: "Preterm baby is defined as born before:",
            question_bn: "প্রিটার্ম শিশু সংজ্ঞায়িত করা হয় জন্ম:",
            options: ["37 weeks", "40 weeks", "34 weeks", "42 weeks"],
            options_bn: ["৩৭ সপ্তাহের আগে", "৪০ সপ্তাহের আগে", "৩৪ সপ্তাহের আগে", "৪২ সপ্তাহের আগে"],
            correct: 0,
            marks: 1
        },
        {
            id: 149,
            question: "Post-term pregnancy is defined as pregnancy beyond:",
            question_bn: "পোস্ট-টার্ম গর্ভাবস্থা সংজ্ঞায়িত করা হয় গর্ভাবস্থা:",
            options: ["42 weeks", "40 weeks", "38 weeks", "44 weeks"],
            options_bn: ["৪২ সপ্তাহের পরে", "৪০ সপ্তাহের পরে", "৩৮ সপ্তাহের পরে", "৪৪ সপ্তাহের পরে"],
            correct: 0,
            marks: 1
        },
        {
            id: 150,
            question: "The recommended weight gain during pregnancy is:",
            question_bn: "গর্ভাবস্থায় সুপারিশকৃত ওজন বৃদ্ধি হল:",
            options: ["10-12 kg", "5-7 kg", "15-18 kg", "20-25 kg"],
            options_bn: ["১০-১২ কেজি", "৫-৭ কেজি", "১৫-১৮ কেজি", "২০-২৫ কেজি"],
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
        },
        // Additional Aptitude Questions (101-125)
        {
            id: 101,
            question: "A hospital admits 120 patients per day. How many patients in 2 weeks?",
            question_bn: "একটি হাসপাতালে প্রতিদিন ১২০ জন রোগী ভর্তি হয়। ২ সপ্তাহে কত রোগী?",
            options: ["1680", "1440", "1560", "1800"],
            options_bn: ["১৬৮০", "১৪৪০", "১৫৬০", "১৮০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 102,
            question: "Find the missing number: 3, 9, 27, 81, ?",
            question_bn: "অনুপস্থিত সংখ্যাটি খুঁজুন: ৩, ৯, ২৭, ৮১, ?",
            options: ["162", "243", "324", "189"],
            options_bn: ["১৬২", "২৪৩", "৩২৪", "১৮৯"],
            correct: 1,
            marks: 1
        },
        {
            id: 103,
            question: "A nurse works from 7 AM to 3 PM. How many hours does she work?",
            question_bn: "একজন নার্স সকাল ৭টা থেকে বিকাল ৩টা পর্যন্ত কাজ করেন। তিনি কত ঘণ্টা কাজ করেন?",
            options: ["6 hours", "7 hours", "8 hours", "9 hours"],
            options_bn: ["৬ ঘণ্টা", "৭ ঘণ্টা", "৮ ঘণ্টা", "৯ ঘণ্টা"],
            correct: 2,
            marks: 1
        },
        {
            id: 104,
            question: "If 5 nurses can vaccinate 200 children in 4 hours, how many can 10 nurses vaccinate in 2 hours?",
            question_bn: "যদি ৫ জন নার্স ৪ ঘণ্টায় ২০০ শিশুকে টিকা দিতে পারে, তাহলে ১০ জন নার্স ২ ঘণ্টায় কতজনকে টিকা দিতে পারবে?",
            options: ["100", "200", "400", "800"],
            options_bn: ["১০০", "২০০", "৪০০", "৮০০"],
            correct: 1,
            marks: 1
        },
        {
            id: 105,
            question: "The average of first 5 prime numbers is:",
            question_bn: "প্রথম ৫টি মৌলিক সংখ্যার গড় হল:",
            options: ["5.2", "5.6", "6.2", "4.8"],
            options_bn: ["৫.২", "৫.৬", "৬.২", "৪.৮"],
            correct: 1,
            marks: 1
        },
        {
            id: 106,
            question: "Convert 0.75 to a fraction:",
            question_bn: "০.৭৫ কে ভগ্নাংশে রূপান্তর করুন:",
            options: ["1/2", "2/3", "3/4", "4/5"],
            options_bn: ["১/২", "২/৩", "৩/৪", "৪/৫"],
            correct: 2,
            marks: 1
        },
        {
            id: 107,
            question: "A patient's pulse rate is 72/min. How many beats in 5 minutes?",
            question_bn: "একজন রোগীর পালস রেট ৭২/মিনিট। ৫ মিনিটে কত বিট?",
            options: ["320", "360", "380", "400"],
            options_bn: ["৩২০", "৩৬০", "৩৮০", "৪০০"],
            correct: 1,
            marks: 1
        },
        {
            id: 108,
            question: "If A > B, B > C, and C > D, then which is smallest?",
            question_bn: "যদি A > B, B > C, এবং C > D হয়, তাহলে সবচেয়ে ছোট কোনটি?",
            options: ["A", "B", "C", "D"],
            options_bn: ["A", "B", "C", "D"],
            correct: 3,
            marks: 1
        },
        {
            id: 109,
            question: "Square root of 144 is:",
            question_bn: "১৪৪ এর বর্গমূল হল:",
            options: ["10", "11", "12", "13"],
            options_bn: ["১০", "১১", "১২", "১৩"],
            correct: 2,
            marks: 1
        },
        {
            id: 110,
            question: "A medicine bottle contains 100 ml. If 5 ml is given 3 times daily, how many days will it last?",
            question_bn: "একটি ওষুধের বোতলে ১০০ মিলি আছে। যদি দৈনিক ৩ বার ৫ মিলি দেওয়া হয়, কত দিন চলবে?",
            options: ["5 days", "6 days", "7 days", "8 days"],
            options_bn: ["৫ দিন", "৬ দিন", "৭ দিন", "৮ দিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 111,
            question: "If today is Monday, what day was it 10 days ago?",
            question_bn: "যদি আজ সোমবার হয়, তাহলে ১০ দিন আগে কী বার ছিল?",
            options: ["Thursday", "Friday", "Saturday", "Sunday"],
            options_bn: ["বৃহস্পতিবার", "শুক্রবার", "শনিবার", "রবিবার"],
            correct: 1,
            marks: 1
        },
        {
            id: 112,
            question: "25% of 400 is equal to:",
            question_bn: "৪০০ এর ২৫% সমান:",
            options: ["80", "100", "120", "150"],
            options_bn: ["৮০", "১০০", "১২০", "১৫০"],
            correct: 1,
            marks: 1
        },
        {
            id: 113,
            question: "Complete: Hand : Glove :: Foot : ?",
            question_bn: "সম্পূর্ণ করুন: হাত : দস্তানা :: পা : ?",
            options: ["Sock", "Shoe", "Slipper", "Sandal"],
            options_bn: ["মোজা", "জুতা", "চপ্পল", "স্যান্ডেল"],
            correct: 1,
            marks: 1
        },
        {
            id: 114,
            question: "The next number in series 2, 5, 10, 17, 26, ? is:",
            question_bn: "২, ৫, ১০, ১৭, ২৬, ? সিরিজের পরবর্তী সংখ্যা হল:",
            options: ["35", "37", "39", "41"],
            options_bn: ["৩৫", "৩৭", "৩৯", "৪১"],
            correct: 1,
            marks: 1
        },
        {
            id: 115,
            question: "If the cost price is ₹200 and selling price is ₹250, the profit percentage is:",
            question_bn: "যদি ক্রয়মূল্য ₹২০০ এবং বিক্রয়মূল্য ₹২৫০ হয়, তাহলে লাভের শতাংশ হল:",
            options: ["20%", "25%", "30%", "50%"],
            options_bn: ["২০%", "২৫%", "৩০%", "৫০%"],
            correct: 1,
            marks: 1
        },
        {
            id: 116,
            question: "LCM of 12 and 18 is:",
            question_bn: "১২ এবং ১৮ এর ল.সা.গু হল:",
            options: ["24", "36", "48", "72"],
            options_bn: ["২৪", "৩৬", "৪৮", "৭২"],
            correct: 1,
            marks: 1
        },
        {
            id: 117,
            question: "A train travels 180 km in 3 hours. What is its speed?",
            question_bn: "একটি ট্রেন ৩ ঘণ্টায় ১৮০ কিমি যায়। এর গতি কত?",
            options: ["50 km/hr", "60 km/hr", "70 km/hr", "80 km/hr"],
            options_bn: ["৫০ কিমি/ঘণ্টা", "৬০ কিমি/ঘণ্টা", "৭০ কিমি/ঘণ্টা", "৮০ কিমি/ঘণ্টা"],
            correct: 1,
            marks: 1
        },
        {
            id: 118,
            question: "If 3x + 5 = 20, then x = ?",
            question_bn: "যদি 3x + 5 = 20 হয়, তাহলে x = ?",
            options: ["3", "4", "5", "6"],
            options_bn: ["৩", "৪", "৫", "৬"],
            correct: 2,
            marks: 1
        },
        {
            id: 119,
            question: "A rectangle has length 12 cm and width 8 cm. What is its area?",
            question_bn: "একটি আয়তক্ষেত্রের দৈর্ঘ্য ১২ সেমি এবং প্রস্থ ৮ সেমি। এর ক্ষেত্রফল কত?",
            options: ["80 sq cm", "96 sq cm", "100 sq cm", "120 sq cm"],
            options_bn: ["৮০ বর্গ সেমি", "৯৬ বর্গ সেমি", "১০০ বর্গ সেমি", "১২০ বর্গ সেমি"],
            correct: 1,
            marks: 1
        },
        {
            id: 120,
            question: "Which is the odd one: 2, 3, 5, 9, 11?",
            question_bn: "কোনটি বেমানান: ২, ৩, ৫, ৯, ১১?",
            options: ["2", "3", "9", "11"],
            options_bn: ["২", "৩", "৯", "১১"],
            correct: 2,
            marks: 1
        },
        {
            id: 121,
            question: "Simple interest on ₹1000 at 10% for 2 years is:",
            question_bn: "₹১০০০ টাকার ১০% হারে ২ বছরের সরল সুদ হল:",
            options: ["₹100", "₹150", "₹200", "₹250"],
            options_bn: ["₹১০০", "₹১৫০", "₹২০০", "₹২৫০"],
            correct: 2,
            marks: 1
        },
        {
            id: 122,
            question: "If a patient takes medicine every 6 hours starting at 6 AM, the 4th dose will be at:",
            question_bn: "যদি একজন রোগী সকাল ৬টা থেকে প্রতি ৬ ঘণ্টা অন্তর ওষুধ খান, তাহলে ৪র্থ ডোজ হবে:",
            options: ["12 AM", "6 PM", "12 PM (midnight)", "6 AM next day"],
            options_bn: ["দুপুর ১২টা", "সন্ধ্যা ৬টা", "রাত ১২টা", "পরদিন সকাল ৬টা"],
            correct: 2,
            marks: 1
        },
        {
            id: 123,
            question: "The ratio 3:5 is equivalent to:",
            question_bn: "৩:৫ অনুপাতটি সমতুল্য:",
            options: ["6:10", "9:12", "12:18", "15:20"],
            options_bn: ["৬:১০", "৯:১২", "১২:১৮", "১৫:২০"],
            correct: 0,
            marks: 1
        },
        {
            id: 124,
            question: "What comes next: A, D, G, J, ?",
            question_bn: "পরবর্তী কী আসবে: A, D, G, J, ?",
            options: ["K", "L", "M", "N"],
            options_bn: ["K", "L", "M", "N"],
            correct: 2,
            marks: 1
        },
        {
            id: 125,
            question: "A nurse distributed 72 tablets equally among 8 patients. Each patient received:",
            question_bn: "একজন নার্স ৮ জন রোগীকে সমানভাবে ৭২টি ট্যাবলেট বিতরণ করলেন। প্রতিটি রোগী পেল:",
            options: ["7 tablets", "8 tablets", "9 tablets", "10 tablets"],
            options_bn: ["৭টি ট্যাবলেট", "৮টি ট্যাবলেট", "৯টি ট্যাবলেট", "১০টি ট্যাবলেট"],
            correct: 2,
            marks: 1
        },
        // Additional Aptitude Questions (126-200)
        {
            id: 126,
            question: "If 15% of a number is 45, what is the number?",
            question_bn: "যদি একটি সংখ্যার ১৫% হয় ৪৫, সংখ্যাটি কত?",
            options: ["300", "250", "350", "400"],
            options_bn: ["৩০০", "২৫০", "৩৫০", "৪০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 127,
            question: "What is 25% of 400?",
            question_bn: "৪০০ এর ২৫% কত?",
            options: ["100", "75", "125", "150"],
            options_bn: ["১০০", "৭৫", "১২৫", "১৫০"],
            correct: 0,
            marks: 1
        },
        {
            id: 128,
            question: "The average of 10, 20, 30, 40, 50 is:",
            question_bn: "১০, ২০, ৩০, ৪০, ৫০ এর গড় হল:",
            options: ["30", "25", "35", "40"],
            options_bn: ["৩০", "২৫", "৩৫", "৪০"],
            correct: 0,
            marks: 1
        },
        {
            id: 129,
            question: "A hospital has 250 beds. If 80% are occupied, how many are empty?",
            question_bn: "একটি হাসপাতালে ২৫০টি শয্যা আছে। যদি ৮০% দখল থাকে, কতটি খালি?",
            options: ["50", "40", "60", "200"],
            options_bn: ["৫০", "৪০", "৬০", "২০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 130,
            question: "If a medicine costs Rs. 120 and there is a 10% discount, the selling price is:",
            question_bn: "যদি একটি ওষুধের দাম ১২০ টাকা এবং ১০% ছাড় থাকে, বিক্রয় মূল্য হল:",
            options: ["Rs. 108", "Rs. 110", "Rs. 100", "Rs. 132"],
            options_bn: ["১০৮ টাকা", "১১০ টাকা", "১০০ টাকা", "১৩২ টাকা"],
            correct: 0,
            marks: 1
        },
        {
            id: 131,
            question: "Complete the series: 2, 6, 18, 54, ?",
            question_bn: "সিরিজটি সম্পূর্ণ করুন: ২, ৬, ১৮, ৫৪, ?",
            options: ["162", "108", "144", "180"],
            options_bn: ["১৬২", "১০৮", "১৪৪", "১৮০"],
            correct: 0,
            marks: 1
        },
        {
            id: 132,
            question: "Complete the series: 1, 4, 9, 16, 25, ?",
            question_bn: "সিরিজটি সম্পূর্ণ করুন: ১, ৪, ৯, ১৬, ২৫, ?",
            options: ["36", "30", "35", "49"],
            options_bn: ["৩৬", "৩০", "৩৫", "৪৯"],
            correct: 0,
            marks: 1
        },
        {
            id: 133,
            question: "If DOCTOR is coded as DPDUPS, then NURSE is coded as:",
            question_bn: "যদি DOCTOR কোড করা হয় DPDUPS, তাহলে NURSE কোড করা হবে:",
            options: ["OVSFT", "MVQTD", "NVSTF", "NWTSE"],
            options_bn: ["OVSFT", "MVQTD", "NVSTF", "NWTSE"],
            correct: 0,
            marks: 1
        },
        {
            id: 134,
            question: "Find the odd one out: 3, 6, 9, 11, 15",
            question_bn: "বেমানানটি খুঁজুন: ৩, ৬, ৯, ১১, ১৫",
            options: ["11", "3", "6", "15"],
            options_bn: ["১১", "৩", "৬", "১৫"],
            correct: 0,
            marks: 1
        },
        {
            id: 135,
            question: "Find the odd one out: Apple, Mango, Potato, Orange",
            question_bn: "বেমানানটি খুঁজুন: আপেল, আম, আলু, কমলা",
            options: ["Potato", "Apple", "Mango", "Orange"],
            options_bn: ["আলু", "আপেল", "আম", "কমলা"],
            correct: 0,
            marks: 1
        },
        {
            id: 136,
            question: "A patient needs 500 mL of saline over 4 hours. The drip rate per hour is:",
            question_bn: "একজন রোগীর ৪ ঘণ্টায় ৫০০ মিলি স্যালাইন প্রয়োজন। প্রতি ঘণ্টায় ড্রিপ রেট হল:",
            options: ["125 mL/hr", "100 mL/hr", "150 mL/hr", "200 mL/hr"],
            options_bn: ["১২৫ মিলি/ঘণ্টা", "১০০ মিলি/ঘণ্টা", "১৫০ মিলি/ঘণ্টা", "২০০ মিলি/ঘণ্টা"],
            correct: 0,
            marks: 1
        },
        {
            id: 137,
            question: "If a nurse works 8 hours a day for 5 days, total hours worked is:",
            question_bn: "যদি একজন নার্স দিনে ৮ ঘণ্টা ৫ দিন কাজ করেন, মোট কাজের ঘণ্টা হল:",
            options: ["40 hours", "35 hours", "45 hours", "48 hours"],
            options_bn: ["৪০ ঘণ্টা", "৩৫ ঘণ্টা", "৪৫ ঘণ্টা", "৪৮ ঘণ্টা"],
            correct: 0,
            marks: 1
        },
        {
            id: 138,
            question: "The LCM of 4, 6, and 8 is:",
            question_bn: "৪, ৬ এবং ৮ এর ল.সা.গু হল:",
            options: ["24", "48", "12", "16"],
            options_bn: ["২৪", "৪৮", "১২", "১৬"],
            correct: 0,
            marks: 1
        },
        {
            id: 139,
            question: "The HCF of 12, 18, and 24 is:",
            question_bn: "১২, ১৮ এবং ২৪ এর গ.সা.গু হল:",
            options: ["6", "12", "3", "4"],
            options_bn: ["৬", "১২", "৩", "৪"],
            correct: 0,
            marks: 1
        },
        {
            id: 140,
            question: "If 5 nurses can complete a task in 10 days, how many days will 10 nurses take?",
            question_bn: "যদি ৫ জন নার্স ১০ দিনে একটি কাজ সম্পূর্ণ করতে পারে, ১০ জন নার্স কত দিনে করবে?",
            options: ["5 days", "10 days", "15 days", "20 days"],
            options_bn: ["৫ দিন", "১০ দিন", "১৫ দিন", "২০ দিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 141,
            question: "The simple interest on Rs. 1000 at 5% for 2 years is:",
            question_bn: "১০০০ টাকার ৫% হারে ২ বছরের সরল সুদ হল:",
            options: ["Rs. 100", "Rs. 50", "Rs. 150", "Rs. 200"],
            options_bn: ["১০০ টাকা", "৫০ টাকা", "১৫০ টাকা", "২০০ টাকা"],
            correct: 0,
            marks: 1
        },
        {
            id: 142,
            question: "A train travels 120 km in 2 hours. Its speed is:",
            question_bn: "একটি ট্রেন ২ ঘণ্টায় ১২০ কিমি যায়। এর গতি হল:",
            options: ["60 km/hr", "55 km/hr", "65 km/hr", "70 km/hr"],
            options_bn: ["৬০ কিমি/ঘণ্টা", "৫৫ কিমি/ঘণ্টা", "৬৫ কিমি/ঘণ্টা", "৭০ কিমি/ঘণ্টা"],
            correct: 0,
            marks: 1
        },
        {
            id: 143,
            question: "If the ratio of boys to girls is 3:2 and there are 30 boys, how many girls are there?",
            question_bn: "যদি ছেলে ও মেয়ের অনুপাত ৩:২ এবং ছেলে ৩০ জন, মেয়ে কত জন?",
            options: ["20", "15", "25", "18"],
            options_bn: ["২০", "১৫", "২৫", "১৮"],
            correct: 0,
            marks: 1
        },
        {
            id: 144,
            question: "What is the next number in the series: 2, 4, 8, 16, ?",
            question_bn: "সিরিজে পরবর্তী সংখ্যা কত: ২, ৪, ৮, ১৬, ?",
            options: ["32", "24", "20", "18"],
            options_bn: ["৩২", "২৪", "২০", "১৮"],
            correct: 0,
            marks: 1
        },
        {
            id: 145,
            question: "Find the missing number: 5, 10, ?, 20, 25",
            question_bn: "অনুপস্থিত সংখ্যা খুঁজুন: ৫, ১০, ?, ২০, ২৫",
            options: ["15", "12", "18", "14"],
            options_bn: ["১৫", "১২", "১৮", "১৪"],
            correct: 0,
            marks: 1
        },
        {
            id: 146,
            question: "If BOOK is written as DQQM, then NURSE is written as:",
            question_bn: "যদি BOOK লেখা হয় DQQM, তাহলে NURSE লেখা হবে:",
            options: ["PWTUG", "NVSTF", "OVSFT", "QXVUH"],
            options_bn: ["PWTUG", "NVSTF", "OVSFT", "QXVUH"],
            correct: 0,
            marks: 1
        },
        {
            id: 147,
            question: "Pointing to a photograph, a woman says 'He is my father's only daughter's son'. How is the boy related to the woman?",
            question_bn: "একটি ছবির দিকে দেখিয়ে একজন মহিলা বলেন 'সে আমার বাবার একমাত্র মেয়ের ছেলে'। ছেলেটি মহিলার কে?",
            options: ["Son", "Nephew", "Brother", "Cousin"],
            options_bn: ["ছেলে", "ভাইপো", "ভাই", "কাজিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 148,
            question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
            question_bn: "A হল B-এর বোন। C হল B-এর মা। D হল C-এর বাবা। E হল D-এর মা। A, D-এর কে?",
            options: ["Granddaughter", "Daughter", "Grandmother", "Sister"],
            options_bn: ["নাতনি", "মেয়ে", "ঠাকুমা", "বোন"],
            correct: 0,
            marks: 1
        },
        {
            id: 149,
            question: "Looking at a portrait, a man says 'This man's father is my father's son, but I have no siblings.' Who is in the portrait?",
            question_bn: "একটি প্রতিকৃতির দিকে তাকিয়ে একজন পুরুষ বলেন 'এই লোকটির বাবা আমার বাবার ছেলে, কিন্তু আমার কোন ভাইবোন নেই।' প্রতিকৃতিতে কে?",
            options: ["His son", "His father", "Himself", "His brother"],
            options_bn: ["তার ছেলে", "তার বাবা", "তিনি নিজে", "তার ভাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 150,
            question: "In a certain code, 'PALE' is written as 'AELP'. How is 'LIFE' written in that code?",
            question_bn: "একটি নির্দিষ্ট কোডে, 'PALE' লেখা হয় 'AELP'। সেই কোডে 'LIFE' কীভাবে লেখা হয়?",
            options: ["EFIL", "LEFI", "IFLE", "FILE"],
            options_bn: ["EFIL", "LEFI", "IFLE", "FILE"],
            correct: 0,
            marks: 1
        },
        {
            id: 151,
            question: "If South-East becomes North, then what does North-East become?",
            question_bn: "যদি দক্ষিণ-পূর্ব উত্তর হয়ে যায়, তাহলে উত্তর-পূর্ব কী হবে?",
            options: ["South-West", "North-West", "South-East", "West"],
            options_bn: ["দক্ষিণ-পশ্চিম", "উত্তর-পশ্চিম", "দক্ষিণ-পূর্ব", "পশ্চিম"],
            correct: 0,
            marks: 1
        },
        {
            id: 152,
            question: "If a person walks 5 km East, then turns right and walks 3 km, which direction is he facing now?",
            question_bn: "যদি একজন ব্যক্তি ৫ কিমি পূর্বে হাঁটেন, তারপর ডানদিকে ঘুরে ৩ কিমি হাঁটেন, সে এখন কোন দিকে মুখ করে আছে?",
            options: ["South", "North", "East", "West"],
            options_bn: ["দক্ষিণ", "উত্তর", "পূর্ব", "পশ্চিম"],
            correct: 0,
            marks: 1
        },
        {
            id: 153,
            question: "A doctor prescribes 500mg of medicine to be taken 4 times daily. The total daily dose is:",
            question_bn: "একজন ডাক্তার দিনে ৪ বার ৫০০ মিগ্রা ওষুধ খেতে বলেন। মোট দৈনিক ডোজ হল:",
            options: ["2000 mg", "1500 mg", "2500 mg", "1000 mg"],
            options_bn: ["২০০০ মিগ্রা", "১৫০০ মিগ্রা", "২৫০০ মিগ্রা", "১০০০ মিগ্রা"],
            correct: 0,
            marks: 1
        },
        {
            id: 154,
            question: "A patient's temperature is 101°F. The equivalent in Celsius is approximately:",
            question_bn: "একজন রোগীর তাপমাত্রা ১০১°F। সেলসিয়াসে প্রায় সমতুল্য হল:",
            options: ["38.3°C", "37.0°C", "39.5°C", "40.0°C"],
            options_bn: ["৩৮.৩°C", "৩৭.০°C", "৩৯.৫°C", "৪০.০°C"],
            correct: 0,
            marks: 1
        },
        {
            id: 155,
            question: "If 1 kg = 1000 grams, then 2.5 kg equals:",
            question_bn: "যদি ১ কেজি = ১০০০ গ্রাম, তাহলে ২.৫ কেজি সমান:",
            options: ["2500 grams", "2000 grams", "3000 grams", "1500 grams"],
            options_bn: ["২৫০০ গ্রাম", "২০০০ গ্রাম", "৩০০০ গ্রাম", "১৫০০ গ্রাম"],
            correct: 0,
            marks: 1
        },
        {
            id: 156,
            question: "A bottle contains 200 mL of syrup. If 25 mL is given at each dose, how many doses can be given?",
            question_bn: "একটি বোতলে ২০০ মিলি সিরাপ আছে। যদি প্রতিটি ডোজে ২৫ মিলি দেওয়া হয়, কতটি ডোজ দেওয়া যাবে?",
            options: ["8 doses", "6 doses", "10 doses", "5 doses"],
            options_bn: ["৮টি ডোজ", "৬টি ডোজ", "১০টি ডোজ", "৫টি ডোজ"],
            correct: 0,
            marks: 1
        },
        {
            id: 157,
            question: "If 12 nurses can complete a work in 15 days, how many nurses are needed to complete it in 10 days?",
            question_bn: "যদি ১২ জন নার্স ১৫ দিনে একটি কাজ সম্পূর্ণ করতে পারে, ১০ দিনে কত জন নার্স প্রয়োজন?",
            options: ["18", "15", "20", "16"],
            options_bn: ["১৮", "১৫", "২০", "১৬"],
            correct: 0,
            marks: 1
        },
        {
            id: 158,
            question: "The profit percentage when an item is bought for Rs. 80 and sold for Rs. 100 is:",
            question_bn: "যখন একটি জিনিস ৮০ টাকায় কেনা হয় এবং ১০০ টাকায় বিক্রি হয়, লাভের শতাংশ হল:",
            options: ["25%", "20%", "30%", "15%"],
            options_bn: ["২৫%", "২০%", "৩০%", "১৫%"],
            correct: 0,
            marks: 1
        },
        {
            id: 159,
            question: "What is 3/4 of 240?",
            question_bn: "২৪০ এর ৩/৪ কত?",
            options: ["180", "160", "200", "120"],
            options_bn: ["১৮০", "১৬০", "২০০", "১২০"],
            correct: 0,
            marks: 1
        },
        {
            id: 160,
            question: "The square root of 144 is:",
            question_bn: "১৪৪ এর বর্গমূল হল:",
            options: ["12", "14", "11", "13"],
            options_bn: ["১২", "১৪", "১১", "১৩"],
            correct: 0,
            marks: 1
        },
        {
            id: 161,
            question: "The cube of 5 is:",
            question_bn: "৫ এর ঘন হল:",
            options: ["125", "25", "75", "150"],
            options_bn: ["১২৫", "২৫", "৭৫", "১৫০"],
            correct: 0,
            marks: 1
        },
        {
            id: 162,
            question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
            question_bn: "একটি ঘড়িতে ৩:১৫ দেখাচ্ছে। ঘণ্টা এবং মিনিটের কাঁটার মধ্যে কোণ কত?",
            options: ["7.5°", "0°", "15°", "30°"],
            options_bn: ["৭.৫°", "০°", "১৫°", "৩০°"],
            correct: 0,
            marks: 1
        },
        {
            id: 163,
            question: "If today is Monday, what day will it be after 100 days?",
            question_bn: "যদি আজ সোমবার হয়, ১০০ দিন পরে কোন দিন হবে?",
            options: ["Wednesday", "Tuesday", "Thursday", "Friday"],
            options_bn: ["বুধবার", "মঙ্গলবার", "বৃহস্পতিবার", "শুক্রবার"],
            correct: 0,
            marks: 1
        },
        {
            id: 164,
            question: "A patient receives an infusion at 60 mL/hr. How much will be infused in 5 hours?",
            question_bn: "একজন রোগী ৬০ মিলি/ঘণ্টায় ইনফিউশন পান। ৫ ঘণ্টায় কতটা ইনফিউজ হবে?",
            options: ["300 mL", "250 mL", "350 mL", "400 mL"],
            options_bn: ["৩০০ মিলি", "২৫০ মিলি", "৩৫০ মিলি", "৪০০ মিলি"],
            correct: 0,
            marks: 1
        },
        {
            id: 165,
            question: "Which number is a prime number?",
            question_bn: "কোন সংখ্যাটি মৌলিক সংখ্যা?",
            options: ["17", "15", "21", "27"],
            options_bn: ["১৭", "১৫", "২১", "২৭"],
            correct: 0,
            marks: 1
        },
        {
            id: 166,
            question: "The sum of angles in a triangle is:",
            question_bn: "একটি ত্রিভুজের কোণগুলির যোগফল হল:",
            options: ["180°", "90°", "360°", "270°"],
            options_bn: ["১৮০°", "৯০°", "৩৬০°", "২৭০°"],
            correct: 0,
            marks: 1
        },
        {
            id: 167,
            question: "If X = 5, then 3X + 7 = ?",
            question_bn: "যদি X = ৫, তাহলে 3X + 7 = ?",
            options: ["22", "15", "20", "25"],
            options_bn: ["২২", "১৫", "২০", "২৫"],
            correct: 0,
            marks: 1
        },
        {
            id: 168,
            question: "The value of 2³ × 3² is:",
            question_bn: "2³ × 3² এর মান হল:",
            options: ["72", "36", "54", "48"],
            options_bn: ["৭২", "৩৬", "৫৪", "৪৮"],
            correct: 0,
            marks: 1
        },
        {
            id: 169,
            question: "Complete the pattern: Z, X, V, T, ?",
            question_bn: "প্যাটার্নটি সম্পূর্ণ করুন: Z, X, V, T, ?",
            options: ["R", "S", "Q", "P"],
            options_bn: ["R", "S", "Q", "P"],
            correct: 0,
            marks: 1
        },
        {
            id: 170,
            question: "Find the odd one out: 8, 27, 64, 100, 125",
            question_bn: "বেমানানটি খুঁজুন: ৮, ২৭, ৬৪, ১০০, ১২৫",
            options: ["100", "8", "27", "64"],
            options_bn: ["১০০", "৮", "২৭", "৬৪"],
            correct: 0,
            marks: 1
        },
        {
            id: 171,
            question: "A medicine is to be diluted in ratio 1:4. If 20 mL of medicine is taken, how much diluent is needed?",
            question_bn: "একটি ওষুধ ১:৪ অনুপাতে পাতলা করতে হবে। যদি ২০ মিলি ওষুধ নেওয়া হয়, কতটা তরল প্রয়োজন?",
            options: ["80 mL", "60 mL", "100 mL", "40 mL"],
            options_bn: ["৮০ মিলি", "৬০ মিলি", "১০০ মিলি", "৪০ মিলি"],
            correct: 0,
            marks: 1
        },
        {
            id: 172,
            question: "If the price of an item increases from Rs. 50 to Rs. 60, the percentage increase is:",
            question_bn: "যদি একটি জিনিসের দাম ৫০ টাকা থেকে ৬০ টাকা হয়, শতকরা বৃদ্ধি হল:",
            options: ["20%", "10%", "15%", "25%"],
            options_bn: ["২০%", "১০%", "১৫%", "২৫%"],
            correct: 0,
            marks: 1
        },
        {
            id: 173,
            question: "Statement: All nurses are caregivers. Some caregivers are doctors. Conclusion: Some nurses are doctors.",
            question_bn: "বিবৃতি: সব নার্স যত্নকারী। কিছু যত্নকারী ডাক্তার। উপসংহার: কিছু নার্স ডাক্তার।",
            options: ["Does not follow", "Follows", "Partially follows", "Cannot be determined"],
            options_bn: ["অনুসরণ করে না", "অনুসরণ করে", "আংশিকভাবে অনুসরণ করে", "নির্ধারণ করা যায় না"],
            correct: 0,
            marks: 1
        },
        {
            id: 174,
            question: "Statement: All medicines are drugs. All drugs have side effects. Conclusion: All medicines have side effects.",
            question_bn: "বিবৃতি: সব ওষুধ ড্রাগ। সব ড্রাগের পার্শ্বপ্রতিক্রিয়া আছে। উপসংহার: সব ওষুধের পার্শ্বপ্রতিক্রিয়া আছে।",
            options: ["Follows", "Does not follow", "Partially follows", "Cannot be determined"],
            options_bn: ["অনুসরণ করে", "অনুসরণ করে না", "আংশিকভাবে অনুসরণ করে", "নির্ধারণ করা যায় না"],
            correct: 0,
            marks: 1
        },
        {
            id: 175,
            question: "In how many ways can 3 nurses be selected from 5 nurses?",
            question_bn: "৫ জন নার্স থেকে ৩ জন নার্স কতভাবে নির্বাচন করা যায়?",
            options: ["10", "15", "20", "6"],
            options_bn: ["১০", "১৫", "২০", "৬"],
            correct: 0,
            marks: 1
        },
        {
            id: 176,
            question: "A patient's weight decreased from 80 kg to 72 kg. The percentage decrease is:",
            question_bn: "একজন রোগীর ওজন ৮০ কেজি থেকে ৭২ কেজি হলো। শতকরা হ্রাস হল:",
            options: ["10%", "8%", "12%", "15%"],
            options_bn: ["১০%", "৮%", "১২%", "১৫%"],
            correct: 0,
            marks: 1
        },
        {
            id: 177,
            question: "If a tap fills a tank in 6 hours, what fraction of the tank is filled in 2 hours?",
            question_bn: "যদি একটি কল ৬ ঘণ্টায় একটি ট্যাঙ্ক পূর্ণ করে, ২ ঘণ্টায় ট্যাঙ্কের কত অংশ পূর্ণ হবে?",
            options: ["1/3", "1/2", "1/4", "1/6"],
            options_bn: ["১/৩", "১/২", "১/৪", "১/৬"],
            correct: 0,
            marks: 1
        },
        {
            id: 178,
            question: "The decimal equivalent of 3/5 is:",
            question_bn: "৩/৫ এর দশমিক সমতুল্য হল:",
            options: ["0.6", "0.5", "0.7", "0.4"],
            options_bn: ["০.৬", "০.৫", "০.৭", "০.৪"],
            correct: 0,
            marks: 1
        },
        {
            id: 179,
            question: "5 out of 25 students failed. The pass percentage is:",
            question_bn: "২৫ জন ছাত্রের মধ্যে ৫ জন অকৃতকার্য হয়েছে। পাসের শতাংশ হল:",
            options: ["80%", "75%", "85%", "90%"],
            options_bn: ["৮০%", "৭৫%", "৮৫%", "৯০%"],
            correct: 0,
            marks: 1
        },
        {
            id: 180,
            question: "The area of a rectangle with length 8 cm and width 5 cm is:",
            question_bn: "৮ সেমি দৈর্ঘ্য এবং ৫ সেমি প্রস্থের একটি আয়তক্ষেত্রের ক্ষেত্রফল হল:",
            options: ["40 sq cm", "35 sq cm", "45 sq cm", "50 sq cm"],
            options_bn: ["৪০ বর্গ সেমি", "৩৫ বর্গ সেমি", "৪৫ বর্গ সেমি", "৫০ বর্গ সেমি"],
            correct: 0,
            marks: 1
        },
        {
            id: 181,
            question: "The perimeter of a square with side 6 cm is:",
            question_bn: "৬ সেমি বাহুর একটি বর্গক্ষেত্রের পরিধি হল:",
            options: ["24 cm", "18 cm", "30 cm", "36 cm"],
            options_bn: ["২৪ সেমি", "১৮ সেমি", "৩০ সেমি", "৩৬ সেমি"],
            correct: 0,
            marks: 1
        },
        {
            id: 182,
            question: "What is the value of 0.25 × 400?",
            question_bn: "০.২৫ × ৪০০ এর মান কত?",
            options: ["100", "50", "150", "200"],
            options_bn: ["১০০", "৫০", "১৫০", "২০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 183,
            question: "Find the missing term: 7, 14, 28, 56, ?",
            question_bn: "অনুপস্থিত পদ খুঁজুন: ৭, ১৪, ২৮, ৫৬, ?",
            options: ["112", "84", "98", "70"],
            options_bn: ["১১২", "৮৪", "৯৮", "৭০"],
            correct: 0,
            marks: 1
        },
        {
            id: 184,
            question: "A clock gains 5 minutes every hour. If set correctly at 12 noon, what time will it show at 4 PM?",
            question_bn: "একটি ঘড়ি প্রতি ঘণ্টায় ৫ মিনিট এগিয়ে যায়। যদি দুপুর ১২টায় সঠিক সময় সেট করা হয়, বিকাল ৪টায় কত দেখাবে?",
            options: ["4:20 PM", "4:15 PM", "4:10 PM", "4:25 PM"],
            options_bn: ["বিকাল ৪:২০", "বিকাল ৪:১৫", "বিকাল ৪:১০", "বিকাল ৪:২৫"],
            correct: 0,
            marks: 1
        },
        {
            id: 185,
            question: "In a hospital, 40% patients are male. If there are 120 males, total patients are:",
            question_bn: "একটি হাসপাতালে ৪০% রোগী পুরুষ। যদি ১২০ জন পুরুষ থাকে, মোট রোগী সংখ্যা:",
            options: ["300", "200", "250", "400"],
            options_bn: ["৩০০", "২০০", "২৫০", "৪০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 186,
            question: "If A can do a work in 12 days and B can do the same work in 18 days, in how many days can they complete it together?",
            question_bn: "যদি A একটি কাজ ১২ দিনে করতে পারে এবং B সেই কাজ ১৮ দিনে করতে পারে, একসাথে তারা কত দিনে সম্পূর্ণ করতে পারে?",
            options: ["7.2 days", "6 days", "9 days", "8 days"],
            options_bn: ["৭.২ দিন", "৬ দিন", "৯ দিন", "৮ দিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 187,
            question: "A car travels at 60 km/hr for 2 hours and then at 40 km/hr for 3 hours. The average speed is:",
            question_bn: "একটি গাড়ি ২ ঘণ্টা ৬০ কিমি/ঘণ্টা এবং তারপর ৩ ঘণ্টা ৪০ কিমি/ঘণ্টা বেগে যায়। গড় গতি হল:",
            options: ["48 km/hr", "50 km/hr", "45 km/hr", "52 km/hr"],
            options_bn: ["৪৮ কিমি/ঘণ্টা", "৫০ কিমি/ঘণ্টা", "৪৫ কিমি/ঘণ্টা", "৫২ কিমি/ঘণ্টা"],
            correct: 0,
            marks: 1
        },
        {
            id: 188,
            question: "Simplify: 15 + 3 × 4 - 6 ÷ 2 = ?",
            question_bn: "সরলীকরণ করুন: 15 + 3 × 4 - 6 ÷ 2 = ?",
            options: ["24", "27", "21", "30"],
            options_bn: ["২৪", "২৭", "২১", "৩০"],
            correct: 0,
            marks: 1
        },
        {
            id: 189,
            question: "The smallest 4-digit number is:",
            question_bn: "সবচেয়ে ছোট ৪-অঙ্কের সংখ্যা হল:",
            options: ["1000", "1001", "999", "1010"],
            options_bn: ["১০০০", "১০০১", "৯৯৯", "১০১০"],
            correct: 0,
            marks: 1
        },
        {
            id: 190,
            question: "The largest 3-digit number is:",
            question_bn: "সবচেয়ে বড় ৩-অঙ্কের সংখ্যা হল:",
            options: ["999", "1000", "998", "990"],
            options_bn: ["৯৯৯", "১০০০", "৯৯৮", "৯৯০"],
            correct: 0,
            marks: 1
        },
        {
            id: 191,
            question: "Water is H₂O. How many atoms are there in one molecule of water?",
            question_bn: "জল হল H₂O। জলের একটি অণুতে কতটি পরমাণু আছে?",
            options: ["3", "2", "4", "1"],
            options_bn: ["৩", "২", "৪", "১"],
            correct: 0,
            marks: 1
        },
        {
            id: 192,
            question: "Find the wrong number in series: 2, 5, 10, 17, 26, 37, 50",
            question_bn: "সিরিজে ভুল সংখ্যা খুঁজুন: ২, ৫, ১০, ১৭, ২৬, ৩৭, ৫০",
            options: ["26", "5", "17", "37"],
            options_bn: ["২৬", "৫", "১৭", "৩৭"],
            correct: 0,
            marks: 1
        },
        {
            id: 193,
            question: "A patient is given 2 tablets, each containing 250 mg. Total dosage is:",
            question_bn: "একজন রোগীকে ২টি ট্যাবলেট দেওয়া হয়, প্রতিটিতে ২৫০ মিগ্রা। মোট ডোজ হল:",
            options: ["500 mg", "250 mg", "750 mg", "1000 mg"],
            options_bn: ["৫০০ মিগ্রা", "২৫০ মিগ্রা", "৭৫০ মিগ্রা", "১০০০ মিগ্রা"],
            correct: 0,
            marks: 1
        },
        {
            id: 194,
            question: "30 is what percent of 150?",
            question_bn: "৩০ হল ১৫০ এর কত শতাংশ?",
            options: ["20%", "25%", "15%", "30%"],
            options_bn: ["২০%", "২৫%", "১৫%", "৩০%"],
            correct: 0,
            marks: 1
        },
        {
            id: 195,
            question: "The sum of first 10 natural numbers is:",
            question_bn: "প্রথম ১০টি প্রাকৃতিক সংখ্যার যোগফল হল:",
            options: ["55", "50", "45", "60"],
            options_bn: ["৫৫", "৫০", "৪৫", "৬০"],
            correct: 0,
            marks: 1
        },
        {
            id: 196,
            question: "If the ratio of acid to water is 3:7, how much acid is there in 500 mL solution?",
            question_bn: "যদি এসিড ও জলের অনুপাত ৩:৭ হয়, ৫০০ মিলি দ্রবণে কতটা এসিড আছে?",
            options: ["150 mL", "175 mL", "200 mL", "100 mL"],
            options_bn: ["১৫০ মিলি", "১৭৫ মিলি", "২০০ মিলি", "১০০ মিলি"],
            correct: 0,
            marks: 1
        },
        {
            id: 197,
            question: "A nurse earns Rs. 25000 per month. Her annual salary is:",
            question_bn: "একজন নার্স প্রতি মাসে ২৫০০০ টাকা আয় করেন। তার বার্ষিক বেতন হল:",
            options: ["Rs. 3,00,000", "Rs. 2,50,000", "Rs. 3,50,000", "Rs. 2,00,000"],
            options_bn: ["৩,০০,০০০ টাকা", "২,৫০,০০০ টাকা", "৩,৫০,০০০ টাকা", "২,০০,০০০ টাকা"],
            correct: 0,
            marks: 1
        },
        {
            id: 198,
            question: "How many seconds are there in 2 hours?",
            question_bn: "২ ঘণ্টায় কত সেকেন্ড আছে?",
            options: ["7200", "3600", "5400", "9000"],
            options_bn: ["৭২০০", "৩৬০০", "৫৪০০", "৯০০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 199,
            question: "The supplement of 70° is:",
            question_bn: "৭০° এর সম্পূরক কোণ হল:",
            options: ["110°", "20°", "90°", "70°"],
            options_bn: ["১১০°", "২০°", "৯০°", "৭০°"],
            correct: 0,
            marks: 1
        },
        {
            id: 200,
            question: "The complement of 35° is:",
            question_bn: "৩৫° এর পূরক কোণ হল:",
            options: ["55°", "45°", "65°", "145°"],
            options_bn: ["৫৫°", "৪৫°", "৬৫°", "১৪৫°"],
            correct: 0,
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
