// import React, { Component } from 'react';
// import knifeModal from '../components/knifeModal';

// class PostData extends Component {
//     state = {
//         blades: []
//     }

//     componentDidMount() {
//         post('http://localhost:3000/api/blades?access_token=5e3600914e63efce06c8cee3')
//             .then(res => res.json())
//             .then((knifeData) => {
//                 this.setState({ blades: knifeData })
//             })
//             .catch(console.log)
//     }

//     render() {
//         return (
//             <div>
//             <KnifeModal blades={this.state.knifeData} />
//             </div>
//         )
//     }
// }

// export default PostData





import React, { Component } from 'react';

class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "",
            model: "",
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.save = this.save.bind(this);
    }

    onInputChange(e) {
        this.setState({ brand: e.target.value });
        console.log(this.state.brand);
    }

    onSelectChange(e) {
        this.setState({ model: e.target.value });
        console.log(this.state.model);
    }

    save(e) {
        this.setState({ model: e.target.value });
    }

    render() {
        return (
            <div>
                <input type='text' name='brand' onChange={this.onInputChange} placeholder='brand' ></input>
                <input type='text' name='model' onChange={this.onSelectChange} placeholder='model'></input>
                <button className='addKnifeSaveButton' onClick={this.save}>Save</button>
                <div>{this.state.model}</div>
                <div>{this.state.brand}</div>
            </div>
        );
    }
}

export default AddData;





















