import React, { useEffect, useRef, useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { Link, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import useHttp from '../../../hooks/useHttp'
import toast from 'react-hot-toast'
import { Placeholder } from 'rsuite'
import Gallery from '../../../components/Gallery'
import { apiUrl, slug } from '../../../scripts/helper'
import MapComponent from '../../../components/MapComponent'
import Rating from '../../../components/Rating'
import ElementNotFound from '../../../components/ElementNotFound'

export default function Details() {

	const params = useParams()
	const {sendRequest} = useHttp()
	const [isLoading, setIsLoading] = useState(false)
	const [bonplan, setBonPlan] = useState({})
	const [others, setOthers] = useState([])
	const [horaires, setHoraires] = useState([
		{id: 1, label: 'Lundi', ouverture: null, fermeture: null},
		{id: 2, label: 'Mardi', ouverture: null, fermeture: null},
		{id: 3, label: 'Mercredi', ouverture: null, fermeture: null},
		{id: 4, label: 'Jeudi', ouverture: null, fermeture: null},
		{id: 5, label: 'Vendredi', ouverture: null, fermeture: null},
		{id: 6, label: 'Samedi', ouverture: null, fermeture: null},
		{id: 7, label: 'Dimanche', ouverture: null, fermeture: null}
	])
	const [datas, setDatas] = useState({})
	const timeOutRef = useRef(null)
	const [isLoadFavoriteBtn, setIsLoadFavoriteBtn] = useState(false)
	const clientQuery = useQueryClient()

	const {
		data : getData,
		isFetching,
		isSuccess,
	} = useQuery({
		queryKey: ['showEtablissement'],
		queryFn: () => {
			const explode = params.slug.split('-')
			return sendRequest(`/details-plans/${explode[0]}`)
		}
	})

	const etablissementFavoris = useMutation({
		mutationKey: ['showEtablissementMutation'],
		mutationFn: (id) => sendRequest(`/etablissements/favoris/${id}`, 'POST'),
		onSuccess: () => {
			clientQuery.invalidateQueries('showEtablissement')
			setTimeout(() => {
				setIsLoadFavoriteBtn(false)
			}, 800);
		}
	})

	//Action d'ajout et de suppression en favoris
	const handleAddRemoveFavorite = (id, e) => {
		e.preventDefault();
		setIsLoadFavoriteBtn(true)
		etablissementFavoris.mutate(id,{
			onSuccess: ({data}) => {
				data.favoris 
					? toast.success('Plan ajouté aux favoris')
					: toast.success('Plan retiré des favoris')
			}
		})
	}

	const setData = () => {
		if (isFetching) {
			setIsLoading(true)
			toast.loading('Chargement...')
		}

		timeOutRef.current = setTimeout(() => {
			if (isSuccess && getData) {
				const {data} = getData
				setBonPlan(data.data)
				setOthers(data.other)
				setDatas({
					libelle: data?.data.libelle,
                    category: data?.data?.category.libelle,
                    category_icon: data?.data?.category.icon,
                    url: '/explorer?category='+data.data.id,
                    image: data.data.image,
                    type: 'plan'
				})
				const hours = data.data.jours?.map(jour => (
					{
						id : jour.id,
						label: jour.libelle,
						ouverture: jour.pivot?.ouverture,
						fermeture: jour.pivot?.fermeture
					}
				))

			
				const newHours = horaires.map(horaire => {
					const data = hours.filter(hour => hour.id === horaire.id)
					if (data.length > 0) {
						return {...horaire, ouverture: data[0].ouverture, fermeture: data[0].fermeture}
					}
					return horaire
				})

				setHoraires(newHours)
				setIsLoading(false)
				toast.remove()
			}
		}, 800)
	}

	const handleOpenModal = () => {

	}


	useEffect(() => {
		setData()
		return () => {
			clearInterval(timeOutRef.current)
		}
	}, [getData])


    const breadcrumbs = [
        {label: 'Accueil', link: '/'},
        {label: 'Explorer', link: '/explorer'},
		{label: bonplan?.libelle}
    ]

    const info = {
        title: bonplan?.libelle,
        subtitle: 'D'
    }

  return (
    <>
        <Breadcrumbs 
            breadcrumbs={breadcrumbs}
            info={info}
            isShow={true}
			data = {datas}
        />

		{
			isLoading
				? <Chargement />
				: <>
					<div className='container margin_60'>
						<div className='row'>
							<div className='col-md-4'>
								<div className='plan_side'>
									<h3>Avis et commodités</h3>
									<div className='plan_element'>
										<div className='section_avis'>
											<span className='avis'>4,5</span>
											<Rating />
											<span className='total_avis'>0 avis</span>
										</div>
										<div className='cat'>
											<Link to={`/explorer?category=${bonplan.category_id}`}>
                                                <span><i className={bonplan?.category?.icon}></i>{bonplan?.category?.libelle}</span>
                                            </Link>
										</div>
										<div className='separator'>
											<hr/>
										</div>
									</div>
									<div className='commodite_element'>
										<h6>Commodités</h6>
										{
											bonplan?.commodites?.length > 0 
												? <ul className='commodites'>
													{
														bonplan.commodites?.map((commodite, key) => (
															<li key={key}><i className={commodite.icon}></i>{commodite.libelle}</li>
														))
													}
												</ul>
												: <span>Aucune commodité disponible</span>
										}
										
									</div>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='plan_side'>
									<h3>Horaires</h3>
									<ul className='horaires'>
										{
											horaires.map((horaire, key) => {
												const IsOpen = horaire.ouverture && horaire.fermeture ? true : false;
												const hours = horaire.ouverture + ' - '  + horaire.fermeture
												return (
													<li
														key={key} 
														className={IsOpen ? 'horaire' : 'total'}
													>
														<span className='day'>
															{horaire.label}
														</span>
														<span className='hours'>
															{ IsOpen ? hours : 'Fermé' }
														</span>
													</li>
												)
											})
										}
									</ul>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='plan_side'>
									<h3>Emplacement et coordonnées</h3>
									{
										bonplan.latitude && bonplan.longitude &&
										<div className='map_content'>
											<MapComponent
												longitude={bonplan.longitude}
												latitude={bonplan.latitude}
												image = {apiUrl() + bonplan.image}
												libelle = {bonplan.libelle}
												contact = {bonplan.phone}
											/>
										</div>
									}
									<div className='d-flex gap-10 mt-3'>
										<span className='icon-location-6'></span>
										<span>{bonplan.adresse}</span>
									</div>
									<div className='plan_phone'>
										<a href={`tel:00${bonplan.phone}`} target='_blank'><span className='icon-phone'></span> +{bonplan.phone}</a>
										{bonplan.email && <a href={`mailTo:${bonplan.email}`} target='_blank'><span className='icon-email'></span> Email</a>}
									</div>
									<div className='plan_phone mb-0'>
										{bonplan.facebook && <a href={bonplan.facebook} target='_blank'><span className='icon-facebook'></span> Facebook</a>}
										{bonplan.instagram && <a href={bonplan.instagram} target='_blank'><span className='icon-instagram'></span> instagram</a>}
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-4'>
								<div className="box_style_1">
									{
										<Gallery image={bonplan.image} gallery= {bonplan.galleries} alt={bonplan.libelle}/>
									}
									<a 
										href='#'
										onClick={e => handleAddRemoveFavorite(bonplan.id, e)}
										className={bonplan.isFavorite ? "btn_map mt-4" : "btn_full_outline mt-4"} 
									>
										{
											isLoadFavoriteBtn
												? <i className='icon-spin5 animate-spin'></i>
												: <i className={bonplan.isFavorite ? "icon-heart-empty" : "icon-heart"}></i> 
										}
										{bonplan.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
									</a>
									<div className='mt-2 mb-2 text-center'>
										<span>Cet etablissement vous appartient ? <Link to='/contact'>Contactez-nous</Link></span>
									</div>
								</div>
							</div>
							<div className='col-md-8'>
								<div className='box_style_1 sidebar'>
									<div dangerouslySetInnerHTML={{ __html: bonplan.description}}></div>
									<div className='commentaire_avis'>
										<div className='row'>
											<div className='col-md-3'>
												<span className='title'>Avis <span>(0)</span></span>
												<div className='position mb-3'>
													<a href="#" class="btn_1 add_bottom_30" onClick={handleOpenModal}>Ajouter un avis</a>
												</div>
											</div>
											<div className='col-md-9'>
												{
													bonplan.commentaires?.length > 0
														? bonplan.commentaire?.map((commentaire, key) => (
															<div className="review_strip_single" key={key}>
																<small> - 10 March 2015 -</small>
																<h4>Jhon Doe</h4>
																<p>
																	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
																</p>
																<div className="rating">
																	<i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><i className="icon-smile"></i>
																</div>
															</div>
														))

														: <h6 className='empty-data'>
															<i className='icon-info-circled-1'></i> Aucun commentaire trouvé
														</h6>
															
															

												}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='row'>
							
							<aside className="col-lg-4">
								
								{
									others.length > 0 &&
									<div className="box_style_1 expose sidebar">
										<h3 className="inner">- Autre(s) Evènement(s) -</h3>
										<div className='widget related-products'>
											{
												others.map((element, key) => (
													<div className="post" key={key}>
														<figure className="post-thumb">
															<a href={`/explorer/${slug(element.id + '-' + element.libelle)}`}>
																<img src={apiUrl() + element.image} alt={element.libelle}/>
															</a>
														</figure>
														<h5 className='d-flex justify-content-between gap-10'>
															<a href={`/explorer/${slug(element.id + '-' + element.libelle)}`}>{element.libelle}</a>
															<span className={element.open ? 'text-success' : 'text-danger'}>{element.open ? 'Ouvert' : 'Fermé'}</span>
														</h5>
														<div className="price mt-1">
															<Link to={`/evenements?category=${element.category_id}`}>
																<i className={element.category_icon}></i>{element.category}
															</Link>
														</div>
														<div className="product_description mt-2">
															<div className="event_begin">
																<span><i className='icon-phone'></i>{element.phone}</span> <br/>
																<span><i className='icon-location-outline'></i>{element.ville}</span>
															</div>
														</div>
													</div>
												))
											}
										</div>
									</div>
								}
								
							</aside>
						</div> */}
					</div>
				</>
		}
    </>
  )
}

function Chargement(){
    return (
        <>
            <div className="white_bg">
                <div className="container margin_60">
                    <Placeholder.Graph active className='hover_load' />
                    <Placeholder.Paragraph active className='hover_load' />
                </div>
            </div>
        </>
    )
}
