import React, {Component} from 'react';
import NumberFormat from 'react-number-format';
import '../App.css';
import {CHNG_NUMBER,CHNG_NAME,CHNG_DATE} from '../actions/index';
import {connect} from 'react-redux';
import Card from './Card';
class form extends Component{


    
    handleBtnActionIncrement = () => {
        this.props.ONCHNG_NUMBER();
       
      }
      handleBtnActionName = () => {
        this.props.ONCHNG_NAME();
       
      }
      handleBtnActionDate = () => {
        this.props.ONCHNG_DATE();
       
      }
      

render() {
  //const {NUMBERCARD,NAMECARD,DATECARD}=this.props;
 
 

  return(
    <div>
   
    <div>
    <h1>React Credit Cards</h1>
    <Card></Card>
    </div>


     <div className="divimgdiv">
  
     <NumberFormat format="#### #### #### ####" id="NUMBERCARD" name="NUMBERCARD" onChange={this.handleBtnActionIncrement}  placeholder="XXXX XXXX XXXX XXXX"/>
   
      <input type="text" id="NAMERCARD"onChange={this.handleBtnActionName} ></input>
      <NumberFormat format="##/##" id="DATECARD"onChange={this.handleBtnActionDate}  placeholder="MM/YY" />
  
    </div> 
    
    </div>
  )
}
}
const mapStateToProps = (state) => {
    return {
        NUMBERCARD: state.card.NUMBERCARD,
        NAMECARD: state.card.NAMECARD,
        DATECARD: state.card.DATECARD,
      //nom:state.counter.nom
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        ONCHNG_NUMBER: () => {  
        dispatch(CHNG_NUMBER())
      },
      ONCHNG_NAME: () => {  
        dispatch(CHNG_NAME())
      },
      ONCHNG_DATE: () => {  
        dispatch(CHNG_DATE())
      }

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(form);