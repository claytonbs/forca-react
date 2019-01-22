import React from 'react';

const Used = props => <p>Letras já usadas: <span> { props.charUsed.join() }  </span></p>;
       
export default Used;



// class Used extends Component {
//     render(){
        
//         return(
//             <p>Letras já usadas: <span> {  this.props.charUsed.join() }  </span></p>
//         )
        
//     }   


// }


// export default Used;