import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import Chargement from "../../../components/Chargement";
import { slug } from "../../../scripts/helper";

export default function EventFilter ({onSetIsLoading, onSetEvents, onSetMeta}) {
    const {sendRequest} = useHttp()
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const timeoutRef = useRef(null)
    const debounceTimeout = useRef(null);
    const [active, setActive] = useState(0)
    const [total, setTotal] = useState(0)
    const [visibleCount, setVisibleCount] = useState(5);
    const [expanded, setExpanded] = useState(false);

    const {
        data: getCategories,
        isFetching,
        isSuccess,
    } = useQuery({
        queryKey: ['getEventCategories'],
        queryFn: () => sendRequest('/eventCategories')
    })

    const setData = () => {
        if (isFetching) {
            setIsLoading(true)
        }

        timeoutRef.current = setTimeout(() => {
            if (isSuccess) {
                const {data} = getCategories
                setCategories(data.data)
                setTotal(data.total_event)
                setIsLoading(false)
            }
        }, 800);   
    }

    const eventsMuate = useMutation({
        mutationKey: ['refreshEvents'],
        mutationFn: (request) => sendRequest(`${request}`),
        onMutate: () => onSetIsLoading('true'),
        onSuccess: ({data}) => {
            onSetEvents(data.data)
            onSetMeta(data.metat)
            onSetIsLoading(false)
        },
        onError: () => {
            onSetIsLoading(false)
        }
    })

    //Ecoute du changement de l'input pour la recherche
    const handleChangeInput = (e) => {
        const key = e.target.value;

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);   
        }

        debounceTimeout.current = setTimeout(() => {
            const request = '/events?q=' + key
            eventsMuate.mutate(request)
        }, 800);
       
    }

    //Chargement des datas au click de la categorie
    const handleClickCategory = (id, e) => {
        setActive(id)
        const request = id === 0 ? '/events' : '/events?category=' + id
        eventsMuate.mutate(request)
    }

    const toggleCategories = (e) => {
        e.preventDefault();
        
        setExpanded(!expanded);
        setVisibleCount(expanded ? 5 : categories.length);
    };


    useEffect(() => {
        setData()
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [getCategories, isSuccess])

    useEffect(() => {
        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, []);

    return (
        <aside className="sidebar mb-4" id="">
            <div className="widget filter_type">
                <div className="form-group ">
                    <label>Filtre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Rechercher..." 
                        onChange={handleChangeInput}
                    />
                </div>
            </div>
            <h4>Categories</h4>
            {
                isLoading
                    ? <Chargement />
                    : (
                        <>
                            <div className="box_style_cat eventCategories">
                                <ul id="cat_nav">
                                    <li>
                                        <Link 
                                            to={'/evenements'} 
                                            id={active === 0 ? 'active' : ''}
                                            onClick={(e) => handleClickCategory(0, e)}
                                        ><i className="icon_set_1_icon-65"></i>Tous <span>({total})</span></Link>
                                    </li>
                                    {
                                        categories.slice(0, visibleCount).map((cat, key) => (
                                            <li key={key}>
                                                <Link 
                                                    to={`/evenements?category=${slug(cat.title)}`} 
                                                    onClick={(e) => handleClickCategory(cat.id, e)}
                                                    id={active === cat.id ? 'active' : ''}
                                                ><i className={cat.icon}></i>{cat.title} <span>({cat.total_event})</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <a href="#" className="cat_button_expanded" onClick={toggleCategories}>
                                {
                                    expanded
                                        ? <><span className="icon-minus"></span> Voir moins</>
                                        : <><span className="icon-plus"></span> Voir plus</>
                                }
                            </a>
                        </>
                    )
            }
        </aside>
    )
}