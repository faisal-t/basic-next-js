import Layout from '../../components/layouts';
import {useRouter} from 'next/router';
import style from '../../styles/users.module.css';

interface UsersProps{
    datauser: Array<any>
}

export default function index(props: UsersProps) {
    const {datauser} = props;
    const router = useRouter();

    return (
        <Layout pageTitle="User Page">
            {datauser.map((user) => (
                <div className={style.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </Layout>
    )
}


export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const datauser = await res.json();
    return {
      props: {
        datauser: datauser,
      },
    };
  }