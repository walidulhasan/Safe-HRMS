import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { useState, ChangeEvent, useEffect } from 'react'

import FileEdit from 'mdi-material-ui/FileEditOutline'
import TrashCanOutline from 'mdi-material-ui/TrashCanOutline'

import IconButton from '@mui/material/IconButton'
import useCountry from 'src/hooks/useCountry'
import { TableHeader } from 'src/Interfaces/TableHeader'
import Swal from 'sweetalert2'

const columns: readonly TableHeader[] = [
  { id: 'sl', label: 'SL#', headerAlign: 'center', dataAlign: 'center' },
  { id: 'countryName', label: 'Name', headerAlign: 'center', dataAlign: 'center' },
  { id: 'countryNameUC', label: 'Code', headerAlign: 'center', dataAlign: 'center' },
  { id: 'countryShortCode', label: 'Short Code', headerAlign: 'center', dataAlign: 'center' },
  { id: 'action', label: 'Action', headerAlign: 'center', dataAlign: 'center' }
]

const DivisionsList = () => {

  return (
    <div>
      Dashboard List
    </div>
  )
}

export default DivisionsList
