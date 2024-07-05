import clsx from 'clsx';
import { IconEdit, IconDelete,IconPlus} from '@douyinfe/semi-icons'
import { deleteReview } from '../lib/actions';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex  w-full h-10 items-center rounded-lg  justify-center bg-black px-4 text-sm font-medium text-white  hover:bg-white hover:text-black border-2 border-black  shrink',
        className,
      )}
    >
      {children}
    </button>
  );
}


export function DeleteReview ({id,reviewId}:{id:string, reviewId:string}) {
  const bindDelete = deleteReview.bind(null,id,reviewId);
  return(
    <form action={bindDelete}>
    <button 
    className="flex items-center rounded-md bg-gray-100 p-2 hover:bg-gray-200"><IconDelete className=" text-sky-600"/></button>
    </form>
  )
}

type HandleClick = () =>void
export function EditReviewButton ({handleClick}:{handleClick:HandleClick}){
  return(
    <>
    <button className=" mx-2 flex items-center rounded-md bg-gray-100 p-2 hover:bg-gray-200"
    onClick={handleClick}>
      <IconEdit className=" text-sky-600"/>
    </button>
    </>
  )
}

export function SubmitEditButton () {

  return(
    <button className='m-2 flex items-center rounded-md bg-sky-500 p-2 hover:bg-sky-600 text-white'>
      Submit
    </button>
  )
}


export function CancelEditButton({handleClick}:{handleClick:HandleClick}) {
  return(
    <button className='m-2 flex items-center rounded-md bg-gray-300 p-2 hover:bg-gray-400 text-white' onClick={handleClick}>
      Cancel
    </button>
  )

}

export function CreateReviewButton({id}:{id:string}){

  return(
      <div>
          <Link
        href={`/movies/${id}/review/create` }
        className="flex h-10 items-center rounded-lg  justify-center bg-black px-4 text-sm font-medium text-white  hover:bg-white hover:text-black border-2 border-black  shrink"
      >
        <span className="hidden md:block">Create Review</span>{' '}
        <IconPlus className="h-5 md:ml-4"/>
      </Link>
      </div>
  )
}
