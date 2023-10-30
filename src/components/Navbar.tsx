import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'

const SimpleAppBar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false)
  const handleclickHome = () => {
    navigate('/')
  }
  const handleclickSearch = () => {
    navigate('/SearchPage')
  }

  return (
    <header className="bg-neutral-200 py-4">
      <div className='flex items-center justify-between xl:max-w-8xl mx-auto max-w-full px-[8%] flex-wrap w-full'>
        <h2>My Movie App</h2>
        <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)}></FiMenu>
        <nav className={`${open ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto`}>
          <ul className='text-base text-gray-600 lg:flex justify-between'>
            <li>
              <a className='lg:px-5 py-2 block hover:text-blue-700 cursor-pointer ' onClick={handleclickHome}>Home</a>
            </li>
            <li>
              <a className='lg:px-5 py-2 block hover:text-blue-700 cursor-pointer' onClick={handleclickSearch}>Search</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default SimpleAppBar;
