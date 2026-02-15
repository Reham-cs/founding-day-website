const allQuestions = [
    { question: "متى تم تأسيس الدولة السعودية الأولى؟", options: ["1727م", "1750م", "1818م"], correct: 0 },
    { question: "من هو مؤسس الدولة السعودية الأولى؟", options: ["الملك عبدالعزيز آل سعود", "الإمام تركي بن عبدالله", "الإمام محمد بن سعود"], correct: 2 },
    { question: "ما هو شعار يوم التأسيس؟", options: ["هي لنا دار ", "يوم بدينا ", "المجد والتاريخ  "], correct: 1 },
    { question: "لماذا 22 فبراير؟ ", options: [" تولى الإمام محمد بن سعود الحكم في الدرعية في النصف الثاني من عام 1139هـ، وتم تحديد 30 جمادى الثاني 1139هـ الموافق ليوم 22 فبراير 1727م ليكون تاريخاً لتأسيس الدولة السعودية الأولى", "تولى الإمام محمد بن سعود الحكم في الدرعية في النصف الثاني من عام 1139هـ، وتم تحديد 30 جمادى الثاني 1139هـ الموافق ليوم 22 فبراير 1727م ليكون تاريخاً لتأسيس الدولة السعودية الثانية  ", "تولى الإمام محمد بن سعود الحكم في الدرعية في النصف الأول من عام 1139هـ، وتم تحديد 30 جمادى الثاني 1139هـ الموافق ليوم 22 فبراير 1727م ليكون تاريخاً لتأسيس الدولة السعودية الأولى  "], correct: 0 },
    { question: "ماذا تمثل النخلة في شعار يوم التأسيس السعودي؟", options: ["الزراعة والتنمية", "العطاء والحياة ", "الهوية الوطنية "], correct: 1 },
    { question: "من هو أول أمير لمنطقة الرياض في الدولة السعودية الأولى؟", options: ["الملك عبد العزيز", "الإمام محمد بن سعود", "الإمام تركي بن عبد الله"], correct: 1 },
    { question: "متى تم تأسيس الدولة السعودية الثانية؟", options: ["1834م", "1818م", "1885م"], correct: 0 },
    { question: "من هو مؤسس الدولة السعودية الثانية؟", options: ["الملك عبد العزيز آل سعود", "الإمام تركي بن عبد الله", "الإمام فيصل بن تركي"], correct: 1 },
    { question: "ما هي عاصمة الدولة السعودية الأولى؟", options: ["الرياض", "الدرعية", "مكة"], correct: 1 },
    { question: "معنى العوجا؟", options: ["حريملاء ", "الرياض ", "الدرعية"], correct: 2 },
    { question: "متى تأسست المملكة العربية السعودية؟", options: ["1932م", "1926م", "1915م"], correct: 0 },
    { question: "من هو مؤسس المملكة العربية السعودية؟", options: ["الملك عبد العزيز آل سعود", "الملك فيصل بن عبد العزيز", "الملك فهد بن عبد العزيز"], correct: 0 },
    { question: "ما هو الطبق السعودي الذي يعتبر طبقاً وطنياً حسب اختيار هيئة فن الطبخ؟", options: ["الكبسة ", "المرقوق ", "الجريش "], correct: 2 },
    { question: "ما هو الحدث الذي يتم الاحتفال به في يوم التأسيس السعودي", options: ["توحيد المملكة العربية السعودية على يد الملك عبدالعزيز", "تأسيس الدولة السعودية الأولى على يد الإمام محمد بن سعود", "تأسيس الدولة السعودية الثانية على يد الإمام تركي بن عبدالله"], correct: 1 },
    { question: "متى سميت المملكة العربية السعودية بإسمها الوطني؟", options: ["1350 هـ ", " 1351 هـ ", "   1352 هـ "], correct: 1 },
    { question: "من أبرز الأكلات الشعبية في منطقة الجنوب؟", options: ["الجريش ", "العصيدة", "المرقوق"], correct: 1 },
    { question: "يعود تاريخ المملكة العربية السعودية إلى أي قرن؟", options: ["الحادي عشر", "الثاني عشر", "الثالث عشر"], correct: 1 },
    { question: " متى تم الإعلان عن يوم التأسيس السعودي كإجازة رسمية في المملكة العربية السعودية", options: ["2022 ", "2021", "2020"], correct: 0 },
    { question: "متى تأسست هيئة تطوير بوابة الدرعية", options: ["1438", "1439", "1440"], correct: 0 },
    { question: "كم عدد المناطق الإدارية في المملكة العربية السعودية؟", options: ["12", "13 ", "14"], correct: 1 }
];

// اختيار 5 أسئلة عشوائية
function getRandomQuestions(num) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

let questions = getRandomQuestions(5);  // اختيار 5 أسئلة عشوائية
let selectedAnswers = [];

function generateQuestions() {
    const container = document.getElementById("questions-container");
    container.innerHTML = '';

    questions.forEach((question, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const questionTitle = document.createElement('h5');
        questionTitle.classList.add('card-title');
        questionTitle.innerText = question.question;
        card.appendChild(questionTitle);

        question.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('answer-option');
            optionDiv.innerText = option;
            optionDiv.addEventListener('click', () => selectAnswer(index, i, optionDiv));  // تحديث الكود ليشمل العنصر
            card.appendChild(optionDiv);
        });

        container.appendChild(card);
    });

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-button');  

    submitBtn.innerText = "إرسال";
    
    submitBtn.addEventListener('click', submitQuiz);
    
    container.appendChild(submitBtn);
    
}

function selectAnswer(questionIndex, answerIndex, optionDiv) {
    // إزالة الكلاس 'selected' من كل الإجابات في نفس السؤال
    const allOptions = optionDiv.parentElement.querySelectorAll('.answer-option');
    allOptions.forEach(option => option.classList.remove('selected'));

    // إضافة الكلاس 'selected' للإجابة المختارة
    optionDiv.classList.add('selected');

    // تخزين الإجابة المختارة
    selectedAnswers[questionIndex] = answerIndex;
}

let resultDisplayed = false; // متغير للتأكد من أنه تم عرض النتيجة فقط مرة واحدة

function submitQuiz() {
    if (resultDisplayed) {
        return; // إذا تم عرض النتيجة بالفعل، لا يتم تنفيذ الكود مرة أخرى
    }

    const correctAnswers = questions.map((question, index) => question.correct);
    let score = 0;

    selectedAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    // عرض النتيجة أسفل الأسئلة
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('card', 'mt-4');
    
    const resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    
    const resultTitle = document.createElement('h5');
    resultTitle.classList.add('card-title');
    resultTitle.innerText = 'النتيجة النهائية';
    
    const resultText = document.createElement('p');
    resultText.innerText = `لقد حصلت على ${score} من ${questions.length}.`;
    
    resultBody.appendChild(resultTitle);
    resultBody.appendChild(resultText);
    
    resultContainer.appendChild(resultBody);
    document.getElementById("questions-container").appendChild(resultContainer);

    resultDisplayed = true; // تأكد من أنه تم عرض النتيجة
}


generateQuestions();

