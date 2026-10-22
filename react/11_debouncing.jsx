import {useState, useEffect} from 'react';

function search() {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        if (debouncedQuery) {
            console.log("Searching for:", debouncedQuery);
            // Perform search operation here
        }
    }, [debouncedQuery]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
}

export default search;