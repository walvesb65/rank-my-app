import { createContext, useReducer } from "react";
import { AppEntity } from "../../domain/app.entity";

type AppsState = {
  apps: AppEntity[];
  isLoading: boolean;
  error: string | null;
};

const initialState: AppsState = {
  apps: [],
  isLoading: false,
  error: null,
};

export const AppsContext = createContext<{
  state: AppsState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

function appsReducer(state: AppsState, action: any): AppsState {
  switch (action.type) {
    case "FETCH_APPS_START":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export const AppsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appsReducer, initialState);

  return (
    <AppsContext.Provider value={{ state, dispatch }}>
      {children}
    </AppsContext.Provider>
  );
};
