import React, { useEffect, useRef, useState } from 'react'
import { imageExtensions, verifyExtension } from '../../scripts/helper'
import { useMutation } from '@tanstack/react-query'
import useHttp from '../../hooks/useHttp'
import toast from 'react-hot-toast'

/**
 * Component of upload galery
 * @param galery
 * @param onSetGalery
 * @param formErrors
 * @param url
 * @returns 
 */
export default function UploadGalery({galery, onSetGalery, formErrors, url = [], isUpdate = false}) {

  const {sendRequest} = useHttp()
  const [imgUrl, setImgUrl] = useState(url)
  const [imgError, setImgError] = useState(null)
  const fileInputRef = useRef()

  // Lancement de l'upload de l'image
  const uploadFileOnClick = () => {
    const inputFile = document.getElementById('image_input_multiple')
      inputFile.click()
  }

  //Telechargement de l'image
  const handleUploadFile = (e) => {
    if (e.target.files) {
      setImgError(null)
      const files = e.target.files

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = file.type;
        const fileExtension = fileType.split('/').pop();
        const verify = verifyExtension(fileExtension);
        console.log(verify, fileType, fileExtension);
        if (!verify) {
            setImgError(`L'image doit être de type ${imageExtensions.join(', ')}`);
            return; // Sortir de la fonction si l'extension n'est pas valide
        }
      }

      const newFiles = Array.from(files).map(element => URL.createObjectURL(element))
      const newGalery = Array.from(files)
      
      setImgUrl(prevImgUrl => [...prevImgUrl, ...newFiles]);
      onSetGalery(prevGallery => [...prevGallery, ...newGalery]);

      fileInputRef.current.value = null
    }
  }

  //Suppression de l'image
  const handleRemoveImage = (url, index, e) => {
    e.stopPropagation();
    const newImgUrl = imgUrl.filter(objUrl => objUrl !== url)
    const newGallery = galery.filter(objGalery => objGalery !== galery[index]) 

    if (isUpdate) {
      deteleFile.mutate(url, {
        onSuccess: () => {
          toast.remove()
          setImgUrl(newImgUrl)
          onSetGalery(newGallery)
          setImgError(null)
        }
      })
    }else{
      setImgUrl(newImgUrl)
      onSetGalery(newGallery)
      setImgError(null)
    }
  }

  //Suppression du fichier sur le server
  const deteleFile = useMutation({
    mutationKey: ['deleteFile'],
    mutationFn: async (urlFile) => sendRequest('/etablissements/delete/image/', 'PUT', {image: urlFile}),
    onMutate: () => {
      toast.loading('Patientez...')
    }
  })

  return (
    <>
    <label>Galerie <span className='text-danger'>({imageExtensions.join(', ')})</span></label>
    <div className='galerie_component d-flex gap-2 flex-wrap mt-3'>
      {
        imgUrl.map((el, index) => (
          <div key={index} className='img_upload_card card ad_image d-flex justify-content-center align-items-center mb-0'>
              <img src={el} alt="Image" className="img-fluid styled img_uploded m-0" />
              <a onClick={e => handleRemoveImage(el, index, e)} className='position-absolute remove_image'>
                <i className='icon-trash-7'></i>
              </a>
          </div>
        ))
      }
      <div onClick={uploadFileOnClick} className='img_upload_card card ad_image d-flex justify-content-center align-items-center mb-0'>
          <span className='add_image_text'><i className='icon-plus-circled'></i> Ajouter</span>
      </div>
    </div>
    {imgError && <span className='text-danger'>{imgError}</span>}
    {formErrors.galery && <span className="text-danger text-sm-start"><i className="icon-info-circled"></i>{formErrors.galery.message}</span>}
    <input type='file' ref={fileInputRef} id='image_input_multiple' multiple={true} onChange={handleUploadFile} />
    </>
  )
}
