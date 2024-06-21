const PostMapper = (posts) =>
  Object.keys(posts).map((id) => ({ ...posts[id], id }))

export default PostMapper
