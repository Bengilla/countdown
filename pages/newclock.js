import { useEffect, useState } from 'react'

export default function Newclock(props) {

  // For Other Count Down
  const [remainDay, setRemainDays] = useState(0);
  const [remainHour, setRemainHours] = useState(0);
  const [remainMinute, setRemainMinutes] = useState(0);
  const [remainSecond, setRemainSeconds] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      const now = new Date();
      const target = new Date(props.newDate);
      const diff = target.getTime() - now.getTime()

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
    }, 1000)
    return () => clearInterval(Interval)
  }, [props]);

    return (
        <div className='text-center px-4'>
        {/* List Begin */}
        {remainDay <= 0 && remainHour <= 0 && remainMinute <= 0 && remainSecond <= 0 ? <h4 className='bg-blue-200 py-2 my-3 rounded-xl drop-shadow-md hover:drop-shadow-2xl duration-300'>{props.title}</h4> :
            <div className={remainDay < 1 ? 'bg-red-200 py-2 my-3 rounded-xl drop-shadow-md hover:drop-shadow-2xl duration-300' : 'bg-slate-100 py-2 my-3 rounded-xl drop-shadow-md hover:drop-shadow-2xl duration-300'}>
            <center>
                <h4>{props.title}</h4>
                <span className='text-xs'><span className="text-red-600">Target: </span>{props.newDate}</span><br />
                <span className='text-xs'><span className="text-red-600">Left: </span>{remainDay} {remainDay > 1 ? "days" : "day"} ({remainHour}:{remainMinute}:{remainSecond})</span>
            </center>
            </div>}
        {/* List End */}
        </div>
    )
}