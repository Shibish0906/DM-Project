import { PencilDuoToneBlack } from '@/icons'
import { ChevronRight, PencilIcon } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activate-automation-button'

type Props = {
    id: string
}

const AutomationsBreadCrumb = ({id}: Props) => {
  return (
    <div className='rounded-full w-full p-5 bg-[#18181b1a] flex items-center'>
        <div className='flex items-center gap-x-3 min-w-0'>
            <p className='text-[#9a9b9c] truncate'>
                Automations
            </p>
            <ChevronRight className="flex-shrink-0" color='#9a9b9c'/>
            <span className='flex gap-x-3 items-center min-w-0'>
                <p className='text-[#9b9ca0] truncate'>
                    Automation Title
                </p>
                <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4'>
                    <PencilIcon size={14}/>
                </span>
            </span>
        </div>
        <div className='flex gap-x-5 items-center ml-auto'>
            <p className='text-text-secondary/60 text-sm hidden md:block truncate min-w-0'>
                All Updates are automatically saved
            </p>
            <div className='flex gap-x-5 flex-shrink-0'>
                <p className='text-text-secondary text-sm truncate min-w-0'>
                    Changes Saved
                </p>
            </div>
        </div>
        <ActivateAutomationButton />
    </div>
  )
}

export default AutomationsBreadCrumb