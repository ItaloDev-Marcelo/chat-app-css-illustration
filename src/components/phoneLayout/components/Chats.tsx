type chatsType = {direction: string, text: string}

const Chats = ({direction, text}:chatsType) => {
    const commun = 'text-[.5em]   p-2 mt-1.5 h-auto'
    const left = `${commun} w-[48%] bg-purple-200 shadow-xs  rounded-bl-xs rounded-t-xl rounded-br-xl`
    const leftTextSt = 'text-purple-600 text-[.4em]'
    const right = `${commun} w-[50%]  relative top-0 left-25 bg-white shadow-md  rounded-bl-xl rounded-t-xl rounded-br-xs`
    const rightTextSt = 'text-gray-500 text-[.4em]'
  return (
      <div className={direction == 'left' ? left : right}>
               <p className={direction == 'left' ? leftTextSt : rightTextSt}>{text}</p>
      </div>
  )
}


export default Chats