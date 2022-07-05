import { useState } from "react"

import { regexLength, regexNumber, regexUppercase, regexSpecial } from '../../utils/regex';

import notRed from "../../assets/not-red.svg";
import checkGreen from "../../assets/check-green.svg";
import { Password } from "phosphor-react";

export function Register() {

    const [validatePassword, setValidatePassword] = useState({
        regexLength: false,
        regexNumber: false,
        regexUppercase: false,
        regexSpecial: false,
    })

    const secureText = (passwordInput: React.ChangeEvent<HTMLInputElement>) => {
        
        setValidatePassword({
            regexLength: regexLength.test(passwordInput.target.value),
            regexNumber: regexNumber.test(passwordInput.target.value),
            regexUppercase: regexUppercase.test(passwordInput.target.value),
            regexSpecial: regexSpecial.test(passwordInput.target.value),
        })
    }

    const [matchPassword, setMatchPassword] = useState("")

    const secureMatchPassword = (matchPassword: React.ChangeEvent<HTMLInputElement>) => {
        setMatchPassword({
           matchPassword
        })
    }


    




    return (
        <div className="flex flex-col items-center">


            <label>
                <form className="flex flex-col items-center">
                    <input type="text" placeholder="Your Name Complete" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5 "/>

                    <input type="email" placeholder="Confirm your Email ID" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>

                    <input type="password" placeholder="New Password" onChange={(passwordInput) => secureText(passwordInput)} className="block rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>
                    
                    <input type="password" placeholder="Confirm Password" onChange={(matchPassword) => secureMatchPassword=(matchPassword)} className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>

                    <button className="rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 hover:bg-[#2347C5] mb-5">SIGN UP</button>

                    <p className="text-[#5473E3] mb-5">Already have an account ? < a href="#" className="hover:text-[#2347C5] hover">Sign in</a></p>
                
                
                </form>
                
                <div className="text-[#6D7989] w-[25rem]" >
                    
                    <label className="text-[#404B5A]">Senha deve conter:</label>
                    
                    <div className="mt-2 ">
                        <img  src={validatePassword.regexLength ? checkGreen : notRed} className="inline-block mr-2" />
                        <p className="inline-block">Minímo 8 caracteres;</p>
                    </div>
                    
                    <div>
                        <img src={validatePassword.regexNumber ? checkGreen : notRed } className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos um número;</p>
                        
                    </div>
                        
                    <div>
                        <img src={validatePassword.regexUppercase ? checkGreen : notRed} className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos uma letra maiuscula;</p>
                    </div>
                    
                    <div>
                        <img src={validatePassword.regexSpecial ? checkGreen : notRed} className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos um caracter especial;</p>
                    </div>
                
                </div>
                

                
            </label>

            
        </div>   
    )
}