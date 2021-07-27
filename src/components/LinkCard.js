// import React, { Fragment } from 'react';
// import { BsMusicNoteBeamed } from "react-icons/bs";

// const LinkCard = ({ myCards }) => {

//     const mappedData = myCards.map((card, i) => {
//         return (
//             <div key={i} className="linkCard">
//                 <BsMusicNoteBeamed className="linkCardImage" />
//                 <div className="linkCardLink">
//                     <h2>
//                         <a href={card.linkHref}>{card.linkName}</a>
//                     </h2>
//                 </div>
//             </div>
//         )
//     })
//     return (
//         <Fragment>
//             {mappedData}
//         </Fragment>
//     )
// }
// export default LinkCard

// // // const stringifyImageSizes = (imageSizes) => {
// //   return imageSizes.map((a) => {
// //     const capitalizedName = a.name[0].toUpperCase() + a.name.slice(1);
// //     return `${captalizedName} image - ${a.width} x ${a.height}`;
// //   });
// // };