
import { Link } from "react-router-dom";

export const PageNotFound = (props) => {
  return (
    <main>
        <section className='flex flex-col justify-center' >
            <div className='flex flex-col items-center'>
                <p className='py-2 flex justify-center text-2xl text-gray-700 font-bold my-7 dark:text-white'>{props.msg}</p>
                <img src={props.img} className="max-h-80 rounded my-4" alt="PageNotFound" /> 
            </div>
            <div className="flex justify-center my-4">
                <Link to="/">
                    <button className="rounded w-64 text-xl bg-gradient-to-r from-blue-500 to-blue-700">Back to Movimate</button>
                </Link>
                
            </div>

        </section>
    </main>
  )
}
