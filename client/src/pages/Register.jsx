import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default behaviour of the form by not refreshing the page
    //console.log('Form submitted');
    try{
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if(data.success === false){
        setError(true);
        return;
      }
      //console.log(data);
    } catch(error){
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Register</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-purple-100 p-3 rounded-lg'
        onChange={handleChange}/>
        <input type="text" placeholder='Email' id='email' className='bg-purple-100 p-3 rounded-lg'
        onChange={handleChange}/>
        <input type="password" placeholder='Password' id='password' className='bg-purple-100 p-3 rounded-lg'
        onChange={handleChange}/>
        <button disabled={loading} className='bg-purple-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>{loading ? 'Loading' : 'Register'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already a user?</p>
        <Link to='/login'>
          <span className='text-blue-500'>Login</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  )
}
