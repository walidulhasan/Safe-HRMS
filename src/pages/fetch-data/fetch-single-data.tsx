import React, { Fragment, useEffect, useState } from 'react'
import useFetchData from 'src/hooks/useFetchData'
import { ITodo } from 'src/Interfaces/ITodo'
const FetchSingleData = () => {
  const { dataState, getData, getSingleData, postData, putData } = useFetchData()
  useEffect(() => {
    //getData()
    getSingleData()
    //postData()
    //putData()
    console.log(dataState.todo)
  }, [])

  return (
    <div>
      <ul>
        <li key={dataState.todo.id}>
          {dataState.todo.id}---{dataState.todo.buyerName}
        </li>
      </ul>
    </div>
  )
}

export default FetchSingleData
