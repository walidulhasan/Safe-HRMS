import React, { useEffect, useState } from 'react'
import useFetchData from 'src/hooks/useFetchData'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import { IBuyer } from 'src/Interfaces/IBuyer'

const CreateForm = () => {
  const [values, setValues] = useState<IBuyer>({} as IBuyer)
  const { dataState, getSingleData, postData } = useFetchData()

  const submitForm = () => {
    console.log(values)
    postData({ ...values, id: 0, countryID: 12, telephoneNo: '', inspectingAgent: '', prefix: '' })
  }
  useEffect(() => {
    // getSingleData()
    // setValues(dataState.todo)
    // console.log(dataState.todo)
  }, [])
  return (
    <Card>
      <CardHeader title='Buyer Info' sx={{ p: 3 }} titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <CardContent sx={{ p: 3 }}>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Name'
                size='small'
                placeholder='Buyer Name'
                onChange={e => (values.buyerName = e.target.value)}
                value={values.buyerName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Code'
                size='small'
                placeholder='Code'
                onChange={e => (values.shortCode = e.target.value)}
                value={values.shortCode}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Contact Person'
                size='small'
                placeholder='Contact Person'
                onChange={e => (values.contactPerson = e.target.value)}
                value={values.contactPerson}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Address'
                size='small'
                placeholder='Address'
                onChange={e => (values.address = e.target.value)}
                value={values.address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Mobile'
                size='small'
                placeholder='Mobile'
                onChange={e => (values.mobileNo = e.target.value)}
                value={values.mobileNo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Email'
                size='small'
                placeholder='Email'
                onChange={e => (values.email = e.target.value)}
                value={values.email}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <Divider sx={{ margin: 0 }} />
      <CardActions sx={{ p: 3 }}>
        <Button size='small' type='submit' sx={{ mr: 2 }} variant='contained' onClick={submitForm}>
          Submit
        </Button>
      </CardActions>
    </Card>
  )
}

export default CreateForm
