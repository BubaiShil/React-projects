import React from 'react'
import { SIDEBAR_ITEMS } from '../Data/DashboardDta'

const SideBar = () => {
  return (
    <div className='bg-[#282C34] w-[18%]'>
        {
            SIDEBAR_ITEMS.map((e)=>(
                <div className='flex-row' key={e.href}>
                    <span>{e.icon}</span>
                </div>
            ))
        }
    </div>
  )
}

export default SideBar