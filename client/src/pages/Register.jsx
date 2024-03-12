import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Register</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-purple-100 p-3 rounded-lg'/>
        <input type="text" placeholder='Email' id='email' className='bg-purple-100 p-3 rounded-lg'/>
        <input type="password" placeholder='Password' id='password' className='bg-purple-100 p-3 rounded-lg'/>
        <button className='bg-purple-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Register</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already a user?</p>
        <Link to='/login'>
          <span className='text-blue-500'>Login</span>
        </Link>
      </div>
    </div>
  )
}
