import React from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Googlemapreact from '../googlemapreact/googlemapreact';
import { Vibration } from 'react-native';

 class Showpage extends React.Component {
   constructor(props) {
     super(props);
     this.fvibration = this.fvibration.bind(this);
   }
   static contextTypes = {
    router: () => null, // replace with PropTypes.object if you use them
  }
    fvibration() {
        const DURATION = 1000
        // const PATTERN = [1000, 2000, 3000]
        
        Vibration.vibrate(DURATION)
        // Android: vibrate for 1s
        // iOS: duration is not configurable, vibrate for fixed time (about 500ms)
        // Vibration.vibrate(PATTERN)
        // Android: wait 1s -> vibrate 2s -> wait 3s
        // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate
        Vibration.cancel()
        
    }
  
    render() {
        this.fvibration();
        const { note } = this.props;
        if (!note) { return null; }
        return (
            <fieldset style={{width: '80vw'}}>
              <legend>
              <Button variant="contained"  
                    onClick={this.context.router.history.goBack}
                    style={{backgroundColor: 'rgb(45,65, 100)',
                    borderRadius: '0.3em',
                    color: 'white',
                    padding: '0.1em 0.3em',
                    textDecoration: 'none',
                    textDecorationColor: 'blue'}} >
                  <ArrowBackIcon />back
                </Button> &nbsp;showjs:Showpage
              </legend> 
              <div >
                  <div>
                    <h2>{ note.title }</h2>
                    <div>address:{ note.body } </div>
                    <div>coordinates:{note.alat},{note.alng}</div>
                    <div>category:{ note.category }</div>
                    <div>date: { note.updatedat.toString() }</div>
                  </div>
                  <div>
                    <Googlemapreact 
                      alat={note.alat} alng={note.alng}/>
                  </div>
              </div>
               
            </fieldset>
        );

    }
}
export default Showpage;