import styled from "styled-components";
import OverviewComponent from "./Overview";
import TransactionComponent from "./Transcation";
import { useEffect, useState } from "react";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:30px 0 10px;
    font-family:Montserrat;
    width:360px;
`;

const HomeComponent = (props) =>{
    const [transaction, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const addTransaction = (payload) =>{
        const transactionArray = [...transaction];
        transactionArray.push(payload);
        updateTransaction(transactionArray);
    }

    const calculateBalance = () =>{
        let exp =0, inc =0;
        transaction.map((payload) => {
            payload.type === "EXPENSE"? 
            (exp= exp + payload.amount)
            : (inc = inc +payload.amount);
        });
        updateExpense(exp);
        updateIncome(inc);
    }

    useEffect(() => calculateBalance(), [transaction]);

    return(
        <Container>
            <OverviewComponent addTransaction={addTransaction} expense={expense} income={income}/>
            <TransactionComponent transaction={transaction}/>
        </Container>)
}

export default HomeComponent;