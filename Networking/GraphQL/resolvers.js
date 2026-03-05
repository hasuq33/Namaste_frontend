const data = {
    authors:[
        {id:"1",name:"Harshiv Joshi",bookIds:["101","103"]},
        {id:"2",name:"Joy Patel",bookIds:["102"]},
    ],

    books:[
        {id:"101",title:"Agen Gatram",publishedYear:2021,authorId:"1"},
        {id:"102",title:"Nanev Vaktram",publishedYear:2024,authorId:"2"},
        {id:"103",title:"Nayeyan Rajyam",publishedYear:2023,authorId:"1"},
        {id:"104",title:"Lavadena Bhojyam",publishedYear:2022,authorId:"2"},
    ]
}

export const resolvers = {
    Book:{
        author:(parent,args,context, info)=>{
            console.log(parent);
            return data.authors.find(authorDetail => authorDetail.id === parent.authorId)
        },
    },
    Author:{
        books:(parent,args,context, info)=>{
            return data.books.filter((book)=>parent.bookIds.includes(book.id))
        }
    },
    Query:{
        authors: (parent,args,context, info)=>{
            return data.authors
        },
        books:(parent,args,context, info)=>{
            return data.books
        }
    },
    Mutation:{
        addBook:(parent,args,context, info)=>{
            return {}
        }
    }
}