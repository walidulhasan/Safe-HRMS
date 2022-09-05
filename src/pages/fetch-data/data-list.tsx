import React, { useEffect } from 'react'
import useFetchData from 'src/hooks/useFetchData'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import { IBuyer } from '../../Interfaces/IBuyer'
const Datalist = () => {
  const { dataState, getData, removeData, postData, getSingleData } = useFetchData()

  const obj: IBuyer = {
    id: 0,
    buyerName: 'Test Buyer 1232548',
    shortCode: 'TT',
    contactPerson: 'Akbar vai',
    countryID: 12,
    address: 'Dhaka',
    mobileNo: '012456415',
    telephoneNo: '',
    email: 'test@g.c',
    inspectingAgent: '',
    prefix: ''
  }
  useEffect(() => {
    getData()
    //getSingleData()
  }, [])
  return (
    <div>
      <Button
        variant='outlined'
        size='small'
        onClick={() => {
          postData(obj)
          //getSingleData()
        }}
      >
        Post
      </Button>
      <ul>
        <table aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell>SL#</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataState.todos.map((todo, index) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={todo.id}>
                  <TableCell>{++index}</TableCell>
                  <TableCell>{todo.shortCode}</TableCell>
                  <TableCell>{todo.buyerName}</TableCell>
                  <TableCell>{todo.address}</TableCell>
                  <TableCell>
                    <Button
                      variant='outlined'
                      size='small'
                      onClick={() => {
                        removeData(todo.id)
                      }}
                    >
                      Del
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </table>
      </ul>
    </div>
  )
}

export default Datalist
