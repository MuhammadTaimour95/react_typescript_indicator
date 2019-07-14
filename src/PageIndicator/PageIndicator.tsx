import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Tick } from '../tick.svg';
import Particles from 'react-particles-js';

import {
  StyledPageIndicatorBackground,
  StyledPageIndicatorCircle,
  StyledPageIndicatorLayout,
  StyledPageIndicatorMover,
  StyledPageNumbers,
  WithPageNumberNotActive,
  WithPageNumberActive,
  SVG
} from "./StyledPageIndicator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons'

  
const element = <FontAwesomeIcon icon={faCheck} />

interface Props {
  readonly activePage: number;
}

const items = [0, 1, 2];

export function PageIndicator({ activePage }: Props): JSX.Element {
  const [index, setIndex] = useState(activePage);
  useEffect(() => {
    setIndex(activePage);
  });

  return (
    <StyledPageIndicatorLayout>
      <StyledPageIndicatorBackground>
        {items.map(i => {
          return (
            <StyledPageIndicatorCircle key={activePage + i}>
              {activePage === i ? (
               <WithPageNumberActive>{i + 1}</WithPageNumberActive>
               )  : activePage > i ? (
                <WithPageNumberActive><Particles params={{
                  polygon: {
                      enable: true,
                      type: 'inside',
                      move: {
                          radius: 10
                      },
                      url: 'src/tickd.svg'
                  }
              }} /></WithPageNumberActive>
                ): (
                  <WithPageNumberNotActive>{i + 1}</WithPageNumberNotActive>
                ) }
              <StyledPageIndicatorMover
                style={{
                  transform: `translateX(${(index - i) * 1.625}rem)`
                }}
              />
            </StyledPageIndicatorCircle>
          );
        })}
      </StyledPageIndicatorBackground>
     
    </StyledPageIndicatorLayout>
    
  );
}

export default PageIndicator;
