using server.Dtos;
using server.Controllers;
using server.Repositories;

namespace server.Services{

    public class AuthService{
        private readonly AuthRepository _authRepository;
        private readonly IJwtService _jwtService;


        public AuthService(AuthRepository authRepository, IJwtService jwtService){
            _authRepository = authRepository;
            _jwtService = jwtService;
        }

        public async Task<string?> RegisterUser(UserDto newUser){
            var response = await _authRepository.RegisterUser(newUser);
            var token = _jwtService.GenerateToken(Id: response.Id, Username: response.Username, Email: response.Email);
            return token;
        }

        public async Task<string?> LoginUser(UserDto user){
            var response = await _authRepository.LoginUser(user);
            if(response==null || response.Password != user.Password) 
                return null;
            var token = _jwtService.GenerateToken(Id: response.Id, Username: response.Username, Email: response.Email);
            return token;
        }
    }
}