export const initialState = {
    basket: [],
};


export const reducer = (state, action) => {

    switch (action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, {...action.payload}]
            };
        case 'REMOVE':
            const index = state.basket.findIndex(product => product.id === action.payload);
            let newBasket = [...state.basket];
            if (index >=0) newBasket.splice(index, 1); 
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}