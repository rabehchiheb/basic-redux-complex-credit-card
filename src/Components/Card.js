import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
class Card extends Component{
    

render() {
  const {NUMBERCARD,NAMECARD,DATECARD}=this.props;
 
 

  return(
    <div  className="divimg">
       
      
       <h3 style={{ textAlign: "right", margin:"20px"}}>Company Name</h3>
       
      
        <p style={{ textAlign: "center", marginRight:"20px",marginTop:"75px"}}> {NUMBERCARD} </p>
        
           
        <p style={{ textAlign: "right", marginRight:"30px"}}> {DATECARD} </p>

        <p style={{ marginBottom: "0px", textAlign: "left",textTransform: "uppercase"  }}> {NAMECARD} </p>
       
       
  


         </div>
    
    
   /* { <div>
        {this.props.NUM}
      <input type="text" id="NUMBERCARD"onChange={this.handleBtnActionIncrement} ></input>
    </div> }*/
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


export default connect(mapStateToProps)(Card);