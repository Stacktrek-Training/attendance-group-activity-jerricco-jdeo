function attendance(statusToday){
    const statusPresent = ['nagmahal', 'minahal', 'sinaktan']
    let result = 'Absent'
    if (statusPresent.includes(statusToday)){
        result = 'Present'
    }
        return result
}

console.log(attendance('nagmahal'))
console.log(attendance('minahal'))
console.log(attendance('sinaktan'))
console.log(attendance('present'))
