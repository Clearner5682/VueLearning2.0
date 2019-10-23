const app = new Vue({
  el: '#app',
  data: {
    books: [
      {bookName: '算法导论', releaseDate: '2010-09-01', price: 50, amount: 1},
      {bookName: 'C语言程序设计', releaseDate: '1998-01-25', price: 80, amount: 1},
      {bookName: 'UNIX高级编程', releaseDate: '1980-08-08', price: 99, amount: 1}
    ]
  },
  computed: {
    total:function(){
      let total=0;
      // for(let i=0;i<this.books.length;i++){
      //   total+=this.books[i].price*this.books[i].amount;
      // }

      // for(let i in this.books){
      //   total+=this.books[i].price*this.books[i].amount;
      // }

      for(let book of this.books){
        total+=book.price*book.amount;
      }

      return total;
    }
  },
  methods: {
    removeBook(index) {
      this.books.splice(index, 1);
    },
    increment(index) {
      this.books[index].amount++;
    },
    decrement(index) {
      // if (this.books[index].amount > 1) {
      //   this.books[index].amount--;
      // }
      this.books[index].amount--;
    },
    // formatPrice(price){
    //   return '￥'+price.toFixed(2);
    // }
  },
  filters:{
    formatPrice(price){
      return '￥'+price.toFixed(2);
    }
  }
});
