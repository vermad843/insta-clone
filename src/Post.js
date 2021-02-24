import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className = "post">
           <div className = "post__header"> 
               <Avatar
                    className = "post__avatar"
                    alt = ""
                    src = "/static/images/avatar/1.jpg"
                />
                <h3>Username : </h3>
           </div>
            <img
                className = "post__image"
                src = "https://images.unsplash.com/photo-1515342724109-4653eccad95f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
                alt = ""
            />
            <h4 className = "post__text"><strong>vermadk817</strong> wow i am amazing</h4>
        </div>
    )
}

export default Post;
