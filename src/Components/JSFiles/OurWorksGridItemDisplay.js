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
    console.log(PJetails.picture)
    console.log(PJetails.picture)
    return (
      <div className="Artical-Style"> 
        <h1>{PJetails.title}</h1>
        <p>Published {PJetails.date} </p>
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
//["https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/89532348_2806413542799787_7909484095820791808_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=Zm-JkclYAo8AX8YK2Al&_nc_ht=scontent.ftun2-1.fna&oh=bb7091f251b4f59bf68feebd883765c2&oe=5E9630A7",
//"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/89273926_2806413466133128_6827482959516270592_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=RNCv0Myc77sAX94_quY&_nc_ht=scontent.ftun2-1.fna&oh=9064986676e5f71a4d2d30a719c38999&oe=5E97AC60",
//"https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/89436103_2806413392799802_4854780054984458240_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=CxZwPznvP7oAX-cTQ3O&_nc_ht=scontent.ftun2-1.fna&oh=a232b39c64443f25e175dd65627a49ec&oe=5E982975"]