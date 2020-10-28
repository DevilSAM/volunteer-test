let questions = [
    {
        question: 'In what year The Terminator was released?',
        variants: [
            '1980',
            '1984',
            '1987',
            '1991'
        ],
        answer: '1984',
        image: './img/0.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'Who plays the Terminator?',
        variants: [
            'Earl Boen',
            'Pual Winfield',
            'Arnold Schwarzenegger',
            'Rick Rossovich'
        ],
        answer: 'Arnold Schwarzenegger',
        image: './img/1.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'The Terminator was directed by?',
        variants: [
            'Stan Winston',
            'Paul Andersen',
            'Sam Raimy',
            'James Cameron'
        ],
        answer: 'James Cameron',
        image: './img/2.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'Which model the Terminator was?',
        variants: [
            'T - 200',
            'T - 400',
            'T - 600',
            'T - 800'
        ],
        answer: 'T - 800',
        image: './img/3.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'Who arrived from the future with Terminator?',
        variants: [
            'Kyle Reese',
            'John Stoker',
            'Mike Seedorf',
            'Gabe Walker'
        ],
        answer: 'Kyle Reese',
        image: './img/4.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'Who killed the Terminator?',
        variants: [
            'Kyle Reese',
            'Lt. Traxler',
            'Sarah Connor',
            'John Connor'
        ],
        answer: 'Sarah Connor',
        image: './img/5.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'What is a bar name where Kyle and Terminator fights at first time?',
        variants: [
            'Techno-Bar',
            'Tech-Noir',
            'Black-Tech',
            'Noir-Bar'
        ],
        answer: 'Tech-Noir',
        image: './img/6.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'How many punks was on the street who gives a close to the Terminator?',
        variants: [
            '1',
            '2',
            '3',
            '4',
        ],
        answer: '3',
        image: './img/7.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'How Sarah Connor made money?',
        variants: [
            'Dancing',
            'Singing',
            'Cleaning',
            'Waiter'
        ],
        answer: 'Waiter',
        image: './img/8.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
    {
        question: 'What company makes "The Terminator"?',
        variants: [
            'Miramax',
            'Orion',
            'Lions Gate',
            'TriStar',
        ],
        answer: 'Orion',
        image: './img/9.jpg',
        descr: [
            'description 1',
            'description 2',
            'description 3',
            'description 4'
        ],
    },
];


let app = new Vue({
    
    el: '#t2app',

    template: `
        <div class='start-game-block' v-if='startScreen'>
            <div class='container'>
                <h4>Заголовок предисловия.</h4>
                <p>Тут можно написать тектс любой, который будет объяснять игроку условия и цель игры, всякие правила и тому подобную ерунду</p>
                <p><b>Что-то можно выделить</b>, а что-то оставить обычным шифтом</p>
                <p>Что-то мжно начать с новой строки</p>
                <p><i>В общем, это текст надо редактировать и можно написать что угодно</i></p>
            </div>
            <button id='startGameBtn' class='btn btn-success difficult' @click='beginGame()'> Пройти тест </button>
        </div>

        <div class='question-block' v-else-if='questionScreen'>
            <img :src='questions[currentQuestion].image' class='mx-auto d-block rounded quest-image'>
            <h4>
                <b>{{ questions[currentQuestion].question }}</b>
            </h4>
            <div class="container">
                <div v-for='(variant, idx) in questions[currentQuestion].variants' @click='getChoise($event)' class='d-flex align-items-center justify-content-center div-var'>{{variant}}</div>
            </div>
            <button id='nextQuestionBtn' class='btn btn-primary' @click='nextQuestion($event)' disabled>next</button>
        </div>

        <div class='result-block' v-else='resultScreen'>
            <h1>Your result: {{ rightAnswer }}</h1>
            <div v-if='rightAnswer < 3'>
                <img src='https://i.ibb.co/m4psmCP/001.jpg' alt='Sarah on bike'>
                <p>You are young Sarah. You know nothing about Terminators yet :) </p>
            </div>
            <div v-else-if='rightAnswer > 2 && rightAnswer < 6'>
                <img src='https://i.ibb.co/3c6RbCC/002.jpg' alt='Terminator arrived'>
                <p>You are just arrived Terminator. There are a lot things to know!</p>
            </div>
            <div v-else-if='rightAnswer > 5 && rightAnswer < 7'>
                <img src='https://i.ibb.co/Pm8L6Cp/003.jpg' alt='migo migo tormento'>
                <p>Well, you know something about this movie. And you will not believe, but this picture from the "Terminator":)</p>
            </div>
            <div v-else-if='rightAnswer > 6 && rightAnswer < 9'>
                <img src='https://i.ibb.co/6ytQcyd/004.jpg' alt='Sarah on bike'>
                <p>Good! But what are the questions you was not possible to answer? :)</p>
            </div>
            <div v-else-if='rightAnswer == 9'>
                <img src='https://i.ibb.co/9sQdFJz/005.jpg' alt='hunter killer'>
                <p>Great! If you face this monster you will be able beat it! :)</p>
            </div>
            <div v-else='rightAnswer == 10'>
                <img src='https://i.ibb.co/t2KdKyg/006.jpg' alt='Sarah on bike'>
                <p>EXCELLENT! YOU ARE REAL FAN OF THE TERMINATOR :) </p>
            </div>
        </div>
    `,

    data: {
        questions: questions,
        diffLevel: 0,
        startScreen: true,
        questionScreen: false,
        resultScreen: false,
        currentQuestion: 0,
        currentAnswer: '',
        rightAnswer: 0,
    },

    methods: {
        beginGame(e) {
            this.startScreen = false;
            this.questionScreen = true;
        },

        nextQuestion(event) {
            document.getElementById('nextQuestionBtn').disabled = true;
            
            if (this.currentQuestion < 9) {
                this.currentQuestion++;
            } else {
                this.questionScreen = false;
                this.resultScreen = true;
            }
            // делаем варианты ответов доступными для клика
            let divVar = document.getElementsByClassName('div-var');
            for (let i = 0; i < divVar.length; i++) {
                divVar[i].style.pointerEvents = 'auto';
                divVar[i].style.backgroundColor = 'transparent';
            }
        },

        getChoise(event) {
            document.getElementById('nextQuestionBtn').disabled = false;
            this.currentAnswer = event.target.textContent;
            if (this.currentAnswer == questions[this.currentQuestion].answer) {
                this.rightAnswer++;
            }
            // делаем варианты недоступными для клика еще раз
            let divVar = document.getElementsByClassName('div-var');
            for (let i = 0; i < divVar.length; i++) {
                divVar[i].style.pointerEvents = 'none';
                // окрашиваем в серый цвет, чтобы указать, что они не кликабельны
                divVar[i].style.backgroundColor = 'rgba(100,100,100,0.3)';
                // окрашиваем выбранный вариант в красный
                if(divVar[i].innerText == this.currentAnswer) {
                    divVar[i].style.backgroundColor = 'rgba(255,0,0,0.3)';
                }
                // окрашиваем правильный вариант в зеленый (если че, то красный тоже перекрасится)
                if(divVar[i].innerText == questions[this.currentQuestion].answer) {
                    divVar[i].style.backgroundColor = 'rgba(0,255,0,0.3)';
                }
            }
            // а тут надо теперь приписать к выбранному варианту ответа какое-то пояснение
            /// ///// ////////// /////////////// ///////////////////////
            console.log(this.currentAnswer);
            console.log(this.rightAnswer)
        }
    },

    components: {
    }
});