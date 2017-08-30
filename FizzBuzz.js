const fizzbuzz = (counter, msg ='') => {
    if (counter === 0)
        return msg;
    let val = ''

    if(counter % 3 === 0)
        val += "Fizz";

    if(counter % 5 ===0)
        val += "Buzz"

    if(val)
        msg += counter + ':' + val + '\n'

    return fizzbuzz(counter-1, msg)
}
console.log(fizzbuzz(100))