const { floor, log, pow } = Math
import util from '../util'

// by default implemented a Max-Heap
// can subclass ES6 Array? perhaps?
export default class Heap {
  // we assume that array starts with index 1, 
  // so `left_child` is `2k`, and `right_child` is `2k + 1`,  parent at `k/2`
  constructor () {
    this.queue = [null]; 
  }

  // get position of the parent
  parent_indice (n) {
    if (n === 1) {return -1 } 
    else { return floor(n / 2) }
  }
  
  // get children
  left_child (n) {return 2 * n; }
  right_child (n) {return 2 * n + 1; }

  insert (new_value) {
    // console.log('-----Insertion Start------')
    this.queue.push(new_value);
    // console.log('inserting', new_value, this.queue)
    this.bubble_up(this.queue.length - 1)
    // console.log('-----Insertion Complete------')
  }

  // main controller of orders
  // {p} = index of current elem
  bubble_up (p) {
    // console.log('bubble_up is called with child index', p)
    // console.log(`parent_index: ${this.parent_indice(p)}, child_indx: ${p}`)
    
    var parentIndex = this.parent_indice(p)
    // at root of heap, no need to bubble
    if (parentIndex === -1) { return null; }   

    // < is max_heap, > is min_heap
    // console.log(`compare values, ${this.queue[parentIndex]} vs. ${this.queue[p]}`)
    if (this.queue[parentIndex] < this.queue[p]) {
      this.swap(p, parentIndex)
      this.bubble_up(this.parent_indice(p))
    }
  }

  swap(i1, i2) {
    // console.log(`swapping ${i1} with ${i2}`)
    var tmp = this.queue[i1]
    this.queue[i1] = this.queue[i2]
    this.queue[i2] = tmp
  }

  print() {
    var arr = this.queue.slice();
    arr.splice(0, 1) // get rid of first padding elem (null)

    // j will be length of second to bottom level when loop terminates
    for (let i = 0, j = 1; arr.length; j = Math.pow(2, ++i))  {
      var splicedPiece = arr.splice(0, j)
      console.log(`level ${util.padding(i+1, 3)}  ->  ${splicedPiece}`)
    }
  }
}