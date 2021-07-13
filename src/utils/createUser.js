import firebase from 'firebase'

export default class User {
    constructor(name, password, avatar = this.randomeAvatar(), exp = 0){
        this.name = name
        this.password = password 
        this.avatar = avatar 
        this.exp = exp
    }
    
    newName(name = this.name) { this.name = name } 
    newPassword(password = this.password) { this.password = password } 
    newAvatar(avatar = this.avatar) { this.avatar = avatar } 
    newExp(exp = this.exp) { this.exp = exp }

    randomeAvatar() {
        let rand = Math.round(1 - 0.5 + Math.random() * (3 - 1 + 1)) + 180
        this.avatar = 'https://place-puppy.com/' + rand + 'x' + rand
    }

    sendFirebase() {
        firebase.collection('users').add({
           userName: this.name,
           userPassword: this.password,
           userAvatar: this.avatar,
           userExp: this.exp
        })
        console.log("отправлено и получено",
        firebase.collection('users')
        )
    }
}

