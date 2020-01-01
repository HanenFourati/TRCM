// import React from "react"
// import {connect} from 'react-redux'
// class ProjectItemDisplay extends React.Component {
//   render() {
//     let project = this.props.ProjectsList.filter(e => e._id === this.props._id)[0]
//     return (
//       <div>
//         <div>
//           <img src={project.picture} />
//         </div>
//         <div>{project.title}</div>
//         <div> {project.description}</div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     ProjectsList: state.ProjectReducer
//   };
// };
// export default connect(mapStateToProps)(ProjectItemDisplay)
import React from "react"
import {connect} from 'react-redux'
import axios from 'axios'
class ProjectItemDisplay extends React.Component {
  componentDidMount(){  console.log(this.props.id)
    axios.get(`/Administration/${this.props.adminid}/display-project/${this.props.id}`).then(res => this.props.initproject(res.data))
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
export default connect(mapStateToProps,mapDispatchToProps)(ProjectItemDisplay)
