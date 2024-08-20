import React, {useEffect, useState} from "react";

/**
 * Input component
 * @param {String} label
 * @param {bool} important
 * @param {String} type
 * @param {String} placeholder
 * @param {String} otherClass
 * @param {bool} isPassword
 * @param {*} inputRegister
 * @param {String} defaultValue
 * @param {Function} onChange
 * @returns {*}
 * @constructor
 */
export default function Input({
    label, 
    important, 
    type, 
    placeholder, 
    otherClass, 
    isPassword = false, 
    inputRegister, 
    defaultValue = '', 
    onChange = () => {}
}){
    const [passwordType, setPasswordType] = useState(type)
    const [showEye, setShowEye] = useState('icon-eye')

    const handleShow = () => {
        if (passwordType === 'password'){
            setPasswordType('text')
            setShowEye('icon-eye-off')
        }else{
            setPasswordType('password')
            setShowEye('icon-eye')
        }
    }


    return (
        <div className={`${isPassword ? 'input-div' : ''}`}>
            {
                label && <label>{label} {important && <span className="text-danger">*</span>}</label>
            }
            {isPassword &&
                <i
                    className={`${showEye} show_password`}
                    onClick={handleShow}
                ></i>
            }
            <input
                onKeyUp={(e) => onChange(e)}
                type={passwordType ? passwordType : 'text'}
                className={`${otherClass ?? ''} form-control`}
                placeholder={placeholder}
                defaultValue={defaultValue}
                {...inputRegister}
            />
        </div>
    )
}