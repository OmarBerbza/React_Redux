import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Q3 from './Q3'
import Q4 from './Q4'
import Q5 from './Q5'
import Q6 from './Q6'

const Menu = () => {
  return (
    <div>
        {
            ['Q3', 'Q4', 'Q5', 'Q6'].map((comp, index) => (
                <div key={index}>
                    <Link to={comp}>{comp}</Link>

                </div>
            ))
        }
        <div>
            <Routes>
                <Route path='/Q3' element={<Q3 />} />
                <Route path='/Q4' element={<Q4 />} />
                <Route path='/Q5' element={<Q5 />} />
                <Route path='/Q6' element={<Q6 />} />
            </Routes>
        </div>
    </div>
  )
}

export default Menu