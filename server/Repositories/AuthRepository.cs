using server.Data;
using server.Dtos;
using Dapper;

namespace server.Repositories{
    public class AuthRepository{
        private readonly DapperContext _context;

        private const string InsertUserQuery = @"INSERT INTO User (Id, Username, Email, Password) VALUES (@Id, @Username, @Email, @Password)";
        private const string SelectUserByUsernameQuery = "SELECT * FROM User WHERE Username = @Username";
        
        public AuthRepository (DapperContext context){
            _context = context;
        }

        public async Task<UserDto?> RegisterUser(UserDto newUser){
            using var connection = _context.CreateConnection();
            var response = await connection.ExecuteAsync(InsertUserQuery, newUser);
            if (response>0)
                return newUser;
            return null;
        }

        public async Task<UserDto?> LoginUser(UserDto newUser){
            using var connection = _context.CreateConnection();
            var response = await connection.QueryFirstOrDefaultAsync<UserDto>(SelectUserByUsernameQuery, new { Username = newUser.Username });
            return response;
        }

    }


    
}