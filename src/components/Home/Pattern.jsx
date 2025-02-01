import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    --s: 200px; /* control the size */
    --c1: #0a1d2b; /* dark blue */
    --c2: #1e3a59; /* medium dark blue */
    --c3: #123f6f; /* another shade of dark blue */

    background: repeating-conic-gradient(
          from 30deg,
          #0000 0 120deg,
          var(--c3) 0 180deg
        )
        calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
      repeating-conic-gradient(
        from 30deg,
        var(--c1) 0 60deg,
        var(--c2) 0 120deg,
        var(--c3) 0 180deg
      );
    background-size: var(--s) calc(var(--s) * 0.577);
  }
`;

export default Pattern;
