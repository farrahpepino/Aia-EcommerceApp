using server.Data;
using server.Models;
using Dapper;

namespace server.Repositories{
    public class AuthRepository{
        private readonly DapperContext _context;

        private const string InsertUserQuery = @"INSERT INTO User (Id, Username, Email, Password) VALUES (@Id, @Username, @Email, @Password)";
        private const string SelectUserByUsernameQuery = "SELECT * FROM User WHERE Username = @Username";
        
        public AuthRepository (DapperContext context){
            _context = context;
        }

        public async Task<User> RegisterUser(User newUser){
            using var connection = _context.CreateConnection();
            await connection.ExecuteAsync(InsertUserQuery, newUser);
            return newUser;
        }

        public async Task<User?> LoginUser(User newUser){
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<User>(SelectUserByUsernameQuery, new { Username = newUser.Username });
        }
        


    }


    
}