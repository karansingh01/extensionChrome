 import { useEffect, useState } from 'react';
/* import { collection, getFirestore, query, where, runTransaction, doc, getDoc, getDocs  } from 'firebase/firestore';
import { db } from '../firebase';

interface Quote {
  author: string;
  text: string;
}

const MyComponent = () => {
  const [karanQuotes, setKaranQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchKaranQuotes = async () => {
      try {
        const karanQuotesRef = collection(db, 'karanQuotes');
        console.log(karanQuotesRef);
        
        const myDocument = doc(karanQuotesRef, "q1");

        const allDocs = await getDocs(karanQuotesRef);
        console.log(myDocument);
        console.log(allDocs);
        

        const karanQuotesData = await karanQuotesRef.doc("karanQuotes").get();

        if (karanQuotesData.exists) {
          const karanCollections = await karanQuotesRef.listDocuments();

          const karanQuotes: Quote[] = [];

          for (const collectionRef of karanCollections) {
            const snapshot = await collectionRef.get();

            snapshot.docs.forEach((doc) => {
              const quoteData = doc.data();
              const quote: Quote = {
                author: quoteData.author,
                text: quoteData.text,
              };
              karanQuotes.push(quote);
            });
          }

          setKaranQuotes(karanQuotes);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchKaranQuotes();
  }, []);

  return (
    <div>
      {karanQuotes.map((quote) => (
        <div key={quote.text}>
          <p>{quote.author}</p>
          <p>{quote.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent; */