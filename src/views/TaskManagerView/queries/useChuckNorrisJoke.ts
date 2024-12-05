import { useQuery } from "@tanstack/react-query";
import { CHUCK_NORRIS_JOKE_QUERY } from "./constants"

const fetchRandomChuckNorrisJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    return response.json();
}

export const useChuckNorrisJoke = () => {
    const {
        data,
        isError: isErrorChuckNorrisJoke,
        isLoading: isLoadingChuckNorrisJoke,
        refetch: refetchChuckNorrisJoke,
    } = useQuery({
        queryKey: [CHUCK_NORRIS_JOKE_QUERY],
        queryFn: fetchRandomChuckNorrisJoke,
        enabled: false,
    });

    return {
        chuckNorrisJoke: data?.value,
        isErrorChuckNorrisJoke,
        isLoadingChuckNorrisJoke,
        refetchChuckNorrisJoke,
    }
}