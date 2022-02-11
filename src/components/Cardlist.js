import React from "react";
import Card from './Card';

const Cardlist = ({ robots }) => {

    return (
        <div>
            {
               robots.map((user, i) =>{
                return (<Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}/>)
                })
            }
        </div>
    )

    //     <div >
    //         {cardComponent}
    //         <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    //         <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    //     </div> 
    // )
}

export default Cardlist;