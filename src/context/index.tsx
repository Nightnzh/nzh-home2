import { createContext } from "react"
import { ourBrandData } from "../store"


const MyContext = createContext({
  brandData : ourBrandData
})

export default MyContext