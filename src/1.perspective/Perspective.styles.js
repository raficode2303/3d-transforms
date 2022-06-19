import styled from 'styled-components'

export const Scene = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  margin: 40px;
  /* perspective property */
  perspective: 400px;
  /* perspective-origin default is center */
  perspective-origin: bottom right;
`

export const Panel = styled.div`
  width: 55px;
  height: 55px;
  float: left;
  margin: 5px;
  background-color: ${(props) => props.bgColor};
  transform: rotateY(45deg);
`

/*
CSS perspective Property
========================

Give a 3D-positioned element some perspective:
EXAMPLE:

    #div1{
      prespective: 100px;
    }

The perspective property defines how far the object is away from the user. So, a lower value will result in a more intensive 3D effect than a higher value.

When defining the perspective property for an element, it is the CHILD elements that get the perspective view, NOT the element itself.

*To activate 3D space, an element needs perspective. This can be applied in two ways.

*/
