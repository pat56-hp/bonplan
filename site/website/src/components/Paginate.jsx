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



    const getDataFromPagination = useMutation({
        
        mutationFn: async (pageNumber) => await sendRequest(pageUrl + pageNumber, 'GET'),
        mutationKey: ['getDataFromPagination'],
        onMutate: () => {
            toast.loading('Patientez...')
        },
        onSuccess: ({data}) => {
            toast.remove()
            onSetData(data.data)
            onSetMeta(data.meta)
        },
        onError: () => {
            toast.remove()
        }
    })

    const handleChangePage = (value) => {
        getDataFromPagination.mutate(value)
    }

    const handleState = () => {
        setCurrentPage(meta?.current_page)
        setTotal(meta?.total)
        setLimit(meta?.per_page)
    }

    useEffect(() => {
        handleState()
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