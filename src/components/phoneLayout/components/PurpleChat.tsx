
type PurpleChatType = {IsMinute: boolean}

const PurpleChat = ({IsMinute}:PurpleChatType) => {

    const minute = '30 minute'
    const hour = '1 hour'

    const priceMinute = '$29'
    const priceHour = '$49'

  return (
    <div className='text-[.5em] flex flex-row items-center justify-between p-2 mt-1.5 h-auto  w-[50%] bg-linear-to-b from-[#C84DFF] to-[#8E39FF] shadow-xs  rounded-bl-xs rounded-t-xl rounded-br-xl text-white'>
                <div className='flex flex-row items-center justify-center'>  <p className='text-[1.4em]'>〇</p> <p className='text-[.3em] ml-1'> {IsMinute ? minute : hour} wolk</p></div>
               <p className='text-[1.25em] font-bold '>{IsMinute ? priceMinute : priceHour}</p>
      </div>
  )
}

export default PurpleChat