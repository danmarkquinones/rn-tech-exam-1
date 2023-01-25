import React, { useEffect, useState } from "react";
import { CodeBlock , dracula } from 'react-code-blocks'
import { qOneAnswer, qThreeAnswer, qTwoAnswer, questionOne, questionThree, questionTwo } from "./codeblocks";
import Counter from "./Counter";
import DataStructure from "./DataStructure";
import Todos from "./Todo";

const Landing = (props:any)=>{

    const [text , setText] = useState("")

    useEffect(()=>{
        setText("HELLO")
    },[])

    return(
        <div>
            <h4>Applicant : Danmark P. Quiñones</h4>
            <div className="question-container">
                <div className="qandA">
                    <p>Question #1 : Identify the Problem and Refactor</p>
                    <CodeBlock
                        text={questionOne}
                        language="tsx"
                        showLineNumbers={true}
                        startingLineNumber={1}
                        theme={dracula}
                    />
                    <hr/>
                    <p>Answer(s)</p>
                    <ul>
                        <li>super(props) was not in the code</li>
                        <li>refs is deprecated to new version of react</li>
                        <li>If you need to call an action , React has onClick props , rather than adding it onMount</li>
                        <li>{`unecessary code {children}`}</li>
                        <li>it should be this.state.clicks</li>
                    </ul>
                    <CodeBlock
                        text={qOneAnswer}
                        language="tsx"
                        showLineNumbers={true}
                        startingLineNumber={1}
                        theme={dracula}
                    />
                </div>
                
                <div className="output">
                    <p>Output :</p>
                    <Counter/>
                </div>
            </div>

            <div className="question-container">
                <div className="qandA">
                    <p>Question #2 : Solve the Problem , {`Complete the following <TodoList> component to display todos and allow for adding and removing of todo items`}</p>
                    <CodeBlock
                        text={questionTwo}
                        language="tsx"
                        showLineNumbers={true}
                        startingLineNumber={1}
                        theme={dracula}
                    />

                    <hr/>
                    <p>Answer</p>
                    <CodeBlock
                        text={qTwoAnswer}
                        language="tsx"
                        showLineNumbers={true}
                        startingLineNumber={1}
                        theme={dracula}
                    />
                </div>
                <div className="output">
                    <p>Output</p>
                    <Todos/>
                </div>
            </div>

            <div className="question-container">
                <div className="qandA">
                    <p>Question #3 : Using the initial data below create a function that will achieve the expected result data show it to console: </p>
                    <CodeBlock
                        text={questionThree}
                        language="tsx"
                        showLineNumbers={true}
                        startingLineNumber={1}
                        theme={dracula}
                    />

                    <hr/>
                    <p>Answer</p>
                    <CodeBlock
                        text={qThreeAnswer}
                        language="tsx"
                        showLineNumbers={true}
                        startingLineNumber={1}
                        theme={dracula}
                    />
                </div>
                <div className="output">
                    <p>Output</p>
                    <DataStructure/>
                </div>
            </div>

        </div>
    )
}

export default Landing