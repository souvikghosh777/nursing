// Questions Database for Staff Nurse Grade-II Exam
// Based on West Bengal Health Recruitment Syllabus 2025
// Bilingual: English and Bengali (বাংলা)

const examQuestions = {
    // SECTION 1: Anatomy and Physiology (50 Questions)
    section1: [
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
            options: ["Aorta", "Pulmonary artery", "Carotid artery", "Femoral artery"],
            options_bn: ["মহাধমনী", "পালমোনারি ধমনী", "ক্যারোটিড ধমনী", "ফিমোরাল ধমনী"],
            correct: 0,
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
            options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
            options_bn: ["ডান অলিন্দ", "বাম অলিন্দ", "ডান নিলয়", "বাম নিলয়"],
            correct: 1,
            marks: 1
        },
        {
            id: 6,
            question: "The normal pH of blood is:",
            question_bn: "রক্তের স্বাভাবিক pH হল:",
            options: ["7.0", "7.35-7.45", "6.8-7.0", "7.5-8.0"],
            options_bn: ["৭.০", "৭.৩৫-৭.৪৫", "৬.৮-৭.০", "৭.৫-৮.০"],
            correct: 1,
            marks: 1
        },
        {
            id: 7,
            question: "How many bones are present in an adult human body?",
            question_bn: "একজন প্রাপ্তবয়স্ক মানুষের দেহে কতটি হাড় থাকে?",
            options: ["206", "208", "210", "200"],
            options_bn: ["২০৬", "২০৮", "২১০", "২০০"],
            correct: 0,
            marks: 1
        },
        {
            id: 8,
            question: "The largest gland in the human body is:",
            question_bn: "মানবদেহের বৃহত্তম গ্রন্থি হল:",
            options: ["Pancreas", "Thyroid", "Liver", "Pituitary"],
            options_bn: ["অগ্ন্যাশয়", "থাইরয়েড", "যকৃত", "পিটুইটারি"],
            correct: 2,
            marks: 1
        },
        {
            id: 9,
            question: "Which vitamin is known as the 'sunshine vitamin'?",
            question_bn: "কোন ভিটামিনকে 'সূর্যালোক ভিটামিন' বলা হয়?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            options_bn: ["ভিটামিন এ", "ভিটামিন বি", "ভিটামিন সি", "ভিটামিন ডি"],
            correct: 3,
            marks: 1
        },
        {
            id: 10,
            question: "The respiratory center is located in:",
            question_bn: "শ্বসন কেন্দ্র অবস্থিত:",
            options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
            options_bn: ["সেরিব্রাম", "সেরিবেলাম", "মেডুলা অবলংগাটা", "হাইপোথ্যালামাস"],
            correct: 2,
            marks: 1
        },
        {
            id: 11,
            question: "The normal body temperature in Fahrenheit is:",
            question_bn: "ফারেনহাইটে স্বাভাবিক শরীরের তাপমাত্রা হল:",
            options: ["96.8°F", "97.8°F", "98.6°F", "99.6°F"],
            options_bn: ["৯৬.৮°F", "৯৭.৮°F", "৯৮.৬°F", "৯৯.৬°F"],
            correct: 2,
            marks: 1
        },
        {
            id: 12,
            question: "Red blood cells are produced in:",
            question_bn: "লাল রক্ত কণিকা উৎপন্ন হয়:",
            options: ["Liver", "Spleen", "Bone marrow", "Kidney"],
            options_bn: ["যকৃত", "প্লীহা", "অস্থিমজ্জা", "কিডনি"],
            correct: 2,
            marks: 1
        },
        {
            id: 13,
            question: "The pacemaker of the heart is:",
            question_bn: "হৃৎপিণ্ডের পেসমেকার হল:",
            options: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
            options_bn: ["AV নোড", "SA নোড", "বান্ডল অফ হিস", "পার্কিনজি ফাইবার"],
            correct: 1,
            marks: 1
        },
        {
            id: 14,
            question: "The hardest substance in the human body is:",
            question_bn: "মানবদেহের সবচেয়ে শক্ত পদার্থ হল:",
            options: ["Bone", "Enamel", "Dentin", "Cartilage"],
            options_bn: ["হাড়", "এনামেল", "ডেন্টিন", "তরুণাস্থি"],
            correct: 1,
            marks: 1
        },
        {
            id: 15,
            question: "Normal platelet count is:",
            question_bn: "স্বাভাবিক প্লেটলেট সংখ্যা হল:",
            options: ["50,000-1,00,000/μL", "1,00,000-1,50,000/μL", "1,50,000-4,50,000/μL", "5,00,000-7,00,000/μL"],
            options_bn: ["৫০,০০০-১,০০,০০০/μL", "১,০০,০০০-১,৫০,০০০/μL", "১,৫০,০০০-৪,৫০,০০০/μL", "৫,০০,০০০-৭,০০,০০০/μL"],
            correct: 2,
            marks: 1
        },
        {
            id: 16,
            question: "The master gland of the endocrine system is:",
            question_bn: "অন্তঃক্ষরা তন্ত্রের প্রধান গ্রন্থি হল:",
            options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
            options_bn: ["থাইরয়েড", "পিটুইটারি", "অ্যাড্রিনাল", "অগ্ন্যাশয়"],
            correct: 1,
            marks: 1
        },
        {
            id: 17,
            question: "Normal respiratory rate in adults is:",
            question_bn: "প্রাপ্তবয়স্কদের স্বাভাবিক শ্বাস-প্রশ্বাসের হার হল:",
            options: ["10-15 breaths/min", "12-20 breaths/min", "20-30 breaths/min", "30-40 breaths/min"],
            options_bn: ["১০-১৫ বার/মিনিট", "১২-২০ বার/মিনিট", "২০-৩০ বার/মিনিট", "৩০-৪০ বার/মিনিট"],
            correct: 1,
            marks: 1
        },
        {
            id: 18,
            question: "The longest bone in the human body is:",
            question_bn: "মানবদেহের দীর্ঘতম হাড় হল:",
            options: ["Tibia", "Fibula", "Femur", "Humerus"],
            options_bn: ["টিবিয়া", "ফিবুলা", "ফিমার", "হিউমারাস"],
            correct: 2,
            marks: 1
        },
        {
            id: 19,
            question: "The valve between the left atrium and left ventricle is:",
            question_bn: "বাম অলিন্দ এবং বাম নিলয়ের মধ্যবর্তী কপাটক হল:",
            options: ["Tricuspid valve", "Bicuspid (Mitral) valve", "Aortic valve", "Pulmonary valve"],
            options_bn: ["ট্রাইকাসপিড কপাটক", "বাইকাসপিড (মাইট্রাল) কপাটক", "অ্যাওর্টিক কপাটক", "পালমোনারি কপাটক"],
            correct: 1,
            marks: 1
        },
        {
            id: 20,
            question: "The normal blood pressure in adults is:",
            question_bn: "প্রাপ্তবয়স্কদের স্বাভাবিক রক্তচাপ হল:",
            options: ["100/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
            options_bn: ["১০০/৬০ mmHg", "১২০/৮০ mmHg", "১৪০/৯০ mmHg", "১৬০/১০০ mmHg"],
            correct: 1,
            marks: 1
        },
        {
            id: 21,
            question: "The smallest bone in the human body is located in:",
            question_bn: "মানবদেহের ক্ষুদ্রতম হাড় অবস্থিত:",
            options: ["Hand", "Foot", "Ear", "Nose"],
            options_bn: ["হাতে", "পায়ে", "কানে", "নাকে"],
            correct: 2,
            marks: 1
        },
        {
            id: 22,
            question: "The lifespan of RBC is approximately:",
            question_bn: "লাল রক্তকণিকার আয়ুষ্কাল প্রায়:",
            options: ["60 days", "90 days", "120 days", "150 days"],
            options_bn: ["৬০ দিন", "৯০ দিন", "১২০ দিন", "১৫০ দিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 23,
            question: "The normal pulse rate in adults is:",
            question_bn: "প্রাপ্তবয়স্কদের স্বাভাবিক নাড়ির স্পন্দন হল:",
            options: ["50-70 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
            options_bn: ["৫০-৭০ bpm", "৬০-১০০ bpm", "১০০-১২০ bpm", "১২০-১৪০ bpm"],
            correct: 1,
            marks: 1
        },
        {
            id: 24,
            question: "Which blood group is known as the universal donor?",
            question_bn: "কোন রক্তের গ্রুপকে সর্বজনীন দাতা বলা হয়?",
            options: ["A+", "B+", "AB+", "O-"],
            options_bn: ["A+", "B+", "AB+", "O-"],
            correct: 3,
            marks: 1
        },
        {
            id: 25,
            question: "The powerhouse of the cell is:",
            question_bn: "কোষের শক্তিঘর হল:",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
            options_bn: ["নিউক্লিয়াস", "মাইটোকন্ড্রিয়া", "রাইবোসোম", "গলজি বডি"],
            correct: 1,
            marks: 1
        },
        {
            id: 26,
            question: "The exchange of gases in the lungs occurs in:",
            question_bn: "ফুসফুসে গ্যাসের বিনিময় ঘটে:",
            options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
            options_bn: ["ব্রঙ্কাইতে", "ব্রঙ্কিওলে", "অ্যালভিওলিতে", "শ্বাসনালীতে"],
            correct: 2,
            marks: 1
        },
        {
            id: 27,
            question: "The hormone responsible for regulating blood sugar is:",
            question_bn: "রক্তে শর্করা নিয়ন্ত্রণের জন্য দায়ী হরমোন হল:",
            options: ["Thyroxine", "Insulin", "Adrenaline", "Growth hormone"],
            options_bn: ["থাইরক্সিন", "ইনসুলিন", "অ্যাড্রিনালিন", "বৃদ্ধি হরমোন"],
            correct: 1,
            marks: 1
        },
        {
            id: 28,
            question: "The normal hemoglobin level in adult males is:",
            question_bn: "প্রাপ্তবয়স্ক পুরুষদের স্বাভাবিক হিমোগ্লোবিনের মাত্রা হল:",
            options: ["10-12 g/dL", "12-14 g/dL", "13-17 g/dL", "17-20 g/dL"],
            options_bn: ["১০-১২ g/dL", "১২-১৪ g/dL", "১৩-১৭ g/dL", "১৭-২০ g/dL"],
            correct: 2,
            marks: 1
        },
        {
            id: 29,
            question: "The largest part of the human brain is:",
            question_bn: "মানব মস্তিষ্কের বৃহত্তম অংশ হল:",
            options: ["Cerebellum", "Cerebrum", "Medulla oblongata", "Pons"],
            options_bn: ["সেরিবেলাম", "সেরিব্রাম", "মেডুলা অবলংগাটা", "পন্স"],
            correct: 1,
            marks: 1
        },
        {
            id: 30,
            question: "The organ that filters blood is:",
            question_bn: "যে অঙ্গ রক্ত ছাঁকে তা হল:",
            options: ["Liver", "Kidney", "Spleen", "Heart"],
            options_bn: ["যকৃত", "কিডনি", "প্লীহা", "হৃৎপিণ্ড"],
            correct: 1,
            marks: 1
        },
        {
            id: 31,
            question: "The total volume of blood in an adult human body is approximately:",
            question_bn: "একজন প্রাপ্তবয়স্ক মানুষের দেহে রক্তের মোট পরিমাণ প্রায়:",
            options: ["3-4 liters", "5-6 liters", "7-8 liters", "9-10 liters"],
            options_bn: ["৩-৪ লিটার", "৫-৬ লিটার", "৭-৮ লিটার", "৯-১০ লিটার"],
            correct: 1,
            marks: 1
        },
        {
            id: 32,
            question: "The sense of smell is perceived by:",
            question_bn: "গন্ধের অনুভূতি অনুভব করা হয়:",
            options: ["Olfactory nerve", "Optic nerve", "Auditory nerve", "Facial nerve"],
            options_bn: ["ঘ্রাণ স্নায়ু", "দর্শন স্নায়ু", "শ্রবণ স্নায়ু", "মুখমণ্ডল স্নায়ু"],
            correct: 0,
            marks: 1
        },
        {
            id: 33,
            question: "The muscle that separates the thoracic cavity from the abdominal cavity is:",
            question_bn: "যে পেশী বক্ষ গহ্বরকে উদর গহ্বর থেকে পৃথক করে তা হল:",
            options: ["Intercostal muscle", "Diaphragm", "Abdominal muscle", "Pectoral muscle"],
            options_bn: ["ইন্টারকোস্টাল পেশী", "ডায়াফ্রাম", "উদরীয় পেশী", "পেক্টোরাল পেশী"],
            correct: 1,
            marks: 1
        },
        {
            id: 34,
            question: "The first part of the small intestine is:",
            question_bn: "ক্ষুদ্রান্ত্রের প্রথম অংশ হল:",
            options: ["Jejunum", "Ileum", "Duodenum", "Cecum"],
            options_bn: ["জেজুনাম", "ইলিয়াম", "ডিউওডেনাম", "সিকাম"],
            correct: 2,
            marks: 1
        },
        {
            id: 35,
            question: "The normal gestation period in humans is:",
            question_bn: "মানুষের স্বাভাবিক গর্ভকাল হল:",
            options: ["36 weeks", "38 weeks", "40 weeks", "42 weeks"],
            options_bn: ["৩৬ সপ্তাহ", "৩৮ সপ্তাহ", "৪০ সপ্তাহ", "৪২ সপ্তাহ"],
            correct: 2,
            marks: 1
        },
        {
            id: 36,
            question: "The nerve that controls hearing is:",
            question_bn: "যে স্নায়ু শ্রবণ নিয়ন্ত্রণ করে তা হল:",
            options: ["Optic nerve", "Olfactory nerve", "Vestibulocochlear nerve", "Vagus nerve"],
            options_bn: ["দর্শন স্নায়ু", "ঘ্রাণ স্নায়ু", "ভেস্টিবুলোকক্লিয়ার স্নায়ু", "ভেগাস স্নায়ু"],
            correct: 2,
            marks: 1
        },
        {
            id: 37,
            question: "The bicuspid valve is also known as:",
            question_bn: "বাইকাসপিড কপাটক আরও পরিচিত:",
            options: ["Tricuspid valve", "Mitral valve", "Aortic valve", "Pulmonary valve"],
            options_bn: ["ট্রাইকাসপিড কপাটক", "মাইট্রাল কপাটক", "অ্যাওর্টিক কপাটক", "পালমোনারি কপাটক"],
            correct: 1,
            marks: 1
        },
        {
            id: 38,
            question: "The normal WBC count is:",
            question_bn: "স্বাভাবিক WBC সংখ্যা হল:",
            options: ["2,000-4,000/μL", "4,000-11,000/μL", "11,000-15,000/μL", "15,000-20,000/μL"],
            options_bn: ["২,০০০-৪,০০০/μL", "৪,০০০-১১,০০০/μL", "১১,০০০-১৫,০০০/μL", "১৫,০০০-২০,০০০/μL"],
            correct: 1,
            marks: 1
        },
        {
            id: 39,
            question: "The color of the skin is determined by:",
            question_bn: "ত্বকের রঙ নির্ধারিত হয়:",
            options: ["Hemoglobin", "Melanin", "Carotene", "Bilirubin"],
            options_bn: ["হিমোগ্লোবিন", "মেলানিন", "ক্যারোটিন", "বিলিরুবিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 40,
            question: "The normal urine output in 24 hours is:",
            question_bn: "২৪ ঘণ্টায় স্বাভাবিক প্রস্রাবের পরিমাণ হল:",
            options: ["500-800 mL", "800-1200 mL", "1200-1500 mL", "1500-2000 mL"],
            options_bn: ["৫০০-৮০০ মিলি", "৮০০-১২০০ মিলি", "১২০০-১৫০০ মিলি", "১৫০০-২০০০ মিলি"],
            correct: 2,
            marks: 1
        },
        {
            id: 41,
            question: "The enzyme that digests protein in the stomach is:",
            question_bn: "পাকস্থলীতে প্রোটিন হজম করে এমন এনজাইম হল:",
            options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
            options_bn: ["অ্যামাইলেজ", "লাইপেজ", "পেপসিন", "ট্রিপসিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 42,
            question: "The window of the eye is:",
            question_bn: "চোখের জানালা হল:",
            options: ["Retina", "Cornea", "Lens", "Iris"],
            options_bn: ["রেটিনা", "কর্নিয়া", "লেন্স", "আইরিস"],
            correct: 1,
            marks: 1
        },
        {
            id: 43,
            question: "The average cardiac output in an adult at rest is:",
            question_bn: "বিশ্রামে একজন প্রাপ্তবয়স্কের গড় হৃদপিণ্ড আউটপুট হল:",
            options: ["3 L/min", "5 L/min", "7 L/min", "9 L/min"],
            options_bn: ["৩ লি/মিনিট", "৫ লি/মিনিট", "৭ লি/মিনিট", "৯ লি/মিনিট"],
            correct: 1,
            marks: 1
        },
        {
            id: 44,
            question: "The thyroid gland is located in:",
            question_bn: "থাইরয়েড গ্রন্থি অবস্থিত:",
            options: ["Chest", "Neck", "Abdomen", "Brain"],
            options_bn: ["বুকে", "ঘাড়ে", "পেটে", "মস্তিষ্কে"],
            correct: 1,
            marks: 1
        },
        {
            id: 45,
            question: "The study of tissues is called:",
            question_bn: "টিস্যুর অধ্যয়নকে বলা হয়:",
            options: ["Anatomy", "Cytology", "Histology", "Pathology"],
            options_bn: ["অ্যানাটমি", "সাইটোলজি", "হিস্টোলজি", "প্যাথলজি"],
            correct: 2,
            marks: 1
        },
        {
            id: 46,
            question: "The hormone secreted by the adrenal medulla is:",
            question_bn: "অ্যাড্রিনাল মেডুলা দ্বারা নিঃসৃত হরমোন হল:",
            options: ["Cortisol", "Aldosterone", "Adrenaline", "Insulin"],
            options_bn: ["কর্টিসল", "অ্যালডোস্টেরন", "অ্যাড্রিনালিন", "ইনসুলিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 47,
            question: "The normal specific gravity of urine is:",
            question_bn: "প্রস্রাবের স্বাভাবিক আপেক্ষিক ঘনত্ব হল:",
            options: ["1.001-1.010", "1.010-1.025", "1.025-1.040", "1.040-1.050"],
            options_bn: ["১.০০১-১.০১০", "১.০১০-১.০২৫", "১.০২৫-১.০৪০", "১.০৪০-১.০৫০"],
            correct: 1,
            marks: 1
        },
        {
            id: 48,
            question: "The main function of platelets is:",
            question_bn: "প্লেটলেটের প্রধান কাজ হল:",
            options: ["Transport oxygen", "Fight infection", "Blood clotting", "Hormone production"],
            options_bn: ["অক্সিজেন পরিবহন", "সংক্রমণের বিরুদ্ধে লড়াই", "রক্ত জমাট বাঁধা", "হরমোন উৎপাদন"],
            correct: 2,
            marks: 1
        },
        {
            id: 49,
            question: "The largest endocrine gland in the body is:",
            question_bn: "দেহের বৃহত্তম অন্তঃক্ষরা গ্রন্থি হল:",
            options: ["Pituitary", "Thyroid", "Adrenal", "Pancreas"],
            options_bn: ["পিটুইটারি", "থাইরয়েড", "অ্যাড্রিনাল", "অগ্ন্যাশয়"],
            correct: 1,
            marks: 1
        },
        {
            id: 50,
            question: "The normal tidal volume of an adult is approximately:",
            question_bn: "একজন প্রাপ্তবয়স্কের স্বাভাবিক টাইডাল ভলিউম প্রায়:",
            options: ["250 mL", "500 mL", "750 mL", "1000 mL"],
            options_bn: ["২৫০ মিলি", "৫০০ মিলি", "৭৫০ মিলি", "১০০০ মিলি"],
            correct: 1,
            marks: 1
        }
    ],

    // Sections 2-12 will be added next
    section2: [
        {
            id: 51,
            question: "Which microorganism is responsible for tuberculosis?",
            question_bn: "কোন অণুজীব যক্ষ্মা রোগের জন্য দায়ী?",
            options: ["Mycobacterium tuberculosis", "Staphylococcus aureus", "Streptococcus pneumoniae", "Escherichia coli"],
            options_bn: ["মাইকোব্যাকটেরিয়াম টিউবারকুলোসিস", "স্ট্যাফাইলোকক্কাস অরিয়াস", "স্ট্রেপ্টোকক্কাস নিউমোনিয়া", "এসচেরিচিয়া কোলাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 52,
            question: "What is the most effective method of sterilization?",
            question_bn: "জীবাণুমুক্তকরণের সবচেয়ে কার্যকর পদ্ধতি কোনটি?",
            options: ["UV radiation", "Boiling", "Autoclaving", "Chemical disinfection"],
            options_bn: ["UV বিকিরণ", "ফুটানো", "অটোক্লেভিং", "রাসায়নিক জীবাণুনাশক"],
            correct: 2,
            marks: 1
        },
        {
            id: 53,
            question: "Which disease is caused by a virus?",
            question_bn: "কোন রোগটি ভাইরাস দ্বারা সৃষ্ট?",
            options: ["Influenza", "Typhoid", "Cholera", "Tuberculosis"],
            options_bn: ["ইনফ্লুয়েঞ্জা", "টাইফয়েড", "কলেরা", "যক্ষ্মা"],
            correct: 0,
            marks: 1
        },
        {
            id: 54,
            question: "What is the standard temperature for autoclaving?",
            question_bn: "অটোক্লেভিং এর জন্য মান তাপমাত্রা কত?",
            options: ["150°C", "100°C", "121°C", "180°C"],
            options_bn: ["১৫০°সে", "১০০°সে", "১২১°সে", "১৮০°সে"],
            correct: 2,
            marks: 1
        },
        {
            id: 55,
            question: "Which bacteria is responsible for cholera?",
            question_bn: "কোন ব্যাকটেরিয়া কলেরার জন্য দায়ী?",
            options: ["Vibrio cholerae", "Salmonella typhi", "Shigella dysenteriae", "E. coli"],
            options_bn: ["ভিব্রিও কলেরি", "সালমোনেলা টাইফি", "শিগেলা ডিসেন্ট্রি", "ই. কোলাই"],
            correct: 0,
            marks: 1
        },
        {
            id: 56,
            question: "What is the primary mode of transmission for hepatitis B?",
            question_bn: "হেপাটাইটিস বি এর প্রধান সংক্রমণ পথ কী?",
            options: ["Water", "Airborne", "Blood and body fluids", "Food"],
            options_bn: ["জল", "বায়ুবাহিত", "রক্ত এবং শরীরের তরল", "খাদ্য"],
            correct: 2,
            marks: 1
        },
        {
            id: 57,
            question: "Which organism causes malaria?",
            question_bn: "কোন জীব ম্যালেরিয়া সৃষ্টি করে?",
            options: ["Protozoa", "Bacteria", "Virus", "Fungus"],
            options_bn: ["প্রোটোজোয়া", "ব্যাকটেরিয়া", "ভাইরাস", "ছত্রাক"],
            correct: 0,
            marks: 1
        },
        {
            id: 58,
            question: "What is the incubation period of chickenpox?",
            question_bn: "চিকেনপক্সের ইনকিউবেশন পিরিয়ড কত?",
            options: ["2-3 days", "7-10 days", "10-21 days", "30 days"],
            options_bn: ["২-৩ দিন", "৭-১০ দিন", "১০-২১ দিন", "৩০ দিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 59,
            question: "Which antiseptic is commonly used for handwashing?",
            question_bn: "হাত ধোয়ার জন্য সাধারণত কোন অ্যান্টিসেপ্টিক ব্যবহার করা হয়?",
            options: ["Chlorhexidine", "Phenol", "Formaldehyde", "Iodine"],
            options_bn: ["ক্লোরহেক্সিডিন", "ফেনল", "ফর্মালডিহাইড", "আয়োডিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 60,
            question: "What is the causative agent of AIDS?",
            question_bn: "এইডস এর কার্যকারক এজেন্ট কী?",
            options: ["HIV", "HBV", "HCV", "HPV"],
            options_bn: ["এইচআইভি", "এইচবিভি", "এইচসিভি", "এইচপিভি"],
            correct: 0,
            marks: 1
        },
        {
            id: 61,
            question: "Which test is used to detect tuberculosis?",
            question_bn: "যক্ষ্মা নির্ণয়ের জন্য কোন পরীক্ষা ব্যবহার করা হয়?",
            options: ["ELISA", "Widal test", "PCR", "Mantoux test"],
            options_bn: ["এলিসা", "উইডাল টেস্ট", "পিসিআর", "ম্যানটক্স টেস্ট"],
            correct: 3,
            marks: 1
        },
        {
            id: 62,
            question: "What is the shape of Vibrio cholerae?",
            question_bn: "ভিব্রিও কলেরির আকৃতি কী?",
            options: ["Comma-shaped", "Spherical", "Rod-shaped", "Spiral"],
            options_bn: ["কমা-আকৃতির", "গোলাকার", "দণ্ডাকার", "সর্পিল"],
            correct: 0,
            marks: 1
        },
        {
            id: 63,
            question: "Which disinfectant is used for water purification?",
            question_bn: "জল পরিশোধনের জন্য কোন জীবাণুনাশক ব্যবহার করা হয়?",
            options: ["Hydrogen peroxide", "Alcohol", "Phenol", "Chlorine"],
            options_bn: ["হাইড্রোজেন পারঅক্সাইড", "অ্যালকোহল", "ফেনল", "ক্লোরিন"],
            correct: 3,
            marks: 1
        },
        {
            id: 64,
            question: "What is the standard time for autoclaving?",
            question_bn: "অটোক্লেভিং এর জন্য মান সময় কত?",
            options: ["30 minutes", "5 minutes", "60 minutes", "15 minutes"],
            options_bn: ["৩০ মিনিট", "৫ মিনিট", "৬০ মিনিট", "১৫ মিনিট"],
            correct: 3,
            marks: 1
        },
        {
            id: 65,
            question: "Which bacteria causes typhoid fever?",
            question_bn: "কোন ব্যাকটেরিয়া টাইফয়েড জ্বর সৃষ্টি করে?",
            options: ["Salmonella typhi", "Vibrio cholerae", "E. coli", "Shigella"],
            options_bn: ["সালমোনেলা টাইফি", "ভিব্রিও কলেরি", "ই. কোলাই", "শিগেলা"],
            correct: 0,
            marks: 1
        },
        {
            id: 66,
            question: "What is the primary reservoir of infection for tetanus?",
            question_bn: "টিটেনাসের সংক্রমণের প্রধান আধার কী?",
            options: ["Humans", "Animals", "Soil", "Water"],
            options_bn: ["মানুষ", "প্রাণী", "মাটি", "জল"],
            correct: 2,
            marks: 1
        },
        {
            id: 67,
            question: "Which microorganism is anaerobic?",
            question_bn: "কোন অণুজীব অ্যানেরোবিক?",
            options: ["Streptococcus", "Mycobacterium", "Clostridium tetani", "E. coli"],
            options_bn: ["স্ট্রেপ্টোকক্কাস", "মাইকোব্যাকটেরিয়াম", "ক্লস্ট্রিডিয়াম টিটানি", "ই. কোলাই"],
            correct: 2,
            marks: 1
        },
        {
            id: 68,
            question: "What is the vector for dengue fever?",
            question_bn: "ডেঙ্গু জ্বরের বাহক কী?",
            options: ["Culex mosquito", "Anopheles mosquito", "Aedes mosquito", "Housefly"],
            options_bn: ["কিউলেক্স মশা", "অ্যানোফিলিস মশা", "এডিস মশা", "বাড়ির মাছি"],
            correct: 2,
            marks: 1
        },
        {
            id: 69,
            question: "Which infection control practice is most important?",
            question_bn: "কোন সংক্রমণ নিয়ন্ত্রণ অনুশীলনটি সবচেয়ে গুরুত্বপূর্ণ?",
            options: ["Using masks", "Wearing gloves", "Sterilization", "Hand hygiene"],
            options_bn: ["মাস্ক ব্যবহার", "গ্লাভস পরা", "জীবাণুমুক্তকরণ", "হাতের স্বচ্ছতা"],
            correct: 3,
            marks: 1
        },
        {
            id: 70,
            question: "What is the causative organism of diphtheria?",
            question_bn: "ডিপথেরিয়ার কার্যকারক জীব কী?",
            options: ["Corynebacterium diphtheriae", "Streptococcus pyogenes", "Bordetella pertussis", "Haemophilus influenzae"],
            options_bn: ["করিনেব্যাকটেরিয়াম ডিপথেরিয়া", "স্ট্রেপ্টোকক্কাস পাইওজেনস", "বোর্ডেটেলা পারটুসিস", "হিমোফিলাস ইনফ্লুয়েঞ্জা"],
            correct: 0,
            marks: 1
        },
        {
            id: 71,
            question: "Which disease is transmitted by contaminated water?",
            question_bn: "কোন রোগ দূষিত জলের মাধ্যমে ছড়ায়?",
            options: ["Measles", "Chickenpox", "Typhoid", "Tuberculosis"],
            options_bn: ["হাম", "চিকেনপক্স", "টাইফয়েড", "যক্ষ্মা"],
            correct: 2,
            marks: 1
        },
        {
            id: 72,
            question: "What is the ideal concentration of alcohol for disinfection?",
            question_bn: "জীবাণুনাশকের জন্য অ্যালকোহলের আদর্শ ঘনত্ব কত?",
            options: ["90%", "100%", "50%", "70%"],
            options_bn: ["৯০%", "১০০%", "৫০%", "৭০%"],
            correct: 3,
            marks: 1
        },
        {
            id: 73,
            question: "Which fungal infection affects the skin?",
            question_bn: "কোন ছত্রাক সংক্রমণ ত্বককে প্রভাবিত করে?",
            options: ["Aspergillosis", "Candidiasis", "Ringworm", "Histoplasmosis"],
            options_bn: ["অ্যাসপারগিলোসিস", "ক্যান্ডিডিয়াসিস", "দাদ", "হিস্টোপ্লাসমোসিস"],
            correct: 2,
            marks: 1
        },
        {
            id: 74,
            question: "What is the primary mode of transmission for COVID-19?",
            question_bn: "কোভিড-১৯ এর প্রধান সংক্রমণ পথ কী?",
            options: ["Respiratory droplets", "Bloodborne", "Fecal-oral", "Vector-borne"],
            options_bn: ["শ্বাসযন্ত্রের ফোঁটা", "রক্তবাহিত", "মলমূত্র-মুখ", "বাহক-বাহিত"],
            correct: 0,
            marks: 1
        },
        {
            id: 75,
            question: "Which bacteria is gram-positive?",
            question_bn: "কোন ব্যাকটেরিয়া গ্রাম-পজিটিভ?",
            options: ["Vibrio cholerae", "Salmonella", "Staphylococcus aureus", "E. coli"],
            options_bn: ["ভিব্রিও কলেরি", "সালমোনেলা", "স্ট্যাফাইলোকক্কাস অরিয়াস", "ই. কোলাই"],
            correct: 2,
            marks: 1
        },
        {
            id: 76,
            question: "What is the causative agent of whooping cough?",
            question_bn: "হুপিং কাশির কার্যকারক এজেন্ট কী?",
            options: ["Bordetella pertussis", "Mycoplasma pneumoniae", "Haemophilus influenzae", "Streptococcus pneumoniae"],
            options_bn: ["বোর্ডেটেলা পারটুসিস", "মাইকোপ্লাজমা নিউমোনিয়া", "হিমোফিলাস ইনফ্লুয়েঞ্জা", "স্ট্রেপ্টোকক্কাস নিউমোনিয়া"],
            correct: 0,
            marks: 1
        },
        {
            id: 77,
            question: "Which method is used for low-level disinfection?",
            question_bn: "নিম্ন-স্তরের জীবাণুনাশনের জন্য কোন পদ্ধতি ব্যবহার করা হয়?",
            options: ["Alcohol swabbing", "Autoclaving", "Chemical sterilization", "Dry heat"],
            options_bn: ["অ্যালকোহল সোয়াবিং", "অটোক্লেভিং", "রাসায়নিক জীবাণুমুক্তকরণ", "শুষ্ক তাপ"],
            correct: 0,
            marks: 1
        },
        {
            id: 78,
            question: "What is the normal flora of the intestine?",
            question_bn: "অন্ত্রের স্বাভাবিক উদ্ভিদ কী?",
            options: ["Staphylococcus", "E. coli", "Streptococcus", "Clostridium"],
            options_bn: ["স্ট্যাফাইলোকক্কাস", "ই. কোলাই", "স্ট্রেপ্টোকক্কাস", "ক্লস্ট্রিডিয়াম"],
            correct: 1,
            marks: 1
        },
        {
            id: 79,
            question: "Which vaccine prevents poliomyelitis?",
            question_bn: "কোন টিকা পোলিওমাইলাইটিস প্রতিরোধ করে?",
            options: ["BCG", "OPV", "MMR", "DPT"],
            options_bn: ["বিসিজি", "ওপিভি", "এমএমআর", "ডিপিটি"],
            correct: 1,
            marks: 1
        },
        {
            id: 80,
            question: "What is the role of probiotics?",
            question_bn: "প্রোবায়োটিকের ভূমিকা কী?",
            options: ["Kill bacteria", "Promote harmful bacteria", "Promote beneficial bacteria", "Suppress immune system"],
            options_bn: ["ব্যাকটেরিয়া মারা", "ক্ষতিকারক ব্যাকটেরিয়া প্রচার করা", "উপকারী ব্যাকটেরিয়া প্রচার করা", "রোগ প্রতিরোধ ক্ষমতা দমন করা"],
            correct: 2,
            marks: 1
        },
        {
            id: 81,
            question: "Which disease is caused by protozoa?",
            question_bn: "কোন রোগ প্রোটোজোয়া দ্বারা সৃষ্ট?",
            options: ["Malaria", "Tuberculosis", "Cholera", "Typhoid"],
            options_bn: ["ম্যালেরিয়া", "যক্ষ্মা", "কলেরা", "টাইফয়েড"],
            correct: 0,
            marks: 1
        },
        {
            id: 82,
            question: "What is the universal precaution in infection control?",
            question_bn: "সংক্রমণ নিয়ন্ত্রণে সার্বজনীন সতর্কতা কী?",
            options: ["Treat all blood and body fluids as infectious", "Only isolate known infectious patients", "Use antibiotics for all patients", "Avoid all patient contact"],
            options_bn: ["সমস্ত রক্ত এবং শরীরের তরল সংক্রামক হিসাবে বিবেচনা করুন", "শুধুমাত্র পরিচিত সংক্রামক রোগীদের আলাদা করুন", "সমস্ত রোগীদের জন্য অ্যান্টিবায়োটিক ব্যবহার করুন", "সমস্ত রোগী যোগাযোগ এড়িয়ে চলুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 83,
            question: "Which organism causes pneumonia?",
            question_bn: "কোন জীব নিউমোনিয়া সৃষ্টি করে?",
            options: ["Streptococcus pneumoniae", "E. coli", "Salmonella", "Vibrio"],
            options_bn: ["স্ট্রেপ্টোকক্কাস নিউমোনিয়া", "ই. কোলাই", "সালমোনেলা", "ভিব্রিও"],
            correct: 0,
            marks: 1
        },
        {
            id: 84,
            question: "What is the method of sterilizing surgical instruments?",
            question_bn: "শল্য চিকিৎসার যন্ত্রপাতি জীবাণুমুক্ত করার পদ্ধতি কী?",
            options: ["Boiling", "Autoclaving", "Alcohol soaking", "UV light"],
            options_bn: ["ফুটানো", "অটোক্লেভিং", "অ্যালকোহল ভিজানো", "ইউভি আলো"],
            correct: 1,
            marks: 1
        },
        {
            id: 85,
            question: "Which parasitic infection is transmitted by mosquito?",
            question_bn: "কোন পরজীবী সংক্রমণ মশার মাধ্যমে ছড়ায়?",
            options: ["Ascariasis", "Malaria", "Hookworm", "Tapeworm"],
            options_bn: ["অ্যাসকারিয়াসিস", "ম্যালেরিয়া", "হুকওয়ার্ম", "ফিতাকৃমি"],
            correct: 1,
            marks: 1
        },
        {
            id: 86,
            question: "What is the causative agent of measles?",
            question_bn: "হামের কার্যকারক এজেন্ট কী?",
            options: ["Virus", "Bacteria", "Fungus", "Protozoa"],
            options_bn: ["ভাইরাস", "ব্যাকটেরিয়া", "ছত্রাক", "প্রোটোজোয়া"],
            correct: 0,
            marks: 1
        },
        {
            id: 87,
            question: "Which PPE is essential for airborne precautions?",
            question_bn: "বায়ুবাহিত সতর্কতার জন্য কোন পিপিই অপরিহার্য?",
            options: ["Surgical mask", "N95 respirator", "Gloves only", "Gown only"],
            options_bn: ["সার্জিক্যাল মাস্ক", "এন৯৫ রেসপিরেটর", "শুধুমাত্র গ্লাভস", "শুধুমাত্র গাউন"],
            correct: 1,
            marks: 1
        },
        {
            id: 88,
            question: "What is the primary source of hospital-acquired infections?",
            question_bn: "হাসপাতাল-অধিগ্রহণ সংক্রমণের প্রধান উৎস কী?",
            options: ["Visitors", "Healthcare workers' hands", "Food", "Air conditioning"],
            options_bn: ["দর্শনার্থী", "স্বাস্থ্যসেবা কর্মীদের হাত", "খাদ্য", "এয়ার কন্ডিশনিং"],
            correct: 1,
            marks: 1
        },
        {
            id: 89,
            question: "Which organism causes food poisoning?",
            question_bn: "কোন জীব খাদ্য বিষক্রিয়া সৃষ্টি করে?",
            options: ["Staphylococcus aureus", "Mycobacterium", "HIV", "Hepatitis B"],
            options_bn: ["স্ট্যাফাইলোকক্কাস অরিয়াস", "মাইকোব্যাকটেরিয়াম", "এইচআইভি", "হেপাটাইটিস বি"],
            correct: 0,
            marks: 1
        },
        {
            id: 90,
            question: "What is the duration of hand washing recommended by WHO?",
            question_bn: "WHO দ্বারা সুপারিশকৃত হাত ধোয়ার সময়কাল কত?",
            options: ["40-60 seconds", "10 seconds", "20 seconds", "2 minutes"],
            options_bn: ["৪০-৬০ সেকেন্ড", "১০ সেকেন্ড", "২০ সেকেন্ড", "২ মিনিট"],
            correct: 0,
            marks: 1
        }
    ],
    section3: [
        {
            id: 91,
            question: "Which vitamin is essential for blood clotting?",
            question_bn: "রক্ত জমাট বাঁধার জন্য কোন ভিটামিন অপরিহার্য?",
            options: ["Vitamin C", "Vitamin K", "Vitamin A", "Vitamin D"],
            options_bn: ["ভিটামিন সি", "ভিটামিন কে", "ভিটামিন এ", "ভিটামিন ডি"],
            correct: 1,
            marks: 1
        },
        {
            id: 92,
            question: "What is the primary source of vitamin D?",
            question_bn: "ভিটামিন ডি-এর প্রাথমিক উৎস কী?",
            options: ["Vegetables", "Milk", "Meat", "Sunlight"],
            options_bn: ["শাকসবজি", "দুধ", "মাংস", "সূর্যালোক"],
            correct: 3,
            marks: 1
        },
        {
            id: 93,
            question: "Which mineral is important for hemoglobin formation?",
            question_bn: "হিমোগ্লোবিন গঠনের জন্য কোন খনিজ গুরুত্বপূর্ণ?",
            options: ["Potassium", "Calcium", "Iron", "Sodium"],
            options_bn: ["পটাসিয়াম", "ক্যালসিয়াম", "আয়রন", "সোডিয়াম"],
            correct: 2,
            marks: 1
        },
        {
            id: 94,
            question: "What is the deficiency disease of vitamin C?",
            question_bn: "ভিটামিন সি-এর অভাবজনিত রোগ কী?",
            options: ["Beriberi", "Scurvy", "Rickets", "Pellagra"],
            options_bn: ["বেরিবেরি", "স্কার্ভি", "রিকেটস", "পেলাগ্রা"],
            correct: 1,
            marks: 1
        },
        {
            id: 95,
            question: "Which nutrient provides the most energy per gram?",
            question_bn: "কোন পুষ্টি উপাদান প্রতি গ্রামে সবচেয়ে বেশি শক্তি প্রদান করে?",
            options: ["Fat", "Carbohydrate", "Protein", "Fiber"],
            options_bn: ["চর্বি", "কার্বোহাইড্রেট", "প্রোটিন", "ফাইবার"],
            correct: 0,
            marks: 1
        },
        {
            id: 96,
            question: "What is the recommended daily water intake for adults?",
            question_bn: "প্রাপ্তবয়স্কদের জন্য সুপারিশকৃত দৈনিক জল গ্রহণ কত?",
            options: ["5 liters", "1 liter", "2-3 liters", "500 ml"],
            options_bn: ["৫ লিটার", "১ লিটার", "২-৩ লিটার", "৫০০ মিলি"],
            correct: 2,
            marks: 1
        },
        {
            id: 97,
            question: "Which disease is caused by protein deficiency?",
            question_bn: "প্রোটিনের অভাবে কোন রোগ হয়?",
            options: ["Anemia", "Kwashiorkor", "Scurvy", "Goiter"],
            options_bn: ["রক্তাল্পতা", "কোয়াশিওরকর", "স্কার্ভি", "গলগণ্ড"],
            correct: 1,
            marks: 1
        },
        {
            id: 98,
            question: "What is the primary function of calcium?",
            question_bn: "ক্যালসিয়ামের প্রাথমিক কাজ কী?",
            options: ["Oxygen transport", "Blood clotting", "Bone and teeth formation", "Energy production"],
            options_bn: ["অক্সিজেন পরিবহন", "রক্ত জমাট বাঁধা", "হাড় এবং দাঁত গঠন", "শক্তি উৎপাদন"],
            correct: 2,
            marks: 1
        },
        {
            id: 99,
            question: "Which vitamin is water-soluble?",
            question_bn: "কোন ভিটামিন জলে দ্রবণীয়?",
            options: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin E"],
            options_bn: ["ভিটামিন সি", "ভিটামিন এ", "ভিটামিন ডি", "ভিটামিন ই"],
            correct: 0,
            marks: 1
        },
        {
            id: 100,
            question: "What is the deficiency disease of iodine?",
            question_bn: "আয়োডিনের অভাবজনিত রোগ কী?",
            options: ["Scurvy", "Anemia", "Goiter", "Rickets"],
            options_bn: ["স্কার্ভি", "রক্তাল্পতা", "গলগণ্ড", "রিকেটস"],
            correct: 2,
            marks: 1
        },
        {
            id: 101,
            question: "Which food is rich in vitamin A?",
            question_bn: "কোন খাদ্য ভিটামিন এ-তে সমৃদ্ধ?",
            options: ["Carrot", "Rice", "Bread", "Sugar"],
            options_bn: ["গাজর", "ভাত", "রুটি", "চিনি"],
            correct: 0,
            marks: 1
        },
        {
            id: 102,
            question: "What is the normal BMI range for adults?",
            question_bn: "প্রাপ্তবয়স্কদের জন্য স্বাভাবিক BMI পরিসীমা কত?",
            options: ["30-35", "25-30", "18.5-24.9", "15-18.5"],
            options_bn: ["৩০-৩৫", "২৫-৩০", "১৮.৫-২৪.৯", "১৫-১৮.৫"],
            correct: 2,
            marks: 1
        },
        {
            id: 103,
            question: "Which mineral is essential for thyroid function?",
            question_bn: "থাইরয়েড কার্যক্রমের জন্য কোন খনিজ অপরিহার্য?",
            options: ["Iodine", "Iron", "Calcium", "Zinc"],
            options_bn: ["আয়োডিন", "আয়রন", "ক্যালসিয়াম", "জিঙ্ক"],
            correct: 0,
            marks: 1
        },
        {
            id: 104,
            question: "What is marasmus?",
            question_bn: "মারাসমাস কী?",
            options: ["Vitamin deficiency", "Protein deficiency", "Calorie deficiency", "Mineral deficiency"],
            options_bn: ["ভিটামিনের অভাব", "প্রোটিনের অভাব", "ক্যালরির অভাব", "খনিজের অভাব"],
            correct: 2,
            marks: 1
        },
        {
            id: 105,
            question: "Which vitamin prevents night blindness?",
            question_bn: "কোন ভিটামিন রাতকানা রোগ প্রতিরোধ করে?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            options_bn: ["ভিটামিন এ", "ভিটামিন বি", "ভিটামিন সি", "ভিটামিন ডি"],
            correct: 0,
            marks: 1
        },
        {
            id: 106,
            question: "What is the main component of carbohydrates?",
            question_bn: "কার্বোহাইড্রেটের মূল উপাদান কী?",
            options: ["Sugars", "Amino acids", "Fatty acids", "Minerals"],
            options_bn: ["শর্করা", "অ্যামিনো অ্যাসিড", "ফ্যাটি অ্যাসিড", "খনিজ"],
            correct: 0,
            marks: 1
        },
        {
            id: 107,
            question: "Which vitamin is synthesized by gut bacteria?",
            question_bn: "কোন ভিটামিন অন্ত্রের ব্যাকটেরিয়া দ্বারা সংশ্লেষিত হয়?",
            options: ["Vitamin E", "Vitamin A", "Vitamin K", "Vitamin C"],
            options_bn: ["ভিটামিন ই", "ভিটামিন এ", "ভিটামিন কে", "ভিটামিন সি"],
            correct: 2,
            marks: 1
        },
        {
            id: 108,
            question: "What is the deficiency disease of vitamin B1?",
            question_bn: "ভিটামিন বি১-এর অভাবজনিত রোগ কী?",
            options: ["Rickets", "Scurvy", "Beriberi", "Pellagra"],
            options_bn: ["রিকেটস", "স্কার্ভি", "বেরিবেরি", "পেলাগ্রা"],
            correct: 2,
            marks: 1
        },
        {
            id: 109,
            question: "Which nutrient is the primary source of dietary fiber?",
            question_bn: "কোন পুষ্টি উপাদান খাদ্য তন্তুর প্রধান উৎস?",
            options: ["Meat", "Fruits and vegetables", "Dairy", "Oil"],
            options_bn: ["মাংস", "ফল এবং শাকসবজি", "দুগ্ধজাত", "তেল"],
            correct: 1,
            marks: 1
        },
        {
            id: 110,
            question: "What is the recommended diet for a diabetic patient?",
            question_bn: "ডায়াবেটিক রোগীর জন্য সুপারিশকৃত খাদ্য কী?",
            options: ["Low protein", "High sugar", "High fat", "Low carbohydrate"],
            options_bn: ["কম প্রোটিন", "উচ্চ চিনি", "উচ্চ চর্বি", "কম কার্বোহাইড্রেট"],
            correct: 3,
            marks: 1
        },
        {
            id: 111,
            question: "Which food is a complete protein source?",
            question_bn: "কোন খাদ্য সম্পূর্ণ প্রোটিন উৎস?",
            options: ["Bread", "Rice", "Egg", "Potato"],
            options_bn: ["রুটি", "ভাত", "ডিম", "আলু"],
            correct: 2,
            marks: 1
        },
        {
            id: 112,
            question: "What is the function of vitamin E?",
            question_bn: "ভিটামিন ই-এর কাজ কী?",
            options: ["Blood clotting", "Antioxidant", "Bone formation", "Energy production"],
            options_bn: ["রক্ত জমাট বাঁধা", "অ্যান্টিঅক্সিডেন্ট", "হাড় গঠন", "শক্তি উৎপাদন"],
            correct: 1,
            marks: 1
        },
        {
            id: 113,
            question: "Which mineral prevents anemia?",
            question_bn: "কোন খনিজ রক্তাল্পতা প্রতিরোধ করে?",
            options: ["Calcium", "Iron", "Sodium", "Magnesium"],
            options_bn: ["ক্যালসিয়াম", "আয়রন", "সোডিয়াম", "ম্যাগনেসিয়াম"],
            correct: 1,
            marks: 1
        },
        {
            id: 114,
            question: "What is the primary function of protein?",
            question_bn: "প্রোটিনের প্রাথমিক কাজ কী?",
            options: ["Energy production", "Growth and repair", "Insulation", "Vitamin storage"],
            options_bn: ["শক্তি উৎপাদন", "বৃদ্ধি এবং মেরামত", "নিরোধক", "ভিটামিন সংরক্ষণ"],
            correct: 1,
            marks: 1
        },
        {
            id: 115,
            question: "Which vitamin is fat-soluble?",
            question_bn: "কোন ভিটামিন চর্বিতে দ্রবণীয়?",
            options: ["Vitamin D", "Vitamin C", "Vitamin B", "Vitamin B12"],
            options_bn: ["ভিটামিন ডি", "ভিটামিন সি", "ভিটামিন বি", "ভিটামিন বি১২"],
            correct: 0,
            marks: 1
        },
        {
            id: 116,
            question: "What is the caloric value of 1 gram of carbohydrate?",
            question_bn: "১ গ্রাম কার্বোহাইড্রেটের ক্যালরিক মান কত?",
            options: ["4 kcal", "7 kcal", "9 kcal", "2 kcal"],
            options_bn: ["৪ কিলোক্যালরি", "৭ কিলোক্যালরি", "৯ কিলোক্যালরি", "২ কিলোক্যালরি"],
            correct: 0,
            marks: 1
        },
        {
            id: 117,
            question: "Which food is rich in calcium?",
            question_bn: "কোন খাদ্য ক্যালসিয়ামে সমৃদ্ধ?",
            options: ["Milk", "Apple", "Rice", "Oil"],
            options_bn: ["দুধ", "আপেল", "ভাত", "তেল"],
            correct: 0,
            marks: 1
        },
        {
            id: 118,
            question: "What is the deficiency disease of niacin?",
            question_bn: "নিয়াসিনের অভাবজনিত রোগ কী?",
            options: ["Scurvy", "Pellagra", "Beriberi", "Rickets"],
            options_bn: ["স্কার্ভি", "পেলাগ্রা", "বেরিবেরি", "রিকেটস"],
            correct: 1,
            marks: 1
        },
        {
            id: 119,
            question: "Which nutrient is essential for wound healing?",
            question_bn: "ক্ষত নিরাময়ের জন্য কোন পুষ্টি উপাদান অপরিহার্য?",
            options: ["Carbohydrate", "Protein", "Fat", "Fiber"],
            options_bn: ["কার্বোহাইড্রেট", "প্রোটিন", "চর্বি", "ফাইবার"],
            correct: 1,
            marks: 1
        },
        {
            id: 120,
            question: "What is the therapeutic diet for hypertension?",
            question_bn: "উচ্চ রক্তচাপের জন্য থেরাপিউটিক খাদ্য কী?",
            options: ["High sodium", "Low sodium", "High sugar", "High fat"],
            options_bn: ["উচ্চ সোডিয়াম", "কম সোডিয়াম", "উচ্চ চিনি", "উচ্চ চর্বি"],
            correct: 1,
            marks: 1
        },
        {
            id: 121,
            question: "Which vitamin is known as ascorbic acid?",
            question_bn: "কোন ভিটামিনকে অ্যাসকরবিক অ্যাসিড বলা হয়?",
            options: ["Vitamin C", "Vitamin A", "Vitamin B", "Vitamin D"],
            options_bn: ["ভিটামিন সি", "ভিটামিন এ", "ভিটামিন বি", "ভিটামিন ডি"],
            correct: 0,
            marks: 1
        },
        {
            id: 122,
            question: "What is the primary source of omega-3 fatty acids?",
            question_bn: "ওমেগা-৩ ফ্যাটি অ্যাসিডের প্রাথমিক উৎস কী?",
            options: ["Red meat", "Fish", "Dairy", "Grains"],
            options_bn: ["লাল মাংস", "মাছ", "দুগ্ধজাত", "শস্য"],
            correct: 1,
            marks: 1
        },
        {
            id: 123,
            question: "Which condition is caused by vitamin D deficiency in children?",
            question_bn: "শিশুদের মধ্যে ভিটামিন ডি-এর অভাবে কোন অবস্থা সৃষ্টি হয়?",
            options: ["Scurvy", "Rickets", "Beriberi", "Pellagra"],
            options_bn: ["স্কার্ভি", "রিকেটস", "বেরিবেরি", "পেলাগ্রা"],
            correct: 1,
            marks: 1
        },
        {
            id: 124,
            question: "What is the role of folic acid in pregnancy?",
            question_bn: "গর্ভাবস্থায় ফলিক অ্যাসিডের ভূমিকা কী?",
            options: ["Prevents neural tube defects", "Increases blood sugar", "Reduces appetite", "Causes weight gain"],
            options_bn: ["নিউরাল টিউব ত্রুটি প্রতিরোধ করে", "রক্তে শর্করা বৃদ্ধি করে", "ক্ষুধা হ্রাস করে", "ওজন বৃদ্ধি ঘটায়"],
            correct: 0,
            marks: 1
        },
        {
            id: 125,
            question: "Which food group provides the most vitamins and minerals?",
            question_bn: "কোন খাদ্য গোষ্ঠী সবচেয়ে বেশি ভিটামিন এবং খনিজ সরবরাহ করে?",
            options: ["Grains", "Fruits and vegetables", "Meat", "Fats and oils"],
            options_bn: ["শস্য", "ফল এবং শাকসবজি", "মাংস", "চর্বি এবং তেল"],
            correct: 1,
            marks: 1
        }
    ],
    section4: [
        {
            id: 126,
            question: "What is the first step in administering first aid?",
            question_bn: "প্রাথমিক চিকিৎসা প্রদানের প্রথম পদক্ষেপ কী?",
            options: ["Call for help", "Ensure scene safety", "Start CPR", "Apply bandage"],
            options_bn: ["সাহায্যের জন্য ডাকুন", "দৃশ্যের নিরাপত্তা সুনিশ্চিত করুন", "সিপিআর শুরু করুন", "ব্যান্ডেজ প্রয়োগ করুন"],
            correct: 1,
            marks: 1
        },
        {
            id: 127,
            question: "What is the normal compression-to-ventilation ratio for adult CPR?",
            question_bn: "প্রাপ্তবয়স্ক সিপিআর-এর জন্য স্বাভাবিক কম্প্রেশন-টু-ভেন্টিলেশন অনুপাত কত?",
            options: ["15:2", "30:2", "20:2", "10:1"],
            options_bn: ["১৫:২", "৩০:২", "২০:২", "১০:১"],
            correct: 1,
            marks: 1
        },
        {
            id: 128,
            question: "Which position is recommended for an unconscious patient with breathing?",
            question_bn: "শ্বাসপ্রশ্বাসযুক্ত একজন অচেতন রোগীর জন্য কোন অবস্থান সুপারিশ করা হয়?",
            options: ["Supine position", "Recovery position", "Fowler's position", "Prone position"],
            options_bn: ["সুপাইন অবস্থান", "রিকভারি অবস্থান", "ফাউলার অবস্থান", "প্রোন অবস্থান"],
            correct: 1,
            marks: 1
        },
        {
            id: 129,
            question: "What is the treatment for minor burns?",
            question_bn: "ছোট পোড়ার চিকিৎসা কী?",
            options: ["Cool with running water", "Apply ice directly", "Apply butter", "Apply oil"],
            options_bn: ["প্রবাহিত জল দিয়ে ঠান্ডা করুন", "সরাসরি বরফ প্রয়োগ করুন", "মাখন প্রয়োগ করুন", "তেল প্রয়োগ করুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 130,
            question: "What is the first aid for choking in adults?",
            question_bn: "প্রাপ্তবয়স্কদের শ্বাসরোধের জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Give water", "Heimlich maneuver", "Lay them down", "Pat on back gently"],
            options_bn: ["জল দিন", "হিমলিক ম্যানুভার", "তাদের শুইয়ে দিন", "পিঠে আলতো করে চাপড় দিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 131,
            question: "What is the ABC of first aid?",
            question_bn: "প্রাথমিক চিকিৎসার ABC কী?",
            options: ["Airway, Breathing, Circulation", "Ambulance, Bandage, CPR", "Alert, Bleeding, Conscious", "Assess, Bandage, Call"],
            options_bn: ["বায়ুপথ, শ্বাসপ্রশ্বাস, রক্তসংবহন", "অ্যাম্বুলেন্স, ব্যান্ডেজ, সিপিআর", "সতর্ক, রক্তপাত, সচেতন", "মূল্যায়ন, ব্যান্ডেজ, ডাকুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 132,
            question: "What is the treatment for bleeding wounds?",
            question_bn: "রক্তক্ষরণ ক্ষতের চিকিৎসা কী?",
            options: ["Apply tourniquet immediately", "Direct pressure", "Pour water", "Apply ice"],
            options_bn: ["অবিলম্বে টর্নিকেট প্রয়োগ করুন", "সরাসরি চাপ", "জল ঢালুন", "বরফ প্রয়োগ করুন"],
            correct: 1,
            marks: 1
        },
        {
            id: 133,
            question: "What is the first aid for electric shock?",
            question_bn: "বৈদ্যুতিক শক এর জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Touch the person", "Turn off power source", "Pour water", "Move the wire"],
            options_bn: ["ব্যক্তিকে স্পর্শ করুন", "বিদ্যুৎ উৎস বন্ধ করুন", "জল ঢালুন", "তারটি সরান"],
            correct: 1,
            marks: 1
        },
        {
            id: 134,
            question: "What is the treatment for snake bite?",
            question_bn: "সাপে কাটার চিকিৎসা কী?",
            options: ["Keep limb immobilized and below heart level", "Cut and suck venom", "Apply tourniquet tightly", "Apply ice pack"],
            options_bn: ["অঙ্গটি স্থির রাখুন এবং হৃদয়ের স্তরের নিচে", "কেটে বিষ চুষে নিন", "শক্তভাবে টর্নিকেট প্রয়োগ করুন", "আইস প্যাক প্রয়োগ করুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 135,
            question: "What is the sign of fracture?",
            question_bn: "ফ্র্যাকচারের লক্ষণ কী?",
            options: ["Pain and swelling", "Deformity", "Loss of function", "All of the above"],
            options_bn: ["ব্যথা এবং ফোলা", "বিকৃতি", "কার্যক্ষমতা হ্রাস", "উপরের সবগুলো"],
            correct: 3,
            marks: 1
        },
        {
            id: 136,
            question: "What is the first aid for heat stroke?",
            question_bn: "হিট স্ট্রোকের জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Move to cool place and cool body", "Give hot drinks", "Keep in sun", "Give alcohol"],
            options_bn: ["ঠান্ডা জায়গায় নিয়ে গিয়ে শরীর ঠান্ডা করুন", "গরম পানীয় দিন", "রোদে রাখুন", "অ্যালকোহল দিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 137,
            question: "What is the treatment for hypothermia?",
            question_bn: "হাইপোথার্মিয়ার চিকিৎসা কী?",
            options: ["Gradual warming", "Rub skin vigorously", "Give cold water", "Apply ice"],
            options_bn: ["ধীরে ধীরে উষ্ণ করা", "ত্বক জোরে ঘষুন", "ঠান্ডা জল দিন", "বরফ প্রয়োগ করুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 138,
            question: "What is the emergency number in India?",
            question_bn: "ভারতে জরুরী নম্বর কত?",
            options: ["100", "102", "108", "All of the above"],
            options_bn: ["১০০", "১০২", "১০৮", "উপরের সবগুলো"],
            correct: 3,
            marks: 1
        },
        {
            id: 139,
            question: "What is the first aid for sprain?",
            question_bn: "মচকানোর জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["RICE (Rest, Ice, Compression, Elevation)", "Heat application", "Massage vigorously", "Continue activity"],
            options_bn: ["RICE (বিশ্রাম, বরফ, সংকোচন, উত্তোলন)", "তাপ প্রয়োগ", "জোরে ম্যাসাজ করুন", "কার্যকলাপ চালিয়ে যান"],
            correct: 0,
            marks: 1
        },
        {
            id: 140,
            question: "What is the treatment for poisoning?",
            question_bn: "বিষক্রিয়ার চিকিৎসা কী?",
            options: ["Call poison control/medical help", "Induce vomiting always", "Give milk always", "Wait and watch"],
            options_bn: ["পয়জন কন্ট্রোল/চিকিৎসা সহায়তা কল করুন", "সবসময় বমি করান", "সবসময় দুধ দিন", "অপেক্ষা করুন এবং দেখুন"],
            correct: 0,
            marks: 1
        },
        {
            id: 141,
            question: "What is the universal sign of choking?",
            question_bn: "শ্বাসরোধের সার্বজনীন চিহ্ন কী?",
            options: ["Hands on abdomen", "Hands clutching throat", "Pointing to chest", "Lying down"],
            options_bn: ["পেটে হাত", "গলা চেপে ধরা হাত", "বুকের দিকে নির্দেশ", "শুয়ে পড়া"],
            correct: 1,
            marks: 1
        },
        {
            id: 142,
            question: "What is the depth of chest compressions for adults?",
            question_bn: "প্রাপ্তবয়স্কদের জন্য বুকের কম্প্রেশনের গভীরতা কত?",
            options: ["1-2 inches", "2-2.4 inches", "3-4 inches", "4-5 inches"],
            options_bn: ["১-২ ইঞ্চি", "২-২.৪ ইঞ্চি", "৩-৪ ইঞ্চি", "৪-৫ ইঞ্চি"],
            correct: 1,
            marks: 1
        },
        {
            id: 143,
            question: "What is the first aid for nose bleeding?",
            question_bn: "নাক দিয়ে রক্তপাতের জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Tilt head back", "Lean forward and pinch nose", "Lie down flat", "Pack nose with cotton"],
            options_bn: ["মাথা পিছনে কাত করুন", "সামনে ঝুঁকে নাক চিমটি করুন", "সমতল শুয়ে পড়ুন", "তুলো দিয়ে নাক প্যাক করুন"],
            correct: 1,
            marks: 1
        },
        {
            id: 144,
            question: "What is the treatment for eye injury with foreign object?",
            question_bn: "বিদেশী বস্তু সহ চোখের আঘাতের চিকিৎসা কী?",
            options: ["Rub the eye", "Try to remove object", "Cover eye and seek medical help", "Pour water forcefully"],
            options_bn: ["চোখ ঘষুন", "বস্তু অপসারণের চেষ্টা করুন", "চোখ ঢেকে চিকিৎসা সহায়তা নিন", "জোরে জল ঢালুন"],
            correct: 2,
            marks: 1
        },
        {
            id: 145,
            question: "What is the first aid for fainting?",
            question_bn: "অজ্ঞান হওয়ার জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Keep standing", "Lay down and elevate legs", "Give water immediately", "Slap face"],
            options_bn: ["দাঁড়িয়ে রাখুন", "শুইয়ে দিন এবং পা উঁচু করুন", "অবিলম্বে জল দিন", "মুখে চড় দিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 146,
            question: "What is the golden hour in emergency care?",
            question_bn: "জরুরী যত্নে স্বর্ণ ঘণ্টা কী?",
            options: ["First hour after injury", "First 6 hours", "First 24 hours", "First 30 minutes"],
            options_bn: ["আঘাতের পর প্রথম ঘণ্টা", "প্রথম ৬ ঘণ্টা", "প্রথম ২৪ ঘণ্টা", "প্রথম ৩০ মিনিট"],
            correct: 0,
            marks: 1
        },
        {
            id: 147,
            question: "What is the treatment for chemical burns?",
            question_bn: "রাসায়নিক পোড়ার চিকিৎসা কী?",
            options: ["Apply ointment", "Flush with water for 20 minutes", "Apply ice", "Cover with cloth"],
            options_bn: ["মলম প্রয়োগ করুন", "২০ মিনিটের জন্য জল দিয়ে ধুয়ে ফেলুন", "বরফ প্রয়োগ করুন", "কাপড় দিয়ে ঢেকে দিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 148,
            question: "What is the rate of chest compressions per minute?",
            question_bn: "প্রতি মিনিটে বুকের কম্প্রেশনের হার কত?",
            options: ["60-80", "80-100", "100-120", "120-140"],
            options_bn: ["৬০-৮০", "৮০-১০০", "১০০-১২০", "১২০-১৪০"],
            correct: 2,
            marks: 1
        },
        {
            id: 149,
            question: "What is the first aid for seizures?",
            question_bn: "খিঁচুনির জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Restrain the person", "Put something in mouth", "Protect from injury and time the seizure", "Pour water on face"],
            options_bn: ["ব্যক্তিকে সংযত করুন", "মুখে কিছু রাখুন", "আঘাত থেকে রক্ষা করুন এবং খিঁচুনির সময় নোট করুন", "মুখে জল ঢালুন"],
            correct: 2,
            marks: 1
        },
        {
            id: 150,
            question: "What is the treatment for a sucking chest wound?",
            question_bn: "বুকের চোষণ ক্ষতের চিকিৎসা কী?",
            options: ["Leave open", "Apply occlusive dressing", "Pour antiseptic", "Apply pressure bandage"],
            options_bn: ["খোলা রাখুন", "অক্লুসিভ ড্রেসিং প্রয়োগ করুন", "অ্যান্টিসেপ্টিক ঢালুন", "প্রেসার ব্যান্ডেজ প্রয়োগ করুন"],
            correct: 1,
            marks: 1
        },
        {
            id: 151,
            question: "What is the first aid for diabetic emergency (hypoglycemia)?",
            question_bn: "ডায়াবেটিক জরুরী (হাইপোগ্লাইসেমিয়া) এর জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Give insulin", "Give sugar/glucose", "Give water only", "Wait for medical help"],
            options_bn: ["ইনসুলিন দিন", "চিনি/গ্লুকোজ দিন", "শুধু জল দিন", "চিকিৎসা সাহায্যের জন্য অপেক্ষা করুন"],
            correct: 1,
            marks: 1
        },
        {
            id: 152,
            question: "What is the correct position for shock management?",
            question_bn: "শক ম্যানেজমেন্টের জন্য সঠিক অবস্থান কী?",
            options: ["Sitting upright", "Lying flat with legs elevated", "Standing", "Head elevated"],
            options_bn: ["সোজা বসে", "পা উঁচু করে সমতল শুয়ে", "দাঁড়িয়ে", "মাথা উঁচু করে"],
            correct: 1,
            marks: 1
        },
        {
            id: 153,
            question: "What is the first aid for a tooth avulsion?",
            question_bn: "দাঁত উপড়ে ফেলার জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Scrub the tooth clean", "Keep tooth in milk/saline", "Throw away the tooth", "Let it dry"],
            options_bn: ["দাঁত ঘষে পরিষ্কার করুন", "দুধ/স্যালাইনে দাঁত রাখুন", "দাঁত ফেলে দিন", "শুকাতে দিন"],
            correct: 1,
            marks: 1
        },
        {
            id: 154,
            question: "What is anaphylaxis?",
            question_bn: "অ্যানাফিল্যাক্সিস কী?",
            options: ["Mild allergic reaction", "Severe life-threatening allergic reaction", "Food poisoning", "Heart attack"],
            options_bn: ["হালকা এলার্জি প্রতিক্রিয়া", "গুরুতর প্রাণঘাতী এলার্জি প্রতিক্রিয়া", "খাদ্য বিষক্রিয়া", "হার্ট অ্যাটাক"],
            correct: 1,
            marks: 1
        },
        {
            id: 155,
            question: "What is the first aid for severe bleeding that won't stop?",
            question_bn: "গুরুতর রক্তপাত যা থামছে না তার জন্য প্রাথমিক চিকিৎসা কী?",
            options: ["Remove all dressings", "Apply tourniquet as last resort", "Pour alcohol", "Massage the area"],
            options_bn: ["সমস্ত ড্রেসিং সরান", "শেষ উপায় হিসাবে টর্নিকেট প্রয়োগ করুন", "অ্যালকোহল ঢালুন", "এলাকা ম্যাসাজ করুন"],
            correct: 1,
            marks: 1
        }
    ],
    section5: [
        {
            id: 156,
            question: "What is the normal body temperature in Fahrenheit?",
            question_bn: "ফারেনহাইটে স্বাভাবিক শরীরের তাপমাত্রা কত?",
            options: ["96.8°F", "98.6°F", "100.4°F", "102°F"],
            options_bn: ["৯৬.৮°ফা", "৯৮.৬°ফা", "১০০.৪°ফা", "১০২°ফা"],
            correct: 1,
            marks: 1
        },
        {
            id: 157,
            question: "What is the purpose of handwashing in nursing?",
            question_bn: "নার্সিংয়ে হাত ধোয়ার উদ্দেশ্য কী?",
            options: ["To prevent infection transmission", "To look clean", "To follow protocol only", "To smell good"],
            options_bn: ["সংক্রমণ সংক্রমণ প্রতিরোধ করতে", "পরিষ্কার দেখাতে", "শুধুমাত্র প্রোটোকল অনুসরণ করতে", "ভাল গন্ধ পেতে"],
            correct: 0,
            marks: 1
        },
        {
            id: 158,
            question: "What is the Fowler's position?",
            question_bn: "ফাউলার অবস্থান কী?",
            options: ["Lying on side", "Lying flat", "Semi-sitting with head elevated 45-60 degrees", "Lying on stomach"],
            options_bn: ["পাশে শুয়ে", "সমতল শুয়ে", "মাথা ৪৫-৬০ ডিগ্রি উঁচু করে আধা-বসা", "পেটের উপর শুয়ে"],
            correct: 2,
            marks: 1
        },
        {
            id: 159,
            question: "What is the normal respiratory rate for adults?",
            question_bn: "প্রাপ্তবয়স্কদের জন্য স্বাভাবিক শ্বাসপ্রশ্বাসের হার কত?",
            options: ["30-40 breaths/min", "8-10 breaths/min", "25-30 breaths/min", "12-20 breaths/min"],
            options_bn: ["৩০-৪০ শ্বাস/মিনিট", "৮-১০ শ্বাস/মিনিট", "২৫-৩০ শ্বাস/মিনিট", "১২-২০ শ্বাস/মিনিট"],
            correct: 3,
            marks: 1
        },
        {
            id: 160,
            question: "What is the trendelenburg position used for?",
            question_bn: "ট্রেন্ডেলেনবার্গ অবস্থান কীসের জন্য ব্যবহৃত হয়?",
            options: ["Shock management", "Eating", "Sleeping", "Reading"],
            options_bn: ["শক ম্যানেজমেন্ট", "খাওয়া", "ঘুমানো", "পড়া"],
            correct: 0,
            marks: 1
        },
        {
            id: 161,
            question: "What is the purpose of a bed bath?",
            question_bn: "বিছানায় স্নানের উদ্দেশ্য কী?",
            options: ["Time pass", "Exercise", "Hygiene and comfort for bedridden patients", "Decoration"],
            options_bn: ["সময় কাটানো", "ব্যায়াম", "শয্যাশায়ী রোগীদের জন্য স্বচ্ছতা এবং আরাম", "সাজসজ্জা"],
            correct: 2,
            marks: 1
        },
        {
            id: 162,
            question: "What is dorsal recumbent position?",
            question_bn: "ডর্সাল রিকাম্বেন্ট অবস্থান কী?",
            options: ["Lying on back with knees flexed", "Lying on side", "Sitting upright", "Lying face down"],
            options_bn: ["হাঁটু বাঁকা করে পিঠে শুয়ে", "পাশে শুয়ে", "সোজা বসে", "মুখ নিচে শুয়ে"],
            correct: 0,
            marks: 1
        },
        {
            id: 163,
            question: "What is the purpose of turning a bedridden patient?",
            question_bn: "শয্যাশায়ী রোগীকে ঘুরানোর উদ্দেশ্য কী?",
            options: ["Entertainment", "Prevent pressure ulcers", "Punishment", "Make bed"],
            options_bn: ["বিনোদন", "চাপ আলসার প্রতিরোধ", "শাস্তি", "বিছানা তৈরি"],
            correct: 1,
            marks: 1
        },
        {
            id: 164,
            question: "What is the lithotomy position used for?",
            question_bn: "লিথোটমি অবস্থান কীসের জন্য ব্যবহৃত হয়?",
            options: ["Walking", "Eating", "Gynecological examination", "Sleeping"],
            options_bn: ["হাঁটা", "খাওয়া", "গাইনোকোলজিক্যাল পরীক্ষা", "ঘুমানো"],
            correct: 2,
            marks: 1
        },
        {
            id: 165,
            question: "What is the normal pulse rate for adults?",
            question_bn: "প্রাপ্তবয়স্কদের জন্য স্বাভাবিক নাড়ির হার কত?",
            options: ["120-140 bpm", "100-120 bpm", "40-60 bpm", "60-100 bpm"],
            options_bn: ["১২০-১৪০ bpm", "১০০-১২০ bpm", "৪০-৬০ bpm", "৬০-১০০ bpm"],
            correct: 3,
            marks: 1
        },
        {
            id: 166,
            question: "What is the purpose of range of motion exercises?",
            question_bn: "গতির পরিসীমা ব্যায়ামের উদ্দেশ্য কী?",
            options: ["Maintain joint flexibility", "Weight loss", "Build muscles", "Increase appetite"],
            options_bn: ["জয়েন্ট নমনীয়তা বজায় রাখা", "ওজন কমানো", "পেশী তৈরি", "ক্ষুধা বৃদ্ধি"],
            correct: 0,
            marks: 1
        },
        {
            id: 167,
            question: "What is a pressure ulcer?",
            question_bn: "চাপ আলসার কী?",
            options: ["Skin breakdown from prolonged pressure", "Stomach ulcer", "Eye problem", "Lung disease"],
            options_bn: ["দীর্ঘস্থায়ী চাপ থেকে ত্বক ভাঙ্গা", "পেটের আলসার", "চোখের সমস্যা", "ফুসফুসের রোগ"],
            correct: 0,
            marks: 1
        },
        {
            id: 168,
            question: "What is the purpose of oral hygiene in patients?",
            question_bn: "রোগীদের মৌখিক স্বাস্থ্যবিধির উদ্দেশ্য কী?",
            options: ["Prevent oral infections and maintain comfort", "Make teeth white", "Prevent hunger", "Increase appetite"],
            options_bn: ["মৌখিক সংক্রমণ প্রতিরোধ এবং আরাম বজায় রাখা", "দাঁত সাদা করা", "ক্ষুধা প্রতিরোধ", "ক্ষুধা বৃদ্ধি"],
            correct: 0,
            marks: 1
        },
        {
            id: 169,
            question: "What is the sim's position?",
            question_bn: "সিম অবস্থান কী?",
            options: ["Standing", "Sitting", "Semi-prone position", "Supine"],
            options_bn: ["দাঁড়িয়ে", "বসে", "আধা-প্রোন অবস্থান", "সুপাইন"],
            correct: 2,
            marks: 1
        },
        {
            id: 170,
            question: "What is the purpose of intake and output monitoring?",
            question_bn: "গ্রহণ এবং আউটপুট পর্যবেক্ষণের উদ্দেশ্য কী?",
            options: ["Assess fluid balance", "Check diet preference", "Monitor exercise", "Track sleep"],
            options_bn: ["তরল ভারসাম্য মূল্যায়ন", "খাদ্য পছন্দ পরীক্ষা", "ব্যায়াম পর্যবেক্ষণ", "ঘুম ট্র্যাক"],
            correct: 0,
            marks: 1
        },
        {
            id: 171,
            question: "What is medical asepsis?",
            question_bn: "মেডিক্যাল অ্যাসেপসিস কী?",
            options: ["Medication", "Surgery", "Practices to reduce number of microorganisms", "Cleaning only"],
            options_bn: ["ওষুধ", "অস্ত্রোপচার", "অণুজীবের সংখ্যা কমাতে অনুশীলন", "শুধুমাত্র পরিষ্কার করা"],
            correct: 2,
            marks: 1
        },
        {
            id: 172,
            question: "What is surgical asepsis?",
            question_bn: "সার্জিক্যাল অ্যাসেপসিস কী?",
            options: ["Complete elimination of microorganisms", "Regular cleaning", "Using soap", "Wearing gloves only"],
            options_bn: ["অণুজীবের সম্পূর্ণ নির্মূল", "নিয়মিত পরিষ্কার করা", "সাবান ব্যবহার", "শুধুমাত্র গ্লাভস পরা"],
            correct: 0,
            marks: 1
        },
        {
            id: 173,
            question: "What is the knee-chest position used for?",
            question_bn: "হাঁটু-বুক অবস্থান কীসের জন্য ব্যবহৃত হয়?",
            options: ["Reading", "Eating", "Rectal examination", "Sleeping"],
            options_bn: ["পড়া", "খাওয়া", "মলদ্বার পরীক্ষা", "ঘুমানো"],
            correct: 2,
            marks: 1
        },
        {
            id: 174,
            question: "What is the purpose of a therapeutic bed?",
            question_bn: "থেরাপিউটিক বিছানার উদ্দেশ্য কী?",
            options: ["Decoration", "Prevent complications in bedridden patients", "Save space", "Look modern"],
            options_bn: ["সাজসজ্জা", "শয্যাশায়ী রোগীদের জটিলতা প্রতিরোধ", "জায়গা বাঁচান", "আধুনিক দেখাতে"],
            correct: 1,
            marks: 1
        },
        {
            id: 175,
            question: "What is the normal blood pressure for adults?",
            question_bn: "প্রাপ্তবয়স্কদের জন্য স্বাভাবিক রক্তচাপ কত?",
            options: ["140/90 mmHg", "160/100 mmHg", "120/80 mmHg", "90/60 mmHg"],
            options_bn: ["১৪০/৯০ mmHg", "১৬০/১০০ mmHg", "১২০/৮০ mmHg", "৯০/৬০ mmHg"],
            correct: 2,
            marks: 1
        },
        {
            id: 176,
            question: "What is ambulation?",
            question_bn: "অ্যাম্বুলেশন কী?",
            options: ["Walking or moving about", "Sleeping", "Eating", "Bathing"],
            options_bn: ["হাঁটা বা ঘুরে বেড়ানো", "ঘুমানো", "খাওয়া", "স্নান"],
            correct: 0,
            marks: 1
        },
        {
            id: 177,
            question: "What is the purpose of a bed cradle?",
            question_bn: "বেড ক্র্যাডলের উদ্দেশ্য কী?",
            options: ["Lighting", "Storage", "Keep bedding off injured body parts", "Decoration"],
            options_bn: ["আলো", "সংরক্ষণ", "আহত শরীরের অংশ থেকে বিছানা দূরে রাখা", "সাজসজ্জা"],
            correct: 2,
            marks: 1
        },
        {
            id: 178,
            question: "What is a footboard used for?",
            question_bn: "ফুটবোর্ড কীসের জন্য ব্যবহৃত হয়?",
            options: ["Entertainment", "Exercise", "Decoration", "Prevent foot drop"],
            options_bn: ["বিনোদন", "ব্যায়াম", "সাজসজ্জা", "পা ঝুলে পড়া প্রতিরোধ"],
            correct: 3,
            marks: 1
        },
        {
            id: 179,
            question: "What is the purpose of body mechanics in nursing?",
            question_bn: "নার্সিংয়ে শরীরের মেকানিক্সের উদ্দেশ্য কী?",
            options: ["Prevent injury to nurse and patient", "Look professional", "Exercise", "Time management"],
            options_bn: ["নার্স এবং রোগীর আঘাত প্রতিরোধ", "পেশাদার দেখাতে", "ব্যায়াম", "সময় ব্যবস্থাপনা"],
            correct: 0,
            marks: 1
        },
        {
            id: 180,
            question: "What is the high Fowler's position?",
            question_bn: "উচ্চ ফাউলার অবস্থান কী?",
            options: ["Lying on side", "Head down", "Head elevated 90 degrees", "Lying flat"],
            options_bn: ["পাশে শুয়ে", "মাথা নিচে", "মাথা ৯০ ডিগ্রি উঁচু", "সমতল শুয়ে"],
            correct: 2,
            marks: 1
        },
        {
            id: 181,
            question: "What is decubitus ulcer?",
            question_bn: "ডেকিউবিটাস আলসার কী?",
            options: ["Leg ulcer", "Stomach ulcer", "Pressure ulcer/bedsore", "Mouth ulcer"],
            options_bn: ["পায়ের আলসার", "পেটের আলসার", "চাপ আলসার/বেডসোর", "মুখের আলসার"],
            correct: 2,
            marks: 1
        },
        {
            id: 182,
            question: "What is the purpose of cold application?",
            question_bn: "ঠান্ডা প্রয়োগের উদ্দেশ্য কী?",
            options: ["Reduce swelling and pain", "Increase blood flow", "Increase temperature", "Promote infection"],
            options_bn: ["ফোলা এবং ব্যথা হ্রাস", "রক্ত প্রবাহ বৃদ্ধি", "তাপমাত্রা বৃদ্ধি", "সংক্রমণ প্রচার"],
            correct: 0,
            marks: 1
        },
        {
            id: 183,
            question: "What is the purpose of heat application?",
            question_bn: "তাপ প্রয়োগের উদ্দেশ্য কী?",
            options: ["Stop bleeding", "Reduce blood flow", "Cause infection", "Promote healing and relieve pain"],
            options_bn: ["রক্তপাত বন্ধ", "রক্ত প্রবাহ হ্রাস", "সংক্রমণ সৃষ্টি", "নিরাময় প্রচার এবং ব্যথা উপশম"],
            correct: 3,
            marks: 1
        },
        {
            id: 184,
            question: "What is the prone position?",
            question_bn: "প্রোন অবস্থান কী?",
            options: ["Lying on stomach/face down", "Lying on back", "Sitting", "Standing"],
            options_bn: ["পেট/মুখ নিচে শুয়ে", "পিঠে শুয়ে", "বসে", "দাঁড়িয়ে"],
            correct: 0,
            marks: 1
        },
        {
            id: 185,
            question: "What is the purpose of patient assessment?",
            question_bn: "রোগী মূল্যায়নের উদ্দেশ্য কী?",
            options: ["Avoid patient", "Pass time", "Gather information for care planning", "Paperwork"],
            options_bn: ["রোগী এড়ানো", "সময় কাটানো", "যত্ন পরিকল্পনার জন্য তথ্য সংগ্রহ", "কাগজপত্র"],
            correct: 2,
            marks: 1
        },
        {
            id: 186,
            question: "What are the five moments of hand hygiene?",
            question_bn: "হাত স্বাস্থ্যবিধির পাঁচটি মুহূর্ত কী?",
            options: ["Before patient contact, before aseptic task, after body fluid exposure, after patient contact, after contact with patient surroundings", "5 times a day", "Morning, noon, evening, night, midnight", "Monday to Friday"],
            options_bn: ["রোগী যোগাযোগের আগে, অ্যাসেপ্টিক কাজের আগে, শরীরের তরল এক্সপোজারের পরে, রোগী যোগাযোগের পরে, রোগীর পরিবেশের সাথে যোগাযোগের পরে", "দিনে ৫ বার", "সকাল, দুপুর, সন্ধ্যা, রাত, মধ্যরাত", "সোমবার থেকে শুক্রবার"],
            correct: 0,
            marks: 1
        },
        {
            id: 187,
            question: "What is orthopneic position?",
            question_bn: "অর্থোপনিক অবস্থান কী?",
            options: ["Lying on stomach", "Lying flat", "Lying on side", "Sitting upright leaning forward"],
            options_bn: ["পেটে শুয়ে", "সমতল শুয়ে", "পাশে শুয়ে", "সামনে ঝুঁকে সোজা বসে"],
            correct: 3,
            marks: 1
        },
        {
            id: 188,
            question: "What is the purpose of catheterization?",
            question_bn: "ক্যাথেটারাইজেশনের উদ্দেশ্য কী?",
            options: ["Empty bladder when unable to void naturally", "Decoration", "Exercise", "Feeding"],
            options_bn: ["প্রাকৃতিকভাবে প্রস্রাব করতে না পারলে মূত্রাশয় খালি করা", "সাজসজ্জা", "ব্যায়াম", "খাওয়ানো"],
            correct: 0,
            marks: 1
        },
        {
            id: 189,
            question: "What is the purpose of oxygen therapy?",
            question_bn: "অক্সিজেন থেরাপির উদ্দেশ্য কী?",
            options: ["Make room smell good", "Entertainment", "Correct hypoxia", "Decoration"],
            options_bn: ["রুম ভাল গন্ধ করা", "বিনোদন", "হাইপোক্সিয়া সংশোধন", "সাজসজ্জা"],
            correct: 2,
            marks: 1
        },
        {
            id: 190,
            question: "What is the nursing process?",
            question_bn: "নার্সিং প্রক্রিয়া কী?",
            options: ["Documentation only", "Random care", "Giving medicines only", "Systematic approach: Assessment, Diagnosis, Planning, Implementation, Evaluation"],
            options_bn: ["শুধু ডকুমেন্টেশন", "এলোমেলো যত্ন", "শুধু ওষুধ দেওয়া", "পদ্ধতিগত পদ্ধতি: মূল্যায়ন, রোগ নির্ণয়, পরিকল্পনা, বাস্তবায়ন, মূল্যায়ন"],
            correct: 3,
            marks: 1
        },
        {
            id: 191,
            question: "What is sepsis?",
            question_bn: "সেপসিস কী?",
            options: ["Life-threatening response to infection", "Mild infection", "Allergy", "Cold"],
            options_bn: ["সংক্রমণের জীবন-হুমকিপূর্ণ প্রতিক্রিয়া", "হালকা সংক্রমণ", "এলার্জি", "ঠান্ডা"],
            correct: 0,
            marks: 1
        },
        {
            id: 192,
            question: "What is the purpose of documentation in nursing?",
            question_bn: "নার্সিংয়ে ডকুমেন্টেশনের উদ্দেশ্য কী?",
            options: ["Legal record and communication", "Waste time", "Punishment", "Decoration"],
            options_bn: ["আইনি রেকর্ড এবং যোগাযোগ", "সময় নষ্ট", "শাস্তি", "সাজসজ্জা"],
            correct: 0,
            marks: 1
        },
        {
            id: 193,
            question: "What is aseptic technique?",
            question_bn: "অ্যাসেপ্টিক কৌশল কী?",
            options: ["Medication", "Surgical procedure", "Practices to prevent contamination", "Any technique"],
            options_bn: ["ওষুধ", "অস্ত্রোপচার পদ্ধতি", "দূষণ প্রতিরোধের অনুশীলন", "যেকোনো কৌশল"],
            correct: 2,
            marks: 1
        },
        {
            id: 194,
            question: "What is patient confidentiality?",
            question_bn: "রোগীর গোপনীয়তা কী?",
            options: ["Gossiping", "Ignoring patient", "Sharing patient information with everyone", "Protecting patient's private information"],
            options_bn: ["গসিপ করা", "রোগীকে উপেক্ষা করা", "সবার সাথে রোগীর তথ্য শেয়ার করা", "রোগীর ব্যক্তিগত তথ্য রক্ষা করা"],
            correct: 3,
            marks: 1
        },
        {
            id: 195,
            question: "What is informed consent?",
            question_bn: "অবগত সম্মতি কী?",
            options: ["Patient's voluntary agreement after understanding", "Forcing treatment", "Ignoring patient wishes", "Emergency only"],
            options_bn: ["বোঝার পরে রোগীর স্বেচ্ছায় সম্মতি", "চিকিৎসা জোর করা", "রোগীর ইচ্ছা উপেক্ষা করা", "শুধুমাত্র জরুরী"],
            correct: 0,
            marks: 1
        },
        {
            id: 196,
            question: "What is the role of a nurse?",
            question_bn: "একজন নার্সের ভূমিকা কী?",
            options: ["Clean only", "Documentation only", "Caregiver, educator, advocate, communicator", "Only give medicines"],
            options_bn: ["শুধু পরিষ্কার করা", "শুধু ডকুমেন্টেশন", "যত্নকারী, শিক্ষাবিদ, উকিল, যোগাযোগকারী", "শুধু ওষুধ দেওয়া"],
            correct: 2,
            marks: 1
        },
        {
            id: 197,
            question: "What is holistic care?",
            question_bn: "সামগ্রিক যত্ন কী?",
            options: ["Surgery only", "Medicine only", "Physical care only", "Care addressing physical, emotional, social, and spiritual needs"],
            options_bn: ["শুধু অস্ত্রোপচার", "শুধু ওষুধ", "শুধুমাত্র শারীরিক যত্ন", "শারীরিক, মানসিক, সামাজিক এবং আধ্যাত্মিক চাহিদার যত্ন"],
            correct: 3,
            marks: 1
        },
        {
            id: 198,
            question: "What is therapeutic communication?",
            question_bn: "থেরাপিউটিক যোগাযোগ কী?",
            options: ["Goal-directed communication to promote patient wellbeing", "Gossiping", "Shouting", "Ignoring"],
            options_bn: ["রোগীর সুস্থতা প্রচারের জন্য লক্ষ্য-নির্দেশিত যোগাযোগ", "গসিপ করা", "চিৎকার করা", "উপেক্ষা করা"],
            correct: 0,
            marks: 1
        },
        {
            id: 199,
            question: "What is patient advocacy?",
            question_bn: "রোগী সমর্থন কী?",
            options: ["Avoiding patient", "Forcing decisions", "Supporting and protecting patient rights", "Ignoring patient"],
            options_bn: ["রোগী এড়ানো", "সিদ্ধান্ত জোর করা", "রোগীর অধিকার সমর্থন এবং রক্ষা করা", "রোগীকে উপেক্ষা করা"],
            correct: 2,
            marks: 1
        },
        {
            id: 200,
            question: "What is the importance of vital signs monitoring?",
            question_bn: "গুরুত্বপূর্ণ লক্ষণ পর্যবেক্ষণের গুরুত্ব কী?",
            options: ["Documentation only", "Time pass", "Assess patient's physiological status", "Routine only"],
            options_bn: ["শুধু ডকুমেন্টেশন", "সময় কাটানো", "রোগীর শারীরবৃত্তীয় অবস্থা মূল্যায়ন", "শুধু রুটিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 201,
            question: "What is empathy in nursing?",
            question_bn: "নার্সিংয়ে সহানুভূতি কী?",
            options: ["Understanding and sharing patient's feelings", "Feeling sorry", "Ignoring emotions", "Being harsh"],
            options_bn: ["রোগীর অনুভূতি বোঝা এবং শেয়ার করা", "দুঃখিত বোধ করা", "আবেগ উপেক্ষা করা", "কঠোর হওয়া"],
            correct: 0,
            marks: 1
        },
        {
            id: 202,
            question: "What is infection control?",
            question_bn: "সংক্রমণ নিয়ন্ত্রণ কী?",
            options: ["No precautions", "Random cleaning", "Practices to prevent spread of infections", "Ignoring hygiene"],
            options_bn: ["কোন সতর্কতা নেই", "এলোমেলো পরিষ্কার করা", "সংক্রমণের বিস্তার প্রতিরোধের অনুশীলন", "স্বাস্থ্যবিধি উপেক্ষা করা"],
            correct: 2,
            marks: 1
        },
        {
            id: 203,
            question: "What is patient safety?",
            question_bn: "রোগী নিরাপত্তা কী?",
            options: ["Preventing harm and errors in healthcare", "Locking patients", "Restraining all patients", "Ignoring risks"],
            options_bn: ["স্বাস্থ্যসেবায় ক্ষতি এবং ত্রুটি প্রতিরোধ", "রোগীদের তালা দেওয়া", "সমস্ত রোগীদের সংযত করা", "ঝুঁকি উপেক্ষা করা"],
            correct: 0,
            marks: 1
        },
        {
            id: 204,
            question: "What is the purpose of patient education?",
            question_bn: "রোগী শিক্ষার উদ্দেশ্য কী?",
            options: ["Waste time", "Promote self-care and recovery", "Show off knowledge", "Confuse patient"],
            options_bn: ["সময় নষ্ট", "স্ব-যত্ন এবং পুনরুদ্ধার প্রচার", "জ্ঞান দেখানো", "রোগীকে বিভ্রান্ত করা"],
            correct: 1,
            marks: 1
        },
        {
            id: 205,
            question: "What is palliative care?",
            question_bn: "প্যালিয়েটিভ কেয়ার কী?",
            options: ["Surgery only", "No care", "Comfort care for serious illness", "Cure focused"],
            options_bn: ["শুধু অস্ত্রোপচার", "কোন যত্ন নেই", "গুরুতর অসুস্থতার জন্য আরাম যত্ন", "নিরাময় কেন্দ্রিক"],
            correct: 2,
            marks: 1
        }
    ],
    section6: [
        {
            id: 206,
            question: "What is the normal range of hemoglobin in adult males?",
            question_bn: "প্রাপ্তবয়স্ক পুরুষদের হিমোগ্লোবিনের স্বাভাবিক পরিসীমা কত?",
            options: ["8-10 g/dL", "18-20 g/dL", "13-17 g/dL", "10-12 g/dL"],
            options_bn: ["৮-১০ g/dL", "১৮-২০ g/dL", "১৩-১৭ g/dL", "১০-১২ g/dL"],
            correct: 2,
            marks: 1
        },
        {
            id: 207,
            question: "What is the priority nursing diagnosis for a patient with myocardial infarction?",
            question_bn: "মায়োকার্ডিয়াল ইনফার্কশনের রোগীর জন্য অগ্রাধিকার নার্সিং ডায়াগনসিস কী?",
            options: ["Fatigue", "Acute pain", "Anxiety", "Sleep disturbance"],
            options_bn: ["ক্লান্তি", "তীব্র ব্যথা", "উদ্বেগ", "ঘুমের ব্যাঘাত"],
            correct: 1,
            marks: 1
        },
        {
            id: 208,
            question: "Which position is best for a patient with dyspnea?",
            question_bn: "ডিসপনিয়া রোগীর জন্য কোন অবস্থান সেরা?",
            options: ["Trendelenburg", "Supine", "High Fowler's", "Prone"],
            options_bn: ["ট্রেন্ডেলেনবার্গ", "সুপাইন", "উচ্চ ফাউলার", "প্রোন"],
            correct: 2,
            marks: 1
        },
        {
            id: 209,
            question: "What is the most common complication of hypertension?",
            question_bn: "উচ্চ রক্তচাপের সবচেয়ে সাধারণ জটিলতা কী?",
            options: ["Arthritis", "Stroke", "Diabetes", "Cancer"],
            options_bn: ["আর্থ্রাইটিস", "স্ট্রোক", "ডায়াবেটিস", "ক্যান্সার"],
            correct: 1,
            marks: 1
        },
        {
            id: 210,
            question: "What is the primary treatment for diabetic ketoacidosis?",
            question_bn: "ডায়াবেটিক কেটোঅ্যাসিডোসিসের প্রাথমিক চিকিৎসা কী?",
            options: ["Exercise", "Diet control only", "Insulin and fluids", "Oral hypoglycemics"],
            options_bn: ["ব্যায়াম", "শুধুমাত্র খাদ্য নিয়ন্ত্রণ", "ইনসুলিন এবং তরল", "মৌখিক হাইপোগ্লাইসেমিক্স"],
            correct: 2,
            marks: 1
        },
        {
            id: 211,
            question: "Which medication is contraindicated in patients with asthma?",
            question_bn: "হাঁপানি রোগীদের জন্য কোন ওষুধ নিষিদ্ধ?",
            options: ["Beta blockers", "Salbutamol", "Antibiotics", "Paracetamol"],
            options_bn: ["বিটা ব্লকার", "সালবুটামল", "অ্যান্টিবায়োটিক", "প্যারাসিটামল"],
            correct: 0,
            marks: 1
        },
        {
            id: 212,
            question: "What is the normal pH of arterial blood?",
            question_bn: "ধমনী রক্তের স্বাভাবিক pH কত?",
            options: ["6.8-7.0", "7.5-7.6", "7.0-7.2", "7.35-7.45"],
            options_bn: ["৬.৮-৭.০", "৭.৫-৭.৬", "৭.০-৭.২", "৭.৩৫-৭.৪৫"],
            correct: 3,
            marks: 1
        },
        {
            id: 213,
            question: "What is the first sign of compartment syndrome?",
            question_bn: "কম্পার্টমেন্ট সিন্ড্রোমের প্রথম লক্ষণ কী?",
            options: ["Severe pain", "Pallor", "Paralysis", "Pulselessness"],
            options_bn: ["গুরুতর ব্যথা", "ফ্যাকাশে", "পক্ষাঘাত", "নাড়ি না থাকা"],
            correct: 0,
            marks: 1
        },
        {
            id: 214,
            question: "Which electrolyte imbalance is most dangerous for cardiac patients?",
            question_bn: "হৃদরোগীদের জন্য কোন ইলেক্ট্রোলাইট ভারসাম্যহীনতা সবচেয়ে বিপজ্জনক?",
            options: ["Potassium", "Sodium", "Calcium", "Chloride"],
            options_bn: ["পটাসিয়াম", "সোডিয়াম", "ক্যালসিয়াম", "ক্লোরাইড"],
            correct: 0,
            marks: 1
        },
        {
            id: 215,
            question: "What is the antidote for warfarin overdose?",
            question_bn: "ওয়ারফারিন ওভারডোজের প্রতিষেধক কী?",
            options: ["Naloxone", "Atropine", "Vitamin K", "Protamine sulfate"],
            options_bn: ["নালক্সোন", "অ্যাট্রোপিন", "ভিটামিন কে", "প্রোটামিন সালফেট"],
            correct: 2,
            marks: 1
        },
        {
            id: 216,
            question: "What is the therapeutic INR range for patients on warfarin?",
            question_bn: "ওয়ারফারিন সেবনকারী রোগীদের জন্য থেরাপিউটিক INR পরিসীমা কত?",
            options: ["6.0-7.0", "2.0-3.0", "4.0-5.0", "0.5-1.0"],
            options_bn: ["৬.০-৭.০", "২.০-৩.০", "৪.০-৫.০", "০.৫-১.০"],
            correct: 1,
            marks: 1
        },
        {
            id: 217,
            question: "What is the recommended position after liver biopsy?",
            question_bn: "লিভার বায়োপসির পরে সুপারিশকৃত অবস্থান কী?",
            options: ["Prone", "Right side", "Left side", "Supine"],
            options_bn: ["প্রোন", "ডান পাশে", "বাম পাশে", "সুপাইন"],
            correct: 1,
            marks: 1
        },
        {
            id: 218,
            question: "Which test confirms diagnosis of tuberculosis?",
            question_bn: "কোন পরীক্ষা যক্ষ্মা রোগ নির্ণয় নিশ্চিত করে?",
            options: ["Urine test", "Sputum AFB", "X-ray", "Blood test"],
            options_bn: ["প্রস্রাব পরীক্ষা", "স্পুটাম AFB", "এক্স-রে", "রক্ত পরীক্ষা"],
            correct: 1,
            marks: 1
        },
        {
            id: 219,
            question: "What is the normal cardiac output?",
            question_bn: "স্বাভাবিক কার্ডিয়াক আউটপুট কত?",
            options: ["12-14 L/min", "8-10 L/min", "4-6 L/min", "2-3 L/min"],
            options_bn: ["১২-১৪ L/min", "৮-১০ L/min", "৪-৬ L/min", "২-৩ L/min"],
            correct: 2,
            marks: 1
        },
        {
            id: 220,
            question: "What is the priority intervention for a patient with chest pain?",
            question_bn: "বুকে ব্যথার রোগীর জন্য অগ্রাধিকার হস্তক্ষেপ কী?",
            options: ["Give food", "Start exercise", "Administer oxygen", "Give water"],
            options_bn: ["খাবার দিন", "ব্যায়াম শুরু করুন", "অক্সিজেন প্রদান করুন", "জল দিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 221,
            question: "Which diagnostic test is used to detect myocardial infarction?",
            question_bn: "মায়োকার্ডিয়াল ইনফার্কশন সনাক্ত করতে কোন ডায়াগনস্টিক পরীক্ষা ব্যবহার করা হয়?",
            options: ["X-ray", "ECG and cardiac enzymes", "Blood sugar", "Urine test"],
            options_bn: ["এক্স-রে", "ইসিজি এবং কার্ডিয়াক এনজাইম", "রক্তের শর্করা", "প্রস্রাব পরীক্ষা"],
            correct: 1,
            marks: 1
        },
        {
            id: 222,
            question: "What is the treatment for anaphylactic shock?",
            question_bn: "অ্যানাফিল্যাক্টিক শকের চিকিৎসা কী?",
            options: ["Epinephrine", "Antihistamine", "Paracetamol", "Aspirin"],
            options_bn: ["এপিনেফ্রিন", "অ্যান্টিহিস্টামিন", "প্যারাসিটামল", "অ্যাসপিরিন"],
            correct: 0,
            marks: 1
        },
        {
            id: 223,
            question: "What is the normal range of blood glucose (fasting)?",
            question_bn: "রক্তে গ্লুকোজের স্বাভাবিক পরিসীমা (উপবাস) কত?",
            options: ["160-200 mg/dL", "70-110 mg/dL", "120-150 mg/dL", "50-70 mg/dL"],
            options_bn: ["১৬০-২০০ mg/dL", "৭০-১১০ mg/dL", "১২০-১৫০ mg/dL", "৫০-৭০ mg/dL"],
            correct: 1,
            marks: 1
        },
        {
            id: 224,
            question: "What is the purpose of a nasogastric tube?",
            question_bn: "নাসোগ্যাস্ট্রিক টিউবের উদ্দেশ্য কী?",
            options: ["Feeding or gastric decompression", "Breathing", "Blood transfusion", "Dialysis"],
            options_bn: ["খাওয়ানো বা গ্যাস্ট্রিক ডিকম্প্রেশন", "শ্বাসপ্রশ্বাস", "রক্ত সঞ্চালন", "ডায়ালাইসিস"],
            correct: 0,
            marks: 1
        },
        {
            id: 225,
            question: "Which medication is used to treat heart failure?",
            question_bn: "হার্ট ফেইলিওর চিকিৎসার জন্য কোন ওষুধ ব্যবহার করা হয়?",
            options: ["Antacids", "Antihistamines", "Diuretics and ACE inhibitors", "Antibiotics"],
            options_bn: ["অ্যান্টাসিড", "অ্যান্টিহিস্টামিন", "ডাইউরেটিক্স এবং ACE ইনহিবিটর", "অ্যান্টিবায়োটিক"],
            correct: 2,
            marks: 1
        },
        {
            id: 226,
            question: "What is the sign of digitalis toxicity?",
            question_bn: "ডিজিটালিস বিষাক্ততার লক্ষণ কী?",
            options: ["Rash", "Fever", "Nausea and bradycardia", "Hypertension"],
            options_bn: ["ফুসকুড়ি", "জ্বর", "বমি বমি ভাব এবং ব্র্যাডিকার্ডিয়া", "উচ্চ রক্তচাপ"],
            correct: 2,
            marks: 1
        },
        {
            id: 227,
            question: "What is the treatment for hypoglycemia?",
            question_bn: "হাইপোগ্লাইসেমিয়ার চিকিৎসা কী?",
            options: ["Diuretics", "Antibiotics", "Glucose or sugar", "Insulin"],
            options_bn: ["ডাইউরেটিক্স", "অ্যান্টিবায়োটিক", "গ্লুকোজ বা চিনি", "ইনসুলিন"],
            correct: 2,
            marks: 1
        },
        {
            id: 228,
            question: "What is the purpose of anticoagulant therapy?",
            question_bn: "অ্যান্টিকোয়াগুলেন্ট থেরাপির উদ্দেশ্য কী?",
            options: ["Prevent blood clots", "Increase clotting", "Increase bleeding", "Cure infection"],
            options_bn: ["রক্ত জমাট প্রতিরোধ", "জমাট বাঁধা বৃদ্ধি", "রক্তপাত বৃদ্ধি", "সংক্রমণ নিরাময়"],
            correct: 0,
            marks: 1
        },
        {
            id: 229,
            question: "What is the most common cause of COPD?",
            question_bn: "COPD এর সবচেয়ে সাধারণ কারণ কী?",
            options: ["Smoking", "Infection", "Diet", "Exercise"],
            options_bn: ["ধূমপান", "সংক্রমণ", "খাদ্য", "ব্যায়াম"],
            correct: 0,
            marks: 1
        },
        {
            id: 230,
            question: "What is the normal urine output per hour in adults?",
            question_bn: "প্রাপ্তবয়স্কদের প্রতি ঘন্টায় স্বাভাবিক প্রস্রাবের পরিমাণ কত?",
            options: ["200-300 mL/hr", "30-50 mL/hr", "100-150 mL/hr", "10-20 mL/hr"],
            options_bn: ["২০০-৩০০ mL/hr", "৩০-৫০ mL/hr", "১০০-১৫০ mL/hr", "১০-২০ mL/hr"],
            correct: 1,
            marks: 1
        },
        {
            id: 231,
            question: "Which position is best for a patient with heart failure?",
            question_bn: "হার্ট ফেইলিওর রোগীর জন্য কোন অবস্থান সেরা?",
            options: ["Trendelenburg", "High Fowler's with legs dependent", "Prone", "Flat"],
            options_bn: ["ট্রেন্ডেলেনবার্গ", "পা নিচে রেখে উচ্চ ফাউলার", "প্রোন", "সমতল"],
            correct: 1,
            marks: 1
        },
        {
            id: 232,
            question: "What is the purpose of a tracheostomy?",
            question_bn: "ট্র্যাকিওস্টমির উদ্দেশ্য কী?",
            options: ["Dialysis", "Blood transfusion", "Maintain airway", "Feeding"],
            options_bn: ["ডায়ালাইসিস", "রক্ত সঞ্চালন", "বায়ুপথ বজায় রাখা", "খাওয়ানো"],
            correct: 2,
            marks: 1
        },
        {
            id: 233,
            question: "What is the normal central venous pressure (CVP)?",
            question_bn: "স্বাভাবিক সেন্ট্রাল ভেনাস প্রেশার (CVP) কত?",
            options: ["20-25 cm H2O", "10-15 cm H2O", "2-8 cm H2O", "0-2 cm H2O"],
            options_bn: ["২০-২৫ cm H2O", "১০-১৫ cm H2O", "২-৮ cm H2O", "০-২ cm H2O"],
            correct: 2,
            marks: 1
        },
        {
            id: 234,
            question: "What is the complication of prolonged immobility?",
            question_bn: "দীর্ঘস্থায়ী অচলতার জটিলতা কী?",
            options: ["DVT and pressure ulcers", "Increased muscle mass", "Improved circulation", "Better digestion"],
            options_bn: ["DVT এবং চাপ আলসার", "পেশী ভর বৃদ্ধি", "উন্নত সংবহন", "ভাল হজম"],
            correct: 0,
            marks: 1
        },
        {
            id: 235,
            question: "What is the treatment for pulmonary edema?",
            question_bn: "পালমোনারি এডিমার চিকিৎসা কী?",
            options: ["Diuretics and oxygen", "More fluids", "Antibiotics", "Exercise"],
            options_bn: ["ডাইউরেটিক্স এবং অক্সিজেন", "আরও তরল", "অ্যান্টিবায়োটিক", "ব্যায়াম"],
            correct: 0,
            marks: 1
        },
        {
            id: 236,
            question: "What is orthostatic hypotension?",
            question_bn: "অর্থোস্ট্যাটিক হাইপোটেনশন কী?",
            options: ["Normal BP", "High BP when standing", "Drop in BP upon standing", "High BP when lying"],
            options_bn: ["স্বাভাবিক BP", "দাঁড়ালে উচ্চ BP", "দাঁড়ালে BP কমে যাওয়া", "শুয়ে থাকলে উচ্চ BP"],
            correct: 2,
            marks: 1
        },
        {
            id: 237,
            question: "Which lab value indicates kidney function?",
            question_bn: "কোন ল্যাব মান কিডনির কার্যকারিতা নির্দেশ করে?",
            options: ["Creatinine and BUN", "Hemoglobin", "Blood sugar", "Cholesterol"],
            options_bn: ["ক্রিয়েটিনিন এবং BUN", "হিমোগ্লোবিন", "রক্তের শর্করা", "কোলেস্টেরল"],
            correct: 0,
            marks: 1
        },
        {
            id: 238,
            question: "What is the purpose of chest physiotherapy?",
            question_bn: "বুক ফিজিওথেরাপির উদ্দেশ্য কী?",
            options: ["Improve vision", "Increase appetite", "Mobilize secretions", "Exercise heart"],
            options_bn: ["দৃষ্টি উন্নত", "ক্ষুধা বৃদ্ধি", "নিঃসরণ সচল করা", "হৃদয় ব্যায়াম"],
            correct: 2,
            marks: 1
        },
        {
            id: 239,
            question: "What is the sign of fluid overload?",
            question_bn: "তরল ওভারলোডের লক্ষণ কী?",
            options: ["Edema and crackles in lungs", "Dry skin", "Decreased BP", "Dehydration"],
            options_bn: ["এডিমা এবং ফুসফুসে ক্র্যাকেল", "শুষ্ক ত্বক", "হ্রাস BP", "ডিহাইড্রেশন"],
            correct: 0,
            marks: 1
        },
        {
            id: 240,
            question: "What is the antidote for heparin overdose?",
            question_bn: "হেপারিন ওভারডোজের প্রতিষেধক কী?",
            options: ["Atropine", "Protamine sulfate", "Vitamin K", "Naloxone"],
            options_bn: ["অ্যাট্রোপিন", "প্রোটামিন সালফেট", "ভিটামিন কে", "নালক্সোন"],
            correct: 1,
            marks: 1
        },
        {
            id: 241,
            question: "What is the Glasgow Coma Scale used for?",
            question_bn: "গ্লাসগো কোমা স্কেল কীসের জন্য ব্যবহৃত হয়?",
            options: ["Assess level of consciousness", "Measure pain", "Check blood sugar", "Measure BP"],
            options_bn: ["চেতনার স্তর মূল্যায়ন", "ব্যথা পরিমাপ", "রক্তের শর্করা পরীক্ষা", "BP পরিমাপ"],
            correct: 0,
            marks: 1
        },
        {
            id: 242,
            question: "What is the priority in burn management?",
            question_bn: "পোড়া ব্যবস্থাপনায় অগ্রাধিকার কী?",
            options: ["Surgery", "Airway and fluid resuscitation", "Pain relief", "Antibiotics"],
            options_bn: ["অস্ত্রোপচার", "বায়ুপথ এবং তরল পুনরুত্থান", "ব্যথা উপশম", "অ্যান্টিবায়োটিক"],
            correct: 1,
            marks: 1
        },
        {
            id: 243,
            question: "What is the rule of nines in burns?",
            question_bn: "পোড়ার ক্ষেত্রে নয়ের নিয়ম কী?",
            options: ["Calculate burn percentage", "Burn depth", "Pain scale", "Healing time"],
            options_bn: ["পোড়ার শতাংশ গণনা", "পোড়ার গভীরতা", "ব্যথার স্কেল", "নিরাময়ের সময়"],
            correct: 0,
            marks: 1
        },
        {
            id: 244,
            question: "What is the treatment for acute renal failure?",
            question_bn: "তীব্র রেনাল ফেইলিওরের চিকিৎসা কী?",
            options: ["Dialysis and fluid management", "Increase protein", "High potassium diet", "No treatment"],
            options_bn: ["ডায়ালাইসিস এবং তরল ব্যবস্থাপনা", "প্রোটিন বৃদ্ধি", "উচ্চ পটাসিয়াম খাদ্য", "কোন চিকিৎসা নেই"],
            correct: 0,
            marks: 1
        },
        {
            id: 245,
            question: "Which complication should be monitored after thyroidectomy?",
            question_bn: "থাইরয়েডেক্টমির পরে কোন জটিলতা পর্যবেক্ষণ করা উচিত?",
            options: ["Infection only", "Hypertension", "Hypocalcemia and airway obstruction", "Diabetes"],
            options_bn: ["শুধুমাত্র সংক্রমণ", "উচ্চ রক্তচাপ", "হাইপোক্যালসেমিয়া এবং বায়ুপথ বাধা", "ডায়াবেটিস"],
            correct: 2,
            marks: 1
        },
        {
            id: 246,
            question: "What is the purpose of incentive spirometry?",
            question_bn: "ইনসেন্টিভ স্পাইরোমেট্রির উদ্দেশ্য কী?",
            options: ["Measure glucose", "Check heart rate", "Measure BP", "Prevent atelectasis"],
            options_bn: ["গ্লুকোজ পরিমাপ", "হৃদস্পন্দন পরীক্ষা", "BP পরিমাপ", "অ্যাটেলেক্টাসিস প্রতিরোধ"],
            correct: 3,
            marks: 1
        },
        {
            id: 247,
            question: "What is the sign of internal bleeding?",
            question_bn: "অভ্যন্তরীণ রক্তপাতের লক্ষণ কী?",
            options: ["Rash", "Tachycardia and hypotension", "Fever", "High BP"],
            options_bn: ["ফুসকুড়ি", "ট্যাকিকার্ডিয়া এবং হাইপোটেনশন", "জ্বর", "উচ্চ BP"],
            correct: 1,
            marks: 1
        },
        {
            id: 248,
            question: "What is the purpose of antiemetics?",
            question_bn: "অ্যান্টিইমেটিকের উদ্দেশ্য কী?",
            options: ["Prevent nausea and vomiting", "Increase appetite", "Cure infection", "Lower BP"],
            options_bn: ["বমি বমি ভাব এবং বমি প্রতিরোধ", "ক্ষুধা বৃদ্ধি", "সংক্রমণ নিরাময়", "BP কমানো"],
            correct: 0,
            marks: 1
        },
        {
            id: 249,
            question: "What is the treatment for peptic ulcer?",
            question_bn: "পেপটিক আলসারের চিকিৎসা কী?",
            options: ["No treatment", "Proton pump inhibitors and antibiotics", "High fat diet", "Spicy food"],
            options_bn: ["কোন চিকিৎসা নেই", "প্রোটন পাম্প ইনহিবিটর এবং অ্যান্টিবায়োটিক", "উচ্চ চর্বি খাদ্য", "মশলাদার খাবার"],
            correct: 1,
            marks: 1
        },
        {
            id: 250,
            question: "What is the purpose of wound drainage?",
            question_bn: "ক্ষত নিষ্কাশনের উদ্দেশ্য কী?",
            options: ["Decoration", "Cause pain", "Remove fluid and promote healing", "Increase infection"],
            options_bn: ["সাজসজ্জা", "ব্যথা সৃষ্টি", "তরল অপসারণ এবং নিরাময় প্রচার", "সংক্রমণ বৃদ্ধি"],
            correct: 2,
            marks: 1
        },
        {
            id: 251,
            question: "What is the sign of peritonitis?",
            question_bn: "পেরিটোনাইটিসের লক্ষণ কী?",
            options: ["No symptoms", "Rigid abdomen and severe pain", "Soft abdomen", "Normal bowel sounds"],
            options_bn: ["কোন লক্ষণ নেই", "শক্ত পেট এবং গুরুতর ব্যথা", "নরম পেট", "স্বাভাবিক অন্ত্রের শব্দ"],
            correct: 1,
            marks: 1
        },
        {
            id: 252,
            question: "What is the purpose of blood transfusion?",
            question_bn: "রক্ত সঞ্চালনের উদ্দেশ্য কী?",
            options: ["Reduce pain", "Cure infection", "Replace blood loss or treat anemia", "Increase BP"],
            options_bn: ["ব্যথা হ্রাস", "সংক্রমণ নিরাময়", "রক্তক্ষয় প্রতিস্থাপন বা রক্তাল্পতার চিকিৎসা", "BP বৃদ্ধি"],
            correct: 2,
            marks: 1
        },
        {
            id: 253,
            question: "What is the normal platelet count?",
            question_bn: "স্বাভাবিক প্লেটলেট গণনা কত?",
            options: ["10,000-50,000/μL", "150,000-400,000/μL", "500,000-600,000/μL", "50,000-100,000/μL"],
            options_bn: ["১০,০০০-৫০,০০০/μL", "১৫০,০০০-৪০০,০০০/μL", "৫০০,০০০-৬০০,০০০/μL", "৫০,০০০-১০০,০০০/μL"],
            correct: 1,
            marks: 1
        },
        {
            id: 254,
            question: "What is the purpose of elastic stockings?",
            question_bn: "ইলাস্টিক স্টকিংসের উদ্দেশ্য কী?",
            options: ["Cause pain", "Prevent DVT", "Fashion", "Increase swelling"],
            options_bn: ["ব্যথা সৃষ্টি", "DVT প্রতিরোধ", "ফ্যাশন", "ফোলা বৃদ্ধি"],
            correct: 1,
            marks: 1
        },
        {
            id: 255,
            question: "What is ascites?",
            question_bn: "অ্যাসাইটিস কী?",
            options: ["Fluid in brain", "Fluid in abdomen", "Fluid in heart", "Fluid in lungs"],
            options_bn: ["মস্তিষ্কে তরল", "পেটে তরল", "হৃদয়ে তরল", "ফুসফুসে তরল"],
            correct: 1,
            marks: 1
        }
    ],
    section7: [],
    section8: [],
    section9: [],
    section10: [],
    section11: [],
    section12: []
};

// Section names for display
const sectionNames = {
    1: "Anatomy and Physiology",
    2: "Microbiology",
    3: "Nutrition",
    4: "First Aid",
    5: "Nursing Foundation",
    6: "Medical Surgical Nursing (I)",
    7: "Medical Surgical Nursing (II)",
    8: "Child Health Nursing",
    9: "Mental Health Nursing",
    10: "Community Health Nursing (I & II)",
    11: "Midwifery and Gynaecological Nursing",
    12: "Nursing Education, Introduction to Research, Professional Adjustment & Nursing Administration & Ward Management"
};
