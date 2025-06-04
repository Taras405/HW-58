const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

const countItems = function (array, condition) {
    let count = 0;
    let element = 0;

    for (element of array) {
        if (condition(element)) {
            count++;
        };
    };

    return count;
};

// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));



const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {

    if (b === 0) {
        return 'Помилка ділити на 0 неможна!';
    };

    return a / b;
};

// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку



const repeatMessage = function (times, messageCreator) {
    for (let i = 0; i < times; i++) {
        messageCreator(i);
    };
};

const spamMessage = () => console.log('Its spam');
const goodDayMessage = () => console.log('Hello user!');
const goodByeMessage = () => console.log('Bye user!');

repeatMessage(10, spamMessage);
repeatMessage(1, goodDayMessage);
repeatMessage(1, goodByeMessage);



const allMovies = ['Атлантида', 'Інфоголік', 'Поводир', 'Червоний', 'Мої думки тихі'];

const processMovies = function (movies, action) {
    for (let i = 0; i < movies.length; i++) {
        action(movies[i], i);
    };
};

const showMovie = (movie, index) => console.log(`${index + 1}. ${movie}`);
const upperCaseTitle = movie => console.log(movie.toUpperCase());
const movieLength = movie => console.log(`фільм "${movie}" має ${movie.length} символів у назві.`);

processMovies(allMovies, showMovie);
processMovies(allMovies, upperCaseTitle);
processMovies(allMovies, movieLength);