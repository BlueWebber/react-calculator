import React from "react";

const isMobile = () => {
  return !!/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
    navigator.userAgent
  );
};

const IsMobileContext = React.createContext();
IsMobileContext.displayName = "IsMobileContext";

const IsMobileProvider = ({ children }) => {
  const isMobileDevice = React.useMemo(isMobile, []);

  return (
    <IsMobileContext.Provider value={isMobileDevice}>
      {children}
    </IsMobileContext.Provider>
  );
};

const useIsMobile = () => {
  const context = React.useContext(IsMobileContext);
  if (context === null) {
    throw new Error("IsMobileProvider consumer must be in a IsMobileProvider");
  }
  return context;
};

export { useIsMobile, IsMobileProvider };
