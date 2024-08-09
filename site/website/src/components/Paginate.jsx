import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Pagination } from 'rsuite';
import useHttp from "../hooks/useHttp";
import toast from "react-hot-toast";

/**
 * Component of Pagination
 * @param {Object} meta 
 * @param {React.useState} onSetMeta
 * @param {React.useState} onSetLoading
 * @param {String} pageUrl
 * @returns 
 */
export default function Paginate ({meta, onSetMeta, onSetData, pageUrl}){
    const {sendRequest} = useHttp()
    const [currentPage, setCurrentPage] = React.useState(null);
    const [total, setTotal] = React.useState(null)
    const [limit, setLimit] = React.useState(null)
    const timeOutRef = React.useRef(null)



    const getDataFromPagination = useMutation({
        
        mutationFn: async (pageNumber) => await sendRequest(pageUrl + pageNumber, 'GET'),
        mutationKey: ['getDataFromPagination'],
        onSuccess: ({data}) => {
            toast.remove()
            onSetData(data.data)
            onSetMeta(data.meta)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        },
        onError: () => {
            toast.remove()
        }
    })

    const handleChangePage = (value) => {
        toast.loading('Patientez...')
        timeOutRef.current = setTimeout(() => {
            getDataFromPagination.mutate(value)
        }, 500);
    }

    const handleState = () => {
        setCurrentPage(meta?.current_page)
        setTotal(meta?.total)
        setLimit(meta?.per_page)
    }

    useEffect(() => {
        handleState()

        return () => {
            clearTimeout(timeOutRef.current)
        }
    }, [meta])

    return (
        <div className="my-4 d-flex justify-content-center" style={{display: meta ? 'block' : 'none'}}>
            {(total > limit) && <Pagination
                prev
                last
                next
                first
                size="md"
                page={total}
                total={total}
                limit={limit}
                activePage={currentPage}
                onChangePage={value => handleChangePage(value)}
            />}
        </div>
    )
}