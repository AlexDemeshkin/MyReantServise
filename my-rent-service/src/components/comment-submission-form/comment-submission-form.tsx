import { JSX, useState } from "react";

function CommentSubmissionForm(): JSX.Element {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleCommentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(evt.target.value);
    };

    const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setRating(Number(evt.target.value));
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log({ comment, rating });
    };

    return (
        <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
            
            <label className="reviews__label form__label"  htmlFor="review">Your review</label>
            <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>

            <div className="reviews__rating-form form__rating">
                {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star}>
                        <input 
                            className="form__rating-input visually-hiddens"
                            style={{ display: 'none' }}
                            name="rating"
                            value={star}
                            id={`${star}-stars`}
                            type="radio"
                            checked={rating === star}
                            onChange={handleRatingChange}
                        />

                        <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label">
                            <svg className="form__star-image " width="37" height="33">
                                <use xlinkHref="#icon-star"></use>
                            </svg>
                        </label>
                    </div>
                ))}
            </div>
            <textarea
                className="reviews__textarea form__textarea"
                id="review"
                name="review"
                placeholder="Tell how was your stay, what you like and what can be improved"
                value={comment}
                onChange={handleCommentChange}
            ></textarea>
            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button
                    className="reviews__submit form__submit button"
                    type="submit"
                    disabled={comment.length < 50 || rating === 0}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default CommentSubmissionForm;