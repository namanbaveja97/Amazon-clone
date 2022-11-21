export const initialState = {
    user : '',
    basket: [
        {
            id:"123211232",
            title:"Samsoong",
            price:750.23,
            rating:3,
            image:"https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL320_.jpg"
      
        },
        {
            id:"123211233",
            title:"Samsoong",
            price:750.23,
            rating:3,
            image:"https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL320_.jpg"
      
        }
    ],
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action){
   
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'REMOVE_FROM_BASKET':
            console.log(action.payload.id);

            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id == action.payload.id)
            
            if(index >= 0 ){
                newBasket.splice(index, 1);
            }else{
                console.warn('cant remove item as its id is not found',action.payload.id);
            }
            
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
};

export default reducer;