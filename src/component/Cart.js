import { MyCartContext } from "../management/context"
import CartData from "../ShoppingCart/data/CartData"
import CartItem from "./CartItem"

const Cart = () => {
    const {cart} = MyCartContext()
    console.log("ข้อมูลใน cart : ",Cart)
    return(
        <div className="shopping-cart">
            <div className="title">สินค้าในตะกร้า</div>
            {cart.map((data)=>{
                return<CartItem key={data.id} {...data}/>
            })}
            <div className="footer">ยอดรวม</div>
        </div>
    )
}
export default Cart