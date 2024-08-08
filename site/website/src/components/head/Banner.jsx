import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import useHttp from "../../hooks/useHttp";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const {sendRequest} = useHttp({isFrontend: true});
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const navigate = useNavigate()

    const {
        register,
        handleSubmit
    } = useForm()

    const {
        data: getCategories,
        isFetching,
        isSuccess,
    } = useQuery({
        queryKey: ['getCategoriesBanner'],
        queryFn: async () => await sendRequest('/categories')
    })

    const setData = () => {
        if (isSuccess) {
            const {data} = getCategories
            const cat = data.data.map(category => ({
                label: category.libelle,
                value: category.id
            }))

            setCategories(cat)
        }
    }

    const onSubmit = (data) => {
        if(data.adresse === '' && (category === null || category === '')){
            toast.remove()
            toast.error('Oups, veuillez sélectionner une option svp')
            return
        }

        navigate(`/explorer?adresse=${data.adresse}&category=${category}`)
    }

    useEffect(() => {
        setData()
    }, [getCategories, isSuccess])

    return (
        <div id="search_container_2">
            <div id="search_2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-0 custom-search-input-2">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="Où allez vous ?"
                                    id="autocomplete" 
                                    {...register('adresse')}
                                />
                                <i className="icon_pin_alt"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Select 
                                name="category"
                                options={categories}
                                onChange={cat => setCategory(cat.value)}
                                placeholder = "Catégorie"
                                noOptionsMessage = {() => 'Aucune catégorie disponible'}
                                styles={{ zIndex: 99999999999999, color: '#000' }}
                                isLoading= {isFetching}
                            />
                        </div>
                        <div className="col-lg-2">
                            <button className="btn_search">
                                Explorer
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Banner