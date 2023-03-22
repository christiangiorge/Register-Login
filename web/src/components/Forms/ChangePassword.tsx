import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import regex from '../../utils/regex';
import notRed from "../../assets/not-red.svg";
import checkGreen from "../../assets/check-green.svg";

type ICreateUserData = {
    password: string;
    confirmPassword: string;
}

const schema = yup.object({
    password: yup.string()
        .required("O campo senha é obrigatório.")
        .min(8, "Insira uma senha de pelo menos 8 caracteres.")
        .matches(regex.number, "Insira pelo menos 1 número")
        .matches(regex.lowerCase, "Insira pelo menos 1 caracter minúsculo")
        .matches(regex.upperCase, "Insira pelo menos 1 caracter maiúsculo")
        .matches(regex.specialCharacter, "Insira pelo menos 1 caracter especial."),
    confirmPassword: yup.string()
        .required("O campo confirmar senha é obrigatório.")
        .oneOf([yup.ref("password")], "As senhas não são iguais.")
    
})

export default function ChangePassword() {
    const navigate = useNavigate()

    const { register, 
            handleSubmit : onSubmit,
            setError,
            watch,
            formState: { errors }
        } = useForm<ICreateUserData>({resolver: yupResolver(schema)});

    const handleSubmit = (data: any) => {
        navigate("/changepasswordready")
        console.log(data);
    }
    const onHandleSubmit = () => {
        
        console.log("Click")
    }
    
    return (
        <div className="flex flex-col items-center">

            <form onSubmit={onSubmit(handleSubmit)} className="flex flex-col items-center outline-none">
                <p className="place-self-start font-semibold text-base text-[#5473E3]">Change your password</p>
                
                <input 
                    {...register("password")}
                    type="password"
                    placeholder="Senha"
                    className={ errors.password ? "block peer rounded-[5px] w-[25rem] mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]" : "block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1"}
                    />
                <span className="place-self-start text-[14px] text-[#C93B32]">
                    {errors.password?.message}
                </span>

                <input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="Confirme sua senha"
                    className={ errors.confirmPassword ? "block peer rounded-[5px] w-[25rem] mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]" : "block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1"}
                    />
                <span className="place-self-start text-[14px] text-[#C93B32]">
                    {errors.confirmPassword?.message}
                </span>
                    
                <button
                    type="submit"
                    className={`rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 mt-5 hover:bg-[#2347C5] mb-5`}
                    onClick={onHandleSubmit}
                    >
                    CHANGE 
                </button>
            
                
            </form>

        <div className="text-[#6D7989] w-[25rem]" >
                    
            <label className="text-[#404B5A]">Senha deve conter:</label>
                    
            <div className="mt-2 ">
                <img  src={errors.password?.message ? notRed : checkGreen} className="inline-block mr-2" />
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