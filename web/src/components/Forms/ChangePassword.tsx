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
        .required("Password field is required.")
        .min(8, "Enter a password of at least 8 characters.")
        .matches(regex.number, "Enter at least 1 number.")
        .matches(regex.lowerCase, "Enter at least 1 lowercase character.")
        .matches(regex.upperCase, "Enter at least 1 uppercase character.")
        .matches(regex.specialCharacter, "Enter at least 1 special character."),
    confirmPassword: yup.string()
        .required("The confirm password field is required.")
        .oneOf([yup.ref("password")], "Passwords are not the same.")
        
})

export default function ChangePassword() {
    const navigate = useNavigate()

    const { register, 
            handleSubmit : onSubmit,
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
        <div className="flex h-[calc(100vh-95px)] flex-col py-[20vh] items-center">

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
                <p className="inline-block">Enter a password of at least 8 characters;</p>
            </div>
                
            <div>
                <img src={ errors.password?.message ? notRed : checkGreen } className="inline-block mr-2"/>
                <p className="inline-block">Enter at least 1 number;</p>
            </div>
                    
            <div>
                <img src={ errors.password?.message ? notRed : checkGreen } className="inline-block mr-2"/>
                <p className="inline-block">Enter at least 1 lowercase character;</p>
            </div>

            <div>
                <img src={ errors.password?.message ? notRed : checkGreen } className="inline-block mr-2"/>
                <p className="inline-block">Enter at least 1 uppercase character;</p>
            </div>
                    
            <div>
                <img src={ errors.password?.message ? notRed : checkGreen } className="inline-block mr-2"/>
                <p className="inline-block">Enter at least 1 special character;</p>
            </div>
        </div>
            
        </div>

    )
}