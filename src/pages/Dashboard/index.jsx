import usePosts from '../../hooks/usePosts'
import Layout from '../../layouts/Layout'

const Dashboard = () => {
  const { posts } = usePosts()
  console.log({ posts })

  return (
    <Layout>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title}
          <p>{post.text}</p>
        </div>
      ))}
    </Layout>
  )
}
export default Dashboard
