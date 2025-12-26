// Midwifery & Gynecological Nursing Questions
// Practice Questions for Staff Nurse Grade-II Exam

const midwiferyQuestions = [
    {
        id: 1,
        question: "Ca cervix is diagnosed by:",
        options: ["Amniocentesis", "USG", "Pap's smear", "CTG"],
        correct: 2
    },
    {
        id: 2,
        question: "MTP can be legally done up to:",
        options: ["12 weeks", "14 weeks", "16 weeks", "20 weeks"],
        correct: 0
    },
    {
        id: 3,
        question: "A preterm baby requires:",
        options: ["Kangaroo care", "Incubator nursing", "Phototherapy", "Oxygen tent"],
        correct: 1
    },
    {
        id: 4,
        question: "Foetal heart sound is a:",
        options: ["Presumptive sign of pregnancy", "Probable sign of pregnancy", "Positive sign of pregnancy", "Negative sign of pregnancy"],
        correct: 2
    },
    {
        id: 5,
        question: "Increased amniotic fluid index indicates:",
        options: ["Oligohydramnios", "Polyhydramnios", "Anhydramnios", "Hydatidiform mole"],
        correct: 1
    },
    {
        id: 6,
        question: "HCG stands for:",
        options: ["Human Chorionic Globulin", "Human Chorionic Gonadotrophin", "Hormonal Chorionic Gonadotrophin", "Human Cervical Gonadotrophin"],
        correct: 1
    },
    {
        id: 7,
        question: "Full form of APH is:",
        options: ["After Pregnancy Haemorrhage", "Ante Partum Haemorrhage", "Acute Pregnancy Haemorrhage", "Ante Placental Haemorrhage"],
        correct: 1
    },
    {
        id: 8,
        question: "Growth of endometrial tissue outside the uterus is called:",
        options: ["Adenomyosis", "Endometriosis", "Decidua", "Fibroid"],
        correct: 1
    },
    {
        id: 9,
        question: "Endometrium during pregnancy is known as:",
        options: ["Chorion", "Placenta", "Decidua", "Amnion"],
        correct: 2
    },
    {
        id: 10,
        question: "Fusion of sperm and ovum is called:",
        options: ["Implantation", "Ovulation", "Fertilization", "Gestation"],
        correct: 2
    },
    {
        id: 11,
        question: "End of child-bearing age is termed as:",
        options: ["Menarche", "Menopause", "Puberty", "Climacteric"],
        correct: 1
    },
    {
        id: 12,
        question: "Lactiferous ducts act as:",
        options: ["Milk secreting glands", "Milk producing cells", "Reservoir for breast milk", "Fat storage tissue"],
        correct: 2
    },
    {
        id: 13,
        question: "Normal length of non-pregnant uterus is:",
        options: ["5 cm", "8.5 cm", "9.5 cm", "18.5 cm"],
        correct: 2
    },
    {
        id: 14,
        question: "Haemoglobin level less than 7 gm/dl is classified as:",
        options: ["Mild anaemia", "Moderate anaemia", "Severe anaemia", "Normal"],
        correct: 2
    },
    {
        id: 15,
        question: "Prolonged head on perineum during second stage of labour is an indication for:",
        options: ["Forceps delivery", "Caesarean section", "Episiotomy", "Vacuum extraction"],
        correct: 2
    },
    {
        id: 16,
        question: "Which statement regarding HIV transmission is correct?",
        options: ["HIV always crosses placental barrier", "HIV never crosses placental barrier", "HIV may not cross placental barrier", "HIV crosses placenta in all cases"],
        correct: 2
    },
    {
        id: 17,
        question: "Maternal administration of glucocorticoids in preterm labour is done to:",
        options: ["Stop uterine contractions", "Increase maternal BP", "Promote foetal lung maturity", "Prevent infection"],
        correct: 2
    },
    {
        id: 18,
        question: "PAP smear is mainly used for screening of:",
        options: ["Carcinoma breast", "Carcinoma ovary", "Carcinoma cervix", "Carcinoma endometrium"],
        correct: 2
    },
    {
        id: 19,
        question: "IUFD stands for:",
        options: ["Intra Uterine Foetal Death", "Intra Uterine Foetal Distress", "Intra Umbilical Foetal Death", "Intra Uterine Fatal Disease"],
        correct: 0
    },
    {
        id: 20,
        question: "AFI stands for:",
        options: ["Amniotic Fluid Index", "Amniotic Flow Indicator", "Amniotic Foetal Index", "Amniotic Function Index"],
        correct: 0
    },
    {
        id: 21,
        question: "CPD stands for:",
        options: ["Cephalic Pelvic Distance", "Cervical Pelvic Disproportion", "Cephalo Pelvic Disproportion", "Central Pelvic Diameter"],
        correct: 2
    },
    {
        id: 22,
        question: "LOP refers to:",
        options: ["Left Occipito Posterior", "Left Occipito Anterior", "Left Oblique Position", "Left Occipital Plane"],
        correct: 0
    },
    {
        id: 23,
        question: "MAS stands for:",
        options: ["Meconium Aspiration Syndrome", "Maternal Aspiration Syndrome", "Meconium Airway Syndrome", "Maternal Anaemia Syndrome"],
        correct: 0
    },
    {
        id: 24,
        question: "Ovulation occurs due to:",
        options: ["FSH surge", "Estrogen peak", "LH surge", "Progesterone rise"],
        correct: 2
    },
    {
        id: 25,
        question: "Pawlik's grip is a part of:",
        options: ["Pelvic assessment", "Leopold manoeuvre", "Vaginal examination", "Fundal palpation only"],
        correct: 1
    },
    {
        id: 26,
        question: "Folic acid deficiency during pregnancy may cause:",
        options: ["Anaemia", "Down syndrome", "Neural tube defect", "Hydrocephalus"],
        correct: 2
    },
    {
        id: 27,
        question: "Subinvolution of uterus is assessed by measuring:",
        options: ["Cervical dilation", "Foetal lie", "Fundal height", "Pelvic diameter"],
        correct: 2
    },
    {
        id: 28,
        question: "Induction of labour can be done by:",
        options: ["Artificial rupture of membranes", "Leopold manoeuvre", "Internal podalic version", "Amniocentesis"],
        correct: 0
    },
    {
        id: 29,
        question: "Drug of choice for eclampsia is:",
        options: ["Diazepam", "Phenytoin", "Magnesium sulphate", "Oxytocin"],
        correct: 2
    },
    {
        id: 30,
        question: "Foetal heart sound (FHS) is a:",
        options: ["Presumptive sign of pregnancy", "Probable sign of pregnancy", "Positive sign of pregnancy", "Negative sign of pregnancy"],
        correct: 2
    },
    {
        id: 31,
        question: "The suture between the two parietal bones is called:",
        options: ["Coronal suture", "Lambdoid suture", "Sagittal suture", "Frontal suture"],
        correct: 2
    },
    {
        id: 32,
        question: "Plotting of cervical dilatation on a partograph begins on the:",
        options: ["Alert line", "Action line", "Base line", "Time line"],
        correct: 0
    },
    {
        id: 33,
        question: "The denominator of face presentation is:",
        options: ["Occiput", "Mentum", "Brow", "Vertex"],
        correct: 1
    },
    {
        id: 34,
        question: "Average calorie requirement during pregnancy is:",
        options: ["2000 K.Cal/day", "2200 K.Cal/day", "2500 K.Cal/day", "3000 K.Cal/day"],
        correct: 2
    },
    {
        id: 35,
        question: "Prostaglandin acts on which structure?",
        options: ["Ovary", "Myometrium", "Endometrium", "Placenta"],
        correct: 1
    },
    {
        id: 36,
        question: "Oblique diameter of pelvic brim is:",
        options: ["10 cm", "11 cm", "12 cm", "13 cm"],
        correct: 2
    },
    {
        id: 37,
        question: "In oligohydramnios, amniotic fluid is:",
        options: ["Less than 100 ml", "Less than 200 ml", "Less than 500 ml", "Less than 1000 ml"],
        correct: 1
    },
    {
        id: 38,
        question: "Most common drug used for induction of labour is:",
        options: ["Misoprostol", "Oxytocin", "Prostaglandin E2", "Magnesium sulphate"],
        correct: 1
    },
    {
        id: 39,
        question: "Vault, base & face are parts of uterus:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 40,
        question: "Caput succedaneum appears at birth:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 41,
        question: "Amenorrhoea presents in 75% cases of ectopic pregnancy:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 42,
        question: "Induction should be done after 2 hours of labour pain:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 43,
        question: "Pre-eclampsia completed with convulsion is called PET:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 44,
        question: "APH stands for:",
        options: ["Ante Partum Haemorrhage", "After Pregnancy Haemorrhage", "Acute Placental Haemorrhage", "Antepartum Hormone"],
        correct: 0
    },
    {
        id: 45,
        question: "FHR stands for:",
        options: ["Foetal Heart Rate", "Foetal Heart Rhythm", "Foetal Health Record", "Foetal Hypoxia Response"],
        correct: 0
    },
    {
        id: 46,
        question: "LOP stands for:",
        options: ["Left Occipito Posterior", "Left Oblique Position", "Left Occipital Plane", "Left Occipito Anterior"],
        correct: 0
    },
    {
        id: 47,
        question: "TSH stands for:",
        options: ["Thyroid Stimulating Hormone", "Thyroid Secreting Hormone", "Total Serum Hormone", "Thyroid Sulphate Hormone"],
        correct: 0
    },
    {
        id: 48,
        question: "AIDS stands for:",
        options: ["Acquired Immune Deficiency Syndrome", "Auto Immune Deficiency Syndrome", "Acquired Immunity Deficiency Syndrome", "Auto Immune Disorder Syndrome"],
        correct: 0
    },
    {
        id: 49,
        question: "Oral thrush is caused by:",
        options: ["Candida Albicans", "Haemolytic Anaemia", "Placenta", "Newborn"],
        correct: 0
    },
    {
        id: 50,
        question: "Pawlik's Grip is used for:",
        options: ["Abdominal palpation", "Pelvic assessment", "Vaginal examination", "Neonatal assessment"],
        correct: 1
    },
    {
        id: 51,
        question: "Clitoris is a:",
        options: ["Placenta", "Rudimentary organ", "Foetal skull", "Neonatal organ"],
        correct: 1
    },
    {
        id: 52,
        question: "Bipartita refers to:",
        options: ["Placenta", "Foetal skull", "Abdominal palpation", "Newborn"],
        correct: 0
    },
    {
        id: 53,
        question: "Resuscitation is done for:",
        options: ["Placenta", "Foetal skull", "Newborn", "Abdominal palpation"],
        correct: 2
    },
    {
        id: 54,
        question: "Oligohydramnios means:",
        options: ["Liquor amnii is deficient", "Premature rupture of membranes", "Placenta marginata", "All of the above"],
        correct: 0
    },
    {
        id: 55,
        question: "Skin is covered with lanugo during:",
        options: ["12 weeks of post conception", "20 weeks of post conception", "28 weeks of post conception", "34 weeks of post conception"],
        correct: 1
    },
    {
        id: 56,
        question: "Biparietal diameter is 8.5 cm:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 57,
        question: "Anterior fontanelle closes at the age of 18 months:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 58,
        question: "Three or more consecutive spontaneous abortions is termed as missed abortion:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 59,
        question: "Hydrops fetalis is not a serious form of Rh haemolytic disease:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 60,
        question: "Route of the exchange transfusion should preferably be through:",
        options: ["Umbilical vein", "Umbilical artery", "Peripheral vein", "Femoral vein"],
        correct: 0
    },
    {
        id: 61,
        question: "The measurement from the lower border of the symphysis pubis to the sacral promontory is called:",
        options: ["Obstetric conjugate", "Diagonal conjugate", "True conjugate", "Pelvic inlet"],
        correct: 1
    },
    {
        id: 62,
        question: "The decidua directly under the implanted ovum is called:",
        options: ["Decidua basalis", "Decidua capsularis", "Decidua parietalis", "Endometrium"],
        correct: 0
    },
    {
        id: 63,
        question: "Fertilized ovum implanted outside the normal uterine cavity is called:",
        options: ["Molar pregnancy", "Ectopic pregnancy", "Placenta previa", "Missed abortion"],
        correct: 1
    },
    {
        id: 64,
        question: "Foetal heart sound is a:",
        options: ["Presumptive sign of pregnancy", "Probable sign of pregnancy", "Positive sign of pregnancy", "Negative sign of pregnancy"],
        correct: 2
    },
    {
        id: 65,
        question: "In atonic uterus, pulling the cord without separation of placenta may cause:",
        options: ["Haemorrhage", "Infection", "Uterine inversion", "Placental retention"],
        correct: 2
    },
    {
        id: 66,
        question: "Retrolental fibroplasia is caused by:",
        options: ["Excessive oxygen use", "Vitamin A deficiency", "Premature birth", "Maternal diabetes"],
        correct: 0
    },
    {
        id: 67,
        question: "Chorionic gonadotropic hormone is secreted from:",
        options: ["Syncytiotrophoblast", "Cytotrophoblast", "Anterior pituitary gland", "Ovary"],
        correct: 0
    },
    {
        id: 68,
        question: "Wharton's jelly of the umbilical cord is formed from:",
        options: ["Ectoderm", "Endoderm", "Mesoderm", "Trophoblast"],
        correct: 2
    },
    {
        id: 69,
        question: "True labour contractions are:",
        options: ["Painful, irregular without cervical dilation", "Painful, regular and bring about progressive cervical dilation", "Painless, irregular with cervical dilation", "Painless, regular without cervical dilation"],
        correct: 1
    },
    {
        id: 70,
        question: "Hormone responsible for stimulating lactation after delivery is:",
        options: ["Oxytocin", "Progesterone", "Prolactin", "Estrogen"],
        correct: 2
    },
    {
        id: 71,
        question: "Which hormone is used as the basis for pregnancy test?",
        options: ["LH", "Estrogen", "Progesterone", "HCG"],
        correct: 3
    },
    {
        id: 72,
        question: "The knee joint is an example of:",
        options: ["Hinge joint", "Ball & socket joint", "Saddle joint", "Gliding joint"],
        correct: 0
    },
    {
        id: 73,
        question: "Which statement is true in relation to bilirubin?",
        options: ["It is formed after degradation of RBC", "It is a blood pigment", "It gives colour to urine and faeces", "All of the above"],
        correct: 3
    },
    {
        id: 74,
        question: "The best method of making milk germ-free is:",
        options: ["Boiling", "Pasteurization", "Freezing", "Fermentation"],
        correct: 1
    },
    {
        id: 75,
        question: "The outer layer of the skin is called:",
        options: ["Dermis", "Epidermis", "Subcutaneous tissue", "Hypodermis"],
        correct: 1
    },
    {
        id: 76,
        question: "In the lungs, gas exchange occurs within the:",
        options: ["Bronchi", "Alveoli", "Trachea", "Pleura"],
        correct: 1
    },
    {
        id: 77,
        question: "The serous membrane of the abdominal cavity is called:",
        options: ["Pericardium", "Peritoneum", "Pleura", "Mesothelium"],
        correct: 1
    },
    {
        id: 78,
        question: "The production of red blood cells is called:",
        options: ["Leukopoiesis", "Thrombopoiesis", "Haematopoiesis", "Erythropoiesis"],
        correct: 3
    },
    {
        id: 79,
        question: "Thrush is caused by:",
        options: ["Protozoa", "Fungi", "Bacteria", "Virus"],
        correct: 1
    },
    {
        id: 80,
        question: "Axon is a type of:",
        options: ["Sensory nerve", "Efferent nerve", "Olfactory nerve", "Motor neuron"],
        correct: 1
    },
    {
        id: 81,
        question: "Islet of Langerhans is found in:",
        options: ["Thyroid", "Pancreas", "Adrenal gland", "Pituitary"],
        correct: 1
    },
    {
        id: 82,
        question: "Spores are produced by:",
        options: ["Protozoa", "Bacteria", "Fungi", "Virus"],
        correct: 2
    },
    {
        id: 83,
        question: "Olfactory nerve is responsible for:",
        options: ["Sight", "Hearing", "Sense of smell", "Taste"],
        correct: 2
    },
    {
        id: 84,
        question: "The more common name for the pharynx is the voice box:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 85,
        question: "A human body has 12 pairs of ribs:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 86,
        question: "The nucleus contains the hereditary material DNA:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 87,
        question: "HIV infection may be transmitted by sharing utensils of the infected person:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 88,
        question: "Each nephron is an independent urine-making unit:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 89,
        question: "The longest and heaviest bone in the human body is:",
        options: ["Tibia", "Fibula", "Humerus", "Femur"],
        correct: 3
    },
    {
        id: 90,
        question: "The tympanic cavity is located within the:",
        options: ["External ear", "Inner ear", "Middle ear", "Semicircular canal"],
        correct: 2
    },
    {
        id: 91,
        question: "The mitral valve of the heart lies between:",
        options: ["Right atrium and right ventricle", "Left atrium and left ventricle", "Left ventricle and aorta", "Right ventricle and pulmonary artery"],
        correct: 1
    },
    {
        id: 92,
        question: "The anatomical term for the Adam's apple is:",
        options: ["Thyroid cartilage", "Cricoid cartilage", "Epiglottis", "Vocal cord"],
        correct: 0
    },
    {
        id: 93,
        question: "Which of the following vessels have valves?",
        options: ["Arteries", "Capillaries", "Veins", "Arterioles"],
        correct: 2
    },
    {
        id: 94,
        question: "The part of the eye consisting of nervous tissue is:",
        options: ["Sclera", "Choroid", "Iris", "Retina"],
        correct: 3
    },
    {
        id: 95,
        question: "Which of the following serves as the power-house of the cell?",
        options: ["Ribosome", "Mitochondria", "Endoplasmic reticulum", "Nucleus"],
        correct: 1
    },
    {
        id: 96,
        question: "Oligohydramnios means:",
        options: ["Liquor amnii is deficient", "Premature rupture of membranes", "Placenta marginata", "All of the above"],
        correct: 0
    },
    {
        id: 97,
        question: "Skin is covered with lanugo during:",
        options: ["12 weeks of post conception", "20 weeks of post conception", "28 weeks of post conception", "34 weeks of post conception"],
        correct: 1
    },
    {
        id: 98,
        question: "Biparietal diameter is 8.5 cm:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 99,
        question: "Anterior fontanelle closes at the age of 18 months:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 100,
        question: "Three or more consecutive spontaneous abortions is termed as missed abortion:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 101,
        question: "Hydrops fetalis is not a serious form of Rh haemolytic disease:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 102,
        question: "Route of exchange transfusion should preferably be through:",
        options: ["Umbilical vein", "Umbilical artery", "Peripheral vein", "Femoral vein"],
        correct: 0
    },
    {
        id: 103,
        question: "Magnesium sulphate (MgSO₄) is used in:",
        options: ["High risk pregnancy", "Congenital deformity", "Posterior fontanelle", "Abnormal lochial discharge"],
        correct: 0
    },
    {
        id: 104,
        question: "Teenager under 17 years is classified as:",
        options: ["High risk pregnancy", "Congenital deformity", "Posterior fontanelle", "Abnormal lochial discharge"],
        correct: 0
    },
    {
        id: 105,
        question: "Spina bifida is a:",
        options: ["High risk pregnancy", "Congenital deformity", "Posterior fontanelle", "Abnormal lochial discharge"],
        correct: 1
    },
    {
        id: 106,
        question: "Foetal skull contains:",
        options: ["High risk pregnancy", "Congenital deformity", "Posterior fontanelle", "Abnormal lochial discharge"],
        correct: 2
    },
    {
        id: 107,
        question: "Eclampsia is treated with:",
        options: ["Magnesium sulphate", "Oxytocin", "Antibiotics", "Blood transfusion"],
        correct: 0
    },
    {
        id: 108,
        question: "Occipito-frontal diameter of foetal skull is:",
        options: ["10.5 cm", "11.5 cm", "12 cm", "13 cm"],
        correct: 1
    },
    {
        id: 109,
        question: "The causative organism of omphalitis is:",
        options: ["Staphylococcus", "Chlamydia trachomatis", "E. coli", "Streptococcus"],
        correct: 0
    },
    {
        id: 110,
        question: "The suture between parietal and occipital bone is:",
        options: ["Coronal suture", "Lambdoid suture", "Sagittal suture", "Frontal suture"],
        correct: 1
    },
    {
        id: 111,
        question: "Drug of choice for management of postpartum haemorrhage is:",
        options: ["Ergometrine", "Misoprostol", "Oxytocin", "Magnesium sulphate"],
        correct: 2
    },
    {
        id: 112,
        question: "Foetal heart sound can be auscultated after:",
        options: ["12–14 weeks", "16–20 weeks", "20–24 weeks", "24–28 weeks"],
        correct: 1
    },
    {
        id: 113,
        question: "Causes of antepartum haemorrhage except:",
        options: ["Placenta praevia", "Abruptio placentae", "Malnutrition", "Over-distension of uterus"],
        correct: 2
    },
    {
        id: 114,
        question: "Management protocol of uterine perforation includes:",
        options: ["Observation of pulse and BP", "Assess size, site of perforation, and haemorrhage", "Laparotomy followed by repair", "All of the above"],
        correct: 3
    },
    {
        id: 115,
        question: "Causes of puerperal pyrexia include:",
        options: ["Visceral injuries", "Puerperal sepsis", "Preterm labour", "Severe dehydration"],
        correct: 1
    },
    {
        id: 116,
        question: "Montgomery's tubercle is a type of:",
        options: ["Sebaceous gland", "Lymph gland", "Endocrine gland", "Sweat gland"],
        correct: 0
    },
    {
        id: 117,
        question: "Retained bit of placenta may cause:",
        options: ["Antepartum haemorrhage (APH)", "Postpartum haemorrhage (PPH)", "Prolapse", "Miscarriage"],
        correct: 1
    },
    {
        id: 118,
        question: "Hormone responsible for stimulating lactation after delivery is:",
        options: ["Oxytocin", "Progesterone", "Prolactin", "Estrogen"],
        correct: 2
    },
    {
        id: 119,
        question: "Implantation of a fertilized ovum outside the uterus is called:",
        options: ["Endomic pregnancy", "Ectopic pregnancy", "Twin pregnancy", "Molar pregnancy"],
        correct: 1
    },
    {
        id: 120,
        question: "HIV may cross placental barrier:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 121,
        question: "Coitus is to be avoided during second trimester:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 122,
        question: "The age of puberty varies between 10 and 14 years:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 123,
        question: "Ultrasound is harmful during first trimester of pregnancy:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 124,
        question: "Home delivery should be discouraged:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 125,
        question: "Mechanical stretching of skin during pregnancy leads to pinkish rupture marks called:",
        options: ["Striae gravidarum", "Quickening", "Braxton Hicks contraction", "Linea nigra"],
        correct: 0
    },
    {
        id: 126,
        question: "Daily iron requirement during pregnancy is:",
        options: ["30 mg", "45 mg", "60 mg", "75 mg"],
        correct: 1
    },
    {
        id: 127,
        question: "Intermittent painless contractions which a pregnant woman cannot feel are called:",
        options: ["True labour contractions", "Braxton Hicks contractions", "Quickening", "Ferguson reflex"],
        correct: 1
    },
    {
        id: 128,
        question: "When mother feels the first fetal movement it is called:",
        options: ["Quickening", "Moulding", "Fetal lie", "CPD"],
        correct: 0
    },
    {
        id: 129,
        question: "Relation of fetal long axis with that of mother is called:",
        options: ["Fetal lie", "Fetal attitude", "Fetal presentation", "Quickening"],
        correct: 0
    },
    {
        id: 130,
        question: "Normal return of reproductive organs to pre-pregnant stage is called subinvolution:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 131,
        question: "Cervical mucus plug during pregnancy is called operculum:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 132,
        question: "Ovulation occurs when progesterone level is high:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 133,
        question: "After birth, baby should be put on mother's breast for feeding as early as possible (within 24–36 hours):",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 134,
        question: "Acute inversion of uterus results from mismanagement of third stage of labour:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 135,
        question: "Prolactin is a:",
        options: ["Lactogenic hormone", "Colostrum", "Fetal wellbeing monitor", "Placental hormone"],
        correct: 0
    },
    {
        id: 136,
        question: "HCG hormone is a:",
        options: ["Placental hormone", "Lactogenic hormone", "Oxytocin", "Colostrum"],
        correct: 0
    },
    {
        id: 137,
        question: "FHS is for:",
        options: ["Monitoring fetal wellbeing", "Preventing PPH", "Cause of PPH", "Thick sticky secretion of breast"],
        correct: 0
    },
    {
        id: 138,
        question: "Moulding refers to:",
        options: ["Overlapping of skull bones", "Vertex presentation", "Breech presentation", "Caesarean section"],
        correct: 0
    },
    {
        id: 139,
        question: "Oxytocin is used to:",
        options: ["Prevent PPH", "Cause PPH", "Lactogenic hormone", "Monitoring fetal wellbeing"],
        correct: 0
    },
    {
        id: 140,
        question: "CPD (Cephalopelvic disproportion) may require:",
        options: ["Caesarean section", "Skilled birth attendant", "Colostrum", "Moulding"],
        correct: 0
    },
    {
        id: 141,
        question: "SBA stands for:",
        options: ["Skilled person for obstetric care", "Lactogenic hormone", "Placental hormone", "Colostrum"],
        correct: 0
    },
    {
        id: 142,
        question: "Sub Occipito Bregma refers to:",
        options: ["Vertex presentation", "Breech presentation", "Fetal lie", "Overlapping of skull bones"],
        correct: 0
    },
    {
        id: 143,
        question: "Atonic uterus may:",
        options: ["Cause PPH", "Prevent PPH", "Help lactation", "Monitor fetal wellbeing"],
        correct: 0
    },
    {
        id: 144,
        question: "Thick sticky secretion of breast is:",
        options: ["Colostrum", "Oxytocin", "Prolactin", "Placental hormone"],
        correct: 0
    },
    {
        id: 145,
        question: "Retrolental fibroplasia is due to:",
        options: ["Premature birth", "Excessive administration of high concentration oxygen in premature babies", "Maternal diabetes", "Genetic disorder"],
        correct: 1
    },
    {
        id: 146,
        question: "Fertilized ovum implanted outside the normal uterine cavity is called:",
        options: ["Molar pregnancy", "Ectopic pregnancy", "Twin pregnancy", "Missed abortion"],
        correct: 1
    },
    {
        id: 147,
        question: "Thickened vascular endometrium of the pregnant uterus is known as:",
        options: ["Endometrium", "Decidua", "Myometrium", "Placenta"],
        correct: 1
    },
    {
        id: 148,
        question: "Blood-stained mucoid discharge at the start of labour is called:",
        options: ["Lochia", "Show", "Mucus plug", "Spotting"],
        correct: 1
    },
    {
        id: 149,
        question: "The sagittal suture lies between:",
        options: ["Frontal and parietal bones", "Two parietal bones", "Parietal and occipital bones", "Occipital and temporal bones"],
        correct: 1
    },
    {
        id: 150,
        question: "Pawlik's grip is used for:",
        options: ["Abdominal palpation", "Vaginal examination", "Monitoring fetal heart", "Bed rest"],
        correct: 0
    },
    {
        id: 151,
        question: "Postnatal period is associated with:",
        options: ["Eclampsia", "Involution", "Proteinuria", "Threatened abortion"],
        correct: 1
    },
    {
        id: 152,
        question: "Hegar's sign is:",
        options: ["Softness of the isthmus", "Positive sign of pregnancy", "Proteinuria", "Congenital deformity"],
        correct: 0
    },
    {
        id: 153,
        question: "Fetal heart sound is:",
        options: ["Bed rest", "Positive sign of pregnancy", "Abdominal palpation", "Engagement of head"],
        correct: 1
    },
    {
        id: 154,
        question: "Preeclampsia is characterized by:",
        options: ["Complete bed rest", "Proteinuria", "Eclampsia", "Involution"],
        correct: 1
    },
    {
        id: 155,
        question: "VDRL test is a:",
        options: ["Blood sugar test", "Serological test", "Urine test", "Liver function test"],
        correct: 1
    },
    {
        id: 156,
        question: "Threatened abortion is managed by:",
        options: ["Bed rest", "Oxytocin", "Caesarean section", "Folic acid"],
        correct: 0
    },
    {
        id: 157,
        question: "Descent refers to:",
        options: ["Engagement of fetal head", "Breech presentation", "Vertex presentation", "Placental delivery"],
        correct: 0
    },
    {
        id: 158,
        question: "Magnesium sulphate (Magsulph) is used in:",
        options: ["Eclampsia", "Threatened abortion", "PPH", "Fetal monitoring"],
        correct: 0
    },
    {
        id: 159,
        question: "Congenital deformity example:",
        options: ["Spina bifida", "Cleft lip", "Polydactyly", "All of the above"],
        correct: 0
    },
    {
        id: 160,
        question: "In fetal circulation, ductus venosus connects umbilical vein to inferior vena cava:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 161,
        question: "The term 'presentation' refers to the long axis of fetus to that of mother:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 162,
        question: "Early feeding within half to one hour of birth is widely recommended for newborn babies:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 163,
        question: "Second stage begins with separation, descent & expulsion of placenta with its membranes:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 164,
        question: "Total amount of amniotic fluid exceeding 1500 ml is called Oligohydramnios:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 165,
        question: "Bleeding occurring after 20 weeks of pregnancy in a normally situated placenta is called:",
        options: ["Abruptio placentae", "Placenta previa", "Ectopic pregnancy", "Molar pregnancy"],
        correct: 0
    },
    {
        id: 166,
        question: "When amniotic fluid becomes greenish in color, it is called:",
        options: ["Meconium-stained amniotic fluid", "Bloody show", "Clear liquor", "Hydramnios"],
        correct: 0
    },
    {
        id: 167,
        question: "A lactating mother needs additional calories in diet of:",
        options: ["300 Kcal", "500 Kcal", "700 Kcal", "900 Kcal"],
        correct: 2
    },
    {
        id: 168,
        question: "Immediately after delivery of the baby, which drug should be given intramuscularly to prevent PPH?",
        options: ["Ergometrine", "Oxytocin", "Misoprostol", "Magnesium sulphate"],
        correct: 1
    },
    {
        id: 169,
        question: "The transverse diameter of anatomical outlet is:",
        options: ["10 cm", "11 cm", "12 cm", "13 cm"],
        correct: 1
    },
    {
        id: 170,
        question: "Majority of ectopic pregnancies occur in:",
        options: ["Ovary", "Tubal", "Uterus", "Cervix"],
        correct: 1
    },
    {
        id: 171,
        question: "In primigravida, engagement of the fetal head occurs after:",
        options: ["35 completed weeks", "36 completed weeks", "37 completed weeks", "38 completed weeks"],
        correct: 2
    },
    {
        id: 172,
        question: "Full form of ICTC is:",
        options: ["Integrated Counseling & Testing", "International Child Testing Center", "Integrated Childcare & Therapy", "Internal Counseling & Treatment Center"],
        correct: 0
    },
    {
        id: 173,
        question: "Placenta previa is associated with:",
        options: ["Fundal height less than gestational age", "Non-engaged head", "IUGR", "Anemia pregnancy"],
        correct: 1
    },
    {
        id: 174,
        question: "Subinvolution is associated with:",
        options: ["Fundal height less than gestational age", "Non-engaged head", "IUGR", "Anemia pregnancy"],
        correct: 0
    },
    {
        id: 175,
        question: "Preterm baby requires:",
        options: ["Fundal height less than gestational age", "Incubator nursing", "Anemia pregnancy", "Induction of labour"],
        correct: 1
    },
    {
        id: 176,
        question: "High risk mother includes:",
        options: ["Fundal height less than gestational age", "Non-engaged head", "IUGR", "Anemia pregnancy"],
        correct: 3
    },
    {
        id: 177,
        question: "Induction of labour can be done by:",
        options: ["Incubator nursing", "Exchange blood transfusion", "Artificial rupture of membrane", "Omphalocele"],
        correct: 2
    },
    {
        id: 178,
        question: "Congenital deformity example:",
        options: ["IUGR", "Omphalocele", "Anemia", "Non-engaged head"],
        correct: 1
    },
    {
        id: 179,
        question: "Prolonged head perineum is an indication of giving episiotomy:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 180,
        question: "Retained bits of placenta is a cause of postpartum haemorrhage:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 181,
        question: "Post-coital bleeding may be a sign of cervical cancer:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 182,
        question: "HIV can cross the placental barrier:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 183,
        question: "Macrosomic baby is a complication of diabetes in pregnancy:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 184,
        question: "The distance between the lower border of symphysis pubis to the midpoint of sacral promontory is known as:",
        options: ["True conjugate", "Obstetric conjugate", "Diagonal conjugate", "Anatomical conjugate"],
        correct: 2
    },
    {
        id: 185,
        question: "Following delivery or abortion, Anti-D immunoglobulin should be administered to a Rh-negative mother within:",
        options: ["72 hours", "48 hours", "24 hours", "12 hours"],
        correct: 0
    },
    {
        id: 186,
        question: "In true labour, contractions will be:",
        options: ["Painful, irregular without cervical dilatation", "Painful, irregular with cervical dilatation", "Painful, regular & progressive cervical dilatation", "Painless, regular with cervical dilatation"],
        correct: 2
    },
    {
        id: 187,
        question: "In atonic uterus, pulling the cord without separation of placenta causes:",
        options: ["Prolapse of uterus", "Inversion of uterus", "Rupture of uterus", "Hemorrhage only"],
        correct: 1
    },
    {
        id: 188,
        question: "Physiological anaemia occurs during pregnancy due to:",
        options: ["Inadequate intake of iron", "Decreased production of RBC", "Increased plasma volume", "Infection"],
        correct: 2
    },
    {
        id: 189,
        question: "Umbilical cord contains:",
        options: ["Wharton's jelly", "Ligamentum venosum", "Syncytiotrophoblast", "HCG"],
        correct: 0
    },
    {
        id: 190,
        question: "Ductus venosus becomes:",
        options: ["Ligamentum venosum", "Wharton's jelly", "Partogram", "HCG"],
        correct: 0
    },
    {
        id: 191,
        question: "Braxton Hicks contractions are:",
        options: ["Painful, regular contractions", "Irregular, painless contractions", "True labour contractions", "Painless dilation of cervix"],
        correct: 1
    },
    {
        id: 192,
        question: "Goodell's sign refers to:",
        options: ["Softening of cervix", "Production of milk", "Progress of labour", "Birth injury"],
        correct: 0
    },
    {
        id: 193,
        question: "Progress of labour is monitored by:",
        options: ["Partogram", "HCG", "Braxton Hicks contractions", "Syncytiotrophoblast"],
        correct: 0
    },
    {
        id: 194,
        question: "HCG is secreted by:",
        options: ["Syncytiotrophoblast", "Ductus venosus", "Wharton's jelly", "Ligamentum venosum"],
        correct: 0
    },
    {
        id: 195,
        question: "Prolactin is responsible for:",
        options: ["Production of milk", "Fetal growth", "Cervical softening", "Labor contractions"],
        correct: 0
    },
    {
        id: 196,
        question: "Intrauterine death is identified by:",
        options: ["Spalding sign", "Hydrops fetalis", "Erb's palsy", "Polyhydramnios"],
        correct: 0
    },
    {
        id: 197,
        question: "Birth injury example:",
        options: ["Erb's palsy", "Spalding sign", "HCG", "Polyhydramnios"],
        correct: 0
    },
    {
        id: 198,
        question: "Hydrops fetalis is a:",
        options: ["Congenital abnormality", "Birth injury", "Intrauterine death", "Labor complication"],
        correct: 0
    },
    {
        id: 199,
        question: "Thick mucous cervical plug during pregnancy is known as:",
        options: ["Operculum", "Mucus plug", "Cervical cap", "Chorion"],
        correct: 0
    },
    {
        id: 200,
        question: "Bi-parietal diameter of fetal skull is approximately:",
        options: ["85 cm", "9.5 cm", "10.5 cm", "11 cm"],
        correct: 1
    },
    {
        id: 201,
        question: "Fetal heart sound may be audible by foetoscope at the end of:",
        options: ["16 weeks", "18–20 weeks", "22 weeks", "24 weeks"],
        correct: 1
    },
    {
        id: 202,
        question: "Part of the fetus which lies in the lower part of uterus is called:",
        options: ["Presentation", "Position", "Attitude", "Lie"],
        correct: 0
    },
    {
        id: 203,
        question: "In polyhydramnios, the amount of amniotic fluid is more than:",
        options: ["1000 ml", "1500 ml", "2000 ml", "2500 ml"],
        correct: 2
    },
    {
        id: 204,
        question: "The umbilical cord lying inside the vagina or outside the vulva following ruptured membranes is called:",
        options: ["Cord presentation", "Prolapsed cord", "Nuchal cord", "Umbilical hernia"],
        correct: 0
    },
    {
        id: 205,
        question: "Retraction/pathological ring cannot be felt vaginally:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 206,
        question: "Rupture of membranes for more than 24 hours before delivery is called:",
        options: ["Premature rupture of membranes", "Prolonged rupture of membranes", "Artificial rupture of membranes", "Preterm rupture"],
        correct: 1
    },
    {
        id: 207,
        question: "The endometrium of the pregnant uterus is called:",
        options: ["Trophoblast", "Decidua", "Chorion", "Myometrium"],
        correct: 1
    },
    {
        id: 208,
        question: "Vascularized tertiary chorionic villi are completed on the 21st day of pregnancy:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 209,
        question: "Quickening occurs at:",
        options: ["12–14 weeks", "16–20 weeks", "22–24 weeks", "28 weeks"],
        correct: 1
    },
    {
        id: 210,
        question: "Oligohydramnios refers to:",
        options: ["Excess amniotic fluid", "Deficient amniotic fluid", "Blood-stained amniotic fluid", "Meconium-stained amniotic fluid"],
        correct: 1
    },
    {
        id: 211,
        question: "Magnesium sulphate (Magsulph) is used to manage:",
        options: ["Diabetes Mellitus", "Eclampsia", "Preterm labour", "Polyhydramnios"],
        correct: 1
    },
    {
        id: 212,
        question: "HbA1C is a marker for:",
        options: ["Anaemia", "Diabetes Mellitus", "Proteinuria", "Hypertension"],
        correct: 1
    },
    {
        id: 213,
        question: "Placenta previa may cause:",
        options: ["Antepartum haemorrhage", "Prolonged labour", "Malpresentation", "KMC"],
        correct: 0
    },
    {
        id: 214,
        question: "Oxytocin is used for:",
        options: ["Induction of labour", "Prevention of hypothermia", "Treating oral thrush", "Treating diabetes"],
        correct: 0
    },
    {
        id: 215,
        question: "Proteinuria is a sign of:",
        options: ["Eclampsia", "Pre-eclampsia", "Oligohydramnios", "Polyhydramnios"],
        correct: 1
    },
    {
        id: 216,
        question: "Oral thrush is caused by:",
        options: ["Candida albicans", "Staphylococcus aureus", "Escherichia coli", "Streptococcus pyogenes"],
        correct: 0
    },
    {
        id: 217,
        question: "Ventouse delivery is used in:",
        options: ["Prolonged second stage of labour", "Polyhydramnios", "Preterm labour", "Placenta previa"],
        correct: 0
    },
    {
        id: 218,
        question: "KMC (Kangaroo Mother Care) is used for:",
        options: ["Prevention of hypothermia in newborn", "Treatment of eclampsia", "Labour induction", "Diabetes control"],
        correct: 0
    },
    {
        id: 219,
        question: "The cervical plug present in pregnant uterus is called:",
        options: ["Operculum", "Chorion", "Decidua", "Amnion"],
        correct: 0
    },
    {
        id: 220,
        question: "External ballottement can be elicited as early as:",
        options: ["12 weeks", "20 weeks", "28 weeks", "38 weeks"],
        correct: 3
    },
    {
        id: 221,
        question: "Collection of blood between the pericranium and the flat bone of the skull is called:",
        options: ["Caput succedaneum", "Cephalhematoma", "Subgaleal haemorrhage", "Moulding"],
        correct: 1
    },
    {
        id: 222,
        question: "Prolonged labour is defined as combined duration of first and second stage more than:",
        options: ["12 hours", "18 hours", "24 hours", "30 hours"],
        correct: 2
    },
    {
        id: 223,
        question: "Amniotic fluid is formed from:",
        options: ["Maternal origin only", "Fetal origin only", "Both maternal and fetal origin", "Placental secretions only"],
        correct: 2
    },
    {
        id: 224,
        question: "Intrauterine death can be identified by:",
        options: ["Bregma", "Spalding sign", "Anterior fontanelle", "Burdha position of foetus"],
        correct: 1
    },
    {
        id: 225,
        question: "Hydrops fetalis is associated with:",
        options: ["Muscle relaxant", "Burdha position of foetus", "Spalding sign", "Fetal anomaly"],
        correct: 3
    },
    {
        id: 226,
        question: "Duvadilan is used as:",
        options: ["Oxytocic", "Muscle relaxant", "Induction agent", "Analgesic"],
        correct: 1
    },
    {
        id: 227,
        question: "Anterior fontanelle is also called:",
        options: ["Spalding sign", "Bregma", "Occipital fontanelle", "Vertex"],
        correct: 1
    },
    {
        id: 228,
        question: "Syntocinon is used for:",
        options: ["Induction of labour", "Muscle relaxation", "Fetal monitoring", "Pain relief"],
        correct: 0
    },
    {
        id: 229,
        question: "Dizygotic twins have:",
        options: ["One ovum", "Two ova", "Three ova", "Four ova"],
        correct: 1
    },
    {
        id: 230,
        question: "When chorionic villi invade up to the myometrium, it is called:",
        options: ["Placenta previa", "Placenta accreta", "Placenta increta", "Placenta percreta"],
        correct: 1
    },
    {
        id: 231,
        question: "Painless uterine contractions during pregnancy are called:",
        options: ["True labour", "Braxton Hicks contractions", "Preterm contractions", "Post-term contractions"],
        correct: 1
    },
    {
        id: 232,
        question: "Fetal heart sound may be audible by doppler machine at the end of:",
        options: ["12 weeks", "14 weeks", "16 weeks", "18 weeks"],
        correct: 2
    },
    {
        id: 233,
        question: "The commonest cause of floating head in primigravida at full term is:",
        options: ["Polyhydramnios", "Breech presentation", "Placenta previa", "Cephalopelvic disproportion"],
        correct: 0
    },
    {
        id: 234,
        question: "HCG stands for:",
        options: ["Human Chorionic Gonadotrophin Hormone", "Human Cytoplasmic Gonadotropin", "Human Chorionic Growth Hormone", "Human Chorion Growth"],
        correct: 0
    },
    {
        id: 235,
        question: "MTP stands for:",
        options: ["Medical Termination of Pregnancy", "Maternal Therapy Protocol", "Maternal Term Pregnancy", "Medical Therapy Procedure"],
        correct: 0
    },
    {
        id: 236,
        question: "VDRL stands for:",
        options: ["Venereal Disease Research Laboratory", "Viral Disease Research Lab", "Vascular Disease Research Lab", "Venous Disease Research Lab"],
        correct: 0
    },
    {
        id: 237,
        question: "LH stands for:",
        options: ["Luteinizing Hormone", "Leutin Hormone", "Liver Hormone", "Lactogenic Hormone"],
        correct: 0
    },
    {
        id: 238,
        question: "APH stands for:",
        options: ["Antepartum Haemorrhage", "Antepartum Hypotension", "After Pregnancy Haemorrhage", "Abnormal Placental Haemorrhage"],
        correct: 0
    },
    {
        id: 239,
        question: "Cervical incompetence is managed by:",
        options: ["IUD", "Macdonald suture", "Induction of labour", "Birth injury"],
        correct: 1
    },
    {
        id: 240,
        question: "Erb's paralysis is a type of:",
        options: ["Birth injury", "Foetal macrosomia", "Spalding sign", "Placenta circumvallata"],
        correct: 0
    },
    {
        id: 241,
        question: "Spalding sign indicates:",
        options: ["Placenta previa", "Intrauterine death", "Eclampsia", "Polyhydramnios"],
        correct: 1
    },
    {
        id: 242,
        question: "Syntocinon is used for:",
        options: ["Induction of labour", "Birth injury", "Foetal macrosomia", "IUD insertion"],
        correct: 0
    },
    {
        id: 243,
        question: "Diabetic mother is at risk of:",
        options: ["Foetal macrosomia", "Placenta circumvallata", "Erb's paralysis", "Polyhydramnios"],
        correct: 0
    },
    {
        id: 244,
        question: "The process of fusion of the spermatozoa with mature ovum is called:",
        options: ["Fertilization", "Implantation", "Ovulation", "Conception"],
        correct: 0
    },
    {
        id: 245,
        question: "Cervix becomes soft as early as 6th week of pregnancy is called:",
        options: ["Goodell's sign", "Chadwick's sign", "Hegar's sign", "Quickening"],
        correct: 0
    },
    {
        id: 246,
        question: "Fetal heart sound is:",
        options: ["Presumptive sign of pregnancy", "Probable sign of pregnancy", "Positive sign of pregnancy", "None of the above"],
        correct: 2
    },
    {
        id: 247,
        question: "Alteration of the shape of the fetal head during labour due to resistance of birth passage is called:",
        options: ["Moulding", "Caput succedaneum", "Cephalhematoma", "Flexion"],
        correct: 0
    },
    {
        id: 248,
        question: "Single most effective drug in management of eclampsia is:",
        options: ["Magnesium sulphate", "Oxytocin", "Ergometrine", "Syntocinon"],
        correct: 0
    },
    {
        id: 249,
        question: "Vault, base and face are parts of uterus:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 250,
        question: "Caput succedaneum appears during labour:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 251,
        question: "Amenorrhoea presents in 75% cases of ectopic pregnancy:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 252,
        question: "Induction to be done after 2 hours of onset of labour pain:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 253,
        question: "Pre-eclampsia with convulsion is called P.E.T.:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 254,
        question: "KMC stands for:",
        options: ["Kangaroo Mother Care", "Knowledge Management in Care", "Karyotype Monitoring Care", "Kids Maternal Care"],
        correct: 0
    },
    {
        id: 255,
        question: "One IFA tablet contains:",
        options: ["100 mg elemental Iron with 0.5 mg folic acid", "200 mg elemental Iron with 0.5 mg folic acid", "100 mg elemental Iron with 0.8 mg folic acid"],
        correct: 0
    },
    {
        id: 256,
        question: "The process of fusion of two gametes is known as:",
        options: ["Oogenesis", "Gametogenesis", "Fertilization"],
        correct: 2
    },
    {
        id: 257,
        question: "During urine test for pregnancy, the test is said to be positive if:",
        options: ["Single line appears", "Two lines appear", "Two lines appear, of which one is not clear"],
        correct: 1
    },
    {
        id: 258,
        question: "The commonest cause of breech presentation is:",
        options: ["Premature rupture of membranes", "Prematurity", "Multiple pregnancy", "Polyhydramnios"],
        correct: 1
    },
    {
        id: 259,
        question: "At about 8th week of pregnancy, the dusky hue of the vestibule and vaginal wall is known as:",
        options: ["Goodell's sign", "Chadwick's sign", "Hegar's sign", "Quickening"],
        correct: 1
    },
    {
        id: 260,
        question: "During pregnancy, daily additional calorie requirement is:",
        options: ["300 kcal", "350 kcal", "450 kcal", "500 kcal"],
        correct: 2
    },
    {
        id: 261,
        question: "Two-cell stage is reached approximately:",
        options: ["12–24 hours after fertilization", "24–30 hours after fertilization", "36–48 hours after fertilization", "48–60 hours after fertilization"],
        correct: 0
    },
    {
        id: 262,
        question: "Endometrium at the base of the blastocyst is known as:",
        options: ["Decidua basalis", "Decidua capsularis", "Decidua parietalis", "Chorion"],
        correct: 0
    },
    {
        id: 263,
        question: "PROM stands for:",
        options: ["Premature Rupture of Membrane", "Preterm Rupture of Membrane", "Prelabour Rupture of Membrane", "Partial Rupture of Membrane"],
        correct: 0
    },
    {
        id: 264,
        question: "MTP stands for:",
        options: ["Medical Termination of Pregnancy", "Maternal Term Pregnancy", "Maternal Therapy Procedure", "Medical Therapy Protocol"],
        correct: 0
    },
    {
        id: 265,
        question: "HCG stands for:",
        options: ["Human Chorionic Gonadotrophin", "Human Cytoplasmic Gonadotropin", "Human Chorion Growth", "Human Cytogenetic Hormone"],
        correct: 0
    },
    {
        id: 266,
        question: "SFH stands for:",
        options: ["Symphysio-Fundal Height", "Single Fetal Heart", "Supine Fundal Height", "Standard Fetal Height"],
        correct: 0
    },
    {
        id: 267,
        question: "MAS stands for:",
        options: ["Meconium Aspiration Syndrome", "Maternal Anaemia Syndrome", "Meconium Amniotic Syndrome", "Maternal Abdominal Syndrome"],
        correct: 0
    },
    {
        id: 268,
        question: "Maternal administration of glucocorticoids is advocated in preterm labour:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 269,
        question: "Pap smear collection is related to screening of cervical cancer:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 270,
        question: "Duration of action of DMPA is one month:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 271,
        question: "Retraction/pathological ring can be felt vaginally:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 272,
        question: "Methergin should not be used before delivery of the baby:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 273,
        question: "During pregnancy, minimum antenatal check-up will be:",
        options: ["2 times", "3 times", "4 times"],
        correct: 1
    },
    {
        id: 274,
        question: "Relationship of the different fetal parts to one another is called:",
        options: ["Presentation", "Attitude", "Position", "Lie"],
        correct: 1
    },
    {
        id: 275,
        question: "Foetal umbilical cord contains:",
        options: ["One vein and two arteries", "Two veins and one artery", "Two veins", "One artery"],
        correct: 0
    },
    {
        id: 276,
        question: "Visceral injuries cause:",
        options: ["Puerperal sepsis", "Eclampsia", "PPH", "Preterm labour"],
        correct: 0
    },
    {
        id: 277,
        question: "Carcinoma of cervix in stage I is:",
        options: ["Confined to cervix", "Spread to vagina", "Spread to lymph nodes", "Metastatic"],
        correct: 0
    },
    {
        id: 278,
        question: "Methergin is used to:",
        options: ["Induce abortion", "Control postpartum haemorrhage", "Induce labour", "Treat pre-eclampsia"],
        correct: 1
    },
    {
        id: 279,
        question: "Rupture of membrane for more than 24 hours before delivery is called:",
        options: ["Premature rupture of membrane", "Prolonged rupture of membrane", "Polyhydramnios", "Oligohydramnios"],
        correct: 1
    },
    {
        id: 280,
        question: "PPIUCD stands for:",
        options: ["Postpartum Intrauterine Contraceptive Device", "Pre-pregnancy IUCD", "Postpartum Internal Uterine Contraceptive Device", "Preterm IUCD"],
        correct: 0
    },
    {
        id: 281,
        question: "NST stands for:",
        options: ["Non-stress test", "Normal Stress Test", "Neonatal Stress Test", "Non-surgical Test"],
        correct: 0
    },
    {
        id: 282,
        question: "AMTSL stands for:",
        options: ["Active Management of Third Stage of Labour", "Antepartum Management of Third Labour", "Active Monitoring of Third Stage of Labour", "Assisted Management of Term Labour"],
        correct: 0
    },
    {
        id: 283,
        question: "CPD stands for:",
        options: ["Cephalopelvic Disproportion", "Chronic Pelvic Disorder", "Conjugate Pelvic Diameter", "Cervical Pelvic Disorder"],
        correct: 0
    },
    {
        id: 284,
        question: "SGA stands for:",
        options: ["Small for Gestational Age", "Standard Growth Age", "Small Growth Anomaly", "Single Gestational Age"],
        correct: 0
    },
    {
        id: 285,
        question: "Liquor amni exceeding 2 litres is called:",
        options: ["Oligohydramnios", "Polyhydramnios", "Hydramnios", "Amniotic excess"],
        correct: 1
    },
    {
        id: 286,
        question: "Gradual thinning of cervix is called:",
        options: ["Effacement", "Dilation", "Presentation", "Engagement"],
        correct: 0
    },
    {
        id: 287,
        question: "Foetal movement felt by mother is known as:",
        options: ["Quickening", "Engagement", "Flexion", "Presentation"],
        correct: 0
    },
    {
        id: 288,
        question: "Relationship between different parts of foetus is called:",
        options: ["Lie", "Attitude", "Presentation", "Position"],
        correct: 1
    },
    {
        id: 289,
        question: "Distance between lower border of symphysis pubis to midpoint of sacral promontory is called:",
        options: ["True conjugate", "Obstetric conjugate", "Diagonal conjugate", "Transverse diameter"],
        correct: 2
    },
    {
        id: 290,
        question: "Cloasma is:",
        options: ["Placenta", "Cutaneous changes in pregnancy", "GDM", "Mc Donald's operation"],
        correct: 1
    },
    {
        id: 291,
        question: "Placenta is:",
        options: ["Chorion", "Cutaneous changes in pregnancy", "Placenta praevia", "Recurrent miscarriage"],
        correct: 0
    },
    {
        id: 292,
        question: "McDonald's operation is:",
        options: ["Cutaneous changes", "GDM", "Cervical cerclage", "APH"],
        correct: 2
    },
    {
        id: 293,
        question: "APH stands for:",
        options: ["Antepartum haemorrhage", "After pregnancy haemorrhage", "Abnormal placental haemorrhage", "Advanced pregnancy haemorrhage"],
        correct: 0
    },
    {
        id: 294,
        question: "Macrosomic baby is associated with:",
        options: ["Placenta praevia", "Cutaneous changes", "GDM", "Recurrent miscarriage"],
        correct: 2
    },
    {
        id: 295,
        question: "Quickening occurs at:",
        options: ["16–20 weeks of pregnancy", "12–14 weeks of pregnancy", "20–24 weeks of pregnancy", "8–12 weeks of pregnancy"],
        correct: 0
    },
    {
        id: 296,
        question: "Oligohydramnios refers to:",
        options: ["Excess amniotic fluid", "Deficient amniotic fluid", "Normal amniotic fluid", "Meconium-stained amniotic fluid"],
        correct: 1
    },
    {
        id: 297,
        question: "Cervical incompetence is treated by:",
        options: ["Macdonald suture", "Induction of labour", "Episiotomy", "Forceps delivery"],
        correct: 0
    },
    {
        id: 298,
        question: "HbA1C is used to assess:",
        options: ["Gestational age", "Anaemia", "Diabetes mellitus", "Foetal growth"],
        correct: 2
    },
    {
        id: 299,
        question: "Placenta praevia may present with:",
        options: ["Antepartum haemorrhage", "Postpartum haemorrhage", "Polyhydramnios", "Preterm labour"],
        correct: 0
    },
    {
        id: 300,
        question: "Montgomery tubercles are:",
        options: ["Sebaceous glands on areola (Breast)", "Ovarian follicles", "Cervical nodules", "Placental tissues"],
        correct: 0
    },
    {
        id: 301,
        question: "Ovary contains:",
        options: ["Graafian follicles", "Corpus luteum", "Amniotic fluid", "Fetal membranes"],
        correct: 0
    },
    {
        id: 302,
        question: "Forceps delivery may cause:",
        options: ["Birth injury", "Infection", "Premature rupture of membrane", "Oligohydramnios"],
        correct: 0
    },
    {
        id: 303,
        question: "Erb's paralysis is a type of:",
        options: ["Birth injury", "Maternal injury", "Foetal infection", "Placental disorder"],
        correct: 0
    },
    {
        id: 304,
        question: "Oral thrush is caused by:",
        options: ["Candida albicans", "Staphylococcus", "Streptococcus", "Lactobacillus"],
        correct: 0
    },
    {
        id: 305,
        question: "The cervical plug present in pregnant uterus is called:",
        options: ["Operculum", "Cervical mucus", "Chorion", "Decidua"],
        correct: 0
    },
    {
        id: 306,
        question: "External ballottement can be elicited as early as:",
        options: ["18–20 weeks", "16–18 weeks", "12–14 weeks", "20–22 weeks"],
        correct: 1
    },
    {
        id: 307,
        question: "Collection of blood between pericranium and flat bone of skull is:",
        options: ["Cephalhematoma", "Caput succedaneum", "Subgaleal haemorrhage", "Epistaxis"],
        correct: 0
    },
    {
        id: 308,
        question: "Amniotic fluid is formed from:",
        options: ["Maternal plasma and foetal urine", "Placenta only", "Foetal lungs", "Chorionic villi"],
        correct: 0
    },
    {
        id: 309,
        question: "Foetal heart sound is one of the:",
        options: ["Positive signs of pregnancy", "Probable signs of pregnancy", "Presumptive signs of pregnancy", "Diagnostic signs of labour"],
        correct: 0
    },
    {
        id: 310,
        question: "J.S.Y stands for:",
        options: ["Janani Suraksha Yojana", "Juvenile Safety Year", "Joint Safety Yield", "Janani Suraksha Youth"],
        correct: 0
    },
    {
        id: 311,
        question: "P.P.I.U.C.D stands for:",
        options: ["Postpartum Intrauterine Contraceptive Device", "Pre-pregnancy IUD", "Postpartum Internal Uterine Contraceptive Device", "Prenatal IUCD"],
        correct: 0
    },
    {
        id: 312,
        question: "NICU stands for:",
        options: ["Neonatal Intensive Care Unit", "Newborn Intensive Care Unit", "Neonatal Infection Control Unit", "Newborn Infant Care Unit"],
        correct: 0
    },
    {
        id: 313,
        question: "L.U.G.R stands for:",
        options: ["Low/Underweight for Gestational Age", "Large for Gestational Age", "Low Umbilical Growth Rate", "Late Uterine Growth Restriction"],
        correct: 0
    },
    {
        id: 314,
        question: "H.C.G stands for:",
        options: ["Human Chorionic Gonadotrophin", "Human Cytoplasmic Gonadotrophin", "Human Chorion Growth", "Human Conjugated Hormone"],
        correct: 0
    },
    {
        id: 315,
        question: "Drug of choice in Eclampsia:",
        options: ["Magnesium sulphate", "Oxytocin", "Prostaglandin", "Syntocinon"],
        correct: 0
    },
    {
        id: 316,
        question: "Relation of denominator to the different quadrants of pelvis is called:",
        options: ["Lie", "Position", "Presentation", "Attitude"],
        correct: 1
    },
    {
        id: 317,
        question: "FHS is one of the:",
        options: ["Probable signs of pregnancy", "Presumptive signs of pregnancy", "Positive signs of pregnancy", "Diagnostic signs of labour"],
        correct: 2
    },
    {
        id: 318,
        question: "Gradual thinning of cervix during labour is termed as:",
        options: ["Dilatation", "Effacement", "Contraction", "Engagement"],
        correct: 1
    },
    {
        id: 319,
        question: "Painless uterine contraction is known as:",
        options: ["True labour", "Braxton Hicks contraction", "Postpartum contraction", "Hypertonic contraction"],
        correct: 1
    },
    {
        id: 320,
        question: "MAP stands for:",
        options: ["Mean Arterial Pressure", "Maternal Arterial Pressure", "Maximum Arterial Pressure", "Minimal Arterial Pressure"],
        correct: 0
    },
    {
        id: 321,
        question: "CPD stands for:",
        options: ["Cephalo-Pelvic Disproportion", "Cervical-Pelvic Disproportion", "Cephalo-Placental Disorder", "Cervical-Placental Disorder"],
        correct: 0
    },
    {
        id: 322,
        question: "HCG stands for:",
        options: ["Human Chorionic Gonadotrophin", "Human Chorionic Growth", "Human Cellular Gonadotrophin", "Human Chorionic Glucose"],
        correct: 0
    },
    {
        id: 323,
        question: "PEP stands for:",
        options: ["Post-Exposure Prophylaxis", "Pre-Eclampsia Protocol", "Pregnancy Evaluation Protocol", "Pre-Exposure Plan"],
        correct: 0
    },
    {
        id: 324,
        question: "ICTC stands for:",
        options: ["Integrated Counselling & Testing Centre", "Intrauterine Counselling & Testing", "Integrated Care & Testing Centre", "Initial Counselling & Testing"],
        correct: 0
    },
    {
        id: 325,
        question: "The weight of the mature placenta is 1/6 of the baby's weight:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 326,
        question: "The suture between two parietal bones is called sagittal suture:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 327,
        question: "Labour is called prolonged if the time of 1st and 2nd stage is more than 24 hours:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 328,
        question: "The commonest cause of breech presentation is prematurity:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 329,
        question: "When the fetus is dead and retained inside the uterus for a variable period in early pregnancy it is called missed abortion:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 330,
        question: "Advance maternal age and reproductive tract infection causes infertility:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 331,
        question: "Accessory lobe of the placenta is called circumvallate placenta:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 332,
        question: "Amount of amniotic fluid more than 2 liters is termed polyhydramnios:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 333,
        question: "Vertical transmission is rare in HIV infection:",
        options: ["True", "False"],
        correct: 1
    },
    {
        id: 334,
        question: "Intake of contraceptive pills causes anovulation:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 335,
        question: "The positive sign for confirmation of diagnosis of pregnancy is the presence of HCG in urine:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 336,
        question: "At 24 weeks of gestation, uterus is at the level of 2/3rd between symphysis pubis and umbilicus:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 337,
        question: "In true labour pain, intensity and frequency of contraction is more:",
        options: ["True", "False"],
        correct: 0
    },
    {
        id: 338,
        question: "Diagonal conjugate is 12 cm:",
        options: ["True", "False"],
        correct: 0
    }
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = midwiferyQuestions;
}
