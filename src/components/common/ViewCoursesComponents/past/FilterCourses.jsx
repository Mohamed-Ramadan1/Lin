import React from 'react'
// import InputCheckBox from '../../ui/InputCheckBox'
import CheckboxeList from './CheckboxeList'

const FilterCourses = () => {
    return (
      <div className='flex flex-col gap-[10px] transition ease-in'>
        <CheckboxeList titleCheckList="Video Duration"/>
        <CheckboxeList titleCheckList="Topic"/>
        <CheckboxeList titleCheckList="Subcategory"/>
        <CheckboxeList titleCheckList="Level"/>
        <CheckboxeList titleCheckList="Language"/>
        <CheckboxeList titleCheckList="Price"/>
      </div>
    )
}

export default FilterCourses