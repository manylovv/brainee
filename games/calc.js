const getRandomOperator = () => {
    const arrOperators = ["+", "-", "*"]
    const random = Math.floor((Math.random() * arrOperators.length))
    return arrOperators[random]
}
export const gameRules = "What is the result of the expression?"

export const brainCalcGame = () => {
    const arr = []
    const num1 = (Math.ceil(Math.random() * 15))
    const num2 = (Math.ceil(Math.random() * 15))
    const randomOperator = getRandomOperator()

    arr.push(`${num1} ${randomOperator} ${num2}`)

    switch (randomOperator) {
        case "+":
            arr.push(String(num1 + num2))
            break
        case "-":
            arr.push(String(num1 - num2))
            break
        case "*":
            arr.push(String(num1 * num2))
            break
    }
    return arr
}