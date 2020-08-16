import React, { useReducer } from 'react';
import queryString from 'query-string';
import { createBrowserHistory } from 'history';
 
const history = createBrowserHistory();
type Action = { type: 'update', payload?: string }
type State = { title?: string; }
const TitleStateContext = React.createContext<State | undefined>(undefined);
const TitleDispatchContext = React.createContext<React.Dispatch<Action>| undefined>(undefined);

function titleReducer(state: State, action: Action) {
  switch (action.type) {
    case 'update':
      const titleQuery = queryString.stringify({title:action.payload});
      history.replace({pathname: "?", search:titleQuery});
      return { title: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

interface ProviderProps {
  children: React.ReactNode;
}

function TitleProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(titleReducer, { title: undefined });
  return (
    <TitleStateContext.Provider value={state}>
      <TitleDispatchContext.Provider value={dispatch}>
        {children}
      </TitleDispatchContext.Provider>
    </TitleStateContext.Provider>
  )
}

function useTitle() {
  const context = React.useContext(TitleStateContext);
  if (context === undefined) {
    throw new Error('useTitle must be used within a TitleProvider')
  }
  return context;
}

function useUpdateTitle() {
  const context = React.useContext(TitleDispatchContext);
  if (context === undefined) {
    throw new Error('useTitleUpdater must be used within a TitleProvider')
  }
  return (title:string) => context({type: 'update', payload:title});
}

export { TitleProvider, useTitle, useUpdateTitle };