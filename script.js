function pickRandomName() {
    const input = document.getElementById('nameInput').value;
    const names = input.split(',').map(name => name.trim()).filter(name => name);
    
    if (names.length === 0) {
        document.getElementById('randomWinner').innerText = 'Please enter some names!';
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];
    document.getElementById('randomWinner').innerText = winner;
}

