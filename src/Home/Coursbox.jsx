export default function Coursbox({cours}){

  return(
    <div>
      <h2>{cours?.title}</h2>
      <p>{cours?.description}</p>
      <span>time:10</span>
    </div>
  )
  
}


//object distructuring
// import Courslist from "./Courslist"
// export default function Coursbox({title : ti , details}){
//   return(
//     <div>
//       <h2>{ti}</h2>
//       <p>{details}</p>
//       <span>time:10</span>
//     </div>
//   )
  
// }


//props
// export default function Coursbox(props){
//   return(
//     <div>
//       <h2>{props?.cours?.title}</h2>
//       <p>{props?.details}</p>
//       <span>time:10</span>
//     </div>
//   )
// }


// export default function Coursbox(cours){
//   return(
//     <div>
//       <h2>{cours?.title}</h2>
//       <p>{cours?.details}</p>
//       <span>time:10</span>
//     </div>
//   )
// }

