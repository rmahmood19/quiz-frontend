import {useState} from "react";
import {Question} from "./Question.jsx";
import {Button} from "./Button.jsx";

export const Quiz = () => {

    const questionsArray = [
        {
            id: 1,
            question: "What is the capital of France?",
            answers: [
                {id: 1, text: "Paris", isCorrect: true},
                {id: 2, text: "London", isCorrect: false},
                {id: 3, text: "Berlin", isCorrect: false},
                {id: 4, text: "Madrid", isCorrect: false},
            ],
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            answers: [
                {id: 5, text: "Mars", isCorrect: true},
                {id: 6, text: "Venus", isCorrect: false},
                {id: 7, text: "Jupiter", isCorrect: false},
                {id: 8, text: "Earth", isCorrect: false},
            ],
        },
        {
            id: 3,
            question: "Who wrote the play 'Romeo and Juliet'?",
            answers: [
                {id: 9, text: "William Shakespeare", isCorrect: true},
                {id: 10, text: "Charles Dickens", isCorrect: false},
                {id: 11, text: "Jane Austen", isCorrect: false},
                {id: 12, text: "Mark Twain", isCorrect: false},
            ],
        },
        {
            id: 4,
            question: "What is the largest mammal in the world?",
            answers: [
                {id: 13, text: "Blue Whale", isCorrect: true},
                {id: 14, text: "Elephant", isCorrect: false},
                {id: 15, text: "Giraffe", isCorrect: false},
                {id: 16, text: "Hippopotamus", isCorrect: false},
            ],
        },
        {
            id: 5,
            question: "In which year did Christopher Columbus discover America?",
            answers: [
                {id: 17, text: "1492", isCorrect: true},
                {id: 18, text: "1776", isCorrect: false},
                {id: 19, text: "1620", isCorrect: false},
                {id: 20, text: "1945", isCorrect: false},
            ],
        },
    ];

    const [questions, setQuestions] = useState(questionsArray)

    const [currentIndex, setCurrentIndex] = useState(0);

    const shouldDisablePrevious = () => currentIndex === 0;
    const shouldShowNext = () => currentIndex === questions.length - 1;


    return (
        <>
            <h2 className='text-4xl mt-4'>General quiz</h2>


            <Question question={questions[currentIndex]}/>

            <div className='flex justify-between mt-4'>
                <Button
                    text='Previous'
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                    disabled={shouldDisablePrevious()}
                />

                {
                    !shouldShowNext() &&
                    (
                        <Button
                            text='Next'
                            onClick={() => setCurrentIndex(currentIndex + 1)}
                        />
                    )
                }

                {
                    shouldShowNext() &&
                    (
                        <Button
                            text='Finish'
                            onClick={() => console.log('finishing result')}
                        />
                    )
                }
            </div>
        </>
    )
}