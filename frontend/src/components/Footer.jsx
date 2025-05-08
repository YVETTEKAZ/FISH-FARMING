import React from "react"
import { CiSearch } from "react-icons/ci";

 
function Footer(){
    return(
        <>
        <div className=" bottom-0 w-full bg-black shadow-md text-white  grid grid-cols-5 gap-1  py-3 mt-auto">
          <div> <h1>Privacy Policy</h1>
           <p></p>
           <p></p></div>
           <div  className="mt-2 w-1   h-20 bg-white    "></div>
           <div> <h1>FISH SPECIES</h1>
           <p>Catfish</p>
           <p>Tilapia</p>
           <p>Nile perch</p>
           <p>Tanganyika sardine</p>
           <p>haplochromis</p>
           <p>Cichlids</p>
           </div>
           <div  className=" mt-2 w-1  h-20 bg-white    "></div>

           <div> <h1>CONTACT US</h1>
           <p>+0785933044</p>
           <p> info@fishfarming.rw</p></div>
           

        </div></>
    )
}
export default Footer;