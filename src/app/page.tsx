import Image from "next/image";
import picture from "@/public/Hiba.jpg"

export default function Home() {
  return (
    <div className="parentContainer">
      <div className="childContainer"><h1 className="heading">Introduction</h1><br /> Hey! <br />My name is <span className="colour">Hiba</span> <br />I am a Web-Developer</div>
      <div className="childContainer"><Image alt="My Photo" src={picture}/></div>
    </div>
  )
}
