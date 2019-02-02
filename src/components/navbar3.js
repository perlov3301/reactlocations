import React, { Popup } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import '../App.css';
import Menu from './bur/Menu';
import Burgeri from './bur/Burgeri';
import './bur/bur.css';

export default class Navbar3 extends React.Component {
    render() {
        return (
           <nav className="navbar navbarbackground">navbar3.js
             <h2><Link to="/" style={{background: 'inherit'}}>
               <Button variant="contained"  style={{backgroundColor: 'rgb(45,65, 100)',
                        borderRadius: '0.3em',
                        color: 'white',
                        padding: '0.1em 0.3em',
                        textDecoration: 'none'}} >
                  <HomeIcon />ReactLocations
                </Button>
              </Link></h2>
              <div className="navbarbuttons">
               <Link to="/new" className="btn">New Location</Link>
             </div>
             <div className="navbarbuttons">
               <Link to="/chooselocedit" className="btn">Edit Location</Link>
             </div>
             <div className="navbarbuttons">
               <Link to="/chooselocremove" className="btn">Remove Location</Link>
             </div>
             <div className="navbarbuttons">
               <Link to="/newcategory" className="btn">New Category</Link>
             </div>
             <Popup
               modal
               overlayStyle={{ background: "rgba(255, 255, 255, 0.98" }}
               contenStyle={{ backgroundColor: 'rgba(65, 120, 100, 0.3)' }}
               closeOnDocumentClick={false}
               trigger={open => <Burgeri open={open} />}
             >
                {close => <Menu close={close} />}
             </Popup>
           </nav>
        );
    }
}