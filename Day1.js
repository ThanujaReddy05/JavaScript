const num = 10;

const arr = [];
arr.push(num);

const str = 'sup'
arr.push(str)

const bool = false;
arr.push(bool)

const func = (x,y) => { x +y }
arr.push(func)

const obj = {
    'key' : 'value',
    'add' : 'func'

}
arr.push(obj)
console.log(arr.indexOf(false))
console.log(typeof(arr))

for(let i =0 ; i<arr.length ; i++)
    console.log(typeof(arr[i]))

