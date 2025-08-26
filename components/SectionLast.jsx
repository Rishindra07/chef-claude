import ReactMarkdown from 'react-markdown'

export default function SectionLast(props){

    return(
         <section className="suggested-recipe-container">
                        <h2>Chef Claude Recommends:</h2>

            <ReactMarkdown>{props.recipe}</ReactMarkdown>
</section>
    )
}