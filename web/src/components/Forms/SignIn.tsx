import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


    type ICreateUserData = {
        email: string;
        password: string;
    }
    
    const schema = yup.object({
        email: yup.string().required("Email field is required.").email("Please enter a valid e-mail."),
        password: yup.string().required("Password field is required.")
    })
    
export default function SignIn() {

    const navigate = useNavigate()
    
    const { register, 
        handleSubmit : onSubmit,
        setError,
        watch,
        formState: { errors }
        } = useForm<ICreateUserData>({resolver: yupResolver(schema)});
    
    const handleSubmit = (data: any) => {
        console.log(data);
        navigate("/u")
    }
    const onHandleSubmit = () => {
       console.log("Click")
    }
        
    return (
        <div className="flex flex-col items-center">


    
        <form onSubmit={onSubmit(handleSubmit)} className="flex h-[calc(100vh-95px)] flex-col justify-center items-center outline-none">
        
        <p className="place-self-start font-semibold text-base text-[#5473E3]">Login to the system</p>
        
        <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className={ errors.email ? "block peer rounded-[5px] w-[25rem]  mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]" : "block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1"}
            />
        <span className="place-self-start text-[14px] text-[#C93B32]">
            {errors.email?.message}
        </span>
        
        <input 
            {...register("password")}
            type="password"
            placeholder="Senha"
            className={ errors.password ? "block peer rounded-[5px] w-[25rem] mt-5 border-[#C93B32] focus:outline-none focus:border-[#C93B32]  focus:ring-1 focus:ring-[#C93B32]" : "block peer rounded-[5px] border-[#AEBBCD] w-[25rem] mt-5 focus:outline-none focus:ring-1"}
            />
        <span className="place-self-start text-[14px] text-[#C93B32]">
            {errors.password?.message}
        </span>
        <Link to="/forgotpassword" className="place-self-end hover:text-[#2347C5] hover:underline">
        <p className="text-[#5473E3]">Forgot Password?</p>
        </Link>

        <button
            type="submit"
            className={`rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 mt-5 hover:bg-[#2347C5] mb-5`}
            onClick={onHandleSubmit}
            >
            SIGN IN
            </button>

            <Link to="/signup" className="hover:text-[#2347C5] hover:underline">
                <p className="text-[#5473E3] mb-5">Don't have an account? Sign up</p>
            </Link>
        </form>
        </div>
          
    )
}
