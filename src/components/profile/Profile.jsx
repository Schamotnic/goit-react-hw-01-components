import PropTypes from 'prop-types';
// import React from "react";
import {DivProfile,P,Img,Ul,Li,Span} from  './ProfileStyle'





export  const Profile =({img,name,tag,location,stats:{likes,views,followers} }) => {
  
        
        return   <DivProfile>
      <div>
        <Img
          src={img}
          alt={name}
          width='300'
          class="avatar"
        />
        <P>{name}</P>
        <P>{tag}</P>
        <P>{location}</P>
      </div>
    
      <Ul>
        <Li>
          <span>Followers: </span>
          <span>{followers}</span>
        </Li>
        <Li>
          <Span>Views: </Span>
          <span>{views}</span>
        </Li>
        <Li>
          <Span>Likes: </Span>
          <span>{likes}</span>
        </Li>
      </Ul>
    
    </DivProfile>
    
    }
  
    Profile.propTypes = {
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired
    };
     

  
   
