import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


    type ICreateUserData = {
        email: string;
    }
    
    const schema = yup.object({
        email: yup.string().required("O campo email é obrigatório.").email("Insira um e-mail válido"),
    })
    
export default function ForgotPassword() {

    const navigate = useNavigate()
    
    const { register, 
        handleSubmit : onSubmit,
        setError,
        watch,
        formState: { errors }
        } = useForm<ICreateUserData>({resolver: yupResolver(schema)});
    
    const handleSubmit = (data: any) => {
        console.log(data);
        navigate("/changepassword")
    }
    const onHandleSubmit = () => {
       console.log("Click")
    }
        
    return (
        <div className="flex flex-col items-center">
    
        <form onSubmit={onSubmit(handleSubmit)} className="flex h-[calc(100vh-95px)] flex-col justify-center items-center outline-none">
    
        <p className="place-self-start font-semibold text-base text-[#5473E3]">Reset your password</p>
        
        <input
            {...register("email")}
            type="email"
            placeholder="Confirm your Email ID"
            className={ errors.email ? "block peer rounded-[5px] w-[25rem]  mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]" : "block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1"}
            />
        <span className="place-self-start text-[14px] text-[#C93B32]">
            {errors.email?.message}
        </span>
        
        <button
            type="submit"
            className={`rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 mt-5 hover:bg-[#2347C5] mb-5`}
            onClick={onHandleSubmit}
            >
            CONFIRM
            </button>
        </form>
        </div>
          
    )
}