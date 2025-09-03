using server.Dtos;
using server.Services;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers{
    [ApiController]

    public class AuthController: ControllerBase{

        private readonly AuthService _authService;

        public AuthController (AuthService authService){
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] UserDto user)
        {  
          
            var newUser = await _authService.RegisterUser(user);
            if (newUser == null)
                return BadRequest();
            return Ok(new {message="User registered successfully", token=newUser});
           
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser([FromBody] UserDto user) {
            var response = await _authService.LoginUser(user);
            if(response == null)
                return Unauthorized(new { message = "Invalid username or password"});

            return Ok(new { message = "Login successful", token=response  });
            
        }
    }
}