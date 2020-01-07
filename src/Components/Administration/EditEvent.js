import React from 'react'
import axios from 'axios'
import {Link,  withRouter} from 'react-router-dom'
import '../CSSFiles/Model.css'
class EditEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "", 
      discription: "",
      date: ""
    }
  }
  componentDidMount() {
    this.setState({
      ...this.props.eventtable[0]
    })
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  EditEvent = () => {
    axios
      .put(`/Administration/${this.props.adminid}/${this.props.username}/Event/Edit-UpcommingEvent/${this.state._id}`, {
        title: this.state.title,
        discription: this.state.discription,
        date: this.state.date
      })
      .then(() => {
      this.props.history.push('/Administration/'+this.props.adminid+'/'+this.props.username+'/Event/Edit-UpcommingEvent/')}
       )
      .catch(err => alert(err));
  }
  render() {
    return (
        <div className="Model-Style">
          <label>Title</label>
          <input type="text" name="title" onChange={this.onChange}  value={this.state.title} />
          <label>Description</label>
          <input type="text" name="discription" value={this.state.discription} onChange={this.onChange} />
          <label>Date</label>
          <input type="text" name="date" value={this.state.date} onChange={this.onChange} />
          <Link to={`/Administration/${this.props.adminid}/${this.props.username}/Event/Edit-UpcommingEvent/${this.state._id}`}>
          <button className="Model-button-style" onClick={this.EditEvent}>Edit Event</button>
          </Link>
      </div>
    );
  }
}

export default withRouter(EditEvent)