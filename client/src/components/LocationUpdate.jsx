// import { Link } from 'react-router-dom';
// import "./LocationUpdate.css"
// import React, { Component } from 'react'
// import { readOneLocation } from '../services/api-helper';

// export default function LocationUpdate() {
//     return (
//         <p>Location update</p>
//     )
// }

// export default class UpdateFood extends Component {
//   state = {
//     city: "",
//     country: "",
//     photo: "",
//     lodgingDetails: "",
//     activityDetails: "",
//     listItem: "",
//     listItem2: "",
//     listItem3: "",
//     // listItem4: "",
//     // listItem5: "",
//     // listItem6: "",
//     user_id: null,
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     })
//   }

//   componentDidMount() {
//     let user_id = this.props.currentUser.id;
//     this.setState({
//       user_id: user_id,
//     });
    // this.setFormData();
//   }
  

//   setFormData = async () => {
//     const foodItem = await getOneLocation(this.props.locationId);
//     this.setState({
//       name: foodItem.name
//     })
//   }

//   render() {
//     return (
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         this.props.handleLocationUpdate(this.props.locationId, this.state);
//         this.props.history.push('/locations');
//       }}>
        {/* <h3>Update Food</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        /> */}
//          <p className="form-category">City</p>
//         <input
//           placeholder="San Francisco"
//           name="city"
//           type="text"
//           value={this.state.city}
//           onChange={this.handleChange}
//         />
//         <p className="form-category">Country</p>
//         <input
//           name="country"
//           placeholder="U.S.A."
//           type="text"
//           value={this.state.country}
//           onChange={this.handleChange}
//         />
//         <p className="form-category">PhotoURL</p>
//         <input
//           name="photo"
//           placeholder="https://www.photo.com/GoldenGateBridge.jpg"
//           type="text"
//           value={this.state.photo}
//           onChange={this.handleChange}
//         />
//         <p className="form-category">Lodging Details</p>
//         <input
//           className="form-category-details"
//           name="lodgingDetails"
//           placeholder="Airbnb, Mission District, SF, CA 415-555-5555"
//           type="text"
//           value={this.state.lodgingDetails}
//           onChange={this.handleChange}
//         />
//         <p className="form-category">Activity Itinerary</p>
//         <input
//           className="form-category-details"
//           name="activityDetails"
//           placeholder="Sunset boatride at 6pm"
//           type="text"
//           value={this.state.activityDetails}
//           onChange={this.handleChange}
//         />
//         <p className="form-category">Bucket List Items</p>
//         <input
//           // className="form-category-details"
//           name="listItem"
//           placeholder="Walk the Golden Gate Bridge"
//           type="text"
//           value={this.state.listItem}
//           onChange={this.handleChange}
//         />
//          <p className="form-category"></p>
//         <input
//           name="listItem2"
//           placeholder="Spend a Sunday in Dolores Park"
//           type="text"
//           value={this.state.listItem2}
//           onChange={this.handleChange}
//         />
//         <p className="form-category"></p>
//         <input
//           name="listItem3"
//           placeholder="Cruise Lombard Street"
//           type="text"
//           value={this.state.listItem3}
//           onChange={this.handleChange}
//         />
//         <button>Submit</button>

//       </form>
//     )
//   }
// }