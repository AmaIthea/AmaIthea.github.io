export class User {
    constructor(name, password, avatar = this.randomeAvatar(), exp = 0){
        this.name = name
        this.password = password 
        this.avatar = avatar 
        this.exp = exp
    }
    
    newName(name = this.name) { this.name = name } 
    newPassword(password = this.password) { this.password = password } 
    newAvatar(avatar = this.avatar) { this.avatar = avatar } 
    newExp(exp = this.avatar) { this.exp = exp }

   


    randomeAvatar() {
        let rand = Math.round(1 - 0.5 + Math.random() * (3 - 1 + 1)) + 180
        return 'https://place-puppy.com/' + rand + 'x' + rand
    }






    inited() {
        return console.log(this.name, this.password, this.avatar, this.exp)
    }
}

const admin = new User('Artem', '13231')
console.log(admin.inited())