import React from 'react';
import Programming from '../Programming/Programming';
import Framework from '../Framework/Framework';
import styled from 'styled-components';

const Languages = () => {
    const StyledDiv = styled.div`
    .language-container{
        background-color: rgb(255 247 237);
    }
    `

    return (
        <StyledDiv>
            <div className="language-container">
                <Programming></Programming>
                <Framework></Framework>
            </div>
        </StyledDiv>
    );
};

export default Languages;