const emojis = [
    '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
    '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
    '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
    '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
    '🧡','💛','💚','💙','💜','☢️','🚫','💯','🔱','🎊'
]

document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.querySelector("#generate-story-btn");
  const submitBtn = document.querySelector("#submit-description-btn");
  const history = document.querySelector("div > ul");
  const historyTitle = document.querySelector("#history-title");
  const emojiStory = document.querySelector("#emoji-story");
  let storyNumber = 0;

  generateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let storyArr = [];
    const storyLength = Number(
      document.querySelector("#story-length-input").value
    );

    for (i = 0; i < storyLength; i++) {
      let randomN = Math.floor(Math.random() * Math.floor(emojis.length - 1));
      let emoji = emojis[randomN];
      storyArr.push(emoji);
    }
    emojiStory.textContent = storyArr.join("");
  });

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    storyNumber++;
    if (storyNumber === 1) {
      historyTitle.textContent = `${storyNumber} Saved Story`;
    } else {
      historyTitle.textContent = `${storyNumber} Saved Stories`;
    }
    const description = document.querySelector("#description-input").value;
    newLi = document.createElement("li");
    newLi.textContent = `${emojiStory.textContent}: ${description}`;
    history.appendChild(newLi);
  });
});