export function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '');
}

export function dateFormat(date: string) {
  return new Date(date).toLocaleDateString('en-us', {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export function formatPosts(posts: string, {
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = undefined,
} = {}) {

  const filteredPosts = posts.reduce((acc: any, post: any) => {
    const { date } = post.data;
    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post)

    return acc;
  }, [])

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a: any, b: any) => new Date(b.data.date) - new Date(a.data.date))
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;

}
