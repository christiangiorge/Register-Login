import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom";

import {
    regexNameLength,
    regexEmail,
    regexPasswordLength,
    regexPasswordNumber,
    regexPasswordUppercase, 
    regexPasswordSpecial
} from '../../utils/regex';

import notRed from "../../assets/not-red.svg";
import checkGreen from "../../assets/check-green.svg";

export function SignUp() {
    const[validateNameRegister, setValidateNameRegister] = useState({
        regexNameLength:false,
    })

    const[validateEmailRegister, setValidateEmailRegister] = useState({
        regexEmail: false,
    })

    const [validatePasswordRegister, setValidatePasswordRegister] = useState({
        regexPasswordLength: false,
        regexPasswordNumber: false,
        regexPasswordUppercase: false,
        regexPasswordSpecial: false,
        
    })

    const matchPassword = useRef() as React.MutableRefObject<HTMLInputElement>;
    const matchConfirmPassword = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [confirmPasswordClass, setConfirmPasswordClass] = useState('form-control');
    const [errorMatchPassword, setErrorMatchPassword] = useState(false)
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)
   

    

    const nameRegister = (nameInput: React.ChangeEvent<HTMLInputElement>) => {
        setValidateNameRegister({
            regexNameLength: regexNameLength.test(nameInput.target.value),
        })
    }
    
    const emailRegister = (emailInput: React.ChangeEvent<HTMLInputElement>) => {
        setValidateEmailRegister({
            regexEmail: regexEmail.test(emailInput.target.value),
        })

    }

    const passwordRegister = (passwordInput: React.ChangeEvent<HTMLInputElement>) => {
        
        setValidatePasswordRegister({
            
            regexPasswordLength: regexPasswordLength.test(passwordInput.target.value),
            regexPasswordNumber: regexPasswordNumber.test(passwordInput.target.value),
            regexPasswordUppercase: regexPasswordUppercase.test(passwordInput.target.value),
            regexPasswordSpecial: regexPasswordSpecial.test(passwordInput.target.value),
        })

    }

    useEffect(() => {
        if(confirmPasswordDirty){
            if(matchPassword.current.value === matchConfirmPassword.current.value){
                setErrorMatchPassword(false)
                setConfirmPasswordClass('block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5')
            } else{
                setErrorMatchPassword(true)
                setConfirmPasswordClass('block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5 focus:border-pink-500 focus:ring-pink-500 text-pink-600 focus-ring-1')
            }
        }
    },[confirmPasswordDirty])

  

    const matchPasswordInput = (confirmPassword: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPasswordDirty(true)
        if(confirmPasswordDirty){
            if(matchPassword.current.value === matchConfirmPassword.current.value){
                setErrorMatchPassword(false)
                setConfirmPasswordClass('block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5')
            } else{
                setErrorMatchPassword(true)
                setConfirmPasswordClass('block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5 focus:border-pink-500 focus:ring-pink-500 text-pink-600 focus-ring-1')
            }
        }
    }

    useEffect(() => {
        setButtonDisabled(false)
    }, [validateNameRegister])
    
   

    return (
        <div className="flex flex-col items-center">


            <label>
                <form className="flex flex-col items-center outline-none">
                    <input 
                        type="text"
                        placeholder="Your Name Complete"
                        required
                        onChange={(nameInput) => nameRegister(nameInput)}
                        className={`block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mb-5 focus:outline-none focus:ring-1 ${Object.values(validateNameRegister).map(mapValidateNameBoolean => mapValidateNameBoolean == false ? "focus:outline-none focus:border-pink-500 focus:ring-pink-500 text-pink-600 focus-ring-1" : "")}`}/>

                    <input
                        type="email"
                        placeholder="Confirm your Email ID"
                        required
                        onChange={(emailInput) => emailRegister(emailInput)}
                        className={`block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5 ${Object.values(validateEmailRegister).map(mapValidateEmailBoolean => mapValidateEmailBoolean == false ? "focus:outline-none focus:border-pink-500 focus:ring-pink-500 text-pink-600 focus-ring-1" : "")}`}/>

                    <input 
                        type="password"
                        placeholder="New Password"
                        required
                        ref={matchPassword}
                        onChange={(passwordInput) => passwordRegister(passwordInput)}
                        className={`block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5 ${Object.values(validatePasswordRegister).map(mapValidatePasswordBoolean => mapValidatePasswordBoolean == false ? "focus:outline-none focus:border-pink-500 focus:ring-pink-500 text-pink-600 focus-ring-1" : "")}`}/>
                    
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        ref={matchConfirmPassword}
                        onChange={matchPasswordInput}
                        className={`block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5 ${confirmPasswordClass}`}/>

                    <button 
                        disabled={buttonDisabled} 
                        className="rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 hover:bg-[#2347C5] mb-5">
                            SIGN UP
                    </button>
                    
                    <Link to="/signin" className="hover:text-[#2347C5] hover:underline">
                        <p className="text-[#5473E3] mb-5">Already have an account ? Sign in</p>
                    </Link>
                
                
                </form>
                
                <div className="text-[#6D7989] w-[25rem]" >
                    
                    <label className="text-[#404B5A]">Senha deve conter:</label>
                    
                    <div className="mt-2 ">
                        <img  src={validatePasswordRegister.regexPasswordLength ? checkGreen : notRed} className="inline-block mr-2" />
                        <p className="inline-block">Minímo 8 caracteres;</p>
                    </div>
                    
                    <div>
                        <img src={validatePasswordRegister.regexPasswordNumber ? checkGreen : notRed } className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos um número;</p>
                        
                    </div>
                        
                    <div>
                        <img src={validatePasswordRegister.regexPasswordUppercase ? checkGreen : notRed} className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos uma letra maiuscula;</p>
                    </div>
                    
                    <div>
                        <img src={validatePasswordRegister.regexPasswordSpecial ? checkGreen : notRed} className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos um caracter especial;</p>
                    </div>
                
                </div>
                

                
            </label>

            
        </div>   
    )
}