import React from 'react'
import Card from './components/Card'

const App = () => {
  let imageUrl1 = "https://img.freepik.com/premium-photo/detailed-robot-woman-humanoid-cyber-girl-artificial-intelligence-concept-generative-ai_791958-409.jpg"
  let imageUrl2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Pren-FiedC9bb8MRRvlP3FT_cSVWXSLeEQ&s"
  let imageUrl3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8ZXPTNRnfLt3m8jG1bRnV35e91dOHkOokA&s"
  let heading1 = "AI Robots"
  let heading2 = "Cyber Robots"
  let heading3 = "LLM Robots"
  let para1 = "Lorem ipsum dolor, sit amet consectetur adipisicing. Then this is AI who lives."
  let para2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus aperiam quo cupiditate soluta!"
  let para3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat."
  return (
    <div className='flex justify-center gap-10 my-10'>
      <Card image={imageUrl1} heading={heading1} desc={para1}/>
      <Card image={imageUrl2} heading={heading2} desc={para2}/>
      <Card image={imageUrl3} heading={heading3} desc={para3}/>
    </div>
  )
}

export default App