import { Button, TextField } from "@material-ui/core";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";



const MainPage = () => {

    const [inputValue, setInputValue] = useState('');



    const handleSubmit = (event:any) => {
        event.preventDefault();
/*         const ref = db.ref('quotes');
        ref.push(inputValue); */
        setInputValue('');
      };
    

      

    return (
        <div>
        <h1>Main Page</h1>
        <form onSubmit={handleSubmit}>
  <TextField
    value={inputValue}
    onChange={(event) => setInputValue(event.target.value)}
    label="Input Field"
    variant="outlined"
  />
  <Button type="submit" variant="contained" color="primary">
    Submit
  </Button>
</form>

        </div>
    );
    };


    export default MainPage;




