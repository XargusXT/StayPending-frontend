import { createContext, useState, useCallback, type ReactNode } from 'react';
import type { AppContextType, User } from './types';



// Crear el contexto (undefined obliga a usar el Provider)
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Props del Provider
interface AppProviderProps {
  children: ReactNode;
}

// Provider Component
export function AppProvider({ children }: AppProviderProps) {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{state,setState}}>
      {children}
    </AppContext.Provider>
  );
}