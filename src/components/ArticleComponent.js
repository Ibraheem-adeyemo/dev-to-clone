import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'

const ArticleComponent = (props) => {
    const {
        title,
        cover_image,
        tag_list,
        url,
        comments_count,
        positive_reactions_count,
        public_reactions_count,
        user,
        published_at
    } = props.data
    console.log(cover_image, '############')
    return (
        <article className="article">
            {
                cover_image && (
                    <a href={url} className="article-image"
                    style={{
                        backgroundImage: `url(${cover_image})`
                    }}></a>
                )
            }
            <div className="article-details">
                <div className="user-pic">
                    <img src={user.profile_image_90} alt="" />
                </div>
                <div className="user-details">
                    <a href={`http://dev.to/${user.username}`} >
                        <span className="user-name">
                            {user.username}
                        </span>
                    </a>
                    <a href={url}>
                        <h3>{title}</h3>
                    </a>
                    <div className="tags">
                        {
                            tag_list.map(
                                (tag, index) => {
                                    return (
                                        <a href={`http://dev.to./t/${tag}`}>
                                            <span className="tag">#{tag}</span>
                                        </a>
                                    )
                                }
                            )
                        }
                    </div>
                    <div className="additional-details">
                        <div className="reactions">
                            {
                                public_reactions_count + positive_reactions_count > 0 && (
                                    <a href={url}>
                                        <span>
                                            <i>
                                                <BiHeart />
                                            </i>
                                            &nbsp;
                                            {public_reactions_count + positive_reactions_count}
                                            <span className="hidden-mobile">reactions</span>
                                        </span>
                                    </a>
                                ) 
                            }
                            <a href={url}>
                                <span>
                                    <i>
                                        <FaRegComment />
                                    </i>
                                    &nbsp;
                                    {
                                        comments_count >0? (
                                            <span>
                                                {comments_count}
                                                <span className="hidden-mobile">Comments</span>
                                            </span>
                                        ):comments_count === 0 ? (
                                            <span>
                                                <span className="show-mobile">{comments_count}</span>
                                                &nbsp;
                                                <span className="hidden-mobile">Add comment</span>
                                            </span>
                                        ): null
                                    }
                                </span>
                            </a>
                        </div>

                        <div className="save">
                            <small>1 min read</small>
                            <button>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ArticleComponent
