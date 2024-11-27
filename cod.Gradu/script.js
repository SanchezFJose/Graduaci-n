function lanzarConfeti() {
    const confetti = document.getElementById("confetti");
    const ctx = confetti.getContext("2d");
    const confettiPieces = [];

    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * confetti.width,
            y: Math.random() * confetti.height,
            size: Math.random() * 10 + 5,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speed: Math.random() * 2 + 1,
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, confetti.width, confetti.height);

        for (let piece of confettiPieces) {
            ctx.beginPath();
            ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
            ctx.fillStyle = piece.color;
            ctx.fill();
            piece.y += piece.speed;

            if (piece.y > confetti.height) {
                piece.y = -piece.size;
                piece.x = Math.random() * confetti.width;
            }
        }

        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}
