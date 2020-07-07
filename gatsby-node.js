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

  posts.forEach(({ id, slug }, index) => {
    const prev = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]

    createPage({
      path: `/posts/${slug}`,
      component: require.resolve(`./src/templates/BlogPost.js`),
      context: {
        id,
        prev,
        next,
      },
    })
  })
}

// const { createRemoteFileNode } = require('gatsby-source-filesystem');

// exports.createResolvers = ({
//   actions: { createNode },
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const resolvers = {
//     GraphCMS_Asset: {
//       node: {
//         type: `File`,
//         resolve: ({ url }, args, context, info) => {
//           return createRemoteFileNode({
//             url,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           });
//         },
//       },
//     },
//   };

//   createResolvers(resolvers);
// };

// query MyQuery {
//   gcms {
//     assets {
//       url(transformation: {image: {resize: {height: 490}}})
//     }
//   }
// }
