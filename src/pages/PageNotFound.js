
import { Link } from "react-router-dom";

export const PageNotFound = (props) => {
  return (
    <main>
        <section className='flex flex-col justify-center' >
            <div className='flex flex-col items-center'>
                <p className='flex justify-center text-lg md:text-2xl text-gray-700 font-bold font-mono my-16 dark:text-white'>{props.msg}</p>
                <img src={props.img} className="max-h-80 rounded " alt="PageNotFound" /> 
            </div>
            <div className="flex justify-center items-center my-4">
                <Link to="/">
                    <button className="rounded w-full px-2 py-1 font-semibold text-white text-xl bg-gradient-to-r from-blue-500 to-blue-700">Home</button>
                </Link>
            </div>
        </section>
    </main>
  )
}
