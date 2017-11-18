import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
//import { bindActionCreators } from 'redux' ;
import { fetchPosts } from '../actions/index' ;
import { Link } from 'react-router' ;

class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts() ;
  }
  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className='btn btn-primary' >
            Add a posts
          </Link>
        </div>
      </div>
    ) ;
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch) ;
// } will directly put the value {fetchPosts:fetchPosts} inside the connect
// insted of creating a whole function and defining it

export default connect(null,{ fetchPosts })(PostsIndex) ;
