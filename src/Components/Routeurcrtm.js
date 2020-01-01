import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './Pages/Home.js'
import AdministarationLogInPage from './Pages/AdministartionLogInPage.js'
import AdministarationPage from './Pages/AdministarationPage.js'
import OurWorkPage from './Pages/OurWorkPage.js'
import OurWorkItemDisolayPage from './Pages/OurWorkItemDisolayPage.js'
import AdministarationProjectDisplayPage from './Pages/AdministarationProjectDisplayPage.js'
import AboutUsPage from './Pages/AboutUsPage.js'
import ContactUsPage from './Pages/ContactUsPage.js'
const CallContact = () => (
  <ContactUsPage/>
)
const CallAbout = () => (
  <AboutUsPage/>
)
const CallHome = () => (
  <Home />
  )
const CallLogIn = () => (
  <AdministarationLogInPage/>
)
const CallWorks = () => (
  <OurWorkPage />
)
class Routeurcrtm extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route   exact  path="/" component={CallHome} />
          <Route   exact  path="/about" component={CallAbout} />
          <Route   exact  path="/contact" component={CallContact} />
          <Route   exact  path="/works" component={CallWorks} />
          <Route   exact path="/works/:id" render={(props)=> <OurWorkItemDisolayPage  id={props.match.params.id} />} />
          <Route   exact  path="/Administration" component={CallLogIn} />
          <Route  exact path="/Administration/:adminid" render={(props)=> <AdministarationPage  adminid={props.match.params.adminid} />} />
          <Route  exact path="/Administration/:adminid/display-project/:id" render={(props)=> <AdministarationProjectDisplayPage  adminid={props.match.params.adminid} id={props.match.params.id}/>} />
          {/* <Route  exact path="/Typagedesattributs" component={CallSynonymePage} />
          <Route   exact  path="/" component={CallHome} />
          <Route path="/Typagedesattributs/Supprimer/:id" render={(props)=> <SynonymePage  id={props.match.params.id} />} />
          <Route path="/Typagedesattributs/EditerSynonyme/:id" render={(props)=> <SynonymePage  id={props.match.params.id} />} />
          <Route path="/Typagedesattributs/AjouterSynonyme/:id" render={(props)=> <SynonymePage  id={props.match.params.id} />} /> */}
       
        </Switch>
       </div>
    );
  }
}

export default Routeurcrtm