import Link from "next/link";

export default function NotFound(){

    return <>
    <h1>this page is not exist</h1>
    <Link href={'/'}>go back to home page</Link>
    </>
}