'use client'
import { usePathname } from "next/navigation";

export default function Home() {
    const pathName=usePathname()
      return (
        <div>
          {pathName}
        </div>
      );
    }