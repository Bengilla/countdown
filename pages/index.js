import Mainclock from './mainclock'
import NewClock from './newclock'

export default function Home() {
  const monthDict = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const title = 'Bengilla Birthday'
  const day = '15'
  const month = '8'
  const year = '2022'
  const time = '09:00'

  const date = monthDict[month - 1] + ' ' + day + ', ' + year + ' ' + time 

  return (
    <div className={'container'}>

      <Mainclock />
      <NewClock title={title} newDate={date} />
      <NewClock title='2023 Chinese New Year' newDate='January, 22 2023 09:00' />

    </div>
  )
}
