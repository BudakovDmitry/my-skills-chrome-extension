import logo from '../../assets/logo.png'

const Home = () => {
  return (
    <div className='min-w-80 py-16 flex items-center justify-center flex-col'>
      <div className='mb-4'>
        <a href="http://localhost:3000" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1 className='font-bold text-2xl'>My skills</h1>
    </div>
  )
}

export default Home