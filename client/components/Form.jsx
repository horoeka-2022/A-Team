// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// import Button from './Button'

// import profiles from '../profiles'

// function Form(props) {
//   // a function to call on the route to redirect to
//   const navigate = useNavigate()

//   function handleSubmit(event) {
//     // to prevent the browser form reloading
//     event.preventDefault()

//     const profileArray = event.currentTarget.elements.profile

//     // let topChoiceIdx
//     // let bottomChoiceIdx

//     // for (let i = 0; i < topArray.length; i++) {
//     //   if (topArray[i].checked === true) {
//     //     topChoiceIdx = i
//     //     break
//     //   }
//     // }

//     // for (let i = 0; i < bottomArray.length; i++) {
//     //   if (bottomArray[i].checked === true) {
//     //     bottomChoiceIdx = i
//     //     break
//     //   }
//     // }

//     const name = event.currentTarget.elements.name.value
//     const pronouns = event.currentTarget.elements.profile.value
//     const interests = event.currentTarget.elements.interests.value
//     const photo = event.currentTarget.elements.photo.value
//     const zodiac = event.currentTarget.elements.zodiac.value

//     const newProfile = {
//       id: props.profiles.length + 1,
//       name,
//       pronouns,
//       interests,
//       photo,
//       zodiac,
//     }
//     // add a new book to the state
//     // props.setOutfits((state) => [...state, newOutfit])

//     // to clear the form
//     event.target.reset()
//     navigate('/profiles')
//   }

//   // if(typeof props.outfits[field] == 'function') continue;

//   return (
//     <form onSubmit={handleSubmit}>
//       <section className="formSection">
//         <div className="form">
//           <input type="text" name="name" placeholder="Name" required={true} />
//           <input
//             type="text"
//             name="pronouns"
//             placeholder="Pronouns"
//             required={true}
//           />
//           <input
//             type="text"
//             name="interests"
//             placeholder="Interests"
//             required={true}
//           />
//           <input
//             type="image"
//             alt="photo"
//             name="photo"
//             placeholder="Upload Image"
//             required={true}
//           />
//           <input
//             type="text"
//             name="zodiac sign"
//             placeholder="Zodiac"
//             required={true}
//           />
//         </div>
//         {/*
//         <div className="choiceDiv">
//           {tops.map((top) => {
//             return (
//               <>
//                 <div key={top.path}>
//                   <input
//                     type="checkbox"
//                     id={top.id}
//                     name="top"
//                     value={top.path}
//                   />
//                   <label htmlFor={top.path}>
//                     <img
//                       className="imageChoice"
//                       src={top.path}
//                       alt={top.description}
//                     />
//                   </label>
//                 </div>
//               </>
//             )
//           })}
//         </div> */}
//         {/* <h2> Pick your Bottom!</h2>
//         <div className="choiceDiv">
//           {bottoms.map((bottom) => {
//             // console.log(bottom.path)
//             return (
//               <>
//                 <div key={top.path}>
//                   <input
//                     type="checkbox"
//                     id={bottom.id}
//                     name="bottom"
//                     value={bottom.path}
//                   />
//                   <label htmlFor={bottom.path}>
//                     <img
//                       className="imageChoice"
//                       src={bottom.path}
//                       alt={bottom.description}
//                     />
//                   </label>
//                 </div>
//               </>
//             )
//           })}
//         </div> */}
//         {/*
//         <Button>Submit</Button> */}
//       </section>
//     </form>
//   )
// }

// export default Form
