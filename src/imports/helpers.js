export const priceLevel = (priceLevel) => {
    let dollars = '';
    for(let i=0; i<priceLevel; i++){
        dollars +='$'
    }
    return dollars;
}