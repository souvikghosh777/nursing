// Staff Nurse Grade-II Exam Application

class ExamApp {
    constructor() {
        this.candidateName = '';
        this.candidateDOB = '';
        this.currentQuestion = 0;
        this.currentSection = 1;
        this.totalQuestions = 100;
        this.questions = [];
        this.answers = {};
        this.visited = new Set();
        this.markedForReview = new Set();
        this.timer = null;
        this.timeLeft = 60 * 60; // 60 minutes in seconds
        this.language = 'en'; // Default language
        this.mode = 'home'; // 'home', 'questionBank', 'exam'
        this.qbCurrentSection = 1;
        this.qbAnswers = {}; // Track answers in question bank mode
        
        this.initializeElements();
        this.bindEvents();
    }

    // Fisher-Yates shuffle algorithm
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    loadQuestions() {
        // Collect all questions from all 12 sections and shuffle
        const allQuestions = [];
        for (let i = 1; i <= 12; i++) {
            const sectionKey = `section${i}`;
            if (examQuestions[sectionKey]) {
                allQuestions.push(...examQuestions[sectionKey]);
            }
        }
        
        // Shuffle all questions
        const shuffled = this.shuffleArray(allQuestions);
        
        // Take 100 random questions for the exam
        this.questions = shuffled.slice(0, 100);
        
        // Update question IDs to reflect new order (1-100)
        this.questions.forEach((q, index) => {
            q.displayId = index + 1;
        });
    }

    initializeElements() {
        // Home screen
        this.homeScreen = document.getElementById('homeScreen');
        this.questionBankMode = document.getElementById('questionBankMode');
        this.examModeBtn = document.getElementById('examMode');
        this.homeLangEn = document.getElementById('homeLangEn');
        this.homeLangBn = document.getElementById('homeLangBn');
        
        // Question Bank screen
        this.questionBankScreen = document.getElementById('questionBankScreen');
        this.backFromQB = document.getElementById('backFromQB');
        this.qbQuestionList = document.getElementById('qbQuestionList');
        this.qbLangEn = document.getElementById('qbLangEn');
        this.qbLangBn = document.getElementById('qbLangBn');
        
        // Language screen
        this.languageScreen = document.getElementById('languageScreen');
        this.selectEnglishBtn = document.getElementById('selectEnglish');
        this.selectBengaliBtn = document.getElementById('selectBengali');
        
        // Screens
        this.startScreen = document.getElementById('startScreen');
        this.examScreen = document.getElementById('examScreen');
        this.resultScreen = document.getElementById('resultScreen');

        // Start screen
        this.candidateNameInput = document.getElementById('candidateName');
        this.candidateDOBInput = document.getElementById('candidateDOB');
        this.startBtn = document.getElementById('startBtn');

        // Exam screen
        this.displayName = document.getElementById('displayName');
        this.currentSectionDisplay = document.getElementById('currentSection');
        this.sectionInfo = document.getElementById('sectionInfo');
        this.questionTitle = document.getElementById('questionTitle');
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.timerDisplay = document.getElementById('timerDisplay');
        
        // Stats
        this.visitedCount = document.getElementById('visitedCount');
        this.notVisitedCount = document.getElementById('notVisitedCount');
        this.answeredCount = document.getElementById('answeredCount');
        this.reviewCount = document.getElementById('reviewCount');

        // Navigation
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.markReviewBtn = document.getElementById('markReviewBtn');
        this.clearResponseBtn = document.getElementById('clearResponseBtn');
        this.submitExamBtn = document.getElementById('submitExamBtn');

        // Result screen
        this.resultName = document.getElementById('resultName');
        this.finalScore = document.getElementById('finalScore');
        this.correctCount = document.getElementById('correctCount');
        this.incorrectCount = document.getElementById('incorrectCount');
        this.unansweredCount = document.getElementById('unansweredCount');
        this.resultMessage = document.getElementById('resultMessage');
        this.restartBtn = document.getElementById('restartBtn');
    }

    bindEvents() {
        // Home screen events
        this.questionBankMode.addEventListener('click', () => this.openQuestionBank());
        this.examModeBtn.addEventListener('click', () => this.openExamMode());
        this.homeLangEn.addEventListener('click', () => this.setHomeLanguage('en'));
        this.homeLangBn.addEventListener('click', () => this.setHomeLanguage('bn'));
        
        // Question Bank events
        this.backFromQB.addEventListener('click', () => this.showScreen('home'));
        this.qbLangEn.addEventListener('click', () => this.setQBLanguage('en'));
        this.qbLangBn.addEventListener('click', () => this.setQBLanguage('bn'));
        document.querySelectorAll('.qb-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const section = parseInt(e.currentTarget.dataset.section);
                this.loadQBSection(section);
            });
        });
        
        // Language selection
        this.selectEnglishBtn.addEventListener('click', () => this.selectLanguage('en'));
        this.selectBengaliBtn.addEventListener('click', () => this.selectLanguage('bn'));
        
        this.startBtn.addEventListener('click', () => this.startExam());
        this.candidateNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startExam();
        });
        
        this.prevBtn.addEventListener('click', () => this.navigateQuestion(-1));
        this.nextBtn.addEventListener('click', () => this.navigateQuestion(1));
        this.markReviewBtn.addEventListener('click', () => this.toggleReview());
        this.clearResponseBtn.addEventListener('click', () => this.clearResponse());
        this.submitExamBtn.addEventListener('click', () => this.submitExam());
        this.restartBtn.addEventListener('click', () => this.restartExam());
        
        // Section navigation buttons
        document.getElementById('goToSection2').addEventListener('click', () => this.goToSection(2));
        document.getElementById('goToSection3').addEventListener('click', () => this.goToSection(3));
        document.getElementById('goToSection4').addEventListener('click', () => this.goToSection(4));
        document.getElementById('backToSection1').addEventListener('click', () => this.goToSection(1));
        document.getElementById('backToSection2').addEventListener('click', () => this.goToSection(2));
        document.getElementById('backToSection3').addEventListener('click', () => this.goToSection(3));
    }

    setHomeLanguage(lang) {
        this.language = lang;
        this.homeLangEn.classList.toggle('active', lang === 'en');
        this.homeLangBn.classList.toggle('active', lang === 'bn');
        
        // Update all translatable elements on home screen
        const homeScreen = document.getElementById('homeScreen');
        const translatableElements = homeScreen.querySelectorAll('[data-en][data-bn]');
        translatableElements.forEach(el => {
            el.textContent = lang === 'en' ? el.dataset.en : el.dataset.bn;
        });
    }

    setQBLanguage(lang) {
        this.language = lang;
        this.qbLangEn.classList.toggle('active', lang === 'en');
        this.qbLangBn.classList.toggle('active', lang === 'bn');
        // Reload current section with new language
        this.qbAnswers = {}; // Reset answers when changing language
        this.loadQBSection(this.qbCurrentSection);
    }

    openQuestionBank() {
        this.mode = 'questionBank';
        this.qbAnswers = {};
        // Sync language toggle buttons
        this.qbLangEn.classList.toggle('active', this.language === 'en');
        this.qbLangBn.classList.toggle('active', this.language === 'bn');
        this.showScreen('questionBank');
        this.loadQBSection(1);
        this.updateQBCounts();
    }

    updateQBCounts() {
        // Update section counts dynamically
        for (let i = 1; i <= 12; i++) {
            const sectionKey = `section${i}`;
            const countEl = document.getElementById(`section${i}Count`);
            if (countEl && examQuestions[sectionKey]) {
                countEl.textContent = examQuestions[sectionKey].length;
            }
        }
        
        // Calculate and display total count
        const total = Object.keys(examQuestions).reduce((sum, key) => {
            return sum + (examQuestions[key]?.length || 0);
        }, 0);
        document.getElementById('qbTotalCount').textContent = `${total} Questions`;
    }

    loadQBSection(sectionNum) {
        this.qbCurrentSection = sectionNum;
        
        // Update active tab
        document.querySelectorAll('.qb-tab').forEach(tab => {
            tab.classList.toggle('active', parseInt(tab.dataset.section) === sectionNum);
        });
        
        // Get questions for this section (section1, section2, etc.)
        const sectionKey = `section${sectionNum}`;
        const questions = examQuestions[sectionKey] || [];
        
        // Render questions
        this.qbQuestionList.innerHTML = '';
        
        questions.forEach((q, index) => {
            const questionText = this.language === 'bn' && q.question_bn ? q.question_bn : q.question;
            const options = this.language === 'bn' && q.options_bn ? q.options_bn : q.options;
            const qKey = `${sectionNum}-${index}`;
            
            const card = document.createElement('div');
            card.className = 'qb-question-card';
            card.innerHTML = `
                <span class="qb-question-number">Q${index + 1}</span>
                <p class="qb-question-text">${questionText}</p>
                <div class="qb-options" data-qkey="${qKey}" data-correct="${q.correct}">
                    ${options.map((opt, i) => `
                        <div class="qb-option" data-index="${i}">
                            <span class="qb-option-letter">${String.fromCharCode(65 + i)}</span>
                            <span class="qb-option-text">${opt}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="qb-answer-reveal" id="answer-${qKey}">
                    ✓ Correct Answer: ${String.fromCharCode(65 + q.correct)}
                </div>
            `;
            
            this.qbQuestionList.appendChild(card);
            
            // Add click events for options
            card.querySelectorAll('.qb-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    this.selectQBOption(qKey, parseInt(option.dataset.index), q.correct);
                });
            });
        });
    }

    selectQBOption(qKey, selectedIndex, correctIndex) {
        const optionsContainer = document.querySelector(`.qb-options[data-qkey="${qKey}"]`);
        const options = optionsContainer.querySelectorAll('.qb-option');
        const answerReveal = document.getElementById(`answer-${qKey}`);
        
        // If already answered, don't allow changes
        if (this.qbAnswers[qKey] !== undefined) return;
        
        this.qbAnswers[qKey] = selectedIndex;
        
        // Show result
        options.forEach((opt, i) => {
            if (i === correctIndex) {
                opt.classList.add('correct');
            } else if (i === selectedIndex && selectedIndex !== correctIndex) {
                opt.classList.add('incorrect');
            }
        });
        
        answerReveal.classList.add('show');
    }

    openExamMode() {
        this.mode = 'exam';
        // Load and shuffle questions every time exam mode is opened
        this.loadQuestions();
        this.showScreen('language');
    }

    selectLanguage(lang) {
        this.language = lang;
        // Questions already loaded in openExamMode, just apply language
        this.applyLanguage();
        this.showScreen('start');
    }

    applyLanguage() {
        const lang = this.language;
        const dataAttr = lang === 'bn' ? 'data-bn' : 'data-en';
        
        // Update all elements with data-en and data-bn attributes
        document.querySelectorAll('[data-en][data-bn]').forEach(el => {
            const text = el.getAttribute(dataAttr);
            if (text) {
                el.textContent = text;
            }
        });
        
        // Update specific elements
        const translations = {
            en: {
                examTitle: 'MOCK EXAM STAFF NURSE',
                examSubtitle: 'Grade–II | Online MCQ Examination',
                syllabusTitle: 'Syllabus Coverage',
                nameLabel: 'Enter Your Name',
                namePlaceholder: 'Your Full Name',
                dobLabel: 'Date of Birth',
                logoText: 'Staff Nurse Exam',
                resultTitle: 'Exam Completed!',
                questionPrefix: 'Question',
                of: 'of',
                syllabus: ['Anatomy & Physiology', 'Microbiology', 'Nutrition', 'First Aid', 'Nursing Foundation', 'Medical Surgical I', 'Medical Surgical II', 'Child Health', 'Mental Health', 'Community Health', 'Midwifery & OBG', 'Nursing Education & Admin'],
                section1Title: 'Part 1: Anatomy, Microbiology & Nutrition (Sections 1-3)',
                section2Title: 'Part 2: First Aid & Nursing Foundation (Sections 4-5)',
                section3Title: 'Part 3: Medical Surgical & Child Health (Sections 6-8)',
                section4Title: 'Part 4: Mental Health, Community Health, Midwifery & Education (Sections 9-12)'
            },
            bn: {
                examTitle: 'মক পরীক্ষা স্টাফ নার্স',
                examSubtitle: 'গ্রেড-২ | অনলাইন MCQ পরীক্ষা',
                syllabusTitle: 'সিলেবাস কভারেজ',
                nameLabel: 'আপনার নাম লিখুন',
                namePlaceholder: 'আপনার পুরো নাম',
                dobLabel: 'জন্ম তারিখ',
                logoText: 'স্টাফ নার্স পরীক্ষা',
                resultTitle: 'পরীক্ষা সম্পন্ন!',
                questionPrefix: 'প্রশ্ন',
                of: 'এর মধ্যে',
                syllabus: ['শারীরস্থান ও শরীরবিদ্যা', 'মাইক্রোবায়োলজি', 'পুষ্টি', 'প্রাথমিক চিকিৎসা', 'নার্সিং ফাউন্ডেশন', 'মেডিকেল সার্জিক্যাল I', 'মেডিকেল সার্জিক্যাল II', 'শিশু স্বাস্থ্য', 'মানসিক স্বাস্থ্য', 'কমিউনিটি হেলথ', 'মিডওয়াইফারি ও গাইনোকোলজি', 'নার্সিং শিক্ষা ও প্রশাসন'],
                section1Title: 'অংশ ১: শারীরস্থান, মাইক্রোবায়োলজি ও পুষ্টি (বিভাগ ১-৩)',
                section2Title: 'অংশ ২: প্রাথমিক চিকিৎসা ও নার্সিং ফাউন্ডেশন (বিভাগ ৪-৫)',
                section3Title: 'অংশ ৩: মেডিকেল সার্জিক্যাল ও শিশু স্বাস্থ্য (বিভাগ ৬-৮)',
                section4Title: 'অংশ ৪: মানসিক স্বাস্থ্য, কমিউনিটি হেলথ, মিডওয়াইফারি ও শিক্ষা (বিভাগ ৯-১২)'
            }
        };
        
        const t = translations[lang];
        
        document.getElementById('examTitle').textContent = t.examTitle;
        document.getElementById('examSubtitle').textContent = t.examSubtitle;
        document.getElementById('syllabusTitle').textContent = t.syllabusTitle;
        document.getElementById('nameLabel').textContent = t.nameLabel;
        document.getElementById('candidateName').placeholder = t.namePlaceholder;
        document.getElementById('dobLabel').textContent = t.dobLabel;
        document.getElementById('logoText').textContent = t.logoText;
        document.getElementById('resultTitle').textContent = t.resultTitle;
        
        // Update syllabus grid
        const syllabusGrid = document.getElementById('syllabusGrid');
        syllabusGrid.innerHTML = t.syllabus.map(item => `<span>${item}</span>`).join('');
        
        // Update palette section titles
        document.querySelector('#paletteSection1 .palette-title').textContent = t.section1Title;
        document.querySelector('#paletteSection2 .palette-title').textContent = t.section2Title;
        document.querySelector('#paletteSection3 .palette-title').textContent = t.section3Title;
        document.querySelector('#paletteSection4 .palette-title').textContent = t.section4Title;
    }

    startExam() {
        const name = this.candidateNameInput.value.trim();
        const dob = this.candidateDOBInput.value;
        
        if (!name) {
            this.candidateNameInput.style.borderColor = '#f44336';
            this.candidateNameInput.placeholder = 'Please enter your name!';
            return;
        }
        
        if (!dob) {
            this.candidateDOBInput.style.borderColor = '#f44336';
            return;
        }

        this.candidateName = name;
        this.candidateDOB = dob;
        this.displayName.textContent = name;
        
        this.showScreen('exam');
        this.generatePalette();
        this.loadQuestion(0);
        this.startTimer();
    }

    showScreen(screen) {
        this.homeScreen.classList.remove('active');
        this.questionBankScreen.classList.remove('active');
        this.languageScreen.classList.remove('active');
        this.startScreen.classList.remove('active');
        this.examScreen.classList.remove('active');
        this.resultScreen.classList.remove('active');

        switch(screen) {
            case 'home':
                this.homeScreen.classList.add('active');
                break;
            case 'questionBank':
                this.questionBankScreen.classList.add('active');
                break;
            case 'language':
                this.languageScreen.classList.add('active');
                break;
            case 'start':
                this.startScreen.classList.add('active');
                break;
            case 'exam':
                this.examScreen.classList.add('active');
                break;
            case 'result':
                this.resultScreen.classList.add('active');
                break;
        }
    }

    generatePalette() {
        // Generate 4 separate section palettes
        for (let section = 1; section <= 4; section++) {
            const paletteContainer = document.getElementById(`questionPalette${section}`);
            paletteContainer.innerHTML = '';
            
            const startIndex = (section - 1) * 25;
            const endIndex = section * 25;
            
            for (let i = startIndex; i < endIndex; i++) {
                const btn = document.createElement('button');
                btn.className = 'palette-btn';
                btn.textContent = i + 1;
                btn.dataset.questionIndex = i;
                btn.addEventListener('click', () => this.loadQuestion(i));
                paletteContainer.appendChild(btn);
            }
        }
        
        // Show only section 1 initially
        this.showSection(1);
    }

    showSection(sectionNum) {
        // Hide all sections
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`paletteSection${i}`).classList.remove('active');
        }
        // Show selected section
        document.getElementById(`paletteSection${sectionNum}`).classList.add('active');
        this.currentSection = sectionNum;
    }

    goToSection(sectionNum) {
        this.showSection(sectionNum);
        // Load first question of that section
        const firstQuestionIndex = (sectionNum - 1) * 25;
        this.loadQuestion(firstQuestionIndex);
    }

    checkSectionCompletion() {
        // Show all section navigation buttons (free navigation)
        for (let section = 2; section <= 4; section++) {
            const goBtn = document.getElementById(`goToSection${section}`);
            if (goBtn) {
                goBtn.style.display = 'block';
            }
        }
    }

    updatePalette() {
        // Update all section palettes
        for (let section = 1; section <= 4; section++) {
            const paletteContainer = document.getElementById(`questionPalette${section}`);
            const buttons = paletteContainer.querySelectorAll('.palette-btn');
            
            buttons.forEach((btn) => {
                const index = parseInt(btn.dataset.questionIndex);
                btn.className = 'palette-btn';
                
                if (index === this.currentQuestion) {
                    btn.classList.add('current');
                }
                
                if (this.answers[index] !== undefined) {
                    btn.classList.add('answered');
                } else if (this.markedForReview.has(index)) {
                    btn.classList.add('review');
                } else if (this.visited.has(index)) {
                    btn.classList.add('visited');
                }
            });
        }
        
        // Check if section is complete
        this.checkSectionCompletion();
    }

    loadQuestion(index) {
        this.currentQuestion = index;
        this.visited.add(index);
        
        const question = this.questions[index];
        const section = Math.floor(index / 25) + 1;
        
        // Get question text based on language
        const questionText = this.language === 'bn' && question.question_bn 
            ? question.question_bn 
            : question.question;
        const options = this.language === 'bn' && question.options_bn 
            ? question.options_bn 
            : question.options;
        
        this.currentSectionDisplay.textContent = section;
        this.sectionInfo.textContent = sectionNames[section] || '';
        
        // Question title in selected language
        const questionPrefix = this.language === 'bn' ? 'প্রশ্ন' : 'Question';
        const ofText = this.language === 'bn' ? 'এর মধ্যে' : 'of';
        this.questionTitle.textContent = `${questionPrefix} ${index + 1} ${ofText} ${this.totalQuestions}`;
        this.questionText.textContent = questionText;
        
        // Render options
        this.optionsContainer.innerHTML = '';
        options.forEach((opt, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            optionDiv.dataset.index = i;
            
            // Check if this option was previously selected
            if (this.answers[index] !== undefined && this.answers[index].selected === i) {
                optionDiv.classList.add('selected');
            }
            
            optionDiv.innerHTML = `
                <div class="option-radio"></div>
                <span class="option-text">${opt}</span>
            `;
            
            // Always allow clicking to change answer
            optionDiv.addEventListener('click', () => this.selectOption(i));
            
            this.optionsContainer.appendChild(optionDiv);
        });
        
        // Update navigation buttons
        const sectionStart = (this.currentSection - 1) * 25;
        const sectionEnd = this.currentSection * 25 - 1;
        
        this.prevBtn.disabled = index === sectionStart && this.currentSection === 1;
        
        // Navigation button text based on language
        const nextText = this.language === 'bn' ? 'পরবর্তী →' : 'Next →';
        const nextSectionText = this.language === 'bn' ? 'পরবর্তী বিভাগ →' : 'Next Section →';
        const submitText = this.language === 'bn' ? 'পরীক্ষা জমা দিন' : 'Submit Exam';
        
        if (index === sectionEnd) {
            if (this.currentSection === 4) {
                this.nextBtn.textContent = submitText;
            } else {
                this.nextBtn.textContent = nextSectionText;
            }
        } else {
            this.nextBtn.textContent = nextText;
        }
        
        // Update review button
        this.markReviewBtn.textContent = this.markedForReview.has(index) 
            ? '📌 Marked for Review' 
            : '📌 Mark for Review';
        
        this.updatePalette();
        this.updateStats();
    }

    selectOption(optionIndex) {
        const question = this.questions[this.currentQuestion];
        
        // Store answer (can be changed later)
        this.answers[this.currentQuestion] = {
            selected: optionIndex,
            correct: question.correct,
            isCorrect: optionIndex === question.correct
        };
        
        // Update UI - highlight selected option only
        const options = this.optionsContainer.querySelectorAll('.option-item');
        options.forEach((opt, i) => {
            opt.classList.remove('selected');
            if (i === optionIndex) {
                opt.classList.add('selected');
            }
        });
        
        this.updatePalette();
        this.updateStats();
    }

    navigateQuestion(direction) {
        const newIndex = this.currentQuestion + direction;
        const currentSectionStart = (this.currentSection - 1) * 25;
        const currentSectionEnd = this.currentSection * 25 - 1;
        
        // Check if navigation stays within current section
        if (newIndex >= currentSectionStart && newIndex <= currentSectionEnd) {
            this.loadQuestion(newIndex);
        } else if (newIndex > currentSectionEnd) {
            // Trying to go to next section
            if (this.currentSection < 4) {
                this.showSection(this.currentSection + 1);
                this.loadQuestion(this.currentSection * 25 - 25); // First question of new section
            } else if (this.currentSection === 4) {
                // At the end of exam
                this.submitExam();
            }
        } else if (newIndex < currentSectionStart) {
            // Trying to go to previous section
            if (this.currentSection > 1) {
                const prevSection = this.currentSection - 1;
                this.showSection(prevSection);
                // Load last question of previous section
                this.loadQuestion(prevSection * 25 - 1);
            }
        }
    }

    toggleReview() {
        if (this.markedForReview.has(this.currentQuestion)) {
            this.markedForReview.delete(this.currentQuestion);
            this.markReviewBtn.textContent = '📌 Mark for Review';
        } else {
            this.markedForReview.add(this.currentQuestion);
            this.markReviewBtn.textContent = '📌 Marked for Review';
        }
        this.updatePalette();
        this.updateStats();
    }

    clearResponse() {
        // Allow clearing any response before submission
        if (this.answers[this.currentQuestion] !== undefined) {
            delete this.answers[this.currentQuestion];
            this.loadQuestion(this.currentQuestion);
        }
    }

    updateStats() {
        const answered = Object.keys(this.answers).length;
        const visited = this.visited.size;
        
        this.visitedCount.textContent = visited;
        this.notVisitedCount.textContent = this.totalQuestions - visited;
        this.answeredCount.textContent = answered;
        this.reviewCount.textContent = this.markedForReview.size;
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            
            const minutes = Math.floor(this.timeLeft / 60);
            const seconds = this.timeLeft % 60;
            
            this.timerDisplay.textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (this.timeLeft <= 0) {
                this.submitExam();
            }
            
            // Warning when 5 minutes left
            if (this.timeLeft <= 300) {
                this.timerDisplay.style.color = '#f44336';
            }
        }, 1000);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    submitExam() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.calculateResults();
        this.showScreen('result');
    }

    calculateResults() {
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;
        let sectionScores = [0, 0, 0, 0];
        
        for (let i = 0; i < this.totalQuestions; i++) {
            const section = Math.floor(i / 25);
            
            if (this.answers[i] !== undefined) {
                if (this.answers[i].isCorrect) {
                    correct++;
                    sectionScores[section]++;
                } else {
                    incorrect++;
                }
            } else {
                unanswered++;
            }
        }
        
        this.resultName.textContent = this.candidateName;
        this.finalScore.textContent = correct;
        this.correctCount.textContent = correct;
        this.incorrectCount.textContent = incorrect;
        this.unansweredCount.textContent = unanswered;
        
        // Section scores
        document.getElementById('section1Score').textContent = `${sectionScores[0]}/25`;
        document.getElementById('section2Score').textContent = `${sectionScores[1]}/25`;
        document.getElementById('section3Score').textContent = `${sectionScores[2]}/25`;
        document.getElementById('section4Score').textContent = `${sectionScores[3]}/25`;
        
        // Calculate time taken
        const timeTaken = this.formatTime(3600 - this.timeLeft);
        const percentage = Math.round((correct / this.totalQuestions) * 100);
        
        // Save performance data
        const performanceItem = {
            name: this.candidateName || 'Anonymous',
            type: 'user',
            timestamp: Date.now(),
            correct: correct,
            incorrect: incorrect,
            unanswered: unanswered,
            total: this.totalQuestions,
            percentage: percentage,
            timeTaken: timeTaken,
            sectionScores: sectionScores
        };
        this.savePerformanceData(performanceItem);
        
        // Result message based on language
        let message = '';
        if (this.language === 'bn') {
            if (correct >= 80) {
                message = '🌟 চমৎকার! অসাধারণ পারফরম্যান্স!';
            } else if (correct >= 60) {
                message = '👍 ভালো করেছেন! চালিয়ে যান!';
            } else if (correct >= 40) {
                message = '📚 গড় পারফরম্যান্স। উন্নতির সুযোগ আছে।';
            } else {
                message = '💪 উন্নতি প্রয়োজন। আরও পড়াশোনা করুন!';
            }
        } else {
            if (correct >= 80) {
                message = '🌟 Excellent! Outstanding performance!';
            } else if (correct >= 60) {
                message = '👍 Good job! Keep it up!';
            } else if (correct >= 40) {
                message = '📚 Average performance. Room for improvement.';
            } else {
                message = '💪 Needs improvement. Study harder!';
            }
        }
        this.resultMessage.className = correct < 40 ? 'result-message poor' : 'result-message';
        this.resultMessage.textContent = message;
    }

    restartExam() {
        // Reset all state
        this.candidateName = '';
        this.candidateDOB = '';
        this.currentQuestion = 0;
        this.currentSection = 1;
        this.answers = {};
        this.visited = new Set();
        this.markedForReview = new Set();
        this.timeLeft = 60 * 60;
        this.mode = 'home';
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Reset input
        this.candidateNameInput.value = '';
        this.candidateNameInput.style.borderColor = '';
        this.candidateNameInput.placeholder = 'Your Full Name';
        this.candidateDOBInput.value = '';
        this.candidateDOBInput.style.borderColor = '';
        this.timerDisplay.style.color = '';
        
        // Hide all section navigation buttons
        for (let i = 2; i <= 4; i++) {
            const btn = document.getElementById(`goToSection${i}`);
            if (btn) btn.style.display = 'none';
        }
        
        this.showScreen('home');
    }

    // Performance tracking methods
    initPerformanceButton() {
        const perfBtn = document.getElementById('performanceHomeBtn');
        const perfModal = document.getElementById('performanceModal');
        const closeBtn = document.querySelector('.performance-close');
        const perfTabs = document.querySelectorAll('.perf-tab');
        const unlockBtn = document.getElementById('unlockPerfBtn');
        const perfPassword = document.getElementById('perfPassword');

        if (perfBtn) {
            perfBtn.addEventListener('click', () => {
                this.openPerformanceModal();
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                perfModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === perfModal) {
                perfModal.style.display = 'none';
            }
        });

        perfTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');
                this.switchPerformanceTab(tabName);
            });
        });

        if (unlockBtn) {
            unlockBtn.addEventListener('click', () => {
                this.unlockOthersPerformance();
            });
        }

        if (perfPassword) {
            perfPassword.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.unlockOthersPerformance();
                }
            });
        }
    }

    openPerformanceModal() {
        const modal = document.getElementById('performanceModal');
        modal.style.display = 'block';
        this.loadMyPerformance();
        this.switchPerformanceTab('myPerformance');
    }

    switchPerformanceTab(tabName) {
        const tabs = document.querySelectorAll('.perf-tab');
        const tabContents = document.querySelectorAll('.perf-tab-content');

        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabName) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        tabContents.forEach(content => {
            if (content.id === tabName + 'Tab') {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // Reset password section when switching to others tab
        if (tabName === 'othersPerformance') {
            document.getElementById('passwordSection').style.display = 'block';
            document.getElementById('othersPerfContent').classList.remove('show');
            document.getElementById('perfPassword').value = '';
            document.getElementById('passwordError').textContent = '';
        }
    }

    loadMyPerformance() {
        const performanceData = this.getPerformanceData();
        const myData = performanceData.filter(item => item.type === 'user');

        // Calculate statistics
        const totalExams = myData.length;
        const avgScore = totalExams > 0 ? (myData.reduce((sum, item) => sum + item.percentage, 0) / totalExams).toFixed(1) : 0;
        const bestScore = totalExams > 0 ? Math.max(...myData.map(item => item.percentage)) : 0;
        const latestScore = totalExams > 0 ? myData[0].percentage : 'N/A';

        document.getElementById('myTotalExams').textContent = totalExams;
        document.getElementById('myAvgScore').textContent = avgScore + '%';
        document.getElementById('myBestScore').textContent = bestScore + '%';
        document.getElementById('myLatestScore').textContent = latestScore !== 'N/A' ? latestScore + '%' : 'N/A';

        // Display performance history
        const listContainer = document.getElementById('myPerformanceList');
        listContainer.innerHTML = '';

        if (myData.length === 0) {
            listContainer.innerHTML = '<p style="text-align:center;color:#666;padding:20px;">No exam history yet. Take an exam to see your performance!</p>';
        } else {
            myData.slice(0, 10).forEach(item => {
                const perfItem = document.createElement('div');
                perfItem.className = 'perf-item';
                perfItem.innerHTML = `
                    <div class="perf-item-info">
                        <div class="perf-item-score">${item.percentage}%</div>
                        <div class="perf-item-date">${new Date(item.timestamp).toLocaleString()}</div>
                        <div class="perf-item-details">${item.correct}/${item.total} correct • Time: ${item.timeTaken}</div>
                    </div>
                `;
                listContainer.appendChild(perfItem);
            });
        }
    }

    unlockOthersPerformance() {
        const password = document.getElementById('perfPassword').value;
        const errorMsg = document.getElementById('passwordError');

        if (password === '12345') {
            document.getElementById('passwordSection').style.display = 'none';
            document.getElementById('othersPerfContent').classList.add('show');
            this.loadOthersPerformance();
        } else {
            errorMsg.textContent = '❌ Incorrect password!';
        }
    }

    loadOthersPerformance() {
        const performanceData = this.getPerformanceData();
        
        const leaderboardList = document.getElementById('leaderboardList');
        const allUsersList = document.getElementById('allUsersPerformance');
        
        if (!performanceData || performanceData.length === 0) {
            leaderboardList.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">No exam data available yet.</p>';
            allUsersList.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">No exam data available yet.</p>';
            return;
        }
        
        // Calculate best performance for each user
        const userStats = {};
        performanceData.forEach(item => {
            const userId = item.name || 'Anonymous';
            if (!userStats[userId]) {
                userStats[userId] = {
                    name: userId,
                    bestScore: 0,
                    totalExams: 0,
                    avgScore: 0,
                    scores: []
                };
            }
            userStats[userId].scores.push(item.percentage);
            userStats[userId].totalExams++;
            if (item.percentage > userStats[userId].bestScore) {
                userStats[userId].bestScore = item.percentage;
            }
        });

        // Calculate averages
        Object.keys(userStats).forEach(userId => {
            const user = userStats[userId];
            user.avgScore = (user.scores.reduce((a, b) => a + b, 0) / user.scores.length).toFixed(1);
        });

        // Convert to array and sort by best score
        const leaderboard = Object.values(userStats).sort((a, b) => b.bestScore - a.bestScore);

        // Display top 10 in leaderboard
        leaderboardList.innerHTML = '';

        if (leaderboard.length === 0) {
            leaderboardList.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">No users found.</p>';
        } else {
            leaderboard.slice(0, 10).forEach((user, index) => {
                const item = document.createElement('div');
                item.className = 'leaderboard-item';
                
                let rankClass = '';
                let rankIcon = `#${index + 1}`;
                if (index === 0) { rankClass = 'gold'; rankIcon = '🥇'; }
                else if (index === 1) { rankClass = 'silver'; rankIcon = '🥈'; }
                else if (index === 2) { rankClass = 'bronze'; rankIcon = '🥉'; }

                item.innerHTML = `
                    <div class="leaderboard-rank ${rankClass}">${rankIcon}</div>
                    <div class="leaderboard-info">
                        <div class="leaderboard-name">${user.name}</div>
                        <div class="leaderboard-stats">Avg: ${user.avgScore}% • Exams: ${user.totalExams}</div>
                    </div>
                    <div class="leaderboard-score">${user.bestScore}%</div>
                `;
                leaderboardList.appendChild(item);
            });
        }

        // Display all users
        allUsersList.innerHTML = '';

        if (leaderboard.length === 0) {
            allUsersList.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">No users found.</p>';
        } else {
            leaderboard.forEach(user => {
                const item = document.createElement('div');
                item.className = 'user-perf-item';
                item.innerHTML = `
                    <div>
                        <div class="user-perf-name">${user.name}</div>
                        <div class="user-perf-stats">Best: ${user.bestScore}% • Avg: ${user.avgScore}% • Exams: ${user.totalExams}</div>
                    </div>
                    <div class="user-perf-score">${user.avgScore}%</div>
                `;
                allUsersList.appendChild(item);
            });
        }
    }

    getPerformanceData() {
        const data = localStorage.getItem('examPerformance');
        return data ? JSON.parse(data) : [];
    }

    savePerformanceData(performanceItem) {
        const data = this.getPerformanceData();
        data.unshift(performanceItem);
        // Keep only last 100 records
        if (data.length > 100) {
            data.splice(100);
        }
        localStorage.setItem('examPerformance', JSON.stringify(data));
    }
}

// Initialize menu separately - outside DOMContentLoaded
function initMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const menuSidebar = document.getElementById('menuSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');
    
    if (!menuBtn || !menuSidebar) {
        setTimeout(initMenu, 100);
        return;
    }
    
    // Open sidebar
    menuBtn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        menuSidebar.classList.add('show');
        if (sidebarOverlay) sidebarOverlay.classList.add('show');
    };
    
    // Close function
    function closeMenu() {
        menuSidebar.classList.remove('show');
        if (sidebarOverlay) sidebarOverlay.classList.remove('show');
    }
    
    if (closeSidebar) closeSidebar.onclick = closeMenu;
    if (sidebarOverlay) sidebarOverlay.onclick = closeMenu;
    
    // Topics
    const topics = [
        'Anatomy and Physiology', 'Microbiology', 'Pharmacology',
        'Nursing Foundation', 'Medical Surgical Nursing I', 'Obstetric Nursing',
        'Medical Surgical Nursing II', 'Child Health Nursing', 'Mental Health Nursing',
        'Community Health Nursing', 'Midwifery & Gynecological Nursing',
        'Professional Trends and Adjustment'
    ];
    
    for (let i = 1; i <= 12; i++) {
        const topic = document.getElementById('menuTopic' + i);
        if (topic) {
            topic.onclick = function() {
                console.log('Topic clicked:', i, topics[i-1]);
                if (i === 11) {
                    // Midwifery & Gynecological - Open separate file
                    const url = 'midwifery-questions.html';
                    console.log('Opening:', url);
                    window.open(url, '_blank');
                    closeMenu();
                } else {
                    alert(topics[i-1] + '\n\nContent coming soon!');
                    closeMenu();
                }
            };
            console.log('Menu topic ' + i + ' initialized');
        } else {
            console.warn('Menu topic ' + i + ' not found');
        }
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const app = new ExamApp();
    app.initPerformanceButton();
    
    // Initialize menu
    initMenu();
});

