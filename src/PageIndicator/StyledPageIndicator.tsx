import React from "react";
import styled from "styled-components";


interface Props {
  readonly children?: React.ReactNode;
}
export const StyledPageIndicatorLayout = styled.div<Props>`
  display: flex;
  float: right;
  margin-top: 2.5rem;
  margin-right: 12rem;
  
`;
export const StyledPageIndicatorCircle = styled.div<Props>`
  width: 1.625rem;
  height: 1.625rem;
  position: relative;
  border-radius: 1.25rem;
  margin-right: 0.25rem;
  overflow: hidden;
  box-shadow: 0 -0.125rem 0.125rem 0 rgba(0, 0, 0, 0.2);
  border: solid 0.125rem #dedfe1;
  background-color: #b3b3b3;
  
`;

export const StyledPageIndicatorMover = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.25rem;
  background-color: #fffff;
  box-shadow: 0 -0.125rem 0.125rem 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  
`;

export const StyledPageNumbers = styled.div<Props>`
  position: relative;
  margin-right: 0.25rem;
  width: 1.3rem;
  height: 1.3125rem;
  font-family: SourceSansPro;
  font-size: 0.9375rem;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  top: 0.046rem;
  color: #ffffff;
  z-index: 2;
  
`;

export const StyledPageShape = styled.div<Props>`
  width: 0.78125rem;
  height: 0.6125rem;
  background-color: #ffffff;
  
`;

export const StyledPageIndicatorBackground = styled.div<Props>`
  display: flex;
  
`;


export const WithPageNumberNotActive = styled.div<Props>`
background: #808080;
border-radius: 0.8em;
-moz-border-radius: 0.8em;
-webkit-border-radius: 0.8em;
color: #FFFFFF;
display: inline-block;
font-weight: bold;
line-height: 1.6em;
margin-right: 5px;
text-align: center;
width: 1.6em; 
  
`;

export const WithPageNumberActive = styled.div<Props>`
background: #212121;
border-radius: 0.8em;
-moz-border-radius: 0.8em;
-webkit-border-radius: 0.8em;
color: #FFFFFF;
display: inline-block;
font-weight: bold;
line-height: 1.6em;
margin-right: 5px;
text-align: center;
width: 1.6em; 
  
`;


export const SVG = styled.div<Props>`
fill: #FFFFFF;
width: "10px";
height: "16";
`;

