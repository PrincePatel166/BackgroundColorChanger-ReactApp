import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [color,setcolor]=useState("black");
 
  return (

      <div className='w-screen h-screen duration-200 flex justify-center items-center' style={{backgroundColor:color}}>
      <div className='fixed flex justify-center flex-wrap bottom-12 insert-x-0 px-2'>
        <div className='flex justify-center bg-white flex-wrap gap-3 shadow-3xl px-3 py-2 rounded-3xl'>
          <button className='outline-none rounded-full text-white text-2xl shadow-lg px-5 py-3 ' style={{backgroundColor:"red"}} onClick={() => setcolor("red")}>Red</button>
          <button className='outline-none rounded-full text-white text-2xl shadow-lg px-5 py-3 ' style={{backgroundColor:"blue"}} onClick={() => setcolor("blue")}>Blue</button>
          <button className='outline-none rounded-full text-white text-2xl shadow-lg px-5 py-3 ' style={{backgroundColor:"olive"}} onClick={() => setcolor("olive")}>Olive</button>
          <button className='outline-none rounded-full text-white text-2xl shadow-lg px-5 py-3 ' style={{backgroundColor:"pink"}} onClick={() => setcolor("pink")}>Pink</button>
          <button className='outline-none rounded-full text-white text-2xl shadow-lg px-5 py-3 ' style={{backgroundColor:"yellow"}} onClick={() => setcolor("yellow")}>Yellow</button>
          <button className='outline-none rounded-full text-white text-2xl shadow-lg px-5 py-3 ' style={{backgroundColor:"brown"}} onClick={() => setcolor("brown")}>Brown</button>
          <button className='outline-none rounded-full text-white text-2xl shadow-lg px-5 py-3 ' style={{backgroundColor:"green"}} onClick={() => setcolor("green")}>Green</button>
          
        </div>
      </div>
     
      </div>
  )
}

export default App
