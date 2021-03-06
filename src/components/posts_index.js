import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
//import { bindActionCreators } from 'redux' ;
import { fetchPosts } from '../actions/index' ;
import { Link } from 'react-router' ;

class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts() ;
  }

  renderPost() {
    return this.props.posts.map((post) => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className='pull-xs-right'>{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    })
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className='btn btn-primary' >
            Add a posts
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPost()}
        </ul>
      </div>
    ) ;
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch) ;
// } will directly put the value {fetchPosts:fetchPosts} inside the connect
// insted of creating a whole function and defining it

function mapStateToProps(state) {
  return { posts : state.posts.all } ;
}

export default connect(mapStateToProps,{ fetchPosts })(PostsIndex) ;
