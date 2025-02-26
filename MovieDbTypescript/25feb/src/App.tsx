import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [namearray , setName] = useState<string[]>([]);

  const genarateRandomString = () =>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 5;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;  
  }

  function handleAddRandomString() {
    const randomString = genarateRandomString();
    setName((prevArray) => [...prevArray, randomString]);
  }

  const handleRemoveRandomString = () => {
    setName((prevArray) => prevArray.slice(0,-1));
  };


  return (
    <>
      <div className="card flex items-center justify-center py-[20px] bg-gray-600 min-h-[100vh] h-[100%]">
        <div className='text-xl w-[500px] flex flex-col gap-[10px] text-center'>
          <p className='border h-[60px] flex items-center justify-center text-white'>{count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increment button
          </button>
          <button onClick={() => setCount(count - 1)}>
            Decrement button
          </button><br />
          <button onClick={()=> setCount(count + 2)}>
            Increment By 2
          </button>
          <button onClick={()=> setCount(count - 2)}>
            Decrement By 2
          </button><br />


          <button onClick={handleAddRandomString}>
            Add Random String to Array
          </button>

          <div className='border h-[100%] py-[10px] flex flex-col items-center justify-center text-white'> 
            <h3>Random Strings in Array:</h3>
            <ul>
              {namearray.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
          <button onClick={handleRemoveRandomString}>
              remove last String from Array
          </button>
        </div>
      </div>
    </>
  );
}

export default App;