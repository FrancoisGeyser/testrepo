import styled from 'styled-components'

const CardImage = styled.div`
padding:1rem;
margin:1rem;
border-radius:100%;
width:5rem;
height:5rem;
img {
    width:90%;
    height:90%;
}
`

const CardInfo = styled.div`
display:flex;
flex-direction: column;
h3 {
    padding-bottom:1rem;
}
`;


const CardHolder = styled.div`
padding: 2rem;
border: 1px solid gray;
display:flex;
justify-content:flex-start;
align-items:center;
`;

const Card = ({data}) => {
    return (
        <CardHolder>
            <CardImage>
                <img src={data.image} />
            </CardImage>
            <CardInfo>
                <h3>{data.heading}</h3>
                <p>{data.detail}</p>
            </CardInfo>
        </CardHolder>
    )
}

export default Card