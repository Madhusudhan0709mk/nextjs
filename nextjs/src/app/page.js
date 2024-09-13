'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const  router = useRouter();
  const handlenavigate=()=>{
    router.push('products')
  }
  return (
    <>
    hi
    <Link href={'/products'}>prodcuts</Link>
    <br></br>
    <button onClick={handlenavigate}>navigate</button>
    
    </>
  );
}
