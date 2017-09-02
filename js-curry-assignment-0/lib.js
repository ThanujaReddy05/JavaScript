'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count =>   
         new Array(count).fill(itemName)
       
/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => 
      customers.reduce((cust, currCustomer) => 
      { 
        cust.push({customer : currCustomer.name, 
                   items : entries(currCustomer.shoppingList).reduce((cart,currCustCurrCart) =>
                           cart = cart.concat(itemRepeater(currCustCurrCart[0])(currCustCurrCart[1])),[]) 
                  })
        return cust
      },[])  
      
module.exports = {
  listing,
  customer,
  constructCarts
}
