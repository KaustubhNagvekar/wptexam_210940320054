import axios from "axios";
import {useState} from "react";

export default function App(){
  return(
    <div>
      <Components/>
    </div>
  );
}

function Components(){

   return(
     <div classNmamne="container">
          <h3 className="bg-secondary h-5 d-flex justify-content-center">MychatApp</h3>
         <div classNmae="col-12">
           <input className="" type="text" placeholder="Let chat here..."/>
           <button className="mx-5" >send</button>
         </div>
          <div >
            <input className="col-12" type="text" placeholder="hii"/>
          </div>
          <div className="">
            <input className="d-flex align-content-end" type="text" placeholder="hello "/>
          </div>
          <div >
            <input className="" type="text" placeholder="whats App"/>
          </div>
          <div >
            <input className="" type="text" placeholder="allgood"/>
          </div>
          <div >
            <input className="" type="text" placeholder="all the best"/>
          </div>
          
        
          
     </div>


   );

}