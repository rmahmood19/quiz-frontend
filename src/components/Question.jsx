export const Question = ({question}) => {
    return (
        <>
            <div className='border border-gray-300 rounded p-4 mt-4 pb-16'>
                <p className='text-left text-xl mb-4'>{question.question}</p>
                <ul>
                    {
                        question.answers.map((answer) => {
                            return <li key={answer.id} className='text-left ml-4'>{answer.text}</li>
                        })
                    }
                </ul>
            </div>

        </>
    )
}