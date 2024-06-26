import React, {createContext, useReducer, useContext, ReactNode} from 'react';
import {Product} from './types';

interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

interface AddToCartAction {
    type: 'ADD_TO_CART';
    payload: CartItem;
}

interface RemoveFromCartAction {
    type: 'REMOVE_FROM_CART';
    payload: number;
}

interface ClearCartAction {
    type: 'CLEAR_CART';
}

interface UpdateQuantityAction {
    type: 'UPDATE_QUANTITY';
    payload: { id: number; quantity: number };
}

type CartAction = AddToCartAction | RemoveFromCartAction | ClearCartAction | UpdateQuantityAction;

const initialState: CartState = {
    items: [],
};

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}>({state: initialState, dispatch: () => null});

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, {...action.payload, quantity: 1}],
            };
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case 'CLEAR_CART':
            return initialState;
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
                ),
            };
        default:
            return state;
    }
};

export const CartProvider = ({children}: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
