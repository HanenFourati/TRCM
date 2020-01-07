import React from "react"
import {connect} from 'react-redux'
import axios from 'axios'
import ImagesGallory from "../JSFiles/ImagesGallory.js"
import '../CSSFiles/OurWorksGridItemDisplay.css'
class OurWorksGridItemDisplay extends React.Component {
  componentDidMount(){  console.log(this.props.id)
    axios.get('/works/'+this.props.id).then(res => this.props.initproject(res.data))
    .catch(error => {console.log(error)});
}
  render() { //["https://www.w3schools.com/howto/img_mountains_wide.jpg", "https://www.w3schools.com/howto/img_5terre_wide.jpg"]
    const {PJetails} = this.props
    console.log(PJetails)
    return (
      <div className="Artical-Style"> 
        <h1>{PJetails.title}</h1>
        <div className="Artical-Intro-Style"><p>{PJetails.brief}</p></div>
        <div className="Artical-Content-Style"> {PJetails.description}</div>
        <ImagesGallory  todos={[PJetails.picture]} />
      </div>
    );
  }
}

const mapStateToProps=(state)=>
{
  return { PJetails : state.ProjectReducer} 
}
const mapDispatchToProps = dispatch => 
{
  return {
    initproject: project => { 
    dispatch({
      type: "LOED_PROJECT",  
      project
      });
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(OurWorksGridItemDisplay)
