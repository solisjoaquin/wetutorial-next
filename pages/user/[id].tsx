import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetch from "node-fetch"

type Data = {
    id: string;
    name: string;
    email: string
}


const User: NextPage<{
    data: Data
}> = props => {

    return (
        <>
            <h2>User </h2>
            <p>{props.data.id}</p>
            <p>{props.data.name}</p>
            <p>{props.data.email}</p>


        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    params,
    res
}) => {
    const { id } = params;
    const result = await fetch(
        `http://localhost:3000/api/user/${id}`
    );
    const data: Data = await result.json();

    return {
        props: { data }
    }
}

export default User;