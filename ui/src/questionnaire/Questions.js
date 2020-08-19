import React, { useState, useEffect } from 'react';

function Questions(props) {
    const data = props.data;
    const [tax, setTax] = useState(null);
    const [previous, setPrevious] = useState([]);
    const [curr, setCurr] = useState(data.Questions[0]);
    const [ans, setAns] = useState(null);
    let a = "";

    useEffect(() => {
        if (ans != null) {
            setPrevious([...previous, [curr, ans]]);
            let next = data.Relationship.filter((rel) => rel.qid == curr.id && rel.aid == ans);
            if (next.length > 0) {
                if (next[0].next !== null) {
                    setCurr(data.Questions[next[0].next]);
                    setAns(null);
                } else {
                    setTax(next[0].tax);
                    setCurr(null);
                    setAns(null);
                }
            }
        }
    }, [ans]);

    function setAnswer(answerIdx, event) {
        setAns(answerIdx);
    }

    if (curr) {
        a = curr.A.map((answers, idx) => {
            return ( <
                li key = { idx }
                className = "answer" >
                <
                button onClick = {
                    (e) => setAnswer(idx, e)
                }
                key = { idx } > { answers } < /button> < /
                li >
            )
        });
    }


    function edit(editQuestion, e) {
        let p = [];
        let stopid = 0;
        for (let i = 0; i < previous.length; i++) {
            if (previous[i][0].id === editQuestion.id) {
                stopid = i
            }
        }
        p = previous.slice(0, stopid);
        setPrevious(p);
        setTax(null);
        setCurr(editQuestion);
    }

    function getPrevious() {
        if (previous.length > 0) {
            return previous.map((prevQuestion, idx) => {
                return ( < li key = { idx }
                    className = "previous-list" >
                    <
                    p className = "question" > { prevQuestion[0].Q } < /p>  <
                    p className = "answer" > { prevQuestion[0].A[prevQuestion[1]] } <
                    button onClick = {
                        (e) => edit(prevQuestion[0], e)
                    } > < i className = "far fa-edit" > Edit < /i> < /button > < /
                    p >
                    <
                    hr / > <
                    /li> 
                );
            });
        } else {
            return;
        }
    }
    return ( < > {
                previous.length > 0 ? <
                ul className = "previous-quesions" > { getPrevious() } < /ul>  : "" }

                {
                    curr ? <
                        div className = "current-question" >
                        <
                        p > { curr.Q } < /p>  <div><
                    ul > { a } < /ul> </div > < /
                    div >: ""
                } {
                    tax ? ( < p className = "tax" > Tax Rate
                        for Baking Food is { tax } < /p>) : ""} </ > );

                }

                export default Questions;