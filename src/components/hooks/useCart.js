import { useContext} from 'react';
import { ThemeContext } from '../app/App';

export const useCart = () => {

    const { cartItems, setCartItems, onRemoveCard } = useContext(ThemeContext);
    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0);
    
    return { cartItems, setCartItems, onRemoveCard, totalPrice };
}
