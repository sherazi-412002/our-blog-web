import { defineField, defineType } from "sanity";



export default defineType({
    name:"blog",
    title:"Blog",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string",
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"text",
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"title",
                maxLength:100
            }
        }),
        
        defineField({
            name:"image",
            title:"Image",
            type:"image",
            options:{
                hotspot:true
            }
        }),
        

    ]
})