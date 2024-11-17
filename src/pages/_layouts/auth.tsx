import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-t from-emerald-200 to-green-50">
      <div className=" h-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
