export default function SearchInput({ $target, initialState, onChange }) {
  this.state = initialState;
  this.$element = document.createElement("form");
  this.$element.className = "SearchInput";

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
        <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
        `;
  };

  this.render();

  this.$element.addEventListener("keyup", (e) => {
    const actionIgnoreKey = [
      "Enter",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];

    if (!actionIgnoreKey.includes(e.key)) {
      onChange(e.target.value);
    }
  });

  this.$element.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
