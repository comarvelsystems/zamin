import { createContext, useState } from 'react';

import { ChildrenProp, SidebarCollapseContextProps } from '../types';

export const SidebarCollapseContext =
  createContext<SidebarCollapseContextProps>({} as SidebarCollapseContextProps);

const SideBarCollapseProvider = ({ children }: ChildrenProp) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <SidebarCollapseContext.Provider
      value={{
        collapse,
        setCollapse,
      }}
    >
      {children}
    </SidebarCollapseContext.Provider>
  );
};

export default SideBarCollapseProvider;
