// This is a custom React hook that allows you to store and retrieve values from the browser's local storage. It takes a key and an initial value as arguments, and returns the current value and a function to update it. The hook uses the useState and useEffect hooks from React to manage the state and synchronize it with local storage.

import useState from 'react';

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);

        return savedValue !== null ? JSON.parse(savedValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}


//usage
const [theme, setTheme] = useLocalStorage('theme', 'light');