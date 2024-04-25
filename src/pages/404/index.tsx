// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports

const PageNotFound = () => {
  return (
    <div className='misc-wrapper'>
      <Link
        className='brand-logo'
        to='/test/VanHon/fashion_women/ThoiTrangNu2/build/'
        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      ></Link>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>Page Not Found 🕵🏻‍♀️</h2>
          <p className='mb-2'>Oops! 😖 The requested URL was not found on this server</p>
          <Link to={'/'} className='d-block w-100'>
            <button color='primary' className='btn btn-sm-block mb-2'>
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PageNotFound
