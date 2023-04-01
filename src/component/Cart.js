import { MyCartContext } from "../management/context"
import CartData from "../ShoppingCart/data/CartData"
import CartItem from "./CartItem"

const Cart = () => {
    const {cart,total} = MyCartContext()
    if(cart.length === 0){
        return(
            <div className="shopping-cart">
                <h1 className="empty">ไม่มีสินค้าในตะกร้า</h1>
            </div>
        )
    }else{
        return(
            <div className="shopping-cart">
                <div className="title">สินค้าในตะกร้า</div>
                {cart.map((data)=>{
                    return<CartItem key={data.id} {...data}/>
                })}
                <div className="footer">ยอดรวม {total}</div>
            </div>
        )
    }
}
export default Cart