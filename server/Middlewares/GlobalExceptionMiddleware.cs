using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;

namespace server.Middlewares
{
    public class GlobalException{
        private readonly RequestDelegate _next;
        private readonly ILogger<GlobalException> _logger;

        public GlobalException(RequestDelegate next, ILogger<GlobalException> logger){
            _next = next;
            _logger = logger;
        }

        public async Task Invoke (HttpContext context){
            try{
                await _next(context);
            }
            catch (Exception ex){
                context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                context.Response.ContentType = "application/json";

                var errorResponse = new
                {
                    status = context.Response.StatusCode,
                    error = "An unexpected error occured",
                    detail = ex.Message,
                    timestamp = DateTime.Now
                };

                await context.Response.WriteAsJsonAsync(errorResponse);
            }
        }

    }
}