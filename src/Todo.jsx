
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
export const Todo = ({ task, isDone }) => {
  return (
    <div className={`card todo ${isDone ? 'done' : 'pending'}`}>
      <span>{task}</span>
      <span>{isDone ? '✅' : '❌'}</span>
    </div>
  );
};

