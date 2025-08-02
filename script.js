function getProposalTitle() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('name') || "Love";
}

const proposalTitle = getProposalTitle();
document.querySelectorAll('.proposalTitle-placeholder').forEach(el => {
    el.textContent = proposalTitle;
});

function showProposal(id) {
    document.querySelectorAll('.proposal-screen').forEach(screen => screen.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    if (id === 'proposal-yes') {
        document.body.style.backgroundColor = '#ffecf0';
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

function moveRandomEl(Sowrov) {
    Sowrov.style.position = "absolute";
    Sowrov.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    Sowrov.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}
