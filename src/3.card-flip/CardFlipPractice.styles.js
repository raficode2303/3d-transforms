import styled from 'styled-components'

const cardWidth = '200px'
const cardHeight = '260px'

export const Scene = styled.div`
  width: ${cardWidth};
  height: ${cardHeight};
  background-color: transparent;
  float: left;
  border: 1px solid #ccc;
  perspective: 400px;
`
export const Card = styled.div`
  position: relative;
  height: 100%;

  transition: 1s;
  /* most important */
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'none')};
  text-align: center;
  line-height: ${cardHeight};
  font-size: 2rem;
  color: #fff;
`
export const CardFace = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ side }) => (side === 'front' ? 'purple' : 'gold')};
  transform: ${(props) => (props.side === 'back' ? 'rotateY(180deg)' : 'none')};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`
