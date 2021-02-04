import { useRouter } from "next/router"

const User = () => {
    const router = useRouter();
    const id = router.query;

    return (
        <>
            <h2>User {id}</h2>
        </>
    )
}

export default User;