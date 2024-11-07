let score = 0;

class TreasureMap {
    static getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    static decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) reject("没有线索可以解码!");
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }

    static searchTemple(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() < 0.5 ? reject("遇到了神庙守卫!") : resolve("找到了一个神秘的箱子...");
            }, 2000);
        });
    }

    static openTreasureBox() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("恭喜!你找到了传说中的宝藏!");
            }, 1000);
        });
    }
}

async function startHunt() {
    try {
        const initialClue = await TreasureMap.getInitialClue();
        displayMessage(initialClue);
        showClueImage();
        score += 10;
        updateScore();

        const decodedMessage = await TreasureMap.decodeAncientScript(initialClue);
        displayMessage(decodedMessage);
        showTempleImage();

        const box = await TreasureMap.searchTemple("古老的神庙");
        displayMessage(box);
        score += 20;
        updateScore();

        const treasure = await TreasureMap.openTreasureBox();
        displayMessage(treasure);
        score += 50;
        updateScore();
        showTreasureBoxImage();
        alert(treasure);
    } catch (error) {
        displayMessage(error);
        resetGame();
        showGuardImage();
    }
}

function displayMessage(message) { document.getElementById('message').textContent = message; }
function updateScore() { document.getElementById('score').textContent = `Score: ${score}`; }
function resetGame() {
    score = 0;
    updateScore();
    document.getElementById('message').textContent = "";
    hideAllImages();
    alert("遇到了守卫，游戏重置，请重新开始!");
}

function showClueImage() { document.getElementById('clueImage').classList.remove('hidden'); }
function showTempleImage() { hideAllImages(); document.getElementById('temple').classList.remove('hidden'); }
function showTreasureBoxImage() { document.getElementById('treasureBox').classList.remove('hidden'); }
function showGuardImage() { document.getElementById('guard').classList.remove('hidden'); }
function hideAllImages() {
    document.getElementById('temple').classList.add('hidden');
    document.getElementById('treasureBox').classList.add('hidden');
    document.getElementById('guard').classList.add('hidden');
    document.getElementById('clueImage').classList.add('hidden');
}
