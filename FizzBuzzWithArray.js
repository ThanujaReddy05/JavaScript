
const fizzbuzz = (counter,printvalus,msg = '') => {

        let i = 0;

        //Recursive function to check divisiblity of each member of array
        const arrDivision = (counter,printvalus,i,msg='') => {
            if (i === printvalus.length)
                return msg;

            if(printvalus[i])
            {
                if (counter % (i+1) === 0)
                {
                    msg += counter + ':' + printvalus[i] + '\n'
                }
            }
             return arrDivision(counter,printvalus,i+1,msg)     // Recursion on array
        
        }
        if (counter === 0)
            return msg;

        else
            {
                msg += arrDivision(counter,printvalus,i) 
            }

          return  fizzbuzz(counter-1,printvalus,msg) // Recursion on Counter
                       
    }
    const printvalus = [undefined, undefined, 'Fizz', undefined, 'Buzz' ,undefined, undefined, 'wot']
    console.log(fizzbuzz(100,printvalus))    