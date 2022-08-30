//mythic+
export function mythicPlusRecommendation(ioScore) {

    switch(ioScore) {
        case ioScore >= 3000:
            return "Congratulations on achieving Keystone Hero! keep pushing your score as high as you can or take a well-earned break"
        case ioScore >= 2500:
            return "time +20s or higher to reach 3k IO and achieve keystone hero"
        case ioScore >= 1850:
            return "time +15s or higher to reach 2500 IO and achieve KSM"
        case ioScore >= 900:
            return "time +10s or higher to reach 1850 IO and achieve keystone conqueror"
        default:
            return "time +5s or higher to reach 900 IO and achieve keystone explorer"
    }
}

