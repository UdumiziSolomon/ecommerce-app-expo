

const CartReducer = (state: any, action: any) => {
    switch(action.type){

        case 'ADD_ITEM' :
            return{
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

        case 'REMOVE_ITEM':
            return{
                ...state,
                cartItems: state.cartItems.filter((item: any) => item.id != action.payload)
            }

        default:
            return state ;
            
    }
}

export default CartReducer ;