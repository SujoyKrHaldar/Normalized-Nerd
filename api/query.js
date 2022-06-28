// All queries for the API

export const getAllVideos = `*[_type == "video"]|order(_createdAt desc){
                                "id":_id,
                                title,
                                description,
                                "slug": slug.current,
                                tags,
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

export const getAllProjects = `*[_type == "project"]|order(_createdAt desc) {
                                "id":_id,
                                "link":github,
                                "slug":slug.current,
                                name,
                                mainImage,
                                description,
                                publishedAt,
                                body
                            }`;

export const getAllFaqs = `*[_type == "faq"]|order(_createdAt desc){
                                "id":_id,
                                "createdAt":_createdAt,
                                question,
                                "answer":body,
                            }`;

export const getAllPapers = `*[_type == "papers"]|order(_createdAt desc){
                                "id":_id,
                                title, link, publishedAt
                            }`;
//For indivudial blog

export const getAllBlogSlugs = `*[_type == "blog" && defined(slug.current)][].slug.current`;

export const getBlogBySlug = `*[_type == "blog" && slug.current == $slug][0]{
                                "id":_id,
                                title,
                                description,
                                "slug":slug.current,
                                publishedAt,
                                mainImage,
                                body
                            }`;

export const getOtherBlogs = `*[_type == "blog" && slug.current != $slug]|order( publishedAt desc){
                                "id":_id,
                                title,
                                "slug":slug.current,
                                publishedAt,
                                mainImage,
                            }`;

//For indivudial video

export const getAllVideoSlugs = `*[_type == "video" && defined(slug.current)][].slug.current`;

export const getvideoBySlug = `*[_type == "video" && slug.current == $slug][0]{
                                 "id":_id,
                                title,
                                "slug": slug.current,
                                "video_url":videoLink.url,
                                description,
                                body,
                                tags,
                                publishedAt
                            }`;

export const getOtherVideos = `*[_type == "video" && slug.current != $slug]|order( publishedAt desc){
                                "id":_id,
                                title,
                                description,
                                "slug": slug.current,
                                tags,
                                mainImage,
                                publishedAt
                            }`;
