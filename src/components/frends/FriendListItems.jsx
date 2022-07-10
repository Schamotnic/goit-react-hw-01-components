// import React from "react";
import {Image, P, Span} from "./FriendStyle"


export const FriendListItems = ({name, status,avatar}) => {
return(
   <>
<Span status ={status} >{status}</Span>
<Image src={avatar}/>
<P>{name}</P>

   </>
)
} 