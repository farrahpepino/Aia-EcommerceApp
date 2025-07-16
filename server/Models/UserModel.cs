namespace server.Models{
    public class User{
        public string? Id {get; set;}
        public string? Email {get; set;}
        public required string Password {get; set;}
        public required string Username {get; set;}
    }
}