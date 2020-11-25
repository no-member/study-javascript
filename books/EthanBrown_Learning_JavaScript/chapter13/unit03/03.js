function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'viloet'];
    let colorIndex = -1;

    return{
        next() {
            if (++colorIndex >= colors.length) {
                colorIndex = 0;
            }

            return
        }
    }
}