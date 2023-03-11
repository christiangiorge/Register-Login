// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// const schema = yup.object({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// }).required();
// type FormData = yup.InferType<typeof schema>;

// export default function SignUp() {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
//     resolver: yupResolver(schema)
//   });
//   const onSubmit = (data: FormData) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <p>{errors.firstName?.message}</p>
        
//       <input {...register("age")} />
//       <p>{errors.age?.message}</p>
      
//       <input type="submit" />
//     </form>
//   );
// }

import React, { useState, useRef, useEffect, HTMLInputTypeAttribute } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import regex from '../../utils/regex';

import notRed from "../../assets/not-red.svg";
import checkGreen from "../../assets/check-green.svg";
import { Password } from "phosphor-react";


const schema = yup.object({
    name: yup.string()
        .required("O campo nome é obrigatório.")
        .min(3, "O campo nome precisa conter pelo menos 3 caracteres."),
    email: yup.string()
        .required("O campo email é obrigatório.")
        .email("Insira um e-mail válido"),
    password: yup.string()
        .required("O campo senha é obrigatório.")
        .min(8, "Insira uma senha de pelo menos 8 caracteres.")
        .matches(regex.number, "Insira pelo menos 1 número")
        .matches(regex.lowerCase, "Insira pelo menos 1 caracter minúsculo")
        .matches(regex.upperCase, "Insira pelo menos 1 caracter maiúsculo")
        .matches(regex.specialCharacter, "Insira pelo menos 1 caracter especial.")
})
type FormData = yup.InferType<typeof schema>;


export default function SignUp() {
    const { register, 
            handleSubmit : onSubmit,
            watch,
            formState: { errors }
        } = useForm<FormData>({resolver: yupResolver(schema)});

    const handleSubmit = (data: any) => console.log(data);

    const onHandleSubmit = () => {
        console.log("Click")
    }
   

    return (
        <div className="flex flex-col items-center">

            <form onSubmit={onSubmit(handleSubmit)} className="flex flex-col items-center outline-none">
                <input 
                    {...register("name")} aria-invalid={errors.name ? "true" : "false"}
                    type="text"
                    placeholder="Your Name Complete"
                    className={`block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mb-5 focus:outline-none focus:ring-1`}
                   />
                    <p>{errors.name?.message}</p>

                <input
                    {...register("email")}
                    type="email"
                    placeholder="Confirm your Email ID"
                    className={`block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5`}
                    />
                    <span>{errors.email?.message}</span>

                <input 
                    {...register("password")}
                    type="password"
                    placeholder="New Password"
                    className={`block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5`}
                    />
                    <span>{errors.password?.message}</span>
                    
                {/* <input
                    type="password"
                    placeholder="Confirm Password"
                    className={`block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5`}
                    /> */}

                <button 
                    type="submit"
                    className={`rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 hover:bg-[#2347C5] mb-5`}
                    onClick={onHandleSubmit}
                    >
                    SIGN UP      
                </button>
                    
                <Link to="/" className="hover:text-[#2347C5] hover:underline">
                    <p className="text-[#5473E3] mb-5">Already have an account ? Sign in</p>
                </Link>
            
                
            </form>

        <div className="text-[#6D7989] w-[25rem]" >
                    
            <label className="text-[#404B5A]">Senha deve conter:</label>
                    
            <div className="mt-2 ">
                <img  src={errors.password?.message || "" ? notRed : checkGreen} className="inline-block mr-2" />
                <p className="inline-block">Minímo 8 caracteres;</p>
            </div>
                
            <div>
                <img src={ errors.password?.message ? notRed : checkGreen } className="inline-block mr-2"/>
                <p className="inline-block">Pelo menos um número;</p>
            </div>
                    
           <div>
                <img src={ errors.password?.message ? notRed : checkGreen } className="inline-block mr-2"/>
                <p className="inline-block">Pelo menos uma letra maiuscula;</p>
            </div>
                    
            <div>
                <img src={ errors.password?.message ? notRed : checkGreen } className="inline-block mr-2"/>
                <p className="inline-block">Pelo menos um caracter especial;</p>
            </div>
        </div>
            
        </div>

    )
}