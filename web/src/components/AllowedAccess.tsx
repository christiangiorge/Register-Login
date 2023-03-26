import { useRouteError } from "react-router-dom";

export default function AllowedAccess() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center py-[30vh]">
      <p className="text-base text-[#5473E3]">Welcome! Allowed Access</p>
    </div>
  );
}