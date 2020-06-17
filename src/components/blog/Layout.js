import React from "react"
function BlogLayout({ children, pageContext }) {
  const { title, author, date } = pageContext.frontmatter

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
          <span>Author: {author}</span>
          <time>Date: {date}</time>
        </header>
        {children}
      </article>{" "}
    </>
  )
}

export default BlogLayout
