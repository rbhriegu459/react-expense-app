import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:10px;
    font-family:Montserrat;
    width:100%;
`;

const BalancedBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    font-size:18px;
    font-weight:bold;
    width:100%;
`;

const AddTransaction = styled.div`
    background:black;
    color: white;
    border-radius:4px;
    padding:5px 10px;
    cursor:pointer;
    text-align:center;
    font-weight:bold;
    font-size:15px;
`;

const AddTransactionContainer = styled.div`
    display: flex;
    flex-direction : column;
    border:1px solid gray;
    gap:10px;
    padding:15px 20px;
    margin:20px;
    width:100%;
    & input{
        outline:none;
        padding:10px 12px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
    }
`;

const RadioBox = styled.div`
    display: flex;
    flex-direction : row;
    width:100%;
    align-items:center;
    & input{
        width:unset;
        margin: 0 10px;
    }
`;

const AddTxnView = (props) =>{
    const [amount, setAmount] = useState();
    const [desc, setDescription] = useState();
    const [type, setType] = useState("EXPENSE");

    const addTransaction = () =>{
        console.log(amount, desc, type);
        props.toggleTxn();
    };

    return (
        <AddTransactionContainer>
            <input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <input placeholder="Description" value={desc} onChange={(e) => setDescription(e.target.value)}/>
            <RadioBox>
                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type==="EXPENSE"} onChange={(e) => {setType(e.target.value)}}/>
                <label htmlFor="expense">Expense</label>

                <input type="radio" id="income" name="type" value="INCOME" checked={type==="INCOME"} onChange={(e) => {setType(e.target.value)}}/>
                <label htmlFor="income">Income</label>
            </RadioBox>
            <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
        </AddTransactionContainer>
    )
};

const OverviewComponent = (props) =>{
    const [isAddTxnVisible, toggleTxn] = useState(false);
    return(
        <Container>
            <BalancedBox>
                Balanced: Rs.10000
                <AddTransaction onClick={()=>toggleTxn(!isAddTxnVisible)}>{isAddTxnVisible?"Cancel":"Add"}</AddTransaction>
            </BalancedBox>
            {isAddTxnVisible && <AddTxnView toggleTxn={toggleTxn}/>}
        </Container>
    )
}

export default OverviewComponent;