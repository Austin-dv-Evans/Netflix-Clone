import React from 'react'
import {Container, Inner, Item, Pain, Title, Subtitle, Image} from './styles/jumbotron'


export default function Jumbotron({ children, direction = 'row', ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}  >{children}</Inner>
        </Item>
        
    )
}
Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pain = function JumbotronPain({ children, ...restProps}) {
    return <Pain {...restProps}>{children}</Pain>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps}) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({  ...restProps}) {
    return <Image {...restProps}/>
}
