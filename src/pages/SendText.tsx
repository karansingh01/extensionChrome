import {
    collection,
    onSnapshot,
    doc,
    where,
    query,
    QuerySnapshot,
    getDoc,
    setDoc,
    getDocs
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {db , app } from '../firebase';



import React from "react";
import { log } from 'console';


// Get a reference to the Firestore database

const SendText = () =>{

const [quotes, setQuotes] = useState<any>([]);

const [myQuotes, setMyQuotes] = useState<any>([{...QuerySnapshot, id: ''}]);


   /*
   useEffect(() => {

    
    const documentRef = doc(db, "quotes", "karanQuotes");
        const documentSnapshot = getDoc(documentRef);
        
    const q = query(collection(db, "quotes"));
    onSnapshot(q, (querySnapshot) => {
          // Add the data to the 'quotes' collection
        const allQuotes = querySnapshot.docs.map((doc) => ({
            id: doc.ref.id,
            ...doc.data(),
        }));
        console.log(allQuotes);

        setQuotes(allQuotes);

        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    }); 

}, []); */



     useEffect(() => {

/*         const q = query(collection(db, "karanQuotes")); // update to specify the karanQuotes collection
        onSnapshot(q, (querySnapshot) => {
            const allQuotes = querySnapshot.docs.map((doc) => ({
                id: doc.ref.id,
                ...doc.data(),
            }));
            console.log(allQuotes);
    
            setQuotes(allQuotes);
    
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        }); */
        


        const unsubscribe = onSnapshot(collection(db, "karanQuotes"), (querySnapshot) => {
            const allQuotes = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setQuotes(allQuotes);
        });
    
        // unsubscribe from the snapshot listener when the component unmounts
        return () => {
            unsubscribe();
        };

/* 
              // Add the data to the 'quotes' collection
            const documentRef = doc(db, "quotes", "karanQuotes");
            const documentSnapshot = getDoc(documentRef);
            documentSnapshot.then((doc) => {
            const allQuotes = documentSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log(allQuotes);
            setQuotes(allQuotes);
    
            documentSnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().q1}`);
            });
        });  */



    }, []);

    someAsyncFunction();



quotes.map((quote: any) => (
    console.log("quotes utafor" + quote.q1)
))


/* console.log( "myquotes " + myQuotes[0]);
 */


console.log( "quotes " + quotes);
return (
    <div>
        <h1>Send Text</h1>

        {quotes.map((quote: any) => (
            <div key={quote.id}>
                <h3>{quote.id}</h3>
                <p>{quote}</p>
            </div>
        ))}
    </div>

)

}

async function someAsyncFunction() {

/*     const karanQuotesRef = collection(db, 'karanQuotes');
    

    const myDocument = doc(karanQuotesRef, "q1");
    
    const allDocs = await getDocs(karanQuotesRef);
    console.log("NYE MÅTEN Å GJØRE DET PÅ");



allDocs.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
 */


    const q = query(collection(db, "quotes"), where('type', "==", 'name'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            return (doc.id, " => ", doc.data())
        });

}


export default SendText;