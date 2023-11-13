import './App.css';
import Cards from "./Components/Cards";
import data from "./card-data.json";
import Footer from './Components/Footer/Footer';
import React, { useState } from 'react';
import Categories from './Components/Navbar/Categories';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayBeforeTaxes, setDisplayBeforeTaxes] = useState<boolean>(false);

  return (
   <>
   <Categories setSelectedCategory={setSelectedCategory}
       setDisplayBeforeTaxes={setDisplayBeforeTaxes}
       cardsList={data}  />
   <Cards data={data}
   selectedCategory={selectedCategory} 
   displayBeforeTaxes={displayBeforeTaxes}/>
   <Footer />
   </>
  );
}

export default App;
