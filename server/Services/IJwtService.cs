namespace server.Services{
    public interface IJwtService{
        string GenerateToken(string Id, string Username, string Email);
    }
}