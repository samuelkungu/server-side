class User{
    constructor(UserId,FirstName,SecondName,Email,ProjectName,Password){
        this.UserId = UserId; 
        this.FirstName = FirstName; 
        this.SecondName = SecondName;
        this.Email = Email;
        this.ProjectName = ProjectName; 
        this.Password = Password;

    }
}

module.exports = User;