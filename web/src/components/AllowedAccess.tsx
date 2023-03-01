import { useRouteError } from "react-router-dom";

export default function AllowedAccess() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div >
      <p>Welcome! Allowed Access</p>
      
    </div>
  );
}