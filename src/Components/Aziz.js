import PropTypes from 'prop-types';
// const Aziz=(props)=>{
    const Aziz=({name,age,names,bestUser,aziz,handleHello,handleName,test,children})=>{
    // console.log(props)
    return(
        <div>
            {/* <h2>Aziz Component</h2>
            <h3>My name is {props.name} and i am {props.age}</h3>
            <ul>
                {
                    props.names.map((el,i,t)=> <li key={i}>{el}</li> )
                }
            </ul>
            <h3>My name is {props.bestUser.name}, i am {props.bestUser.age} , and i am from {props.bestUser.adress} </h3> */}
       
            <h2>Aziz Component</h2>
            <h3>My name is {name} and i am {age}</h3>
            <ul>
                {
                    names.map((el,i,t)=> <li key={i}>{el}</li> )
                }
            </ul>
            <h3>My name is {bestUser.name}, i am {bestUser.age} , and i am from {bestUser.adress} </h3>
           <h1>{aziz}</h1>
           <button onClick={handleHello}>Hello</button>
           <br></br>
           <br></br>
           <button onClick={()=>handleName("Mohamed")}>Hello Name</button>
           {/* <h2>{test == true ? 'TRUE' : 'FALSE'}</h2> */}
           <h2>{test ? 'TRUE' : 'FALSE'}</h2>

           {/* {
            test ?
            <button onClick={handleHello}>Hello</button>
            :
            <button onClick={()=>handleName("Mohamed")}>Hello Name</button>
           } */}

           {
            test ? 
            <h1>Mahmoud</h1>
            :
            <h1>Aziz</h1>
           }

{children}
        </div>
    )
}

Aziz.defaultProps = {
    name : 'Seif',
    age : 90,
    names : ["zzzz",'rrrrr','dddd']
}

Aziz.propTypes = {
    name: PropTypes.string
}

export default Aziz