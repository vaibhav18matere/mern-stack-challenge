import {useState} from "react";

const UserForm = () => {

     const [counter, setCounter] = useState(2);
     const increaseCounter = () => {
          setCounter(count => count + 1);
     }

     return (
          <>
               <form>
                    <section className="m-5">
                         <label className='mx-4' htmlFor="name">Enter your name : </label>
                         <input className='border border-gray-400 rounded'
                              type="text" />
                         {/* <button id="changeBg">Click Here</button> */}
                    </section>
                    <section>
                         <h1>{counter}</h1>
                         <button className="py-2 px-4" onClick={increaseCounter}>Increase count</button>
                    </section>
               </form>
          </>
  )
};

export default UserForm;
