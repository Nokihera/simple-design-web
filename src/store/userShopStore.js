import create from 'zustand';

const userShopStore = create((set) => ({
    products: [
        {
            id: 1,
            name: "Americano",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name: "Cappuccino",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1468768649734-ddebcf0b0bc4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name: "Latte",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            name: "Espresso",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 5,
            name: "Macchiato",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            name: "Mocha",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1479319416317-5d2d306b13c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9jaGElMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 7,
            name: "Cortado",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1478192013110-1203b3616b75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ],
}));

export default userShopStore;
