import { parseOptionPrice } from './parseOptionPrice';

export const promoPrice = (price, discount) => {
  if(!price|| !discount || typeof(discount) != 'number' || price <= 0 || discount <= 0){
    return null;
  } else if(typeof(price) != 'number'){
    const priceParsed = parseOptionPrice(Object.values({price}).toString());
    const priceParsedValue = priceParsed.value;
    return priceParsedValue-(priceParsedValue*(discount/100));
  } else if(typeof(price) === 'number'){
    return price-(price*(discount/100));
  }
};