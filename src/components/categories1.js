import React, { Component } from 'react';
import DB2 from '../db2';
import '../App.css';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

 class Categories1 extends Component {
    constructor(props) {
      super(props);
      // this.state = {
      //   dbcateg: new DB2(),
      //   categories: {},
      //   loading: true
      // }
    }
    static contextTypes = {
      router: () => null, // replace with PropTypes.object if you use them
    }
  //   async componentWillMount() {
  //     const a = await this.state.dbcateg.getcategories();
  //     this.setState({
  //         categories: a,
  //         loading: false
  //     });
  //   console.log("categories1;willmount;getcategories a.keys=", Object.keys(a) + 
  //     "; idtelaviv=", a.idtelaviv );
  // }
   
    async componentWillMount() {
      // await console.log("categories1;will;props=", this.props );
      }
  render() {
    const a = Object.values(this.props.categories);
    const postitems = a.map((n) => 
      <fieldset key={n._id}>
        <legend>Object.values(this.state.categories).map</legend>
        <h3 className="navbar">
          <Link to={`/categories/${n._id}`} > {n.title}</Link>
        </h3>
      </fieldset>);
    // const postitems = this.state.categories.map(post => (
    //   <div key={post.id}>
    //     <h3>{post.category}</h3>
    //   </div>
    // ));
    return (
      <fieldset>
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
        </Button>
          components/categories1js;min FlatList with Traversy</legend>
        {postitems}
      </fieldset>
    )
  }
}
export default Categories1;
