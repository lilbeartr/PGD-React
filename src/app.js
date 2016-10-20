import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => (

        <header> 
            <h1> {props.title} </h1>
    
        </header>

)


const Items = (props) => {

    console.log(props.items) 

    return (
           <table>
            {props.items.map(item => (
                     <div>
                         <img src={item[0]} />
                         
                         	 <p>
                         	 	<li>{item[1]} </li>
                                <li>{item[2]} </li>
                                <li>{item[3]} </li>
                                <li>{item[4]} </li>
                                <li>{item[5]} </li>
                             </p>
                         
                     </div>
                )
            )}
        </table>

    )

}

const Content = (props) => (

    <section>

        <p> {props.content} </p>
        <Items items={props.items} />

    </section>


)


const AppWithoutDescription = () => (

    <Header title="No description here" />
)

const App = () => {
    const appTitle = 'PokeGo-Dex'
    const appContent = 'PokeGo-Dex with React'
    const items = [[ "pic/001.png" , "No : #001" , "Name : Bulbasaur" , "Type : Grass/Poison" , "Highest CP : 322" , "Highest VI : 69 " ]
    , [ "pic/002.png" , "No : #002" , "Name : Ivysaur" , "Type : Grass/Poison" , "Highest CP : 755" , "Highest VI : 72 " ]
    , [ "pic/133.png" , "No : #133" , "Name : Eevee" , "Type : Normal" , "Highest CP : 503" , "Highest VI : 90 " ]
    , [ "pic/143.png" , "No : #143" , "Name : Snorlax" , "Type : Normal" , "Highest CP : 1437" , "Highest VI : 76 " ] ]


    return (
            <section>
                 <Header title={appTitle} />
                 <Content 
                    content={appContent} 
                    items={items}
                 />
            </section>

    )  

}

const element = document.getElementById('app')
ReactDOM.render(<App />, element)