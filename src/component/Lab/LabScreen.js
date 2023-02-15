import React from 'react'
import LabImg from '../../assets/lab1.png'
import { Button } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const LabScreen = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='font-bold justify-center flex mt-16'>Lab Maniuals...</h1>
        <div className='flex m-40 justify-evenly'>
            <img src={LabImg} className='w-96 ' alt='labimage' />
            <div className='align-middle'>
                <h1>OOAD Lab Mniual</h1>
                <Button variant='outlined' color='error' onClick={btnclick} endIcon={<PictureAsPdfIcon />}>OOAD lab Maniual</Button>
            </div>
        </div>
    </div>
  )
}

export default LabScreen

function btnclick() {
    window.open("https://drive.google.com/file/d/1Bf7KJGveFpD3-LJU-RMcThjzfXyAI9yb/view?usp=sharing")
}


