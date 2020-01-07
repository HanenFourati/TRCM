import React, { Component } from "react"
import OurWorksGridItem from "./OurWorksGridItem.js"
import { connect } from "react-redux"
import axios from "axios"
import '../CSSFiles/WorkGrid.css'
import Pagination from './Pagination'
class OurWorkGrid extends Component {

  componentDidMount() {
    axios.get("/works").then(res => this.props.initProjectsList(res.data));
  }
  render() {
    return (
      <div className="Work-Grid-Style">
        <div className="Work-Grid-Content-Style">
            <h1>OUR WORKS AND PROJECTS</h1>
            <div className="Work-Grid-List-Style">
              <Pagination todos={this.props.ProjectsList}/>
              {/* {this.props.ProjectsList.map((e, i) => (
                <OurWorksGridItem key={i} project={e} />
              ))} */}
            </div>
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
