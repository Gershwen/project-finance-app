 import React from 'react';
 import Button from '@/components/button';
 
 const StyleguideButtons = () => {
    return(
        <div className='flex justify-center h-screen items-center gap-2'>
            <Button 
                text='Placeholder' 
                btnType='primary'
            />
            <Button 
                text='Placeholder' 
                btnType='secondary'
            />
            <Button 
                text='Placeholder' 
                btnType='tertiary'
            />
            <Button 
                text='Placeholder' 
                btnType='destroy'
            />
        </div>
    )
}

export default StyleguideButtons;