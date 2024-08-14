import React, { useEffect, useRef, useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CarouselLoader from '../../../scripts/CarouselLoader'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useHttp from '../../../hooks/useHttp'
import toast from 'react-hot-toast'
import { Placeholder } from 'rsuite'
import Commodite from './Commodite'
import Gallery from '../../../components/Gallery'

export default function Details() {

	const params = useParams()
	const {sendRequest} = useHttp()
	const [isLoading, setIsLoading] = useState(false)
	const [bonplan, setBonPlan] = useState({})
	const [horaires, setHoraires] = useState([
		{id: 1, label: 'Lundi', ouverture: null, fermeture: null},
		{id: 2, label: 'Mardi', ouverture: null, fermeture: null},
		{id: 3, label: 'Mercredi', ouverture: null, fermeture: null},
		{id: 4, label: 'Jeudi', ouverture: null, fermeture: null},
		{id: 5, label: 'Vendredi', ouverture: null, fermeture: null},
		{id: 6, label: 'Samedi', ouverture: null, fermeture: null},
		{id: 7, label: 'Dimanche', ouverture: null, fermeture: null}
	])
	const timeOutRef = useRef(null)

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


	const setData = () => {
		if (isFetching) {
			setIsLoading(true)
			toast.loading('Chargement...')
		}

		timeOutRef.current = setTimeout(() => {
			if (isSuccess && getData) {
				const {data} = getData
				setBonPlan(data.data)
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
        title: 'Explorer nos bons plans',
        subtitle: 'Cursus neque cursus curae ante scelerisque vehicula.'
    }

  return (
    <>
        <Breadcrumbs 
            breadcrumbs={breadcrumbs}
            info={info}
            isShow={true}
			data = {bonplan}
        />

		{
			isLoading
				? <Chargement />
				: <>
					<div className='container margin_60'>
						<div className='row'>
							<div className="col-lg-8" id="single_tour_desc">
								<Commodite commodites={bonplan.commodites}/>
								{
									bonplan.galleries &&
									<Gallery gallery= {bonplan.galleries} alt={bonplan.libelle}/>
								}
								
								<hr/>

								<div className="row">
									<div className="col-lg-3">
										<h3>Description</h3>
									</div>
									<div className="col-lg-9">
										<div dangerouslySetInnerHTML={{ __html: bonplan.description}}></div>
									</div>
								</div>
								<hr/>
								
								<div className='row'>
									<div className='col-md-3'>
										<h3>Localisation</h3>
									</div>
									<div className='col-md-9'>
										<div className="box_style_1 expose">
											
											<p className="d-none d-xl-block d-lg-block mt-2 mb-0">
												<a className="btn_map" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">Itinéraire</a>
											</p>
										</div>
									</div>
								</div>
								<hr/>
							</div>
							<aside className="col-lg-4">
								<div className="box_style_1 expose">
									<h3 className="inner">- HORAIRES -</h3>
									<table className="table table_summary">
										<tbody>
											{
												horaires.map((horaire, key) => {
													const IsOpen = horaire.ouverture && horaire.fermeture ? true : false;
													const hours = horaire.ouverture + ' - '  + horaire.fermeture
													return (
														<tr 
															key={key} 
															className={IsOpen ? 'horaire' : 'total'}
														>
															<td>
																{horaire.label}
															</td>
															<td className="text-end">
																{ IsOpen ? hours : 'Fermé' }
															</td>
														</tr>
													)
												})
											}
											
										</tbody>
									</table>
									<a className="btn_full_outline" href="#"><i className=" icon-heart"></i> Ajouter aux favoris</a>
								</div>
								<div className="box_style_4">
									<i className="icon_set_1_icon-90"></i>
									<h4><span>Contact(s)</span></h4>
									<a href="tel://004542344599" className="phone mb-1">+{bonplan.phone}</a>
									{
										bonplan.email &&
										<a href={`mailto:${bonplan.email}`} target='_blank' className='contact_email d-block'><i className='icon-email'></i> {bonplan.email}</a>
									}
									<div className='rs_info mb-3'>
										{bonplan.facebook &&
											<a href={bonplan.facebook} className='facebook' target='_blank'><i className='icon-facebook-squared'></i> Facebook</a>
										}
										{
											bonplan.instagram &&
											<a href={bonplan.instagram} className='instagram' target='_blank'><i className='icon-instagramm'></i> Instagram</a>
										}
									</div>
								</div>
							</aside>
						</div>
						<div className="row">
							<div className="col-lg-2">
								<h3 className='mt-2'>Commentaires </h3>
								<a href="#" className="btn_1 add_bottom_30" data-bs-toggle="modal" data-bs-target="#myReview">Ajouter une note</a>
							</div>
							<div className="col-lg-6">
								<div id="general_rating">0 Commentaires
									<div className="rating">
										<i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><i className="icon-smile"></i>
									</div>
								</div>
								{
									bonplan.commentaire?.map((commentaire, key) => (
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
								}
							</div>
						</div>
					</div>
					<CarouselLoader />
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
