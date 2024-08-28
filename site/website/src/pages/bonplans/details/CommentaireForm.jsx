import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'
import { Button, Message, Modal } from 'rsuite'
import useHttp from '../../../hooks/useHttp'
import toast from 'react-hot-toast'
import AlertMessage from '../../../components/AlertMessage'

export default function CommentaireForm({open, onSetOpen, etablissementId}) {
    const {sendRequest} = useHttp()
    const clientQuery = useQueryClient()
    const [isLoading, setIsLoading] = useState(false)
    const commentaireRef = useRef()
    const [note, setNote] = useState(0)
    const [formErrors, setFormErrors] = useState([])

    const handleClose = () => {
        onSetOpen(false);
    };

    const mutatePlan = useMutation({
        mutationKey: ['addComment'],
        mutationFn: (data) => sendRequest(`/commentaires/store`, 'POST', data)
    })

    //Soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors([])
        setIsLoading(true)
        toast.loading('Patientez...')
        
        setTimeout(() => {
            const commentaire = commentaireRef.current.value
            const data = {
                'etablissement' : etablissementId,
                'note' : note,
                'commentaire' : commentaire
            }

            let errors = {}
            if (commentaire === undefined || commentaire === null || commentaire === '') {
                errors.commentaire = {
                    message: 'Veuillez renseigner un commentaire svp'
                }
            }

            //S'il existe une erreur dans le formulaire lors de la soumission
            if (Object.keys(errors).length > 0) {
                toast.remove()
                toast.error('Oups...')
                setFormErrors(errors);
                setIsLoading(false)
                return;
            }

            //Envoie des elements au serveur
            mutatePlan.mutate(data, {
                onMutate: () => setIsLoading(true),
                onSuccess: () => {
                    clientQuery.invalidateQueries('showEtablissement')
                    toast.remove()
                    toast.success('Commentaire ajouté avec succès')
                    setIsLoading(false)
                    onSetOpen(false)
                },
                onError: (error) => {
                    if (error.status === 422) {
                        const {errors} = error.reponse
                        console.log(errors)
                        Object.keys(errors).map(key => {
                            setFormErrors(formErrors => (
                                {...formErrors, [key] : {
                                    message: errors[key]
                                }}
                            ))
                        })
                    }

                    setIsLoading(false)
                    toast.error('Oups, une erreur s\'est produite')
                }
            })
        }, 800)
        

    }

  return (
    <Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="md" style={{ top: '50%', transform: 'translateY(-80%)' }} >
        <Modal.Header>
            <Modal.Title><i className="icon-comment-3"></i> Ajouter un avis</Modal.Title>
        </Modal.Header>

        <form onSubmit={handleSubmit}>
                <Modal.Body className='mt-0 pb-0' style={{overflow: ''}}>
                    <div className='my-3'>
                        <Message showIcon type="info">
                            Votre avis permet aux autres utilisateurs de faire leur choix 
                        </Message>
                        <AlertMessage errors={formErrors} />
                    </div>
                    <div className='row'>
                        <div className='col-md-9'>
                            <div className="form-group">
                                <label>Commentaire <span className='text-danger'>*</span></label>
                                <textarea 
                                    ref={commentaireRef}
                                    id="review_text" 
                                    className="form-control mt-2" 
                                    style={{height: "160px"}} 
                                    placeholder="Décrivez-nous votre expérience en quelques mots"
                                ></textarea>
                                {formErrors.commentaire && <span className="text-danger"><i className="icon-info-circled"></i>{formErrors.commentaire.message}</span>}
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='form-group'>
                                <label>Ajouter une note</label>
                                <ul className='rating_comment mt-2'>
                                    <li>
                                        <label className="container_check">
                                            <span className="rating">
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                            </span>
                                            <input 
                                                type="radio" 
                                                name='rating'
                                                onChange={() => setNote(5)}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">
                                            <span className="rating">
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                            </span>
                                            <input type="radio" name='rating' onChange={() => setNote(4)} />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">
                                            <span className="rating">
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                            </span>
                                            <input type="radio" name='rating' onChange={() => setNote(3)}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">
                                            <span className="rating">
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                            </span>
                                            <input type="radio" name='rating' onChange={() => setNote(2)}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="container_check">
                                            <span className="rating">
                                                <i className="icon_set_1_icon-81 voted"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                                <i className="icon_set_1_icon-81"></i>
                                            </span>
                                            <input type="radio" name='rating' onChange={() => setNote(1)}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
        
                <Modal.Footer className='text-start'>
                    <Button 
                        type='submit'
                        appearance="primary" 
                        className='btn-delete'
                        disabled={isLoading}
                    >
                        <i className={isLoading ? 'icon-spinner animate-spin' : 'icon-check'}></i> Valider
                    </Button>
                    <Button 
                        onClick={handleClose}
                        appearance="subtle"
                    >
                        Annuler
                    </Button>
            </Modal.Footer>
        </form>
    </Modal>
  )
}
