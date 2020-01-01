import React, { Component } from "react"
import OurWorksGridItem from "./OurWorksGridItem.js"
import { connect } from "react-redux"
import axios from "axios"
class OurWorkGrid extends Component {

  componentDidMount() {
    axios.get("/works").then(res => this.props.initProjectsList(res.data));
  }
  render() {
    return (
      <div>
        <div>
          {this.props.ProjectsList.map((e, i) => (
            <OurWorksGridItem key={i} project={e} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ProjectsList: state.ProjectReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initProjectsList: projects => {
      dispatch({
        type: "UPDATE_PROJECTS_LIST",
        projects
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OurWorkGrid)
