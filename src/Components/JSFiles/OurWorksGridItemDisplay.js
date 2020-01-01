import React from "react"
import {connect} from 'react-redux'
import axios from 'axios'
class OurWorksGridItemDisplay extends React.Component {
  componentDidMount(){  console.log(this.props.id)
    axios.get('/works/'+this.props.id).then(res => this.props.initproject(res.data))
    .catch(error => {console.log(error)});
}
  render() {
    const {PJetails} = this.props
    console.log(PJetails)
    return (
      <div>
        <div>
          <p>hello</p> 
          <img src={PJetails.picture} />
        </div>
        <div>{PJetails.title}</div>
        <div> {PJetails.description}</div>
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
