import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routers from "./components/Routers";


function App (){
    return(
        <div>
            <h1 className="text-3xl font-bold underline p-3">Search</h1>
            <Navbar />
            <Routers />
            <Footer />
            

        </div>
    )
}

export default App

