import React from 'react';
import './SoftButton.scss';
const SoftButton = ({square,children,callme,isActive}) =>{
    let classes = 'softButton';
    if(square){
       classes = ` ${classes} softButton--square`; 
    }
    if(isActive){
        classes = ` ${classes} softButton--active`; 
    }
    return <div className={classes} onClick={callme} >
        { children ? children : 'Button'}
     </div>
}

export default SoftButton;