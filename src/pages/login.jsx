import img from '../assets/loginPage.jpg'
import { useState } from 'react';
import userList from '../helper/userAccount';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState('');

    if(localStorage.getItem('LOGIN') !== null) {
        window.location.href = 'http://localhost:5173/quiz'
    }

    function clickHandler() {
        for(let i = 0; i < userList.length; i++) {
            if(username == userList[i].username && password == userList[i].password) {
                localStorage.setItem('LOGIN', true);
                localStorage.setItem('USER', username);
                location.href = '/quiz'
                break;
            } else {
                setLoginState('username atau password anda salah!')
            }
        }
        
    }

    return(
        <div className="h-screen flex justify-center items-center px-6 bg-blue-50">
            <div className="wrapper-content flex-col flex md:flex-row w-full md:w-fit drop-shadow-md">
                <div className=''>
                    
                </div>
                <div className="bg-blue-200 py-8 flex flex-col items-center gap-y-7 md:min-w-[400px] md:px-14 rounded-md">
                    <div className="title flex flex-col items-center gap-y-4">
                        <div className="w-fit flex flex-col items-end gap-y-2">
                            <h1 className="font-semibold text-3xl">Create Account</h1>
                            <hr className="border-b border-blue-800 w-full"/>
                            <hr className="border-b border-blue-600 w-4/6"/>
                            <hr className="border-b border-blue-400 w-5/12"/>
                        </div>
                        <p>or</p>
                        <div className="bg-blue-300 w-fit px-5 py-2 text-blue-800 font-semibold rounded drop-shadow-md">
                            Register
                        </div>
                    </div>
                    <div className="user-input flex flex-col gap-y-4 items-center md:w-full mt-8">
                        <input 
                            type="text" 
                            name="username" 
                            value={username} 
                            onInput={e => setUsername(e.target.value)} 
                            placeholder="username" 
                            className="bg-transparent border-b border-slate-400 py-2 w-full outline-none"
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onInput={e => setPassword(e.target.value)} 
                            placeholder="password" 
                            className="bg-transparent border-b border-slate-400 py-2 w-full outline-none"
                        />
                        <p className='text-red-500'>{loginState}</p>
                        <button 
                            type='submit' 
                            className="bg-blue-300 w-fit px-5 py-2 text-blue-800 font-semibold rounded drop-shadow-md mt-10" 
                            onClick={clickHandler}
                        >
                            Login
                        </button>
                        <hr className="border-b border-blue-300"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;