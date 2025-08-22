using Microsoft.IdentityModel.Tokens; // for SymmetricSecurityKey, SigningCredentials to sign your JWT with a secret 
using Microsoft.Extensions.Configuration; // to access app's configuration system (appsettings)
using System.IdentityModel.Tokens.Jwt; // for building the token and serializing it JwtSecurityToken and JwtSecurityTokenHandler
using System.Security.Claims; // for defining claims
using System.Text; // for encoding strings into bytes

namespace server.Services{

    public class JwtService: IJwtService {
        private readonly IConfiguration _configuration;
        private readonly string? _secret;

        public JwtService(IConfiguration configuration){
            _configuration = configuration;
            _secret = configuration["Jwt:Secret"] ?? throw new ArgumentNullException("Jwt:Secret is missing from config.");
        }

        public string GenerateToken(string Id, string Username, string Email){

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, Id),
                new Claim(JwtRegisteredClaimNames.UniqueName, Username),
                new Claim(JwtRegisteredClaimNames.Email, Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secret!));
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: null, //you can change this
                audience: null, //you can change this
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}