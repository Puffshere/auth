// import React, { Component } from "react";
// import axios from "axios";
// // import { addKnifeAction } from "../actions/authenticationActions";
// // import { connect } from 'react-redux';

// class Post extends Component {
//   state = {
//     userId: "",
//     id: "",
//     model: "",
//     forSale: "",
//     brand: "",
//     steel: "",
//     bladeShape: "",
//     price: "",
//   };

//   onBrandChange = e => {
//     this.setState({
//       brand: e.target.value
//     });
//   };

//   onModelChange = e => {
//     this.setState({
//       model: e.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
    
//     const data = {
//       brand: this.state.brand,
//       model: this.state.model
//     };
//     axios
//       .post("https://localhost:4000/posts", data)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div className="post">
//         <form className="post" onSubmit={this.handleSubmit}>
//           <input
//             placeholder="Brand" value={this.state.brand}
//             onChange={this.onBrandChange} required
//           />
//           <textarea
//              placeholder="Model" value={this.state.model}
//              onChange={this.onModelChange} required
//            />
//           <button type="submit">Create Post</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Post;