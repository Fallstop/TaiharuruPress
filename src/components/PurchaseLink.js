import React from 'react';
import styled from 'styled-components';

const AmazonLink = styled.div`
    background: var(--color-secondary);
    padding: 1rem;
    font-size: 1.2rem;
    width: fit-content;
    &:hover {
        box-shadow: 0 0 0 0, 0 6px 12px var(--color-dropDownShadow);
        transition: all 0.3s ease;
        transform: translate3D(0, -2px, 0);
      }
`;

class PurchaseLink extends React.Component {
    render() {
        const { link } = this.props
    
        return (
            
            <a href={link} target="_blank" rel="noopener noreferrer"> 
                <AmazonLink>
                Purchase on Amazon
                </AmazonLink>
            </a>

        )
    }
}
export default PurchaseLink;