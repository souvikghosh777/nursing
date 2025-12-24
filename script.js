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
        this.loadQuestions();
        this.initializeElements();
        this.bindEvents();
    }

    loadQuestions() {
        // Flatten all questions from pages
        this.questions = [
            ...examQuestions.page1,
            ...examQuestions.page2,
            ...examQuestions.page3,
            ...examQuestions.page4
        ];
    }

    initializeElements() {
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
        this.startScreen.classList.remove('active');
        this.examScreen.classList.remove('active');
        this.resultScreen.classList.remove('active');

        switch(screen) {
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
        
        this.currentSectionDisplay.textContent = section;
        this.sectionInfo.textContent = sectionNames[section] || '';
        this.questionTitle.textContent = `Question ${index + 1} of ${this.totalQuestions}`;
        this.questionText.textContent = question.question;
        
        // Render options
        this.optionsContainer.innerHTML = '';
        question.options.forEach((opt, i) => {
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
        
        if (index === sectionEnd) {
            if (this.currentSection === 4) {
                this.nextBtn.textContent = 'Submit Exam';
            } else {
                this.nextBtn.textContent = 'Next Section →';
            }
        } else {
            this.nextBtn.textContent = 'Next →';
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
        
        // Result message
        let message = '';
        if (correct >= 80) {
            message = '🌟 Excellent! Outstanding performance!';
            this.resultMessage.className = 'result-message';
        } else if (correct >= 60) {
            message = '👍 Good job! Keep it up!';
            this.resultMessage.className = 'result-message';
        } else if (correct >= 40) {
            message = '📚 Average performance. Room for improvement.';
            this.resultMessage.className = 'result-message';
        } else {
            message = '💪 Needs improvement. Study harder!';
            this.resultMessage.className = 'result-message poor';
        }
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
        
        this.showScreen('start');
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new ExamApp();
});
