import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Header from '../components/Header'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import { useMedia } from 'use-media'

function Photos() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const isMinMD = useMedia({ minWidth: 576 })
  const images = [
    isMinMD ? require('../img/_DSC0848-Edit.jpg') : require('../img/_DSC0848-Edit.jpg'),
    require('../img/_DSC0974-Edit.jpg'),
    require('../img/_DSC0916-Edit-6.jpg'),
    require('../img/_DSC0745-Edit.jpg'),
    require('../img/_DSC0668.jpg'),
    require('../img/_DSC3155-Edit.jpg'),
    require('../img/_DSC0434-Edit.jpg'),
    require('../img/_DSC0448.jpg'),
    require('../img/_DSC1019.jpg'),
    require('../img/_DSC2788-Edit.jpg'),
    require('../img/_DSC0567-Edit.jpg'),
    require('../img/_DSC2709-Edit.jpg'),
    require('../img/_DSC2389.jpg'),
    require('../img/_DSC2568-Edit.jpg'),
    require('../img/_DSC2680.jpg'),
  ]

  const mode = 'photos'
  return (
    <section className={mode + ' content'}>
      <Header title={mode} image={require('../img/_DSC0745-Edit.jpg')} />
      <div className="gallaryWrapper wrapper">
        <div
          className="imageBox vertical"
          onClick={() => {
            setPhotoIndex(0)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC0848-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox one"
          onClick={() => {
            setPhotoIndex(1)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC0974-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox"
          onClick={() => {
            setPhotoIndex(2)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC0916-Edit-6.jpg')} alt="" />
        </div>
        <div
          className="imageBox"
          onClick={() => {
            setPhotoIndex(3)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC0745-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox"
          onClick={() => {
            setPhotoIndex(4)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC0668.jpg')} alt="" />
        </div>
        <div
          className="imageBox vertical"
          onClick={() => {
            setPhotoIndex(5)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC3155-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox one"
          onClick={() => {
            setPhotoIndex(6)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC0434-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox vertical"
          onClick={() => {
            setPhotoIndex(7)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC0448.jpg')} alt="" />
        </div>
        <div
          className="imageBox one"
          onClick={() => {
            setPhotoIndex(8)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC1019.jpg')} alt="" />
        </div>
        <div
          className="imageBox"
          onClick={() => {
            setPhotoIndex(9)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC2788-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox"
          onClick={() => {
            setPhotoIndex(10)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC0567-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox"
          onClick={() => {
            setPhotoIndex(11)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC2709-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox vertical"
          onClick={() => {
            setPhotoIndex(12)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC2389.jpg')} alt="" />
        </div>
        <div
          className="imageBox"
          onClick={() => {
            setPhotoIndex(13)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC2568-Edit.jpg')} alt="" />
        </div>
        <div
          className="imageBox"
          onClick={() => {
            setPhotoIndex(14)
            setIsOpen(true)
          }}
        >
          <img src={require('../img/_DSC2680.jpg')} alt="" />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => {
              setIsOpen(false)
            }}
            enableZoom={false}
            onMovePrevRequest={() => {
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }}
            onMoveNextRequest={() => {
              setPhotoIndex((photoIndex + 1) % images.length)
            }}
          />
        )}
      </div>
    </section>
  )
}

export default Photos
