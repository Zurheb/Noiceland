import { End } from "./End/end"
import { Medium } from "./meduim/Medium"
import { Start } from "./start/Start"

export const Footer = () => {
  return (
   <footer id="Fotter" className="  bg-black h-auto">
    <Start/>
    <Medium/>
    <End/>

   </footer>
  )
}
