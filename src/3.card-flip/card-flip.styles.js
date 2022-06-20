import styled from 'styled-components'

export const Scene = styled.div`
  width: 200px;
  height: 260px;
  perspective: 400px;
  background-color: transparent;
  float: left;
  border: 1px solid #ccc;
  font-weight: bold;
  text-align: center;
  margin: 40px;
`

export const Card = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  line-height: 260px;
  color: #fff;
  font-size: 2rem;
`
export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.bgColor};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: ${(props) => (props.isRotate ? 'rotateY(180deg)' : 'none')};
`
