import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

import './G.css'

const GallaryPic = ({collection}) => {
console.log(collection)
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( collection.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === collection.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={`data:image/png;base64,${collection[slideNumber].image}`} alt='' />
          </div>
        </div>
      }

   
<div class="gallery">
        {
          collection && collection.map((slide, index) => {
            return(
              
              <div
                className="image" 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <span>
                <img style={{width:"300px" , height:'280px'}} src={`data:image/png;base64,${slide?.image}`} alt='' />
                </span>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default GallaryPic