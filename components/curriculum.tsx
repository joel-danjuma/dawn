import { Input } from 'postcss'
import React from 'react'
import Inputdiv from './input'
import { ButtonGenerate } from './buttonGenerate'
import { Static } from './static'

export const Curriculum = () => {
  return (
    <section className=" sections">
      <Static/>
      <div>
        <h2 className=" regular-h2 text-center">Curriculum Generator</h2>
        <p className="regular-p header-p">Design Comprehensive And Customized Curriculums Aligned With Educational Standards And Learning Objectives.</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grade Level</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Subject</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Course Description</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Required Material</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Grading Policy</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Class Policy/Expectation</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Course Outline/What is Covered</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Additional Customization(Optional)</h4>
          <Inputdiv />
        </div>

        < ButtonGenerate/>
      </div>
    </section>
  )
}
