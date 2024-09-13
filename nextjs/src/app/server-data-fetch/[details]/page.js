async function fetchDetails(currentId){
    try{
        const api = await fetch(`https://dummyjson.com/products/${currentId}`);
        const res = await api.json()
        return res
    }catch(err){
        throw new Error(err);
    }
}
export default async function ProductDetails({params}){
const userdetail = await fetchDetails(params.details);
return <>
    <h1>{userdetail?.title}</h1>
    <p>{userdetail?.description}</p>
    <p>Price: ${userdetail?.price}</p>
    </>
}