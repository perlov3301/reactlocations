import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMapReact from 'google-map-react';
// import Myplace from './myplace.js';

const Mymapcomponent = ({text}) => <div>{text}</div>;

class Googlemapreact extends Component {
    static defaultProps = {
        center: {
            lat: '32.08',
            lng: '34.78'
        },
        zoom: 17
    };
    render () {
        const alat = parseFloat(this.props.alat);
        const alng = parseFloat(this.props.alng);
        const azoom = 17;

        return (
            // set the container height explicity
            <div style={{ height: '50vh', width: '50%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB_ZSdzmuDdhVLlTNypKYS7tuG_xns6IVU' }}
                defaultCenter={[alat,alng]}
                defaultZoom={azoom}
              >
                <Mymapcomponent 
                   lat={alat}
                   lng={alng}
                   text={'here'}
                />
              </GoogleMapReact>
            </div>
        );
    }
}
export default Googlemapreact;
// defaultCenter={this.props.center}
