const stamp = document.querySelector('#stamp');

export function like() {
  const like = document.querySelector('#like');
  like.addEventListener('click', (ev) => {
    stamp.style.transition = '0.2s';
    stamp.style.opacity = 1;
    console.log('lol');
  });
}

export function disLike() {
  const dislike = document.querySelector('#dislike');
  dislike.addEventListener('click', (ev) => {
    stamp.setAttribute('src', './images/dislike_stamp.png')
    stamp.style.transition = '0.2s';
    stamp.style.opacity = 1;
    console.log('lol');
  });
}

export function nextUser() {

}