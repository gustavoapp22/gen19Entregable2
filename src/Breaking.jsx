import React from 'react';

const Breaking = () => {
    const [ rey,setRey ] = useState([]);

    useEffect(() => {
   axios("https://randomuser.me/api/")
   .then(res => setRey(res.data));
  
  
  
    },[]);
  
    console.log(rey)
    return (

        <div>
            <h1>{rey.results?.[0].name.first} {rey.results?.[0].id.last}</h1>

<img src={rey.results?.[0].picture.large} alt="" />

<h2>{rey.results?.[0].email}</h2>
 
        </div>
    );
};

export default Breaking;