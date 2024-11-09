// ゲーム関連の変数
let currentWord = "";

// ゲーム開始時に単語を選択して表示
function startGame() {
    if (words.length === 0) {
        document.getElementById('currentWord').textContent = "単語リストが空です。words.jsを確認してください。";
        return;
    }
    // 単語をランダムに選択
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    document.getElementById('currentWord').textContent = currentWord;
    document.getElementById('gameInput').value = "";
    document.getElementById('gameFeedback').textContent = "";
    document.getElementById('gameFeedback').className = "";
}

// 判定ボタンのクリックイベント
document.getElementById('checkButton').addEventListener('click', function() {
    const userGuess = document.getElementById('gameInput').value.trim();
    if (userGuess === "") {
        alert('単語を入力してください。');
        return;
    }

    if (userGuess === currentWord) {
        document.getElementById('gameFeedback').textContent = "正解です！";
        document.getElementById('gameFeedback').classList.add('correct');
    } else {
        document.getElementById('gameFeedback').textContent = "不正解です。もう一度試してください。";
        document.getElementById('gameFeedback').classList.add('incorrect');
    }

    // 次の単語に進む（オプション）
     setTimeout(startGame, 2000); // 2秒後に次の単語を表示
});

// ページ読み込み時にゲームを開始
window.onload = function() {
    startGame();
};
