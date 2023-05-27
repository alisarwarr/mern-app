import React, { useEffect } from 'react';


function App() {


    useEffect(() => {
        fetch('/api')
            .then((response) => response.text())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }, []);


    return (
        <div>App</div>
    )
}

export default App;