import { v4 as uuidv4 } from 'uuid';

const luckyUUID = () => {
    return (
        <p>今日のラッキーUUIDは、{uuidv4()}です。</p>
    )
}

export default luckyUUID;
