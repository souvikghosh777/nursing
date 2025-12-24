// Questions Database for Staff Nurse Grade-II Exam
// 4 Pages x 25 marks each = 100 questions (1 mark each)

const examQuestions = {
    // PAGE 1: Core Nursing Subjects (25 Questions)
    // Anatomy, Physiology, Medical-Surgical Nursing, Child Health, Mental Health
    page1: [
        // Anatomy & Physiology (5 questions)
        {
            id: 1,
            question: "Which organ is responsible for producing insulin in the human body?",
            options: ["Liver", "Pancreas", "Kidney", "Spleen"],
            correct: 1,
            marks: 1
        },
        {
            id: 2,
            question: "The largest artery in the human body is:",
            options: ["Pulmonary artery", "Carotid artery", "Aorta", "Femoral artery"],
            correct: 2,
            marks: 1
        },
        {
            id: 3,
            question: "How many pairs of cranial nerves are present in the human body?",
            options: ["10 pairs", "12 pairs", "14 pairs", "8 pairs"],
            correct: 1,
            marks: 1
        },
        {
            id: 4,
            question: "The functional unit of the kidney is called:",
            options: ["Neuron", "Nephron", "Alveoli", "Lobule"],
            correct: 1,
            marks: 1
        },
        {
            id: 5,
            question: "Which chamber of the heart receives oxygenated blood from the lungs?",
            options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
            correct: 2,
            marks: 1
        },
        // Medical-Surgical Nursing (8 questions)
        {
            id: 6,
            question: "The most common site for intramuscular injection in adults is:",
            options: ["Deltoid muscle", "Vastus lateralis", "Dorsogluteal", "Ventrogluteal"],
            correct: 3,
            marks: 1
        },
        {
            id: 7,
            question: "Glasgow Coma Scale (GCS) assesses:",
            options: ["Pain level", "Level of consciousness", "Respiratory function", "Cardiac output"],
            correct: 1,
            marks: 1
        },
        {
            id: 8,
            question: "The normal range of blood glucose level in fasting state is:",
            options: ["50-70 mg/dL", "70-100 mg/dL", "100-140 mg/dL", "140-200 mg/dL"],
            correct: 1,
            marks: 1
        },
        {
            id: 9,
            question: "Which position is recommended for a patient with dyspnea?",
            options: ["Supine position", "Prone position", "Fowler's position", "Trendelenburg position"],
            correct: 2,
            marks: 1
        },
        {
            id: 10,
            question: "The first sign of shock is usually:",
            options: ["Hypotension", "Tachycardia", "Decreased urine output", "Altered consciousness"],
            correct: 1,
            marks: 1
        },
        {
            id: 11,
            question: "Normal central venous pressure (CVP) is:",
            options: ["0-4 cm H2O", "4-10 cm H2O", "10-15 cm H2O", "15-20 cm H2O"],
            correct: 1,
            marks: 1
        },
        {
            id: 12,
            question: "The best position for lumbar puncture is:",
            options: ["Supine", "Prone", "Lateral with knees flexed", "Sitting upright"],
            correct: 2,
            marks: 1
        },
        {
            id: 13,
            question: "Trousseau's sign is positive in:",
            options: ["Hypocalcemia", "Hypercalcemia", "Hypokalemia", "Hyperkalemia"],
            correct: 0,
            marks: 1
        },
        // Child Health Nursing (6 questions)
        {
            id: 14,
            question: "The normal respiratory rate in a newborn is:",
            options: ["12-20 breaths/min", "20-30 breaths/min", "30-60 breaths/min", "60-80 breaths/min"],
            correct: 2,
            marks: 1
        },
        {
            id: 15,
            question: "BCG vaccine is given to protect against:",
            options: ["Polio", "Measles", "Tuberculosis", "Hepatitis B"],
            correct: 2,
            marks: 1
        },
        {
            id: 16,
            question: "The anterior fontanelle normally closes by:",
            options: ["6 months", "12-18 months", "24 months", "36 months"],
            correct: 1,
            marks: 1
        },
        {
            id: 17,
            question: "Exclusive breastfeeding is recommended for:",
            options: ["3 months", "4 months", "6 months", "12 months"],
            correct: 2,
            marks: 1
        },
        {
            id: 18,
            question: "The birth weight of a normal term baby usually doubles by:",
            options: ["3 months", "5 months", "7 months", "12 months"],
            correct: 1,
            marks: 1
        },
        {
            id: 19,
            question: "Normal head circumference of a newborn is:",
            options: ["30-32 cm", "33-35 cm", "36-38 cm", "39-41 cm"],
            correct: 1,
            marks: 1
        },
        // Mental Health Nursing (6 questions)
        {
            id: 20,
            question: "Which neurotransmitter is primarily associated with depression?",
            options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"],
            correct: 1,
            marks: 1
        },
        {
            id: 21,
            question: "The defense mechanism where unacceptable thoughts are pushed into the unconscious is:",
            options: ["Projection", "Denial", "Repression", "Rationalization"],
            correct: 2,
            marks: 1
        },
        {
            id: 22,
            question: "Electroconvulsive therapy (ECT) is primarily used for:",
            options: ["Anxiety disorders", "Severe depression", "Personality disorders", "Phobias"],
            correct: 1,
            marks: 1
        },
        {
            id: 23,
            question: "The therapeutic blood level of Lithium is:",
            options: ["0.2-0.5 mEq/L", "0.6-1.2 mEq/L", "1.5-2.0 mEq/L", "2.0-2.5 mEq/L"],
            correct: 1,
            marks: 1
        },
        {
            id: 24,
            question: "Which of the following is a positive symptom of schizophrenia?",
            options: ["Flat affect", "Hallucinations", "Social withdrawal", "Poverty of speech"],
            correct: 1,
            marks: 1
        },
        {
            id: 25,
            question: "Therapeutic communication includes:",
            options: ["Giving advice", "Active listening", "Changing the subject", "Arguing with patient"],
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
            options: ["April 7", "May 12", "October 24", "December 1"],
            correct: 0,
            marks: 1
        },
        {
            id: 27,
            question: "The headquarters of WHO is located in:",
            options: ["New York", "Geneva", "Paris", "London"],
            correct: 1,
            marks: 1
        },
        {
            id: 28,
            question: "International Nurses Day is celebrated on:",
            options: ["May 1", "May 12", "June 5", "October 15"],
            correct: 1,
            marks: 1
        },
        {
            id: 29,
            question: "Florence Nightingale was born in which year?",
            options: ["1810", "1820", "1830", "1840"],
            correct: 1,
            marks: 1
        },
        {
            id: 30,
            question: "The Indian Nursing Council was established in:",
            options: ["1947", "1949", "1952", "1960"],
            correct: 1,
            marks: 1
        },
        {
            id: 31,
            question: "NRHM was launched in which year?",
            options: ["2003", "2005", "2007", "2010"],
            correct: 1,
            marks: 1
        },
        {
            id: 32,
            question: "The full form of AYUSH is:",
            options: [
                "Ayurveda, Yoga, Unani, Siddha, Homeopathy",
                "Ayurveda, Yoga, Unani, Surgery, Homeopathy",
                "Ayurveda, Yoga, Universal, Siddha, Health",
                "Ayurveda, Youth, Unani, Siddha, Homeopathy"
            ],
            correct: 0,
            marks: 1
        },
        {
            id: 33,
            question: "National Health Policy was first formulated in:",
            options: ["1980", "1983", "1990", "2000"],
            correct: 1,
            marks: 1
        },
        {
            id: 34,
            question: "World AIDS Day is observed on:",
            options: ["November 1", "December 1", "October 1", "September 1"],
            correct: 1,
            marks: 1
        },
        {
            id: 35,
            question: "The Red Cross was founded by:",
            options: ["Florence Nightingale", "Henry Dunant", "Louis Pasteur", "Robert Koch"],
            correct: 1,
            marks: 1
        },
        {
            id: 36,
            question: "World Tuberculosis Day is observed on:",
            options: ["March 24", "April 24", "May 24", "June 24"],
            correct: 0,
            marks: 1
        },
        {
            id: 37,
            question: "The Pulse Polio Programme was launched in India in:",
            options: ["1990", "1994", "1995", "2000"],
            correct: 2,
            marks: 1
        },
        {
            id: 38,
            question: "World Heart Day is celebrated on:",
            options: ["September 29", "October 29", "November 29", "August 29"],
            correct: 0,
            marks: 1
        },
        {
            id: 39,
            question: "The first woman to receive the Nobel Prize was:",
            options: ["Marie Curie", "Mother Teresa", "Florence Nightingale", "Clara Barton"],
            correct: 0,
            marks: 1
        },
        {
            id: 40,
            question: "UNICEF headquarters is located in:",
            options: ["Geneva", "New York", "Paris", "London"],
            correct: 1,
            marks: 1
        },
        {
            id: 41,
            question: "World Population Day is observed on:",
            options: ["July 11", "June 11", "August 11", "May 11"],
            correct: 0,
            marks: 1
        },
        {
            id: 42,
            question: "The National Health Mission was launched in:",
            options: ["2010", "2012", "2013", "2015"],
            correct: 2,
            marks: 1
        },
        {
            id: 43,
            question: "WHO was established in which year?",
            options: ["1945", "1946", "1948", "1950"],
            correct: 2,
            marks: 1
        },
        {
            id: 44,
            question: "World Mental Health Day is observed on:",
            options: ["October 10", "September 10", "November 10", "December 10"],
            correct: 0,
            marks: 1
        },
        {
            id: 45,
            question: "Janani Suraksha Yojana was launched in:",
            options: ["2003", "2005", "2007", "2009"],
            correct: 1,
            marks: 1
        },
        {
            id: 46,
            question: "The theme of World Health Day 2024 was:",
            options: ["My Health, My Right", "Universal Health Coverage", "Health for All", "Building a Fairer World"],
            correct: 0,
            marks: 1
        },
        {
            id: 47,
            question: "Ayushman Bharat was launched in which year?",
            options: ["2016", "2017", "2018", "2019"],
            correct: 2,
            marks: 1
        },
        {
            id: 48,
            question: "World Diabetes Day is observed on:",
            options: ["November 14", "October 14", "December 14", "September 14"],
            correct: 0,
            marks: 1
        },
        {
            id: 49,
            question: "The first nursing school in India was established in:",
            options: ["Chennai", "Mumbai", "Kolkata", "Delhi"],
            correct: 0,
            marks: 1
        },
        {
            id: 50,
            question: "World Breastfeeding Week is observed in:",
            options: ["First week of August", "First week of July", "First week of September", "First week of October"],
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
            options: ["Diarrhoea", "Diarrhea", "Diarhea", "Both A and B are correct"],
            correct: 3,
            marks: 1
        },
        {
            id: 52,
            question: "The synonym of 'acute' is:",
            options: ["Chronic", "Severe", "Mild", "Moderate"],
            correct: 1,
            marks: 1
        },
        {
            id: 53,
            question: "Choose the correct sentence:",
            options: [
                "The patient was admitted yesterday",
                "The patient were admitted yesterday",
                "The patient have admitted yesterday",
                "The patient has admit yesterday"
            ],
            correct: 0,
            marks: 1
        },
        {
            id: 54,
            question: "The antonym of 'benign' is:",
            options: ["Harmless", "Malignant", "Gentle", "Kind"],
            correct: 1,
            marks: 1
        },
        {
            id: 55,
            question: "Fill in the blank: The nurse _____ the patient's vital signs.",
            options: ["monitored", "monitoring", "monitor", "monitors"],
            correct: 0,
            marks: 1
        },
        {
            id: 56,
            question: "The meaning of 'prognosis' is:",
            options: ["Treatment plan", "Disease cause", "Predicted outcome", "Symptom analysis"],
            correct: 2,
            marks: 1
        },
        // Pharmacology (7 questions)
        {
            id: 57,
            question: "Which drug is the antidote for Heparin overdose?",
            options: ["Vitamin K", "Protamine sulfate", "Naloxone", "Flumazenil"],
            correct: 1,
            marks: 1
        },
        {
            id: 58,
            question: "Adrenaline is contraindicated in:",
            options: ["Anaphylaxis", "Cardiac arrest", "Finger block anesthesia", "Asthma"],
            correct: 2,
            marks: 1
        },
        {
            id: 59,
            question: "Which route provides the fastest drug absorption?",
            options: ["Oral", "Subcutaneous", "Intramuscular", "Intravenous"],
            correct: 3,
            marks: 1
        },
        {
            id: 60,
            question: "Aspirin works by inhibiting:",
            options: ["Thrombin", "Cyclooxygenase", "Vitamin K", "Factor X"],
            correct: 1,
            marks: 1
        },
        {
            id: 61,
            question: "The drug of choice for malignant hyperthermia is:",
            options: ["Diazepam", "Dantrolene", "Propranolol", "Morphine"],
            correct: 1,
            marks: 1
        },
        {
            id: 62,
            question: "Which drug is used as an antidote for morphine overdose?",
            options: ["Flumazenil", "Naloxone", "Atropine", "Neostigmine"],
            correct: 1,
            marks: 1
        },
        {
            id: 63,
            question: "Insulin is stored at:",
            options: ["Room temperature", "2-8°C", "Freezer", "-20°C"],
            correct: 1,
            marks: 1
        },
        // Community Health Nursing (6 questions)
        {
            id: 64,
            question: "The concept of Primary Health Care was adopted at:",
            options: ["Geneva Conference", "Alma-Ata Conference", "Ottawa Conference", "Jakarta Conference"],
            correct: 1,
            marks: 1
        },
        {
            id: 65,
            question: "The minimum residual chlorine in drinking water should be:",
            options: ["0.1 mg/L", "0.2 mg/L", "0.5 mg/L", "1.0 mg/L"],
            correct: 2,
            marks: 1
        },
        {
            id: 66,
            question: "ASHA worker is selected from:",
            options: ["Any village", "Same village she will serve", "Nearby city", "District headquarters"],
            correct: 1,
            marks: 1
        },
        {
            id: 67,
            question: "The causative agent of Typhoid fever is:",
            options: ["Vibrio cholerae", "Salmonella typhi", "Shigella", "E. coli"],
            correct: 1,
            marks: 1
        },
        {
            id: 68,
            question: "DDT is used for control of:",
            options: ["Water-borne diseases", "Air-borne diseases", "Vector-borne diseases", "Food-borne diseases"],
            correct: 2,
            marks: 1
        },
        {
            id: 69,
            question: "The recommended daily protein intake for an adult is:",
            options: ["0.5 g/kg body weight", "1 g/kg body weight", "1.5 g/kg body weight", "2 g/kg body weight"],
            correct: 1,
            marks: 1
        },
        // Midwifery (6 questions)
        {
            id: 70,
            question: "The normal duration of pregnancy is:",
            options: ["36 weeks", "38 weeks", "40 weeks", "42 weeks"],
            correct: 2,
            marks: 1
        },
        {
            id: 71,
            question: "Engagement of fetal head in primigravida occurs at:",
            options: ["32 weeks", "36 weeks", "38 weeks", "During labor"],
            correct: 1,
            marks: 1
        },
        {
            id: 72,
            question: "The hormone responsible for milk ejection is:",
            options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
            correct: 1,
            marks: 1
        },
        {
            id: 73,
            question: "Bishop score is used to assess:",
            options: ["Fetal maturity", "Cervical ripeness", "Amniotic fluid", "Placental function"],
            correct: 1,
            marks: 1
        },
        {
            id: 74,
            question: "The normal fetal heart rate is:",
            options: ["80-100 bpm", "100-120 bpm", "120-160 bpm", "160-200 bpm"],
            correct: 2,
            marks: 1
        },
        {
            id: 75,
            question: "Lochia rubra is present for approximately:",
            options: ["1-3 days", "4-10 days", "11-14 days", "15-21 days"],
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
            options: ["₹12,000", "₹16,000", "₹20,000", "₹24,000"],
            correct: 1,
            marks: 1
        },
        {
            id: 77,
            question: "A patient needs 500 ml of IV fluid over 4 hours. What is the flow rate per hour?",
            options: ["100 ml/hr", "125 ml/hr", "150 ml/hr", "175 ml/hr"],
            correct: 1,
            marks: 1
        },
        {
            id: 78,
            question: "If 3 nurses can complete a task in 12 hours, how long will 6 nurses take?",
            options: ["4 hours", "6 hours", "8 hours", "24 hours"],
            correct: 1,
            marks: 1
        },
        {
            id: 79,
            question: "A medicine costs ₹240 after a 20% discount. What was the original price?",
            options: ["₹280", "₹300", "₹320", "₹360"],
            correct: 1,
            marks: 1
        },
        {
            id: 80,
            question: "The ratio of doctors to nurses in a hospital is 2:5. If there are 40 doctors, how many nurses are there?",
            options: ["80", "100", "120", "150"],
            correct: 1,
            marks: 1
        },
        {
            id: 81,
            question: "A patient's temperature increased from 98°F to 102°F. What is the percentage increase?",
            options: ["2.04%", "4.08%", "4%", "6%"],
            correct: 1,
            marks: 1
        },
        {
            id: 82,
            question: "If the average of 5 readings is 72, what is their sum?",
            options: ["350", "360", "370", "380"],
            correct: 1,
            marks: 1
        },
        {
            id: 83,
            question: "A hospital has 250 beds. If 80% are occupied, how many beds are empty?",
            options: ["40", "50", "60", "70"],
            correct: 1,
            marks: 1
        },
        {
            id: 84,
            question: "Complete the series: 2, 6, 12, 20, 30, ?",
            options: ["40", "42", "44", "46"],
            correct: 1,
            marks: 1
        },
        {
            id: 85,
            question: "A nurse administered 3/4 of a 200 ml medication. How much was given?",
            options: ["100 ml", "125 ml", "150 ml", "175 ml"],
            correct: 2,
            marks: 1
        },
        {
            id: 86,
            question: "If a drug dose is 5 mg/kg and a patient weighs 60 kg, what is the total dose?",
            options: ["250 mg", "300 mg", "350 mg", "400 mg"],
            correct: 1,
            marks: 1
        },
        {
            id: 87,
            question: "Complete the series: A, C, F, J, ?",
            options: ["M", "N", "O", "P"],
            correct: 2,
            marks: 1
        },
        {
            id: 88,
            question: "A 15% saline solution means how many grams of salt in 100 ml?",
            options: ["10 g", "15 g", "20 g", "25 g"],
            correct: 1,
            marks: 1
        },
        {
            id: 89,
            question: "If 1 inch = 2.54 cm, how many cm are in 10 inches?",
            options: ["20.4 cm", "25.4 cm", "30.4 cm", "35.4 cm"],
            correct: 1,
            marks: 1
        },
        {
            id: 90,
            question: "A patient took medicine at 8:00 AM. If the next dose is after 6 hours, when is it due?",
            options: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
            correct: 1,
            marks: 1
        },
        {
            id: 91,
            question: "Find the odd one out: Stethoscope, Sphygmomanometer, Thermometer, Stretcher",
            options: ["Stethoscope", "Sphygmomanometer", "Thermometer", "Stretcher"],
            correct: 3,
            marks: 1
        },
        {
            id: 92,
            question: "If today is Wednesday, what day will it be after 100 days?",
            options: ["Thursday", "Friday", "Saturday", "Sunday"],
            correct: 1,
            marks: 1
        },
        {
            id: 93,
            question: "A patient's weight reduced from 80 kg to 72 kg. What is the percentage decrease?",
            options: ["8%", "10%", "12%", "15%"],
            correct: 1,
            marks: 1
        },
        {
            id: 94,
            question: "How many seconds are there in 2.5 hours?",
            options: ["7200", "9000", "10800", "12000"],
            correct: 1,
            marks: 1
        },
        {
            id: 95,
            question: "If A is B's sister and C is B's mother, what is A to C?",
            options: ["Mother", "Daughter", "Sister", "Aunt"],
            correct: 1,
            marks: 1
        },
        {
            id: 96,
            question: "A nurse walks 5 km North, then 3 km East. How far is she from the starting point?",
            options: ["√34 km", "8 km", "4 km", "√25 km"],
            correct: 0,
            marks: 1
        },
        {
            id: 97,
            question: "If 20% of a number is 50, what is the number?",
            options: ["200", "250", "300", "350"],
            correct: 1,
            marks: 1
        },
        {
            id: 98,
            question: "Complete the analogy: Doctor : Patient :: Teacher : ?",
            options: ["School", "Student", "Book", "Classroom"],
            correct: 1,
            marks: 1
        },
        {
            id: 99,
            question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
            options: ["0°", "7.5°", "15°", "22.5°"],
            correct: 1,
            marks: 1
        },
        {
            id: 100,
            question: "If a tablet costs ₹12.50 and a patient needs 4 tablets daily for 7 days, what is the total cost?",
            options: ["₹300", "₹350", "₹400", "₹450"],
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
