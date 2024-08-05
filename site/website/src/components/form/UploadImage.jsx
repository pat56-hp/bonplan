import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { imageExtensions, verifyExtension } from '../../scripts/helper';

/**
 * Component upload one image
 * @param image
 * @param onSetImage
 * @param formErrors
 * @param url
 */
export default function UploadImage({onSetImage, formErrors = [], url}) {
    const [fileUrl, setFileUrl] = useState(url || null)
    const fileInputRef = useRef(null);
    const [imgError, setImgError] = useState(null)

    // Lancement de l'upload de l'image
    const uploadFileOnClick = () => {
        const inputFile = document.getElementById('image_input')
        inputFile.click()
    }

    //Telechargement de l'image
    const handleUploadFile = (e) => {
        setImgError(null)
        if (e.target.files) {
            const file = e.target.files[0]
            const fileType = file.type
            const fileExtention = fileType.split('/').pop()
            const verify = verifyExtension(fileExtention)
            console.log(verify, fileType, fileExtention)
            if (!verify) {
                setImgError(`L\'image doit être de type ${imageExtensions.join(', ')}`)
                return
            }
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
        setImgError(null)
    }


  return (
    <div className='form-group'>
        <label>Image <span className='text-danger'>* ({imageExtensions.join(', ')})</span></label>
        <div onClick={uploadFileOnClick} className='img_upload_card position-relative card mt-3 p-1 align-items-center justify-content-center d-flex' style={{width: '200px', height: '200px'}}>
            {
                fileUrl 
                ? <><img src={fileUrl} alt="Image" className="img-fluid styled img_uploded m-0" /><a onClick={handleRemoveImage} className='position-absolute remove_image'><i className='icon-trash-7'></i></a></>
                : <span className='add_image_text'><i className='icon-plus-circled'></i> Ajouter</span> 
            }
            
        </div>
        {imgError && <span className='text-danger'>{imgError}</span>}
        {formErrors.image && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{formErrors.image.message}</span>}
        <input type='file' ref={fileInputRef} id='image_input' onChange={handleUploadFile} />
    </div>
  )
}
