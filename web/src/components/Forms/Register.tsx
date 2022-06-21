import { useState } from "react"

import notRed from "../../assets/not-red.svg";
// import checkGreen from "../../assets/check-green";

export function Register() {
    const [password, setPassword] = useState()

    return (
        <div className="flex flex-col items-center">
            <label className="">
                <form className="flex flex-col items-center">
                    <input type="text" placeholder="Your Name Complete" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>

                    <input type="email" placeholder="Confirm your Email ID" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>

                    <input type="password" placeholder="New Password" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>

                    <input type="password" placeholder="Confirm Password" className="block peer rounded-[5px] border-[#AEBBCD] outline-none w-[25rem] mb-5"/>

                    <button className="rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 hover:bg-[#2347C5] mb-5">SIGN IN</button>

                    <p className="text-[#5473E3] mb-5">Already have an account ? < a href="#" className="hover:text-[#2347C5] hover">Sign in</a></p>
                </form>
                
                <div className="grid grid-cols-2 justify-items-stretch">
                    <img src={notRed} className="justify-self-end"/>
                    <p>Minímo 8 caracteres;</p>

                    <img src={notRed} className="justify-self-end"/>
                    <p>Pelo menos um número;</p>

                    <img src={notRed} className="justify-self-end"/>
                    <p>Pelo menos uma letra maiuscula;</p>
                    
                    <img src={notRed} className="justify-self-end"/>
                    <p>Pelo menos um caracter especial;</p>
                </div>
                

                
            </label>

            
        </div>   
    )
}