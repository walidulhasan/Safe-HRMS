import React, { Fragment } from 'react'
import { FetchDataProvider } from 'src/contexts/FetchDataContext'
import CreateForm from './create-form'
const Create = () => {
  return (
    <Fragment>
      <FetchDataProvider>
        <CreateForm></CreateForm>
      </FetchDataProvider>
    </Fragment>
  )
}

export default Create
