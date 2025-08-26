import React from "react"
import Main from "./Main";
import Footer from "./Footer";

export default function TrailingContent() {

    const [ingredients, setIngredients] = React.useState([]);

    const ingredientList = ingredients.map((ingredient, index) =>
        <li key={index}> {ingredient}</li>
    )

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient = formData.get('items')
    //     console.log(newIngredient)
    //     setIngredients((prevIngredients) =>
    //         [...prevIngredients, newIngredient]
    //     )
    //     event.currentTarget.reset()

    // }

    function submit(formData){
        const newIngredient = formData.get('items')

        setIngredients((prevIngredients)=>
        [...prevIngredients,newIngredient])

    }

    return (
        <>
        <form action={submit}  className='trailing-content'>
            <input
                type='text'
                placeholder='e.g. oregano'
                className='text-input'
                name="items"
            />
            <button className='add-ingredient'>
                +Add ingredient
            </button>
        </form>


        {ingredients.length>0 && <Main  item = {ingredientList}/>}
        {ingredients.length>3 && <Footer ingredients={ingredients} />}
        </>
    )
}