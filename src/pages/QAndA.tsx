const QAndA = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <>
            <h2>{question}</h2>
            <p>{answer}</p>
        </>
    )
}

export default QAndA;
