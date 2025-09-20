import { Children, useState } from 'react';
import Coursbox from './Coursbox';
import Courslist from './Courslist';


//lists exercise

export default function Main(){
  


  const[courses , setnewcourses]=useState(
    [{
      title : 'php courses',
  description : 'this is php cours description' 
  }
,

 {
      title : 'css courses',
  description : 'this is css cours description' 
  }

,

 {
      title : 'js courses',
  description : 'this is js cours description' 
  }
  ])

  const ButFun= function (){
    setnewcourses(
   [{
      title : 'php courses',
  description : 'this is php cours description' 
  }
,

 {
      title : 'css courses',
  description : 'this is css cours description' 
  }

,

 {
      title : 'js courses',
  description : 'this is js cours description' 
  }
  
, 
  {
    title:"SEO",
    description:"this cours is about SEO"
  }
  ,
  {
    title:"c++",
    description:"this cours is about c++"
  }
  ])

  }
  

  // let newcourses=  courses.map((cours)=>
  //   <Coursbox cours={cours}/>
  //     )

return(
  <div>
 <courslist>
  
    {courses.map((cours)=>
    <Coursbox cours={cours}/>
      )}
      <button onClick={ButFun}>load more</button>
      
 </courslist> 
 </div>
  )
}
//یا اینکه نیوکورسس رو تعریف میکنیم و آبجکت ها را به صورت آرایه های جی ای ایکسی به کورس لیست پاس میدیم
// {/* <courslist>
//   {newcourses}
// </courslist>
// ) */}
// }









//lists----------------------------------------------

// export default function Main(){
//   const headings = [
//     "Hi",
//     "My name is fatemeh",
//     "Im from Khozestan",
//     "I love coding"
//   ]
 
// return(
//   <div>
//     {headings.map((items)=> <span>{items}</span>)}
//   </div>
// )
// }






//state counter--------------------------------------

// export default function Main(){

//   const[counter , setCounter] = useState(0);

//   function ButFun(){
//     setCounter(counter+1);

//   }

//   return(
//     <div>
//     <button onClick={ButFun}>Click me</button>
//     <p>{counter}</p>
//     </div>
//   )
// }



// State (re-rendering)-------------------------------------

// export default function Main(){

//   let [massage , setMassage] = useState("hey");

//   const ButFun= function(){
//     setMassage("my name is fati")
//   }
  

//   return(
// <div>
//   <button onClick={ButFun}>Click me </button>
//    <p>{massage}</p>
// </div>
  
//   )
// }





//events---------------------------------------------------

// export default function Main(){

  //CLASSIC FUNCTION
// function ButtonFun(){
//   console.log('click me :)');
// }

  //ARROW FUNCTION
// const ButtonFun = ()=>{
//   console.log('clickkkkkkk')
// }

//خروجی arrow & classic
  // return(
  //   <div>
  //     <button onClick={ButtonFun}>Click</button>
  //   </div>

  // )

// mix of logic and html-------------
  // return(
  //   <button onClick={()=>console.log('clickkk')}>click me</button>
  // )
// }

 





//children props-------------------------------------------
// export default function Main(){
//   return(

//     <div>
      
//       <h2>cours lists:</h2>
//     <Courslist>
//       <Coursbox cours={{
//          title:"this is Cours One",
//          details:"this is about Cours One"
//       }
//       }/>

//         <Coursbox cours={{
//          title:"this is Cours Two",
//          details:"this is about Cours Two"
//       }
//       }/>

//          <Coursbox cours={{
//          title:"this is Cours Three",
//          details:"this is about Cours Three"
//       }
//       }/>
//     </Courslist>
   
//     </div>
   
//   )
// }






//--------------------------------------------------


// export default function Main(){
//   return(

//     <div>
      
//       <h2>cours lists:</h2>
//       <Coursbox title='cours1' details='this is about cours1'/>
//       <Coursbox title='cours2' details='this is about cours2'/>
//       <Coursbox title='cours3' details='this is about cours3'/>
   
//     </div>
   
//   )
// }




// اگر بخوایم به کورس باکس متغیر پاس بدیم
// export default function Main(){
//     let coursOne = {
//     title:"course number one",
//     details:"this is about the cours"
//    }

//   return(
 
//     <div>
//       <h2>cours lists:</h2>
//       <Coursbox cours={coursOne}/>
//     </div>
   
//   )
// }

// اگر بخوایم آبجکت پاس بدیم





// export default function Main(){
//   return(
 
//     <div>
//       <h2>cours lists:</h2>
//       <Coursbox cours={{
//     title:"cours number one",
//     details:"this is about the cours"
//    }}/>
//     </div>
   
//   )
// }



