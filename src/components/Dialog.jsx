import React, { forwardRef } from 'react'

import { IoMdClose } from "react-icons/io";

const Dialog = forwardRef(({ children, close }, ref) => {
  return (
    <dialog className='dialog' ref={ref}>
        <div className='dialog__bar'>
            <button className='dialog__close' onClick={close}>
                <IoMdClose size={32} />
            </button>
        </div>

        {children}
    </dialog>
  )
})

export default Dialog