import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import { Link } from 'react-router';

const Single = React.createClass({
    render(){
        
        // index of the post
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        
        // 
       return (
           <div className="single-grid">
                <Photo i={i} post={post} {...this.props}/>
                <Comments postComments={postComments} {...this.props}/>
           </div>
       )
   }
});

export default Single;