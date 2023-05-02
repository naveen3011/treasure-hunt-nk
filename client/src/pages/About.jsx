import React from 'react'
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <div>
    <Card className="text-center fs-3 bg-white">
      <Card.Header >About</Card.Header>
      <Card.Body>
        <Card.Title >Treasure-Hunt</Card.Title>
        <Card.Text style={{ fontFamily: "Lucida Console Courier New monospace"}} className='container '>
          <p> Treasure Hunt is a game that involves finding hidden clues and treasures, and each clue is designed to test specific soft skills such as problem-solving, critical thinking, and communication. The game is user-friendly and can be played online or offline, individually or in teams, making it suitable for all ages and backgrounds. The game can also be customized to suit different themes and settings.</p>
          Our website is easy to navigate and user-friendly, with clear instructions on how to play the game and how to progress through the clues. We offer different versions of the game, including online and offline versions, to suit different preferences and situations. The game can be played individually or in teams, making it an excellent activity for team building, family bonding, or a fun challenge with friends.
          <br></br>
          <p>Treasure Hunt is suitable for players of all ages and backgrounds, and it can be customized to suit different themes and settings. We offer a range of packages to suit different needs and budgets, including personalized clues and challenges that can be tailored to your specific requirements.</p>
          <p>We hope that you enjoy playing our interactive puzzle and that it helps you develop and showcase your soft skills.</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"> Best wishes on your Treasure hunt</Card.Footer>
      <br></br>
    </Card>
    </div>
  )
}

export default About