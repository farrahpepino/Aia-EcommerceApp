namespace server.Dtos{
    public class UserDto{
        public string? Id {get; set;} = string.Empty;
        public string? Email {get; set;} = string.Empty;
        public required string Password {get; set;}
        public required string Username {get; set;}
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}