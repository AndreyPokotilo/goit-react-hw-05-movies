import styled from 'styled-components';

export const CastSection = styled.div`
display: flex;
justify-content: center;
>p {
    font-size: 40px;
}
`;
export const CastList = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 0px;
justify-content: center;
gap: 40px;
`;
export const CastItem = styled.li`
width: 250px;
list-style: none;
background-color: white;
border-radius: 5px;
`;
export const CastImg = styled.img`
max-width: 100%;
height: 375px;
border-radius: 5px 5px 0px 0px;
`;
export const CastName = styled.p`
display: flex;
font-size: 20px;
justify-content: center;

>span {
    margin-right:10px;
    font-size: 20px;
    font-weight: 500;
}
`;
export const CastCharacter = styled.p`
display: flex;
font-size: 20px;
justify-content: center;
>span {
    margin-right:10px;
    font-size: 20px;
    font-weight: 500;
}
`;