export function like() {
  const like = document.querySelector('#like');
  const stamp = document.querySelector('#stamp');
  like.addEventListener('click', (ev) => {
    stamp.classList.add('showStamp');
  });
}

export function dislike() {

}

export function nextUser() {

}