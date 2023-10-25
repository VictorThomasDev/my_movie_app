import React, { useState } from 'react'
import './pagination.css'

interface IPaginationProps {
  totalPages: number,
  handleClick: (arg0: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({ totalPages, handleClick }): JSX.Element => {
  const pages = [];
  const [selectedPage, setSelectedPage] = useState<number>(1)
  console.log('selected page', selectedPage)

  const handleChangePage = (num: number) => {
    setSelectedPage(num)
    handleClick(num)
  }
  for (let num = 1; num <= totalPages && num < 15; num++) {
    pages.push(num);
  }
  return (
    <nav className='pagination'>
      {pages.map((num: number) => (
        <>
          {
            num === selectedPage ? (
              <button
                className='selectedBtn'
                key={num}
                onClick={() => handleChangePage(num)}
              >{num}</button>
            ) : <button
              className=''
              key={num}
              onClick={() => handleChangePage(num)}
            >{num}</button>
          }

        </>
      ))}
    </nav>
  )
}

export default Pagination