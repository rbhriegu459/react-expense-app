import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:30px 0 10px;
    font-family:Montserrat;
`;

const TransactionComponent = (props) =>{
    return(
        <Container>Transaction component</Container>
    )
}

export default TransactionComponent;