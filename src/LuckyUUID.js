import { useLocation } from 'react-router-dom';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { v4 as uuidv4 } from 'uuid';

const LuckyUUID = () => {
    const title = `今日のラッキーUUIDは、${uuidv4()}です。`

    const location = useLocation();
    const url = window.location.origin + location.pathname + location.search + location.hash;

    return (
        <>
            <p>{title}</p>

            <hr />

            <TwitterShareButton title={title} url={url}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
        </>
    )
}

export default LuckyUUID;
