import React, { Fragment } from 'react'
import { CountryProvider } from 'src/contexts/CountryContext'
import CountryDDL from 'src/views/countries/CountryDDL'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import DivisionsList from 'src/views/divisions/DivisionsList'

const index = () => {
  function handleSelectionUpdate(data: number) {
    console.log(data)
  }

return (
    <Fragment>
      <CountryProvider>
        <CountryDDL onSelectionUpdate={handleSelectionUpdate} />
        <Grid item xs={12}>
          <Card>
            <DivisionsList />
          </Card>
        </Grid>
      </CountryProvider>
    </Fragment>
  )
}

export default index
