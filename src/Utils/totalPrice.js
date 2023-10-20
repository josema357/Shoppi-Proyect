/**
 * Esta funcion calcula el precio total de la nueva orden
 * @param {Array} products shoppingCart: Array de objetos
 * @returns {Number} Suma total de los precios
 */
export const totalPrice=(products)=>{
    return products.reduce((sum,product)=>sum+product.price,0);
}