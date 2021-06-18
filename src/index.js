import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import {
//   Link,
//   BrowserRouter as Router,
//   Route,
//   useParams,
// } from "react-router-dom";

// const users = [
//   {
//     name: `Param`,
//     email: "param@gmail.com",
//     age: 23,
//   },
//   {
//     name: `Vennila`,
//     email: "venilla@gmail.com",
//     age: 24,
//   },
//   {
//     name: `Afrin`,
//     email: "afrin@gmail.com",
//     age: 36,
//   },
// ];

// const IndexPage = () => {
//   return <h3>Home Page</h3>;
// };

// const UsersPage = () => {
//   return (
//     <>
//       {users.map((user, index) => (
//         <h5 key={index}>
//           <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
//         </h5>
//       ))}
//     </>
//   );
// };

// const UserPage = () => {
//   const { userId } = useParams();

//   console.log();

//   return (
//     <>
//       <p>
//         <strong>User ID: </strong>
//         {userId}
//       </p>
//       <p>
//         <strong>User Name: </strong>
//         <p>{users[userId - 1].name}</p>
//         <p>{users[userId - 1].email}</p>
//         <p>{users[userId - 1].age}</p>
//       </p>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <section className="App">
//       <Router>
//         <Link to="/">Home</Link>
//         <Link to="/users">Users</Link>

//         <Route exact path="/" component={IndexPage} />
//         <Route exact path="/users" component={UsersPage} />
//         <Route exact path="/user/:userId" component={UserPage} />
//       </Router>
//     </section>
//   );
// };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
