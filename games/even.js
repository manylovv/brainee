export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
export const brainEvenGame = () => {
    const arr = []
    arr.push(Math.ceil(Math.random() * 100)) //случайное число от 1 до 100

    if (arr[0] % 2 === 0) {
        arr.push("yes")
    } else {
        arr.push("no")
    }
    return arr
}