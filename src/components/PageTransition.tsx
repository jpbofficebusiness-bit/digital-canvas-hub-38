import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-slide-in-right">
      {children}
    </div>
  );
};

export default PageTransition;
