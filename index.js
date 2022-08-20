const buttons = document.querySelectorAll("Buttons")

buttons.forEach(button => 
    
    { button.addEventListener("click", function onClick (){

        console.log("Button pressed")
        style.backgroundColor = "black";
    
    });
})



class User 
{
    constructor(ID ,Name, Email, Password)
    {
        this.ID = ID;
        this.Name = Name;
        this.Email = Email;
        this.Password = Password;

    }

}

let user1 = new User("1", "John", "john@gmail.com", 1234);

console.log(user1);
