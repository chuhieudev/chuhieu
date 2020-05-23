// import { Switch } from "react-router-dom"

var initialState=[
    {
        id:1,
        name:"iphone 6",
        price:1000000,
    },
    {
        id:2,
        name:"iphone 6",
        price:1000000,
    },
    {
        id:3,
        name:"iphone 6",
        price:1000000,
    },  
]

const products= (state=initialState,action)=>{
        switch (action.type) {
            default:return [...state]
        }
}
export default products