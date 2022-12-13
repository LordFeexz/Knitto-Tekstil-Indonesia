const fizzBuzz = (num : number) : any => {
    let temp : any = []
    for(let i = 1 ; i <= num ; i++){
        if(i % 15 === 0)
            temp.push('FizzBuzz')
        else if(i % 3 === 0)
            temp.push('Fizz')
        else if(i % 5 === 0)
            temp.push('Buzz')
        else temp.push(i)
    }
    return temp.join('\n')
}

console.log(fizzBuzz(100))