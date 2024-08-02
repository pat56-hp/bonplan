import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Modal, Button } from 'rsuite';
import { useAuthStateProvider } from '../../../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {String} title 
 * @param {String} description 
 * @param {String} icon 
 * @param {bool} open 
 * @param {React.SetStateAction} onSetOpen
 * @param {Object} data
 * @param {*} mutation
 * @returns 
 */
export default function ModalAlert({title, description, icon, open, onSetOpen, data, mutation}) {
    const [isLoading, setIsLoading] = useState(false);
    const {setToken, setUser} = useAuthStateProvider()
    const navigate = useNavigate()

    const handleClose = () => {
        onSetOpen(false);
    };

    const handleSubmit = () => {
        setIsLoading(true);
        mutation.mutate({ id: data.id, title: 'Alerte data' }, {
            onMutate: () => {
                setIsLoading(true);
            },
            onSuccess: () => {
                setIsLoading(false);
                toast.success('Etablissement supprimé');
                onSetOpen(false);
            },
            onError: (error) => {
                setIsLoading(false);
                toast.error('Oups, une erreur s\'est produite...');
                console.error('Mutation error: ', error);
                if (error.status === 401 || error.status === 419) {
                    setToken(null)
                    setUser(null)
                    navigate('/login')
                }
            },
        });
    };


    return (
        <>
            <Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="xs">
                <Modal.Header>
                    <Modal.Title style={{color: '#f7635c'}} ><i className="icon-attention-1"></i> {title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {description}
                </Modal.Body>

                <Modal.Footer>
                    <Button 
                        onClick={handleSubmit}
                        appearance="primary" 
                        className='btn-delete'
                        disabled={isLoading}
                    >
                        <i className={isLoading ? 'icon-spinner animate-spin' : icon}></i> Oui
                    </Button>
                    <Button 
                        onClick={handleClose}
                        appearance="subtle"
                    >
                        Non
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
