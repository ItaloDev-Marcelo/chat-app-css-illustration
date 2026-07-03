import type { ReactNode } from "react"

type mainLayoutType = { children: ReactNode}

const MainLayout = ({children}:mainLayoutType) => {
  return (
    <main className="bg-red-800 flex flex-col items-center justify-center">
       <div className='w-[67%] md:w-[50%] xl:w-[30%] h-[49%] xl:h-[80%] absolute top-0 -left-20 xl:left-0 bg-linear-to-b from-[#C84DFF] to-[#8E39FF]  rounded-b-full'>
        <div className="relative top-[19%] left-[25%]">
            {children}
        </div>
       </div>
       <div className='w-[67%] md:w-[50%]  xl:w-[30%] h-[49%] xl:h-[80%] fixed bottom-0 -right-20 xl:right-0  bg-gray-100  rounded-t-full'>

       </div>
    </main>
  )
}

export default MainLayout