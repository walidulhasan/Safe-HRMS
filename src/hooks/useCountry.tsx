import { useContext } from 'react'
import CountryContext from 'src/contexts/CountryContext'

const useCountry = () => useContext(CountryContext)

export default useCountry
