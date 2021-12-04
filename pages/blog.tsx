import Layout from '../components/layouts';
import style  from '../styles/blog.module.css';

interface Post{
  id: number;
  title: String;
  body: String;
}

interface BlogProps{
  dataBlog: Post[],
}

export default function blog(props: BlogProps) {
  const {dataBlog} = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={style.card}>
            <p>{blog.title}</p>
            <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    }
  }
}
