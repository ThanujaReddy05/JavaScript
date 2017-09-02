'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => 
      carts.reduce( (cart, currCart) => 
      {
         const total = currCart.items.reduce((sum,currItem) => 
         {
            return listings.reduce((prev,currlisting) => 
            {
               return prev += listedPrice(currlisting)(currItem)
            },0)+ sum
      
          },0 )
           cart.push({'customer' : currCart.customer, 'total' : total})
           return cart
      },[])
   

    
module.exports = {
  listing,
  cart,
  calculateTotals
}
