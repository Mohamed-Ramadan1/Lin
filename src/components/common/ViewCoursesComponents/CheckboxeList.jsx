import React, { useState } from 'react';
import InputCheckBox from '../../ui/InputCheckBox'; 

const CheckboxeList = ({ titleCheckList }) => {
    const [open, setOpen] = useState(false);

    const toggleList = () => {
        setOpen(!open);
    };

    return (
        <div className='list flex flex-col gap-[15px]'>
            <div className="title cursor-pointer py-[10px] px-[5px] border-b-[1px] border-[#eee] flex justify-between items-center" onClick={toggleList}>

                <h1 className='text-[#222] text-2xl select-none'>{titleCheckList}</h1>

                <div className={open ? "icon hidden" : "icon"}>
                    <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#212121">
                        <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>

                <div className={!open ? "icon hidden" : "icon"}>
                    <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#212121">
                        <path d="M6 12H18" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>

            </div>
            <div className="list flex flex-col justify-start gap-[15px] transition ease-in-out" style={{ maxHeight: open ? '100%' : '0', overflow: 'hidden'}}>
                <InputCheckBox textLabel="0-1 Hour" />
                <InputCheckBox textLabel="1-2 Hour" />
                <InputCheckBox textLabel="2-3 Hour" />
            </div>
        </div>
    );
};

export default CheckboxeList;
