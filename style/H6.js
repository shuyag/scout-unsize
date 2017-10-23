import styled from 'styled-components';
import { halisFont } from './constants';

const H6 = styled.h6`
  font-family: ${halisFont};
  font-weight: bold;
  text-align: ${props => props.align ? props.align : "center"};
`;

export default H6;
