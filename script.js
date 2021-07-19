document.querySelector('.todo .wrapper .input button').onclick = ()=>{
  if (document.querySelector('.input input').value != 0) {
    document.querySelector('.todo-list').innerHTML += '        <div class="list"><p>'+ document.querySelector('.input input').value +'</p><button class="delete"><i class="fa fa-trash"></i></button></div>';
     var hapus = document.querySelectorAll('.delete');

     for (var i = 0; i < hapus.length; i++) {
       hapus[i].onclick = function(){
         this.parentNode.remove();
       }
     }
    document.querySelector('.input input').value = "";
  }else{
    alert('Input fields tidak boleh kosong brow!');
  }
}