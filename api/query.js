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
