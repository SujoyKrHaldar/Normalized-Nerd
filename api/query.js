// All queries for the API

export const getAllVideos = `*[_type == "video"]|order(_createdAt desc){
                                "id":_id,
                                title,
                                "slug": slug.current,
                                "video_url":videoLink.url,
                                category,
                                mainImage,
                                publishedAt
                            }`;

export const getAllBlogs = `*[_type == "blog"]|order(_createdAt desc){
                                "id":_id,
                                title,
                                "slug":slug.current,
                                publishedAt,
                                mainImage,
                            }`;

export const getAllFaqs = `*[_type == "faq"]|order(_createdAt desc){
                                "id":_id,
                                "createdAt":_createdAt,
                                question,
                                "answer":body,
                            }`;

//For indivudial blog

export const getAllBlogSlugs = `*[_type == "blog" && defined(slug.current)][].slug.current`;

export const getOtherBlogs = `*[_type == "blog" && slug.current != $slug]|order( publishedAt desc){
                                "id":_id,
                                title,
                                "slug":slug.current,
                                publishedAt,
                                mainImage,
                            }`;

export const getBlogBySlug = `*[_type == "blog" && slug.current == $slug][0]{
                                "id":_id,
                                title,
                                description,
                                "slug":slug.current,
                                publishedAt,
                                mainImage,
                                body
                            }`;
