import Link from "next/link";

async function fetchListUsers() {
    try {
      const apiRes = await fetch('https://dummyjson.com/products');
      const res = await apiRes.json();
      return res.products; // Extract the products array
    } catch (err) {
      throw new Error(err);
    }
  }
  export default async function Server() {
    const list = await fetchListUsers();
  
    return (
      <>
        <h1>Server</h1>
        <ul>
          {list.length?(
            list.map(user=>(
              <li key={user.id}><Link href={`server-data-fetch/${user.id}`}>{user.title}</Link></li>
            ))
          ):(<>user not found</>)}
        </ul>
      </>
    );
  }
  