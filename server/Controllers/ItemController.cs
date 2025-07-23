using Dapper;
using server.Models;

namespace server.Controllers{
    [ApiController]

    public class ItemController: ControllerBase {
        private readonly DapperContext _context;
        private readonly ILogger _logger;
        public ItemController(DapperContext context, ILogger logger){
            _context = context
            _logger = logger
        }

        
    }
}