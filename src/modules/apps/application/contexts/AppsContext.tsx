import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { AppEntity } from "../../domain/app.entity";

type AppState = {
  apps: AppEntity[];
  loading: boolean;
  error: string | null;
};

type AppAction =
  | { type: "FETCH_APPS_START" }
  | { type: "FETCH_APPS_SUCCESS"; payload: AppEntity[] }
  | { type: "FETCH_APPS_ERROR"; payload: string };

const initialState: AppState = {
  apps: [],
  loading: false,
  error: null,
};

const appsReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "FETCH_APPS_START":
      return { ...state, loading: true };
    case "FETCH_APPS_SUCCESS":
      return { ...state, loading: false, apps: action.payload };
    case "FETCH_APPS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const AppsContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appsReducer, initialState);

  useEffect(() => {
    const fetchApps = async () => {
      dispatch({ type: "FETCH_APPS_START" });
      try {
        const response = await axios.get("/api/apps");
        const apps = response.data.data.map(
          (app: any) =>
            new AppEntity(app.id, app.name, app.category, app.platform, app.url)
        );
        dispatch({ type: "FETCH_APPS_SUCCESS", payload: apps });
      } catch (error) {
        dispatch({ type: "FETCH_APPS_ERROR", payload: "Failed to load apps" });
      }
    };

    fetchApps();
  }, []);

  return (
    <AppsContext.Provider value={{ state, dispatch }}>
      {children}
    </AppsContext.Provider>
  );
};

export const useApps = () => useContext(AppsContext);
