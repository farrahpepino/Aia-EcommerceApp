namespace server.Dtos{
    public class UserDto{
        public string? Id {get; set;}
        public string? Email {get; set;}
        public required string Password {get; set;}
        public required string Username {get; set;}
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}