import React from 'react';
import {connect} from 'react-redux';
import {Increase,Decrease} from './Action';
import { bindActionCreators } from 'redux';
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={item:1}
    }
    Handelchange=(e)=>{
      this.setState({item:e.target.value})
    }
    render(){
        return(
            <div>
                <button onClick={this.props.Increase}>+</button>
                <p>{this.props.count}</p>
                <button onClick={this.props.Decrease}>-</button>
                <input type='Number' value={this.state.item} onChange={this.Handelchange} data={this.state.item} />
            </div>
        );
    }
};
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({Increase,Decrease},dispatch)
}
const mapStateToProps=(store)=>{
    return{
        count:store.count
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)