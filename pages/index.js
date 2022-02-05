import { useEffect, useState } from 'react'
import NewClock from './newclock'
import clientPromise from '../lib/mongodb';


export default function Home({ countdowns }) {

  // Main Clock
  const monthDict = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [currentYear, setCurrentYears] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentDay, setCurrentDays] = useState(0);
  
  // Interval 
  useEffect(() => {
      const now = new Date();
      const date = {
      'year': now.getFullYear(),
      'month': now.getMonth(),
      'day': now.getDate(),
      }
      setCurrentYears(date.year);
      setCurrentMonth(date.month);
      setCurrentDays(date.day);
  });

  return (
    <div className={'container'}>

      <div className='drop'>hello</div>

      <div className='mainTime'>
        <h2>{currentDay}, {monthDict[currentMonth]} {currentYear}</h2>
      </div>
      {countdowns.map(count => (
        <NewClock title={count.title} newDate={count.month + ', ' + count.day + ' ' + count.year + ' ' + count.time} />
      ))}

    </div>
  )
}

export async function getStaticProps(context) {
    const client = await clientPromise
    const db = client.db('countdownDB');

    const data = await db.collection('countdowns').find({}).toArray() // .find({具体需要的数据比如，年份})
    const countdowns = JSON.parse(JSON.stringify(data))

    return {
      props: { countdowns },
    }
  }

