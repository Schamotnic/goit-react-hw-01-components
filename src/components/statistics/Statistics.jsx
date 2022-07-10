import PropTypes from 'prop-types';
// import React from "react";
import {H2,Ul,Li,Span,Section} from  './StatisticsStyle'


export const Statistics = ({items, title}) => {
  return <Section>
      {title && <H2>{title}</H2>}
      <Ul>
          {items.map(({id,label, percentage}) => (
              <Li key={id}>

                  <Span> {label}</Span>
                  <span>{percentage}%</span>
              </Li>
          ))}
      </Ul>
  </Section>
};
    

Statistics.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
    title: PropTypes.string, 
}   
    
