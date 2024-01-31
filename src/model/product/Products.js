import { preview } from "vite"

class Product{

    constructor(id, name, price, imageUrl, imageAlt, description){
        this.id = id,
        this.name = name,
        this.price = price,
        this.imageUrl = imageUrl,
        this.imageAlt = imageAlt,
        this.description = description
    }


    // create method getter
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }
    getImageUrl(){
        return this.imageUrl
    }
    getImageAlt(){
        return this.imageAlt
    }
    getDescription(){
        return this.description
    }


    //create method setter

    setId(id){
        this.id = id
    }

    setName(name){
        this.name = name
    }

    setPrice(price){
        this.price = price
    }

    setImageUrl(imageUrl){
        this.imageUrl = imageUrl
    }

    setImageAlt(imageAlt){
        this.imageAlt
    }

    setDescription(description){
        this.description
    }
}