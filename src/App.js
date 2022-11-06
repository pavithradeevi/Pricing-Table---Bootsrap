import React from "react";
import Free from './Free';
import Plus from './Plus';
import Pro from './Pro';

const App = () =>{
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row pt-4">
        <Free />
        <Plus />
        <Pro />        
      </div>
    </div>
  </section>
  )
}

export default App;