
import React from 'react';

export const initialState = {};
const AppContext = React.createContext<any>({state: initialState, dispatch: undefined});

export default AppContext;