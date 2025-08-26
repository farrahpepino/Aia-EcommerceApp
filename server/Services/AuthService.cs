using server.Dtos;
using server.Controllers;
using server.Repositories;

namespace server.Services{

    public class AuthService{
        private readonly AuthRepository _authRepository;

        public AuthService(AuthRepository authRepository){
            _authRepository = authRepository;
        }

        public async Task<UserDto> RegisterUser(UserDto newUser){
            return await _authRepository.RegisterUser(newUser);
        }

        public async Task<bool> LoginUser(UserDto user){
            var response = await _authRepository.LoginUser(user);
            if(response==null || response.Password != user.Password) 
                return false;
            return true;
        }
    }
}