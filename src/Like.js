import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
export default function Like() {
    const [color, setColor] = useState(null);
    const [colors, setColors] = useState(null);
    const [like, setLike] = useState(105);
    const [dislike, setDisLike] = useState(102);
    const onclick = () => {
        if (color === "green") {
            setColor('black');
            setLike(like - 1);
        }
        else {
            setColor('green');
            setLike(like + 1);
        }
    };
    const Dislike = () => {
        if (colors === "red") {

            setColors('black');
            setDisLike(dislike + 1);
        }
        else{
            setColors('red');
            setLike(dislike-1);
        }
    }
    return (
        <div className="mt-5 ms-5">
            <span className="ms-3">Like: {like}</span>
            <span className="ms-3">Dislike: {dislike}</span>
            <FontAwesomeIcon icon={faThumbsUp} size="2xl" color={color} onClick={onclick} />
            <FontAwesomeIcon icon={faThumbsDown} size="2xl" color={colors} onClick={Dislike} />
        </div>
    )
}
