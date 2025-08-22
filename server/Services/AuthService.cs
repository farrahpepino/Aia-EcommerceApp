using server.Models;
using server.Controllers;
using server.Repositories;

namespace server.Services{

    public class AuthService{
        private readonly AuthRepository _authRepository;

        public AuthService(AuthRepository authRepository){
            _authRepository = authRepository;
        }

        public async Task<User> RegisterUser(User newUser){
            return await _authRepository.RegisterUser(newUser);
        }

        public async Task<bool> LoginUser(User user){
            var response = await _authRepository.LoginUser(user);
            if(response==null || response.Password != user.Password) 
                return false;
            return true;
        }
    }
}