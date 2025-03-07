import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const QUESTIONTYPES: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changeQuestion() {
        setType(QUESTIONTYPES[type]);
    }

    return (
        <div>
            <Button onClick={changeQuestion}>Change Type</Button>
            {type === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
