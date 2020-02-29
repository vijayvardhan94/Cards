import React from 'react';


//bg-light-green is style from tachyon
const Card = ({name, email, id}) => { // () alternate destructuring
    //const {name , email, id} = props; //es6 destructuring so you dont have to props.name, props.email
    return(
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt = "robots" src = {`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                
            </div>
        </div>

    );
}

export default Card;