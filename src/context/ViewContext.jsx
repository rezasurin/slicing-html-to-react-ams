import { createContext, useContext, useReducer } from "react";
import * as actionType from "../store/actions"

const initialState = {
  openSideNav: false,
  openSideNotifNav: false
}

const ViewContext = createContext({
  state: initialState,
  dispatch: () => {}
})

const { Provider } = ViewContext

const ViewProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actionType.OPEN_SIDE_NAV:
        return {
          ...state,
          openSideNav: !state.openSideNav
        }
      case actionType.OPEN_SIDE_NOTIF:
        return {
          ...state,
          openSideNotifNav: !state.openSideNotifNav
        }
      default:
        throw new Error()
    }
  }, initialState)

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
}

export {
  ViewContext, ViewProvider
}