import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { ITodo } from '../Interfaces/ITodo'
import { IBuyer } from '../Interfaces/IBuyer'

type State = {
  todos: IBuyer[]
  todo: IBuyer
}

type Action1 = {
  type: string
  payload: IBuyer[]
}
type Action2 = {
  type: string
  payload: IBuyer
}
type Action = Action1 | Action2

let initialState: State = {
  todo: {} as IBuyer,
  todos: [] as IBuyer[]
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOAD_DATA': {
      return {
        ...state,
        todos: action.payload as IBuyer[]
      }
    }
    case 'LOAD_SINGLE_DATA': {
      return {
        ...state,
        todo: action.payload as IBuyer
      }
    }
    default: {
      return { ...state }
    }
  }
}

const FetchDataContext = createContext({
  dataState: initialState,
  getData: () => {},
  getSingleData: () => {},
  postData: (todo: IBuyer) => {},
  putData: () => {},
  removeData: (id: number) => {}
})

export const FetchDataProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const getData = async () => {
    try {
      //const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      const res = await axios.get('http://192.173.163.190:9191/api/buyer')
      dispatch({
        type: 'LOAD_DATA',
        payload: res.data
      })
    } catch (e) {
      console.error(e)
    }
  }
  //const getSingleData = async (id: number) => {
  const getSingleData = async () => {
    try {
      var id = 12
      const res = await axios.get(`http://localhost:22066/api/Buyer/${id}`)
      //console.log(res.data)
      dispatch({
        type: 'LOAD_SINGLE_DATA',
        payload: res.data
      })
    } catch (e) {
      console.error(e)
    }
  }
  const postData = async (todo: IBuyer) => {
    try {
      const res = await axios.post<IBuyer>(
        'http://192.173.163.190:9191/api/buyer',
        // {
        //   buyerName: 'Test Buyer 123',
        //   shortCode: 'TT',
        //   contactPerson: 'Akbar vai',
        //   countryID: 12,
        //   address: 'Dhaka',
        //   mobileNo: '012456415',
        //   telephoneNo: '',
        //   email: 'test@g.c'
        // }
        { ...todo }
      )
      const returnData = res.data
      if (returnData != null) {
        getData()
      }
      // dispatch({
      //   type: 'LOAD_DATA',
      //   payload: []
      // })
    } catch (e) {
      console.error(e)
    }
  }
  const putData = async () => {
    try {
      const res = await axios.put<IBuyer>('http://localhost:22066/api/buyer/10', {
        id: 10,
        buyerName: 'Test Buyer',
        shortCode: 'TT',
        contactPerson: 'Akbar vai',
        countryID: 12,
        address: 'Dhaka',
        mobileNo: '012456415',
        telephoneNo: '',
        email: 'test@g.c'
      })
      console.log(res)
      dispatch({
        type: 'LOAD_DATA',
        payload: []
      })
    } catch (e) {
      console.error(e)
    }
  }
  const removeData = async (id: number) => {
    try {
      debugger
      const res = await axios.delete<IBuyer>(`http://localhost:22066/api/buyer/${id}`)
      const returnData = res.data
      if (returnData != null) {
        getData()
      }
      // dispatch({
      //   type: 'LOAD_DATA',
      //   payload: state.todos
      // })
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    //getData()
  }, [])

  return (
    <FetchDataContext.Provider
      value={{
        dataState: state,
        getData,
        getSingleData,
        postData,
        putData,
        removeData
      }}
    >
      {children}
    </FetchDataContext.Provider>
  )
}
export default FetchDataContext
