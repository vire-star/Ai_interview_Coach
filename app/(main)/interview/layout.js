import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
// import { BarLoader } from "react-spinners";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <Suspense
        fallback={<Spinner/>}
      >
        {children}
      </Suspense>
    </div>
  );
}