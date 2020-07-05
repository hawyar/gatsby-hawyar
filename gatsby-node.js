exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { posts },
    },
  } = await graphql(`
    {
      gcms {
        posts(stage: PUBLISHED) {
          id
          slug
          title
        }
      }
    }
  `)

  posts.forEach(({ id, slug }) => {
    createPage({
      path: `/posts/${slug}`,
      component: require.resolve(`./src/templates/BlogPost.js`),
      context: {
        id,
      },
    })
  })
}

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPost = path.resolve(`./src/templates/BlogPost.js`)
//   return graphql(
//     `
//       {
//         gcms {
//           posts {
//             slug
//             title
//             tags
//             excerpt
//             date
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     const posts = result.gcms.posts

//     console.log(posts)

//     posts.forEach((post, index) => {
//       //pagination
//       // const previous = index === posts.length - 1 ? null : posts[index + 1]
//       // const next = index === 0 ? null : posts[index - 1]

//       createPage({
//         path: post.slug,
//         component: blogPost,
//         context: {
//           slug: post.node.fields.slug,
//           // previous,
//           // next,
//         },
//       })
//     })
//   })
// }

// // exports.onCreateNode = ({ node, actions, getNode }) => {
// //   const { createNodeField } = actions

// //   if (node.internal.type === `Mdx`) {
// //     const value = createFilePath({ node, getNode })
// //     createNodeField({
// //       name: `slug`,
// //       node,
// //       value,
// //     })
// //   }
// // }
