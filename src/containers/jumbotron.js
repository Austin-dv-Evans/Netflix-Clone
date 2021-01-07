import React from 'react'
import jumboData from '../fixtures/jumbo.json'
import {Jumbotron} from '../components'

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pain>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pain>
          <Jumbotron.Pain>
            <Jumbotron.Image src={item.image} alt={item.alt}/>
          </Jumbotron.Pain>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  
  );
}

