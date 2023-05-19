import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ data }) {
    return (
    <Layout>
        {data.title}
        <br />
        {data.id}
        <br />
        {data.date}
        <br />
    </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const data = getPostData(params.id)
    return {
        props: {
        data
        }
    }
}

