import { useEffect, useState } from 'react'

export default function MainClock() {

    const monthDict = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [currentYear, setCurrentYears] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentDay, setCurrentDays] = useState(0);
    const [currentHour, setCurrentHours] = useState(0);
    const [currentMinute, setCurrentMinutes] = useState(0);
    const [currentSecond, setCurrentSeconds] = useState(0);

    useEffect(() => {

      const mainInterval = setInterval(() => {
        const now = new Date();
        const date = {
        'year': now.getFullYear(),
        'month': now.getMonth(),
        'day': now.getDate(),
        'hour': now.getHours(),
        'min': now.getMinutes(),
        'sec': now.getSeconds()
        }

        setCurrentYears(date.year);
        setCurrentMonth(date.month);
        setCurrentDays(date.day);
        setCurrentHours(date.hour.toLocaleString(date.hour, { minimumIntegerDigits: 2 }));
        setCurrentMinutes(date.min.toLocaleString(date.min, { minimumIntegerDigits: 2 }));
        setCurrentSeconds(date.sec.toLocaleString(date.sec, { minimumIntegerDigits: 2 }));

      }, 1000)
      return () => clearInterval(mainInterval)

    }, [])

    
    return (
      <div className='mainTime'>
        <h2>{currentDay}, {monthDict[currentMonth]} {currentYear}</h2>
        <h3>{currentHour} : {currentMinute} : {currentSecond}</h3>
      </div>
    ) 
}