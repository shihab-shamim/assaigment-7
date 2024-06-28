
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import SideBar from './components/SideBar/SideBar'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  // let time=0
  // const calorie=0
  const [cart,setCart]=useState([])
  const [price,setPrice]=useState([])
  const [preparing,setPreparing]=useState([])

  useEffect(()=>{
    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>setCart(data))
  },[])

  const handleAdd=(p)=>{
    const cheak=price.find(item=>item.recipe_id == p.recipe_id)
    if(!cheak){
      setPrice([...price,p])
    }
    else{
      toast.success('Already  exist .', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      })
    }
  }

  const handlePreparing=(id)=>{
    const newCard=price.filter(item=>item.recipe_id !==id)
    console.log(newCard)
    setPrice(newCard)
    addPreparing(id)
   
  }
  const addPreparing=(id)=>{
    const newCart=cart.find(item=>item.recipe_id === id)
    
    setPreparing([...preparing,newCart])
   

  }




 
  return (
    <>
     <div className='max-w-[1320px] mx-auto mt-12' >
      <Header></Header>
      <div className='mt-12'>
        <Hero></Hero>
      </div>
      <div className='mt-12'><Main></Main></div>
      {/* blogs  */}
      <div className='mt-12 flex flex-col md:flex-row'>
        <Blogs cart={cart} handleAdd={handleAdd}></Blogs>
        <SideBar price={price} handlePreparing={handlePreparing} preparing={preparing}></SideBar>

      </div>
      <div><Toaster
  position="top-right"
  reverseOrder={false}
/></div>
     </div>
     
      
    </>
  )
}

export default App

