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