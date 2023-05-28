import Resume from "./Resume";
import Data from "./Data";
function Dex() {
  return (
    <>
      <h1>Resume</h1>
      <h2>Emily</h2>
      <hr />
      {
        Data.map(data=>
        <Resume 
        interest = {data.interest}
        skills={data.skills}
        education= {data.education}
        experience= {data.experience}
        ></Resume>
        )}
    </>
  )
}

export default Dex;