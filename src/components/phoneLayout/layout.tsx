import FormatedImages from './components/FormatedImages'
import dogImage1 from '../../assets/images/dog-image-1.jpg';
import dogImage2 from '../../assets/images/dog-image-2.jpg';
import dogImage3 from '../../assets/images/dog-image-3.jpg';
import Avatar from '../../assets/images/avatar.jpg'
import Chats from './components/Chats'
import PurpleChat from './components/PurpleChat';

const Layout = () => {
   return (
      <div className='shadow relative z-1000 left-2  shadow-gray-500 p-4 rounded-3xl w-63.75 h-121.25 bg-white'>
         <div className='bg-gray-100 w-55 h-111.25 rounded-3xl shadow shadow-gray-300'>
            <div className='w-full h-14.25 relative rounded-t-2xl rounded-b-md bg-linear-to-b from-[#C84DFF] to-[#8E39FF]'>
               <div className='bg-white w-34 h-7 rounded-full absolute -top-3 z-100 left-10'></div>
               <div className='flex flex-row justify-between px-3 pt-6'>
                  <div className='flex flex-row gap-2 justify-center items-center'>
                     <p className='text-white font-light'><strong>ᚲ</strong></p>
                     <FormatedImages img={Avatar} IsRouded={false} alt='profile-image samuel Green' />
                     <div className='h-5 leading-2.5 text-white'>
                        <h2 className='text-[.7em] font-semibold'>Samuel Green</h2>
                        <p className='text-[.5em] opacity-65'>Available to Walk </p>
                     </div>
                  </div>
                  <div className='text-white'>⋮</div>
               </div>
            </div>
            <div className='pt-2 px-2 flex flex-col'>
               <Chats text='That sounds great. I’d be happy with that.' direction='left' />
               <Chats text='Could you send over some pictures of your dog, please?' direction='left' />
               <div className='relative top-0 left-22 p-2 flex flex-row gap-x-1 -mt-.5'>
                  <FormatedImages img={dogImage1} IsRouded={true} alt='dog-image' />
                  <FormatedImages img={dogImage2} IsRouded={true} alt='dog-image' />
                  <FormatedImages img={dogImage3} IsRouded={true} alt='dog-image' />
               </div>
               <div className='-mt-2'>
                  <Chats text='Here are a few pictures. She’s a happy girl!' direction='right' />
                  <Chats text='Can you make it?' direction='right' />
               </div>
               <Chats text='She looks so happy! The time we discussed works. How long shall I take her out for?
' direction='left' />
               <PurpleChat IsMinute={true} />
               <PurpleChat IsMinute={false} />
            </div>
            <div className='bg-white w-[95%] rounded-full relative top-3 left-1  h-8.75 flex flex-row items-center justify-between px-2.5'>
               <p className='text-[.4em] text-gray-400'>Type a message…</p>
               <div className='h-[18px] w-[18px] rounded-full text-white text-center bg-purple-950'>
                  <p className='w-6 relative -top-[3px] -left-[2px]  text-center'>›</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Layout