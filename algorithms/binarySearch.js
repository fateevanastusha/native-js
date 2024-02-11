//Бинарный поиск

const arr = [1,2,3,4,5,6,7,8,9];

//Линейный поиск
//Сложность алгоритма - n
function searchElement(arr,el) {
    for (let i = 0; i <arr.length; i ++) {
        if (arr[i] === el) {
            return i
        }
    }
    return -1
}

console.log(searchElement(arr,8))

//Бинарный поиск
//Сложность алгоритма 0(log N)

function searchElement2(arr,el) {
    let left = -1;
    let right = arr.length;
    while (right - left > 1) {
        const mid = Math.floor((left + right) /2);
        if (arr[mid] === el) {
            return mid;
        }
        if (arr[mid] > el) {
             right = mid;
        } else {
            left = mid;
        }
    }
    return -1
}

console.log(searchElement2(arr, 8))

//Сколько раз встречается число?
//Сложность алгоритма k*(log n)
const array2 = [1,2,3,4,2,2,5,4,2,8,9,11]
const sortedArray2 = array2.sort((a,b) => a-b)
console.log(sortedArray2)
function countElement (arr, el) {
    const posEl = searchElement2(arr,el)
    if (posEl === -1){
        return 0;
    }

    let i = posEl;
    while (arr[i] === el) {
        i--;
    }
    let j= posEl;
    while (arr[j] === el) {
        j++
    }
    return j-i-1;
}

console.log(countElement(sortedArray2, 11))