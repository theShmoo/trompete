export const PostsBase = 'https://lagerjodel.firebaseio.com/databases/posts';
export const PostsURL = PostsBase + '.json';
export const GetRequestOptions = {
  method: 'GET',
  redirect: 'follow'
};

export const PostHeaderOptions = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
