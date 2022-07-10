import {Li,Ul} from "./FriendStyle";
import PropTypes from 'prop-types';
// import React from "react"; 
import {FriendListItems} from "./FriendListItems"
     
     export const Frends = ({items}) => {
return <section>
<Ul>
     {items.map(({id,name,isOnline,avatar}) => (
          <Li key={id}>
<FriendListItems
name={name}
status={isOnline}
avatar={avatar}
/>
 </Li>))}

</Ul>
</section>
     }

     Frends.propTypes = {
          items: PropTypes.arrayOf(PropTypes.shape({
              id: PropTypes.number.isRequired,
              isOnline: PropTypes.bool.isRequired,
              name: PropTypes.string.isRequired
          })).isRequired
      }
     console.log()     
              
     