export default function CityList({
  $app,
  initialState,
  handleLoadMore,
  handleItemClick,
}) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "city-list";
  this.handleLoadMore = handleLoadMore;
  this.handleItemClick = handleItemClick;

  $app.appendChild(this.$target);

  this.template = () => {
    let temp = `<div class = "city-items-container">`;
    if (this.state) {
      this.state.cities.forEach((item) => {
        temp += `
            <div class="city-item" id=${item.id}>
                <img src=${item.image}></img>
                <div class="city-item-info">${item.city}, ${item.country}</div>
                <div class="city=item-score">★ ${item.total}</div>
            </div>`;
      });
      temp += `</div>`;
    }
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    this.$target.querySelectorAll("div.city-item").forEach((item) => {
      item.addEventListener("click", () => {
        this.handleItemClick(item.id);
      });
    });

    if (!this.state.isEnd) {
      const $loadMoreButton = document.createElement("button");
      $loadMoreButton.className = "add-items-btn";
      $loadMoreButton.textContent = "+ 더보기";
      this.$target.appendChild($loadMoreButton);

      $loadMoreButton.addEventListener("click", () => {
        this.handleLoadMore();
      });
    }
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
