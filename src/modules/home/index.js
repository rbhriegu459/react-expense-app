import styled from "styled-components";
import OverviewComponent from "./Overview";
import TransactionComponent from "./Transcation";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:30px 0 10px;
    font-family:Montserrat;
    width:360px;
`;

const HomeComponent = (props) =>{
    return(
        <Container>
            <OverviewComponent/>
            <TransactionComponent/>
        </Container>
    )
}

export default HomeComponent;