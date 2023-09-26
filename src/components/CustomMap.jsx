import React, { useEffect, useState } from 'react'
import { Map } from 'ol';


function CustomMap() {
    const [map, setMap ] = useState(null);

    useEffect(() => {
        const map = new Map();
        console.log(map);
    }, []);

  return (
    <div></div>
  )
}

export default CustomMap;