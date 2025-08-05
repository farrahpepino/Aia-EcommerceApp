using Dapper;
using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Models;


namespace server.Controllers{

    [ApiController]
    public class OrderController: ControllerBase{

        private readonly DapperContext _context;
        private readonly ILogger _logger;

        public OrderController(DapperContext context, ILogger logger){
            _context = context;
            _logger = logger;
        }

        // [HttpPost['order']]
        // public async Task<IActionResult> Order(FromBody[] Order order){
            

        // } 

        


    }

}