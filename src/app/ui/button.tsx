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
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
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
    <button className=" m-2 flex items-center rounded-md bg-gray-100 p-2 hover:bg-gray-200"
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
        className="flex h-10 items-center rounded-lg bg-sky-600 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-w-60"
      >
        <span className="hidden md:block">Create Review</span>{' '}
        <IconPlus className="h-5 md:ml-4"/>
      </Link>
      </div>
  )
}
