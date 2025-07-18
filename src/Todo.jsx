
// export default function Todo({ task, isDone }) {
//   return (
    
//       <li>
//        Task:{task}
//       </li>
   
//   );
// }


// conditional rendaring

// export default function Todo({ task, isDone }) {
//   if (isDone ) {
//     return <li>Finished:{task}</li>;
//   }
//     return <li>Work on: {task}</li>;

// }

// conditional rendaring 3:ternary operator

// export default function Todo({ task, isDone }) {
//   return (
//     <ol>
//       <li>
//         {isDone ? "Finished" : "work on"} :{task}
//       </li>
//     </ol>
//   );
// }


// conditional rendaring 4:&& ||
// export default function Todo({ task, isDone }) {
//   return (
//     <ol>
//       <li>
//         {task}{isDone && ':Done'} 
//       </li>
//       <li>
//         {task}{isDone || ':Do it'} 
//       </li>
//     </ol>
//   );
// }
import React from 'react'

export const Todo = () => {
  return (
    <div>Todo</div>
  )
}
