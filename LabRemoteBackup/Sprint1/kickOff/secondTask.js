
const calculateTimeDifference = () => {
   
    let dayStartingTime = new Date(2020, 1, 21)
    let now = new Date()
    let result = now - dayStartingTime
    return Math.round (result / 1000)
}

console.log(calculateTimeDifference()); 