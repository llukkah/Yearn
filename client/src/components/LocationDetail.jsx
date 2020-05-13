// import React, { Component } from 'react'
// import { getOneFood, addFlavor } from '../services/api-helper';




import React from 'react';
import { Link } from 'react-router-dom';
// import YearnLogo from '../images/YearnLogo.png'


export default function Nav(props) {


    return (
        // this.props.locations.map((location) => (
        //     <React.Fragment key={location.id}>
        //       <Link to={`/locations/${location.id}`}>
        //         <img src={location.photo} /> {location.city},
        //         {location.country} {location.lodgingDetails} {location.activityDetails})
        //       </React.Fragment>

    <button
    onClick={() => {
      props.handleLocationDelete(props.locationId);
    //   props.history.push("/locations");
    
    }}
    >
    Delete
    </button>)
    }

//   return (
//     <div>
//     <Link to="/home"><img src={YearnLogo} alt="Yearn Logo" /></Link>
//       <Link to="/about">About</Link>
//       {
//         props.currentUser
//           ?
//           <>
//            <Link to="/locations/create">Create</Link>
//            <Link to="/locations">Profile</Link>
//             <button onClick={props.handleLogout}>Logout</button>
//             </>
//           :
//           <>
//           <Link to="/login">Login</Link>
//           <Link to="/register">Register</Link>
//           </>
//       }
//     </div>
//   )
// }



// export default class LocationDetail extends Component {
//     state = {
//         location: "",
//       }
//   componentDidMount() {
//     this.setFood()
//   }

//   setFood = async () => {
//     const food = await getOneFood(this.props.foodId);
//     this.setState({ food })
//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({
//       flavor: value
//     })
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const food = await addFlavor(this.state.flavor, this.state.food.id);
//     this.setState({ food });
//   }
//     const { food } = this.state;
//     return (
//       <div>
//         {
//           food && (
//             <>
//               <h3>{food.name}</h3>
//               {food.flavors.map(flavor => (
//                 <p key={flavor.id}>{flavor.name}</p>
//               ))}
//             </>
//           )
//         }
//         <form onSubmit={this.handleSubmit}>
//           <select onChange={this.handleChange}>
//             <option>--Select a flavor--</option>
//             {this.props.flavors.map(flavor => (
//               <option value={flavor.id} key={flavor.id}>{flavor.name}</option>
//             ))}
//           </select>
//           <button>Add a Flavor</button>
//         </form>
//       </div>
//     )
//   }
// }
// }

// {this.props.locations.map((location) => (
//     <React.Fragment key={location.id}>
//       <Link to={`/locations/${location.id}`}>
//         <img src={location.photo} /> {location.city},
        // {location.country}