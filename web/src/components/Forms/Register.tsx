import { useState } from "react"

import { validatePassword } from '../../utils/regex';

import notRed from "../../assets/not-red.svg";
import checkGreen from "../../assets/check-green.svg";
import { Password } from "phosphor-react";

export function Register() {
    
    

    const [password, setPassword] = useState({
      validatePassword: false
    })

    const secureText = (passwordInput: React.ChangeEvent<HTMLInputElement>) => {
        setPassword({
            validatePassword: validatePassword.test(passwordInput.target.value)
        })
    }


    // const validatePassword = (password: String) => {
    //     const regexUppercase = RegExp(/^(?=.*[A-Z]).+$/)
    //     const regexLowercase = RegExp(/^(?=.*[a-z]).+$/)
    //     const regexNumber = RegExp(/^(?=.*[0-9]).+$/)
    //     const regexSpecial = RegExp(/^(?=.*[$&+,:;=?@#|'<>.-^*()%!]).+$/)
    //     const length = password.length >= 8
    // } 

    return (
        <div className="flex flex-col items-center">


            <label>
                <form className="flex flex-col items-center">
                    <input type="text" placeholder="Your Name Complete" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>

                    <input type="email" placeholder="Confirm your Email ID" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>

                    <input type="password" placeholder="New Password" onChange={(passwordInput) => secureText(passwordInput)} className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>
                    

                    <input type="password" placeholder="Confirm Password" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>

                    <button className="rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 hover:bg-[#2347C5] mb-5">SIGN IN</button>

                    <p className="text-[#5473E3] mb-5">Already have an account ? < a href="#" className="hover:text-[#2347C5] hover">Sign in</a></p>
                
                   
                
                </form>
                
                <div className="text-[#6D7989] w-[25rem]" >
                    
                    <label className="text-[#404B5A]">Senha deve conter:</label>
                    
                    <div className="mt-2 ">
                        <img  src={notRed} className="inline-block mr-2"/>
                        <p className="inline-block">Minímo 8 caracteres;</p>
                    </div>
                    
                    <div>
                            <img src={password.validatePassword ? checkGreen : notRed} className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos um número;</p>
                        
                    </div>
                        
                    <div>
                        <img src={notRed} className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos uma letra maiuscula;</p>
                    </div>
                    
                    <div>
                        <img src={notRed} className="inline-block mr-2"/>
                        <p className="inline-block">Pelo menos um caracter especial;</p>
                    </div>
                
                </div>
                

                
            </label>

            
        </div>   
    )
}