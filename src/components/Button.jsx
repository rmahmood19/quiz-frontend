export const Button = ({text, onClick, disabled = false}) => {
    return (
        <>
            <button className='border border-amber-700 rounded px-8 py-2
                disabled:text-gray-600
                 disabled:border-gray-700'
                    onClick={onClick}
                    disabled={disabled}
            >
                {text}
            </button>

        </>
    )
}