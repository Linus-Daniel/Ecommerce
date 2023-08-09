
import { IoMdCart, } from "react-icons/io"
import { HiOutlineHeart, HiOutlineHome, HiOutlineUser, HiSearch,  } from "react-icons/hi"
import Search from "../pages/search/search"
import Cart from "../pages/cart/cart"
import Wishlist from "../pages/wishlist/wishlist"
import User from "../pages/user/user"
import First from "../pages/main/first"
import ProductView from "../pages/productview/ProductView"
import Payment from "../payment/Payment"
import Categories from "../categories/Categories"



export const RouteTrigger =[
        {
            icon:<HiOutlineHome />,
            Component:"/main",
            name:"Home"
        },
        {
            icon:<HiOutlineHeart />,
            Component:"/wishlist",
            name:"Wish List"
        },{
            icon:<div>
                <p className=" absolute text-green-800 bg-white rounded-full w-3 h-3 flex items-center justify-center font-bold text-xs">1</p>
                <IoMdCart />
                </div>,
            Component:"/cart",
            name:"Cart"
        },{
            icon:< HiSearch />,
            Component:"/search",
            name:"Search"
        },{
            icon:<HiOutlineUser/>,
            Component:"/user",
            name:"User"
        },
]

export const pages = [
    {
        path:"/search",
        element:<Search />

    },
    {
        path:"/cart",
        element:<Cart />

    },
    {
        path:"/wishlist",
        element:<Wishlist />

    },
    {
        path:"/user",
        element:<User />

    },
    {
        path:"/main",
        element:<First />
 

    },
    {
        path:"/productview",
        element:<ProductView />
 

    },
    {
        path:"/payment",
        element:<Payment />
 

    },
    {
        path:"/",
        element:<First />
    
    },
    {
        path:"/categories/:id",
        element:<Categories />
    
    }


]

export const Banks =  [
    {
        name:"Select Bank",
        accountNumber:"",
        UssdCode:"",
        accountName:""
    },
    {
        name:"United Bank For Africa (UBA)",
        accountNumber:"2204174417",
        UssdCode:"*919#",
        accountName:"Linus Daniel Vandu"
    },
    {
        name:"PayCom (Opay)",
        accountNumber:"9015648441",
        UssdCode:"*955#",
        accountName:"Linus Daniel"
    },{
        name:"PalmPay",
        accountNumber:"9015648441",
        UssdCode:"*919#",
        accountName:"Linus Daniel"
    },{
        name:"Zenith",
        accountNumber:"2204174417",
        UssdCode:"*919#",
        accountName:"Linus Daiel"
    },
]