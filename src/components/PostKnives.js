// import React, { Component } from 'react';
// import Knives from './knives';

// class PostKnives extends Component {
//     constructor(props) {
//         super(props);
//         state = {
//             knives: []
//         }
//     }
//     Save() {
//         post('http://localhost:4000/knives')
//             .then(res => res.json())
//             .then((data) => {
//                 this.setState({ knives: data })
//             })
//             .catch(console.log)
//     }

//     render() {
//         return (
//             <div>
//             <Knives knives={this.state.knives} />
//             <form>
//                 <input placeholder='Brand' type='submit'></input>
//                 <button onClick={Save}></button>
//             </form>
//             </div>
//         )
//     }
// }

// export default PostKnives