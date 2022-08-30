import { mythicPlusRecommendation } from "../utilities/recommendations"

export default function ContentRecommendations({ioScore}) {
    return (
        <div>
            <h2>Content Recommendations</h2>
            <h3>Your Mythic+ score is {ioScore}</h3>
            <b>{mythicPlusRecommendation(ioScore)}</b>

        </div>
    )
}