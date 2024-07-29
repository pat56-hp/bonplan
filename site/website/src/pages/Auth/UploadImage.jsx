import React, { useRef } from 'react'
import { useState } from 'react';

/**
 * Component upload one image
 * @param image
 * @param onSetImage
 */
export default function UploadImage({image, onSetImage}) {
    const [fileUrl, setFileUrl] = useState(null)
    const fileInputRef = useRef(null);

    // Lancement de l'upload de l'image
    const uploadFileOnClick = () => {
        const inputFile = document.getElementById('image_input')
        inputFile.click()
    }

    //Telechargement de l'image
    const handleUploadFile = (e) => {
        if (e.target.files) {
            const file = e.target.files[0]
            console.log(file)
            setFileUrl(URL.createObjectURL(file))
            onSetImage(file)
            fileInputRef.current.value = null
        }
    }

    //Suppression de l'image
    const handleRemoveImage = (e) => {
        e.stopPropagation();
        onSetImage(null)
        setFileUrl(null)
    }

  return (
    <div className='form-group'>
        <label>Image <span className='text-danger'>*</span></label>
        <div onClick={uploadFileOnClick} className='img_upload_card position-relative card mt-3 p-1 align-items-center justify-content-center d-flex' style={{width: '200px', height: '200px'}}>
            {
                image 
                ? <><img src={fileUrl} alt="Image" className="img-fluid styled img_uploded m-0" /><a onClick={handleRemoveImage} className='position-absolute remove_image'><i className='icon-trash-7'></i></a></>
                : <span style={{color: '#999'}}><i className='icon-plus-circled'></i> Ajouter</span> 
            }
            
            <input type='file' ref={fileInputRef} id='image_input' onChange={handleUploadFile} />
        </div>
    </div>
  )
}
