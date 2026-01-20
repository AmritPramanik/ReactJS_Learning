
import Card from './components/Card'
import jobOpenings from './assets/data.js'

const App = () => {
  return (
    <div className='parent'>
      {
        jobOpenings.map(data =>(
          <Card 
            logo={data.brandLogo}
            companyName = {data.companyName}
            datePosted = {data.datePosted}
            post = {data.post}
            pay = {data.pay}
            tag1 = {data.tag1}
            tag2 = {data.tag2}
            location = {data.location}
          />
        ))
      }
    </div>
  )
}

export default App
