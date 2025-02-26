import { useState } from 'react'
import "../Fonts.css";


const AdviceCardComponent = () => {

    const [adviceID, setAdviceID] = useState('');
    const [advice, setAdvice] = useState("");

    

    return (
        <div className="w-[350px] md:w-[550px] h-auto max-h-[900px] bg-[#323a49] rounded-lg flex flex-col items-center relative">

        <p className="text-[#52ffa8] font-[Manrope] font-medium text-[22px] my-10">A D V I C E  # {adviceID}</p>

        <p className='text-[#52ffa8] font-[Manrope] font-semibold text-[28px]'>{advice}</p>

        <img src="../images/pattern-divider-desktop.svg" alt="A divider" className='mt-10 mb-20' />

        <div>
            
        </div>

        </div>
    )
}

export default AdviceCardComponent;