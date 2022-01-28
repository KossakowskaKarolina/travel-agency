export const promoPrice = (price, discount) => {
  return (!price) || (!discount) ||
        typeof(price) != 'number' || typeof(discount) != 'number' ||
        price <= 0 || discount <= 0
    ? null
    : price-(price*(discount/100));
};