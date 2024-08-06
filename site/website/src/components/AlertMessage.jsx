import React from 'react'
import { Message } from 'rsuite';

export default function AlertMessage({errors}) {
  return (
    <>
        { 
            Object.keys(errors).length > 0 &&
            <div className='my-3'>
                <Message closable showIcon type="error" header="Problème(s) dans le fromulaire :">
                    <ol>
                        {Object.keys(errors).map((key, i) => (
                            <li key={i}>{errors[key].message}</li>
                        ))}
                    </ol>
                </Message>
            </div>
        }
    </>
  )
}
