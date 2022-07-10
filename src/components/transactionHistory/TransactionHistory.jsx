import PropTypes from 'prop-types';
import {Th} from "./TransactionsStyle"
import {Tr} from "./TransactionsStyle"

export const TransactionHistory =({items}) =>{
  return <table>
  <thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </thead>

  <tbody>
     {items.map(({id,type,amount,currency}) =>(
       <Tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Tr> 
     ))}
  </tbody>
</table>
}
    
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, 
      amount : PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
  })).isRequired
}
     