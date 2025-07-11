import { TwitterShareButton, TwitterIcon } from 'react-share';
import { v4 as uuidv4 } from 'uuid';

const LuckyUUID = () => {
    const text = `今日のラッキーUUIDは、${uuidv4()}です。`

    return (
        <>
            <p>{text}</p>

            <hr />

            <TwitterShareButton title={text}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
        </>
    )
}

export default LuckyUUID;
