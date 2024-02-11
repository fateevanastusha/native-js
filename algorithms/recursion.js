//Рекурсия
/*- подход к решению задач, когда вызываем одну и ту же функцию из себя же
    Таким образом мы уменьшаем scope проблем
    Необходимо две вещи:
    1) Base case -  когда вызов останавливается, задача становится тривиальной, и мы сразу может дать ответ.
    2) Recurrence relation - сет правил, как соотносится задача меньшего размера с задачей большего размера.
*/

//Сложность по времени - n,по памяти - много
function factorial (n) {
    //base case
    if (n===0 || n===1) {
        return 1;
    }
    //recurrence relation
    return n*factorial(n-1)
}

console.log(factorial(3))

//Сложность по времени - n, по памяти то же самое

function factorial2 (n) {
    //stack
    const st = [[n,1]]
    while (st.length > 0) {
        const [curr, result] = st.pop()
        if (curr === 0 || curr === 1) {
            return result;
        }
        st.push([curr-1, result * curr])
    }
}

console.log(factorial2(3))

//Ребенок поднимается по лестнице из н ступеней. За один шаг он может подняться на 1, 2 или 3 ступени.
//Найти кол-во возможных вариантов преодоления лестницы.


//base case - если ступеней <= 0
//recurrence relation - c[n] = c[n-1] + c[n-2] + c[n-3]; =>
//сколько путей на н ступень = сколько путей на 1 назад + сколько путей на 2 назад  + сколько путей на 3 назад;
//c[3] = c[2] + c[1] + c[0]; => c[3] = 2 + 1 + 1 = 4;

//Сложность алгоритма - 3**n
function countWays (n) {
    if (n<0) {
        return 0;
    }
    if (n===0) {
        return 1;
    }
    return countWays(n-1) + countWays(n-2) + countWays(n-3);
}

console.log(countWays(12));

//Сложность алгоритма
function countWays2 (n, cache = []) {
    if (n<0) {
        return 0;
    }
    if (!cache[n]) {
        if (n===0) {
            cache[n] =1;
        } else {
            cache[n] = countWays2(n-1, cache) + countWays2(n-2, cache)  +countWays2(n-3, cache)
        }
    }
    return cache[n]
}

console.log(countWays2(12))
