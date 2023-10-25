import React from 'react'

interface IPaginationProps {
    totalPages: number,
    handleClick: (arg0: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({ totalPages, handleClick }): JSX.Element => {
    const pages = [];
    for (let num = 1; num <= totalPages; num++) {
        pages.push(num);
    } return (
        <div>
            {pages.map(num => (
                <button
                    key={num}
                    onClick={() => handleClick(num)}
                >{num}</button>
            ))}
        </div>
    )
}

export default Pagination