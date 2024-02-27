export const CACHE_TAG_REVIEWS = 'insights';

const WORDPRESS_API_URL = "https://cms.clarity-solutions.io/wp-json/custom/v1";

export async function getSlugs() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error("Unable to fetch slugs from WordPress API");
    }

    return data.map(post => post.slug);
}


export async function getInsights() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();
    //console.log(data);
    const insights = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return insights; 
} 

export async function getInsight(slug) {
    const insights = await getInsights();
    const insight = insights.find((insight) => insight.slug === slug);
    return insight;
}