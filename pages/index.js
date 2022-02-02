import { useEffect, useState } from 'react'

export default function Home() {
  const monthDict = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var title = "Done Working";

  const [year, setYears] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDays] = useState(0);
  const [hour, setHours] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);

  // For Other Count Down
  const [remainDay, setRemainDays] = useState(0);
  const [remainHour, setRemainHours] = useState(0);
  const [remainMinute, setRemainMinutes] = useState(0);
  const [remainSecond, setRemainSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('2/9/2022 22:08:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime()

      // Main Timer
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();
      const hour = now.getHours();
      const min = now.getMinutes();
      const sec = now.getSeconds();

      setYears(year);
      setMonth(month);
      setDays(day);
      setHours(hour.toLocaleString(hour, { minimumIntegerDigits: 2 }));
      setMinutes(min.toLocaleString(min, { minimumIntegerDigits: 2 }));
      setSeconds(sec.toLocaleString(sec, { minimumIntegerDigits: 2 }));

      // Begin Count Down
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      setRemainDays(d);

      const h = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setRemainHours(h.toLocaleString(h, { minimumIntegerDigits: 2 }));

      const m = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      setRemainMinutes(m.toLocaleString(m, { minimumIntegerDigits: 2 }));

      const s = Math.floor(
        (diff % (1000 * 60)) / 1000
      );
      setRemainSeconds(s.toLocaleString(s, { minimumIntegerDigits: 2 }));

    }, 1000);
    return () => clearInterval(interval)
  })

  return (
    <div className={'container'}>

      <div className='mainTime'>
        <h2>{day}, {monthDict[month]} {year}</h2>
        <h3>{hour} : {minute} : {second}</h3>
      </div>

      {/* List Begin */}
      {remainDay <= 0 && remainHour <= 0 && remainMinute <= 0 && remainSecond <= 0 ? <h4 className='boxComplete'>{title}</h4> :
        <div className={remainDay < 1 ? 'boxDone' : 'box'}>
          <center>
            <h4>{title}</h4>
            <span><span className="red">Target: </span>3, February 2022 (09:00:00)</span><br />
            <span><span className="red">Left: </span>{remainDay} {remainDay > 1 ? "days" : "day"} ({remainHour}:{remainMinute}:{remainSecond})</span>
          </center>
        </div>}
      {/* List End */}
      {/* List Begin */}
      {remainDay <= 0 && remainHour <= 0 && remainMinute <= 0 && remainSecond <= 0 ? <h4 className='boxComplete'>{title}</h4> :
        <div className={remainDay < 1 ? 'boxDone' : 'box'}>
          <center>
            <h4>{title}</h4>
            <span><span className="red">Target: </span>3, February 2022 (09:00:00)</span><br />
            <span><span className="red">Left: </span>{remainDay} {remainDay > 1 ? "days" : "day"} ({remainHour}:{remainMinute}:{remainSecond})</span>
          </center>
        </div>}
      {/* List End */}

    </div>
  )
}
