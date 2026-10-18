import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  return (
    <div className="overflow-x-clip">
      <div key={location.pathname} className="animate-slide-in-right">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
