
export default function Main(props) {

    return (
        <main className="section-main">
                <h1 className="heading">
                    Ingredients on hand:
                </h1>
                <ul className="list-items">
                    {/* <li>Chicken breasts</li>
                    <li>Most of the main spices</li>
                    <li>Olive oil</li>
                    <li>Heavy cream</li>
                    <li>Chicken broth</li>
                    <li>Parmesan cheese</li>
                    <li>Spinach</li> */}
                    {props.item}
                </ul>
            

        </main>
    )
}