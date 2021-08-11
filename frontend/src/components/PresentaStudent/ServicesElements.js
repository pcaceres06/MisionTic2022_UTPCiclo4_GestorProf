import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: #f9f9f9;
    background: ${({ lightBg }) => (lightBg ?   '#10222E':'#f9f9f9')};
    
    @media screen and (max-width:768px){
        height: 300px;
    }
    
    @media screen and (max-width:480px){
        height: 300px;
    }
`;

export const ServicesWrapper =styled.div`
    // max-width: 500px;
    width: 50%;
    margin: 0 auto;
    display: grid;
    // grid-template-columns: 1fr ;
    align-items: center;
    grid-gap: 16px;
    padding: 0 0px;

    

`;

export const ServicesCard = styled.div`
    background:#fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height:160px;
    width:160px;
    margin-bottom: 10px;
`;

export const ServicesH1 =styled.h1`
    font-size: 2.5rem;
    color:#10222E;
    margin-bottom:64px;

    @media screen and (max-width : 480px){
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #10222E;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const br = styled.br`
    color: #10222E;
    background:  #10222E;
`;