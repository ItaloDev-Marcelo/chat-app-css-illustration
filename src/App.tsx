import './App.css'
import Content from './components/Content'
import Layout from './components/phoneLayout/layout'
import MainLayout from './layout'

function App() {

  return (
    <MainLayout>
       <div className='relative flex flex-col py-10 xl:py-0 xl:flex-row items-center justify-center xl:justify-between xl:w-[60vw] z-1000 left-[25%] xl2:left-[45%] md:scale-109 md:top-10 md:left-[40%] xl:scale-100 xl:top-5 xl2:top-25 top-0 xl2:scale-120'>
           <Layout/>
           <Content/>
       </div>
    </MainLayout>
  )
}

export default App
