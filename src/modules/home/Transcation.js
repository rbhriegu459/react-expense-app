import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:Montserrat;
    padding:10px 20px;
    font-size:18px;
    width:100%;
    gap:10px;
    font-weight:bold;
    & input{
        padding:10px 20px;
        border-radius:12px;
        width:100%;
        background:lightgray;
        border:1px solid gray;
        outline:none;
    }
`;

const Cell = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    padding:10px 15px;
    font-size:14px;
    border-radius:2px;
    align-items:center;
    font-weight:normal;
    justify-content:space-between;
    border:1px solid gray;
    border-radius:3px;
    border-right: 4px solid ${(props) => (props.isExpense? "red":"green")}

`;

const TransactionCell = (props) =>{
    return (
        <Cell isExpense={props.payload?.type === "EXPENSE"}>
            <span>{props.payload.desc}</span>
            <span>₹ {props.payload.amount}</span>
        </Cell>
    )
};

const TransactionComponent = (props) =>{
    return(
        <Container>
            Transactions
            <input placeholder="Search"/>
            {props.transaction?.length?
                props.transaction.map((payload)=>(
                    <TransactionCell payload={payload}/>))
            :""}
        </Container>
    )
}

export default TransactionComponent;