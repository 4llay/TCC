const preveiwContainer = document.querySelector('.products-preview');
const previewBox = preveiwContainer.querySelectorAll('.preview');
let segurandoMouse = false;
let idTimeout;

document.addEventListener(
  'mousedown', () => segurandoMouse = false);

document.addEventListener(
  'mousemove', () => segurandoMouse = true);

document.querySelectorAll('.carousel .card').forEach(product =>{
  product.onclick = () =>{
    if(segurandoMouse) return;
    mobileNav.style.display = 'none';
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});
+
previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
