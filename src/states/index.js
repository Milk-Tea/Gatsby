import { atom } from "recoil";


export const blogPostTitleState = atom (
    {key: "blog-post-title",
    default: "blog"
}
)

export const blogPostSubTitleState = atom (
    {key: "blog-post-subtitle",
    default: "Home"
}
)
