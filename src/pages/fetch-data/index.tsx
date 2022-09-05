import React, { Fragment, useContext } from 'react'
import DataList from './data-list'
import { FetchDataProvider } from 'src/contexts/FetchDataContext'
import FetchSingleData from './fetch-single-data'

const index = () => {
  return (
    <Fragment>
      <FetchDataProvider>
        <DataList></DataList>
        {/* <FetchSingleData></FetchSingleData> */}
      </FetchDataProvider>
    </Fragment>
  )
}

export default index
