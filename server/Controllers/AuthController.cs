using Dapper;
using server.Data;
using server.Models;
using Microsoft.AspNetCore.Mvc;

//ilogger
//change user to registration model
// registration: if user exists, send status message
// add jwt

namespace server.Controllers{
    [ApiController]

    public class AuthController: ControllerBase{
        private readonly DapperContext _context;
        private readonly ILogger<AuthController> _logger;

        public AuthController (DapperContext context,  ILogger<AuthController> logger){
            _context = context;
            _logger = logger;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User user)
        {
            var query = "INSERT INTO User (Id, Username, Email, Password) VALUES (@Id, @Username, @Email, @Password)";
            using var connection = _context.CreateConnection();

            try{
                var result = await connection.ExecuteAsync(query, user);
                return Ok(new {message="User registered successfully"});
            }
            catch (Exception ex){
                return StatusCode(500, new { message = "Server error", detail = ex.Message });
            }

        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser([FromBody] User user) {

            var query = "SELECT * FROM User WHERE Username = @Username";
            using var connection = _context.CreateConnection();
            try {
                var result = await connection.QueryFirstOrDefaultAsync<User>(query, new { Username = user.Username });

                if (result == null)
                    return Unauthorized(new { message = "Invalid username or password" });

                if (result.Password != user.Password) 
                    return Unauthorized(new { message = "Invalid username or password" });

                return Ok(new { message = "Login successful" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Server error", detail = ex.Message });
            }
        }
    }
}