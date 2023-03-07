import { useRouteError } from "react-router-dom";

export default function Registered() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div >
      <p>Successful registration.</p>
      
    </div>
  );
}