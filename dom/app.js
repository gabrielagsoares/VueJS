
new Vue({
    el: '#desafio',
    data: {
        nome: 'Gabriela',
        idade: 27,
        foto: 'https://tse4.mm.bing.net/th?id=OIP.UPRJoO8351AAe4BeueBaAwHaFE&pid=Api&P=0&w=263&h=181'
    },

    methods:{
        idadeMult3() {
            return this.idade * 3 
        },

        aleatorio(){
            return Math.random()
        }

    }
})

