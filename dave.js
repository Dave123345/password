async function fetchCodes() {
    const response = await fetch('codes.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}



async function displayFlag() {
    const code = document.getElementById('inputField').value.trim();
    const flagDisplay = document.getElementById('flagDisplay');

    try {
        const codes = await fetchCodes();

        if (code === 'dave') {
            try {
                const flagScript = await fetchFlagScript();
                flagDisplay.innerText = flagScript;
            } catch (error) {
                flagDisplay.innerText = 'Failed to fetch script.';
            }
        } else if (codes[code]) {
            flagDisplay.innerText = codes[code];
        } else {
            flagDisplay.innerText = 'Invalid code.';
        }
    } catch (error) {
        flagDisplay.innerText = 'Failed to fetch codes.';
    }
}
