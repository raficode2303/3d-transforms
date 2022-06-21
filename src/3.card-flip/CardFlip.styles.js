import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --cardWidth: 200px;
  --cardHeight: 260px;
}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    background-color: silver;
  }
`

export const Scene = styled.div`
  width: var(--cardWidth);
  height: var(--cardHeight);
  perspective: 400px;
  background-color: transparent;
  float: left;
  border: 1px solid #ccc;
  font-weight: bold;
  text-align: center;
  margin: 40px;
  border-radius: 5px;
`

export const Card = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 1s;
  /* most important */
  transform-style: preserve-3d;
  /* --start optional..1 */
  transform-origin: center;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'none')};
  /* --end optional..1 */
  /* ---start of optional..2--- */
  transform-origin: center right;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'translateX(-100%) rotateY(-180deg)' : 'none'};
  /* ---end of optional..2--- */
  /* FANCY.. */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 8rem;
  user-select: none;
`
export const CardFace = styled.div`
  /* important */
  position: absolute;
  /* try width: 10% */
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  background-image: ${(props) =>
    props.isRotate
      ? 'repeating-linear-gradient(-70deg, white 10%, red 12%)'
      : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.color || 'black'};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: ${(props) => (props.isRotate ? 'rotateY(180deg)' : 'none')};

  ::before,
  ::after {
    position: absolute;
    content: attr(data-value);
    font-size: 2rem;
  }
  ::before {
    top: 0.5rem;
    left: 0.5rem;
  }
  ::after {
    bottom: 0.5rem;
    right: 0.5rem;
    transform: rotate(180deg);
  }
`

/**
credits:
1. Intro to CSS 3D transforms - Card Flip
https://3dtransforms.desandro.com/card-flip
2. How To Build A Simple Card Game With JavaScript
http://www.brainjar.com/css/cards/


 */
