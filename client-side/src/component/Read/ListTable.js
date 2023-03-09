import React, { useEffect } from 'react';
import { Read } from '../../ApiServices/CRUDServices';

const ListTable = () => {
useEffect(()=>{
   Read().then((result)=>{
    alert(result)
   })
})

    return (
        <div>
           
        </div>
    );
};

export default ListTable;