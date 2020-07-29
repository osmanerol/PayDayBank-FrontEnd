const initialState={
    productList:[
        {
            id:1,
            name:"Product 1",
            price:10,
            available:1,
            description:"Product 1 description"
        },
        {
            id:2,
            name:"Product 2",
            price:20,
            available:0,
            description:"Product 2 description"
        },
        {
            id:3,
            name:"Product 3",
            price:30,
            available:1,
            description:"Product 3 description"
        },
        {
            id:4,
            name:"Product 4",
            price:40,
            available:0,
            description:"Product 4 description"
        },
        {
            id:5,
            name:"Product 5",
            price:50,
            available:1,
            description:"Product 5 description"
        },
        {
            id:6,
            name:"Product 6",
            price:60,
            available:1,
            description:"Product 6 description"
        },
        {
            id:7,
            name:"Product 7",
            price:70,
            available:0,
            description:"Product 7 description"
        },
        {
            id:8,
            name:"Product 8",
            price:80,
            available:1,
            description:"Product 8 description"
        },
        {
            id:9,
            name:"Product 9",
            price:90,
            available:0,
            description:"Product 9 description"
        },
        {
            id:10,
            name:"Product 10",
            price:100,
            available:1,
            description:"Product 10 description"
        },
    ]
}

export default (state=initialState,action)=>{
    return state;
}