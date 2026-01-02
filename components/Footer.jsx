import React from "react"
import SectionLast from "./SectionLast"
import { getRecipeFromMistral } from "../ai"
export default function Footer(props) {

    const [recipeShown,setRecipeShown] = React.useState(false)

    const[recipe,setRecipe] = React.useState('')

    const recipeSection = React.useRef(null)

    React.useEffect(()=>{ 
        if(recipe!=='' && recipeSection!=null){
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
            
        }
    },[recipe])

    async function getRecipe(){
        setRecipeShown((prevRecipeShown)=>!prevRecipeShown)
        const data = await getRecipeFromMistral(props.ingredients)
        setRecipe(data)
    }


    return (
        <>
        
        <footer className="footer" ref={recipeSection}>
            <div className="content">
                <h1>
                    Ready for a recipe?
                </h1>
                <p>
                    Generate a recipe from your list of ingredients.
                </p>
            </div>
            <button onClick={getRecipe} className="btn-get_recipe">Get a recipe</button>



        </footer>
        {recipeShown && <SectionLast recipe={recipe} />}
        </>


    )
}