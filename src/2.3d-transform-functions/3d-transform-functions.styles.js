import styled from 'styled-components'

export const Scene = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
  display: inline-block;
  border: 1px solid #ccc;
  margin: 60px 60px 60px 0;
  perspective: 600px;
`
export const Panel = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  line-height: 200px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  transform: ${(props) => props.transformFunc || props.theme.transform};
`

Panel.defaultProps = {
  theme: {
    transform: 'rotateX(45deg)',
  },
}
