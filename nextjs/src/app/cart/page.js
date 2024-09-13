import { usePathname } from "next/navigation";

export default function Cart(){
    const  pathName = usePathname();
    console.log(pathName);
    return (
        <>
        <h1>hello</h1>
        </>
    )
}