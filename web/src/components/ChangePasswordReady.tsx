import { useRouteError, useNavigate } from "react-router-dom";

export default function Registered() {
  const error: any = useRouteError();
  console.error(error);

  const navigate = useNavigate()
  const onHandleSubmit = () => {
    navigate("/")
  }
  return (

    <div className="flex flex-col items-center py-[30vh]">
      <p className="text-base text-[#5473E3]">Your password has been updated!</p>
      <button 
        type="submit"
        className={`rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 mt-5 hover:bg-[#2347C5] mb-5`}
        onClick={onHandleSubmit}
        >
        CONFIRM
      </button>
    </div>
  );
}