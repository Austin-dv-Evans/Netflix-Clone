import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    height: 100%;
    flex-wrap: wrap;

    @media (max-width: 100px){
        flex-direction: column;
        align-items: center;

    }
`

export const Input = styled.input`
    max-width: 4550px;
    width: 100%;
    border: 0;
    padding: 10px;
    height: 70px;
    box-sizing: border-box;


`

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 70px;
    color: white;
    text-transform: uppercase;
    background: #e50914;
    padding: 0 32px;
    font-size: 26px;
    cursor: pointer;
    border: 0;

    &:hover {
        background: #f40612
    }
    @media(max-width: 1000px){
        height: 50px;
        font-weight: bold;
        font-size: 16px;
        margin-top: 20px;

    }
    img{
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media(max-width: 1000px){
            width: 16px
        }
    }
`

export const Text = styled.p`
    font-size: 19.2px;
    color: white;
    text-align: center;

    @media (max-width: 600px){
        font-size: 16px;
        line-height: 22px;
    }
`

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`