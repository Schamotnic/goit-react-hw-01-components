import {Profile} from "../profile/Profile"
import{Statistics} from "../statistics/Statistics"
import{Frends} from "../frends/Frends"
import {TransactionHistory} from "../transactionHistory/TransactionHistory"
//==================================================
import statistics from "../../data/statistics.json"
import  profile from '../../data/profile.json'
import friends from "../../data/friends.json"
import transactionHistory from "../../data/transactions.json"
//===========================================
import { AppWrapper} from "./appStyle"

 export const App = () => {
  
    return(
      <AppWrapper>  
      <Profile 
    img={profile.avatar}
    name={profile.username}
    tag={profile.tag}
    location={profile.location}
    stats={profile.stats}
/>
    <Statistics items={statistics} title = 'Upload Stats' />
    <Frends items={friends} />
    <TransactionHistory items ={transactionHistory}/>
    </AppWrapper>
); 
 
 }    