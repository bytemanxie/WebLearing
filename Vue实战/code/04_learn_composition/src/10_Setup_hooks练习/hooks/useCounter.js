import { ref } from 'vue'

export default function useCounter() {
    const counter = ref(0)
    function increment() {
        console.log('increment')
        counter.value++
    }
    function decrement() {
        console.log('decrement')
        counter.value--
    }
    // onMounted(() => {
    //     setTimeout(() => {
    //         counter.value = 989
    //     }, 1000);
    // })
    function add5() {
        console.log('add5')
        counter.value += 5
    }
    return {
        counter,
        increment,
        decrement,
        add5
    }
}

