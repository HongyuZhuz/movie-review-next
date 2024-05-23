import { Divider } from "@douyinfe/semi-ui"
import Link from "next/link";
import { IconPlus } from '@douyinfe/semi-icons';
export default function Review(){
    return(
        <div>
            <Divider margin='12px'/>
            <h1>Reviews</h1>
            <CreateReview/>
        </div>
    )
}

function CreateReview() {
    return (
      <Link
        href="/dashboard/invoices/create"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 max-w-40"
      >
        <span className="hidden md:block">Create Review</span>{' '}
        {/*<PlusIcon className="h-5 md:ml-4" />*/}
        <IconPlus className="h-5 md:ml-4"/>
      </Link>
    );
  }