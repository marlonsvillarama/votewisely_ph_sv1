import type { PageServerLoad } from "./$types";
import candidateData from '$lib/data/candidates.json';

export const load: PageServerLoad = ({ params }) => {
    return candidateData;
}