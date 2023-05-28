function Resume({ interest, skills, education, experience }) {

  return (
    <>
      <h4>Interests</h4>
      <ul>
        {interest.map(interest =>
          <li>{interest}</li>
        )}
      </ul>
      <h4>Skills</h4>
      <ul>
        <li>{skills}</li>
      </ul>
      <h4>Education</h4>
      <ul>
        {education.map(education=>
          <li>{education}</li>
        )}
      </ul>
      <h4>Experience</h4>
      <ul>
      {experience.map(experience=>
          <li>{experience}</li>
        )}
      </ul>
    </>
  )
}
export default Resume;